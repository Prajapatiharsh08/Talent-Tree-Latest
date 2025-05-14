import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle2, ArrowLeft, Clock, Users, Award, Building } from "lucide-react"
import FadeInSection from "@/components/fade-in-section"

export default function ContractStaffingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <FadeInSection>
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-5xl font-bold mb-6">Contract Staffing</h1>
              <p className="text-xl text-blue-100 mb-8">
                Flexible staffing solutions for your short-term needs, providing access to skilled professionals for
                specific projects and timeframes.
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
                <h2 className="text-3xl font-bold text-blue-900 mb-6">
                  Contract Staffing for Flexible Workforce Solutions
                </h2>
                <p className="text-gray-700 mb-6">
                  Our Contract Staffing service offers businesses the ability to quickly access specialized talent for
                  short-term projects, seasonal demands, or to bridge staffing gaps. Whether you need expertise for a
                  specific duration or to cover a temporary vacancy, we provide flexible and scalable solutions tailored
                  to your needs.
                </p>
                <p className="text-gray-700 mb-6">
                  We specialize in sourcing professionals across a variety of industries who are available for
                  short-term engagements. With our contract staffing services, you gain access to a highly skilled,
                  adaptable workforce without the long-term commitment.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                      <Clock className="h-6 w-6 text-blue-700" />
                    </div>
                    <h3 className="text-lg font-semibold text-blue-800 mb-2">Short-Term Expertise</h3>
                    <p className="text-gray-700">
                      Access skilled professionals who bring immediate value to your organization for temporary or
                      project-based work.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                      <Users className="h-6 w-6 text-blue-700" />
                    </div>
                    <h3 className="text-lg font-semibold text-blue-800 mb-2">Scalable Staffing Solutions</h3>
                    <p className="text-gray-700">
                      Easily scale your team for peak workloads, seasonal demands, or time-sensitive projects without
                      the hassle of permanent hires.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                      <Award className="h-6 w-6 text-blue-700" />
                    </div>
                    <h3 className="text-lg font-semibold text-blue-800 mb-2">Specialized Talent</h3>
                    <p className="text-gray-700">
                      Our contract staffing solutions connect you with professionals who have specialized skills
                      tailored to your specific project requirements.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                      <Building className="h-6 w-6 text-blue-700" />
                    </div>
                    <h3 className="text-lg font-semibold text-blue-800 mb-2">Project-Based Staffing</h3>
                    <p className="text-gray-700">
                      Build dedicated teams for specific projects, ensuring you have the right talent at the right time
                      to meet deadlines and objectives.
                    </p>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-blue-900 mt-10 mb-4">Our Contract Staffing Process</h3>
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h4 className="text-lg font-semibold text-blue-800 mb-2">1. Understanding Your Needs</h4>
                    <p className="text-gray-700">
                      We work closely with you to understand your project requirements, skillset needs, and timelines
                      for staffing.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h4 className="text-lg font-semibold text-blue-800 mb-2">2. Talent Sourcing</h4>
                    <p className="text-gray-700">
                      Our recruiters leverage a wide network and advanced sourcing techniques to identify and attract
                      the best contract professionals for your project.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h4 className="text-lg font-semibold text-blue-800 mb-2">3. Screening & Evaluation</h4>
                    <p className="text-gray-700">
                      We rigorously screen candidates for both technical skills and cultural fit to ensure they meet
                      your project’s requirements.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h4 className="text-lg font-semibold text-blue-800 mb-2">4. Candidate Placement</h4>
                    <p className="text-gray-700">
                      We present you with a shortlist of qualified candidates and assist with the placement of the best
                      fit for your project.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h4 className="text-lg font-semibold text-blue-800 mb-2">5. Ongoing Support</h4>
                    <p className="text-gray-700">
                      Once your contract staff member is placed, we provide continued support to ensure that both you
                      and the contractor are satisfied with the arrangement.
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
                      <span className="text-gray-700">Finance & Accounting</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                      <span className="text-gray-700">Healthcare & Life Sciences</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                      <span className="text-gray-700">Engineering & Manufacturing</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                      <span className="text-gray-700">Sales & Marketing</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                      <span className="text-gray-700">Human Resources</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                      <span className="text-gray-700">Legal & Compliance</span>
                    </li>
                  </ul>

                  <div className="mt-8">
                    <h4 className="font-semibold text-blue-900 mb-2">Contract Roles We Fill:</h4>
                    <ul className="space-y-2">
                      <li className="text-gray-700">• Software Developers & Engineers</li>
                      <li className="text-gray-700">• IT Consultants & Specialists</li>
                      <li className="text-gray-700">• Project Managers & Coordinators</li>
                      <li className="text-gray-700">• Financial Analysts & Accountants</li>
                      <li className="text-gray-700">• Marketing Consultants</li>
                      <li className="text-gray-700">• HR & Recruitment Professionals</li>
                      <li className="text-gray-700">• Legal Advisors & Paralegals</li>
                    </ul>
                  </div>

                  <div className="mt-8">
                    <Button asChild className="w-full">
                      <Link href="/contact" className="text-white">
                        Discuss Your Contract Staffing Needs
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
              <h2 className="text-3xl font-bold text-blue-900 mb-6">Need Contract Staffing for Your Next Project?</h2>
              <p className="text-gray-700 mb-8">
                Reach out to us to discuss how our contract staffing services can provide you with the skilled
                professionals you need for your short-term goals.
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
