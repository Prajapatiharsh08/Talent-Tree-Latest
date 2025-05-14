import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle2, ArrowLeft, Users, Building } from "lucide-react"
import FadeInSection from "@/components/fade-in-section"

export default function PermanentStaffingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <FadeInSection>
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-5xl font-bold mb-6">Permanent Staffing</h1>
              <p className="text-xl text-blue-100 mb-8">
                Build high-performing teams with top-tier full-time professionals aligned to your culture and goals.
              </p>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Back to Services */}
      <div className="container mx-auto px-4 py-6">
        <Link href="/services" className="inline-flex items-center text-blue-600 hover:text-blue-800">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Services
        </Link>
      </div>

      {/* Main Content */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <FadeInSection>
                <h2 className="text-3xl font-bold text-blue-900 mb-6">Hire Long-Term Talent That Grows With You</h2>
                <p className="text-gray-700 mb-6">
                  Our Permanent Staffing service is focused on identifying and placing full-time professionals who bring
                  lasting value to your business. We help organizations build dependable teams by sourcing talent that
                  not only has the right skills, but also aligns with your company’s culture and vision.
                </p>
                <p className="text-gray-700 mb-6">
                  With a deep understanding of various industries and functional domains, our recruiters tailor every
                  search to your unique needs. Whether you're expanding a team or replacing a key role, we provide
                  expert guidance and access to a vast talent network.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                      <Users className="h-6 w-6 text-blue-700" />
                    </div>
                    <h3 className="text-lg font-semibold text-blue-800 mb-2">Cultural Alignment</h3>
                    <p className="text-gray-700">
                      We ensure that every candidate not only meets technical criteria but also fits seamlessly into
                      your organizational culture.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                      <Building className="h-6 w-6 text-blue-700" />
                    </div>
                    <h3 className="text-lg font-semibold text-blue-800 mb-2">Scalable Solutions</h3>
                    <p className="text-gray-700">
                      Whether you're hiring for one role or building an entire department, our permanent staffing
                      solutions scale with your business.
                    </p>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-blue-900 mt-10 mb-4">Our Permanent Staffing Process</h3>
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h4 className="text-lg font-semibold text-blue-800 mb-2">1. Role Definition</h4>
                    <p className="text-gray-700">
                      We collaborate with your team to define key responsibilities, required qualifications, and ideal
                      candidate traits.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h4 className="text-lg font-semibold text-blue-800 mb-2">2. Talent Sourcing</h4>
                    <p className="text-gray-700">
                      Using targeted sourcing strategies, we tap into active and passive talent pools to find qualified
                      candidates.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h4 className="text-lg font-semibold text-blue-800 mb-2">3. Screening & Evaluation</h4>
                    <p className="text-gray-700">
                      Each candidate is rigorously assessed through structured interviews, skill evaluations, and
                      background checks.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h4 className="text-lg font-semibold text-blue-800 mb-2">4. Interview Coordination</h4>
                    <p className="text-gray-700">
                      We manage all logistics around scheduling and feedback, making your internal team's experience
                      seamless.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h4 className="text-lg font-semibold text-blue-800 mb-2">5. Offer & Onboarding</h4>
                    <p className="text-gray-700">
                      Our team supports offer negotiations and provides onboarding assistance to ensure a strong start
                      for your new hire.
                    </p>
                  </div>
                </div>
              </FadeInSection>
            </div>

            <div className="lg:col-span-1">
              <FadeInSection delay={0.2}>
                <div className="bg-white rounded-xl shadow-sm p-6 sticky top-24">
                  <h3 className="text-xl font-bold text-blue-900 mb-4">Roles We Typically Place</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                      <span className="text-gray-700">Software Developers & Engineers</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                      <span className="text-gray-700">Financial Analysts</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                      <span className="text-gray-700">Sales Executives</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                      <span className="text-gray-700">Marketing Specialists</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                      <span className="text-gray-700">HR Managers</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                      <span className="text-gray-700">Operations Coordinators</span>
                    </li>
                  </ul>

                  <div className="mt-8">
                    <Button asChild className="w-full">
                      <Link href="/contact" className="text-white">
                        Find Permanent Talent
                      </Link>
                    </Button>
                  </div>
                </div>
              </FadeInSection>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <FadeInSection>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-blue-900 mb-6">Looking to Build a Permanent Team?</h2>
              <p className="text-gray-700 mb-8">
                Connect with our experts to discuss how we can help you hire dedicated professionals who grow with your
                company.
              </p>
              <Button size="lg" asChild>
                <Link href="/contact" className="text-white">
                  Get Started Today
                </Link>
              </Button>
            </div>
          </FadeInSection>
        </div>
      </section>
    </div>
  )
}
