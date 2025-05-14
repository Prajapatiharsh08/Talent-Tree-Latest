import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle2, ArrowLeft, Users, Search, Clipboard, Layers } from "lucide-react"
import FadeInSection from "@/components/fade-in-section"

export default function EndToEndRPOPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <FadeInSection>
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-5xl font-bold mb-6">End-to-End RPO Services</h1>
              <p className="text-xl text-blue-100 mb-8">
                Outsource your entire recruitment process and scale your hiring strategy with our RPO services.
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
                <h2 className="text-3xl font-bold text-blue-900 mb-6">Comprehensive RPO Solutions for Your Business</h2>
                <p className="text-gray-700 mb-6">
                  Recruitment Process Outsourcing (RPO) is a game-changing strategy that enables businesses to outsource
                  all or part of their recruitment process to an external provider. Our End-to-End RPO service provides
                  a full-spectrum solution to help you streamline your hiring process, reduce time-to-hire, and improve
                  recruitment outcomes.
                </p>
                <p className="text-gray-700 mb-6">
                  From workforce planning and talent acquisition to candidate onboarding and retention, we cover every
                  step of the recruitment journey, ensuring a seamless, efficient, and cost-effective hiring process.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                      <Users className="h-6 w-6 text-blue-700" />
                    </div>
                    <h3 className="text-lg font-semibold text-blue-800 mb-2">Full-Cycle Recruitment</h3>
                    <p className="text-gray-700">
                      From sourcing to onboarding, our end-to-end solution manages every aspect of your recruitment
                      process, ensuring high-quality talent acquisition.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                      <Search className="h-6 w-6 text-blue-700" />
                    </div>
                    <h3 className="text-lg font-semibold text-blue-800 mb-2">Tailored Sourcing Strategies</h3>
                    <p className="text-gray-700">
                      We leverage innovative sourcing methods to attract the right candidates, ensuring your talent pool
                      is diverse, skilled, and aligned with your business needs.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                      <Clipboard className="h-6 w-6 text-blue-700" />
                    </div>
                    <h3 className="text-lg font-semibold text-blue-800 mb-2">Recruitment Process Management</h3>
                    <p className="text-gray-700">
                      We streamline your recruitment process from job requisition through to candidate selection,
                      handling all administrative tasks, ensuring efficiency and compliance.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                      <Layers className="h-6 w-6 text-blue-700" />
                    </div>
                    <h3 className="text-lg font-semibold text-blue-800 mb-2">Onboarding & Integration</h3>
                    <p className="text-gray-700">
                      We assist in the seamless onboarding of your new hires, ensuring a smooth transition and helping
                      them integrate into your company culture.
                    </p>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-blue-900 mt-10 mb-4">Our End-to-End RPO Process</h3>
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h4 className="text-lg font-semibold text-blue-800 mb-2">1. Workforce Planning & Strategy</h4>
                    <p className="text-gray-700">
                      We begin by understanding your business needs, objectives, and talent requirements. Our team works
                      with you to create a recruitment strategy tailored to your business.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h4 className="text-lg font-semibold text-blue-800 mb-2">
                      2. Job Description & Candidate Profiling
                    </h4>
                    <p className="text-gray-700">
                      We work with your hiring managers to define job requirements and create compelling job
                      descriptions that will attract top candidates.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h4 className="text-lg font-semibold text-blue-800 mb-2">3. Candidate Sourcing & Engagement</h4>
                    <p className="text-gray-700">
                      We source candidates through multiple channels, including job boards, social media, and our
                      extensive talent network, ensuring a diverse pool of qualified applicants.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h4 className="text-lg font-semibold text-blue-800 mb-2">4. Screening & Interviewing</h4>
                    <p className="text-gray-700">
                      Our team conducts thorough screenings and interviews, evaluating candidates based on skills,
                      experience, and cultural fit to ensure only the best candidates are presented.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h4 className="text-lg font-semibold text-blue-800 mb-2">
                      5. Candidate Selection & Offer Management
                    </h4>
                    <p className="text-gray-700">
                      We assist in the final candidate selection process, managing offer negotiations and ensuring
                      candidates are onboarded smoothly.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h4 className="text-lg font-semibold text-blue-800 mb-2">6. Onboarding & Retention</h4>
                    <p className="text-gray-700">
                      We support the onboarding process, ensuring that new hires feel welcomed and integrated into the
                      organization, boosting retention and long-term success.
                    </p>
                  </div>
                </div>
              </FadeInSection>
            </div>

            <div className="lg:col-span-1">
              <FadeInSection delay={0.2}>
                <div className="bg-white rounded-xl shadow-sm p-6 sticky top-24">
                  <h3 className="text-xl font-bold text-blue-900 mb-4">Industries We Serve</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                      <span className="text-gray-700">Information Technology</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                      <span className="text-gray-700">Healthcare & Life Sciences</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                      <span className="text-gray-700">Manufacturing & Engineering</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                      <span className="text-gray-700">Finance & Accounting</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                      <span className="text-gray-700">Retail & Consumer Goods</span>
                    </li>
                  </ul>

                  <div className="mt-8">
                    <h4 className="font-semibold text-blue-900 mb-2">Professional Roles We Fill:</h4>
                    <ul className="space-y-2">
                      <li className="text-gray-700">• IT Specialists</li>
                      <li className="text-gray-700">• Healthcare Professionals</li>
                      <li className="text-gray-700">• Engineers & Technicians</li>
                      <li className="text-gray-700">• Financial Analysts</li>
                      <li className="text-gray-700">• Sales & Marketing Professionals</li>
                    </ul>
                  </div>

                  <div className="mt-8">
                    <Button asChild className="w-full">
                      <Link href="/contact" className="text-white">
                        Discuss Your RPO Needs
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
              <h2 className="text-3xl font-bold text-blue-900 mb-6">Ready to Transform Your Recruitment Process?</h2>
              <p className="text-gray-700 mb-8">
                Contact us today to learn more about how our End-to-End RPO services can streamline your recruitment
                process, reduce costs, and improve your talent acquisition outcomes.
              </p>
              <Button size="lg" asChild>
                <Link href="/contact" className="text-white">
                  Start Your RPO Journey
                </Link>
              </Button>
            </div>
          </FadeInSection>
        </div>
      </section>
    </div>
  )
}
