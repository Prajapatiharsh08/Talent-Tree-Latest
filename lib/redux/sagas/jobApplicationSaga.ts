import { call, put, takeLatest } from "redux-saga/effects"
import {
  submitApplicationRequest,
  submitApplicationSuccess,
  submitApplicationFailure,
} from "../reducers/jobApplicationReducer"
import type { PayloadAction } from "@reduxjs/toolkit"

// Updated API call function
const submitJobApplicationAPI = async (formData: FormData) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL || "https://talenttreerecruits-where-top-talent.onrender.com"}/api/apply`, {
    method: "POST",
    body: formData, // automatically handles multipart/form-data
  })

  if (!response.ok) {
    throw new Error("Failed to submit application")
  }

  return await response.json()
}

function* handleSubmitApplication(action: PayloadAction<FormData>) {
  try {
    yield call(submitJobApplicationAPI, action.payload)
    yield put(submitApplicationSuccess())
  } catch (error) {
    yield put(submitApplicationFailure(error instanceof Error ? error.message : "An unknown error occurred"))
  }
}

// Watcher saga
export default function* jobApplicationSaga() {
  yield takeLatest(submitApplicationRequest.type, handleSubmitApplication)
}
