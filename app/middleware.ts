import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  // Get the pathname of the request
  const path = request.nextUrl.pathname

  // Check if the path starts with /admin/dashboard
  if (path.startsWith("/admin/dashboard")) {
    // Check if the user is authenticated by looking for the admin-auth cookie
    const isAuthenticated = request.cookies.has("admin-auth")

    // If not authenticated, redirect to the admin login page
    if (!isAuthenticated) {
      return NextResponse.redirect(new URL("/admin", request.url))
    }
  }

  return NextResponse.next()
}

// Configure the paths that should be checked by this middleware
export const config = {
  matcher: ["/admin/dashboard/:path*"],
}
