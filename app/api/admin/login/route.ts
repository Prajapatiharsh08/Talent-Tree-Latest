import { NextResponse } from "next/server"
import { cookies } from "next/headers"

// Hardcoded credentials for demo purposes
const ADMIN_USER = "recruiter"
const ADMIN_PASSWORD = "talent2023"

export async function POST(request: Request) {
  const body = await request.json()
  const { username, password } = body

  // Simple credential check
  if (username === ADMIN_USER && password === ADMIN_PASSWORD) {
    // Set a cookie for authentication
    cookies().set("admin-auth", "true", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: 60 * 60 * 24, // 24 hours
    })

    return NextResponse.json({ success: true })
  }

  // Return error for invalid credentials
  return NextResponse.json({ error: "Invalid username or password" }, { status: 401 })
}
