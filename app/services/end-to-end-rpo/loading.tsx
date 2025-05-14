import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero section skeleton */}
      <div className="mb-8">
        <Skeleton className="h-12 w-3/4 mb-4" />
        <Skeleton className="h-6 w-1/2 mb-6" />
      </div>

      {/* Back to services link skeleton */}
      <Skeleton className="h-6 w-40 mb-8" />

      {/* Main content area */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {/* Left column */}
        <div className="md:col-span-2">
          <Skeleton className="h-8 w-3/4 mb-4" />
          <Skeleton className="h-4 w-full mb-2" />
          <Skeleton className="h-4 w-full mb-2" />
          <Skeleton className="h-4 w-5/6 mb-6" />

          {/* Features grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="border rounded-lg p-4">
                <Skeleton className="h-10 w-10 rounded-full mb-3" />
                <Skeleton className="h-6 w-3/4 mb-2" />
                <Skeleton className="h-4 w-full mb-1" />
                <Skeleton className="h-4 w-5/6" />
              </div>
            ))}
          </div>

          {/* Process steps */}
          <Skeleton className="h-8 w-1/2 mb-4" />
          <div className="space-y-6">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="flex gap-4">
                <Skeleton className="h-12 w-12 rounded-full flex-shrink-0" />
                <div className="flex-1">
                  <Skeleton className="h-6 w-1/3 mb-2" />
                  <Skeleton className="h-4 w-full mb-1" />
                  <Skeleton className="h-4 w-5/6" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right column - Industries */}
        <div>
          <Skeleton className="h-8 w-1/2 mb-4" />
          <div className="border rounded-lg p-6">
            <Skeleton className="h-6 w-3/4 mb-4" />
            <div className="space-y-2">
              {[...Array(8)].map((_, i) => (
                <Skeleton key={i} className="h-4 w-full" />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA section */}
      <div className="bg-blue-50 rounded-lg p-6">
        <Skeleton className="h-8 w-2/3 mx-auto mb-4" />
        <Skeleton className="h-4 w-1/2 mx-auto mb-6" />
        <Skeleton className="h-10 w-40 mx-auto" />
      </div>
    </div>
  )
}
