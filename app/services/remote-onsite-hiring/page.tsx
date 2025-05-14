import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle2, ArrowLeft, Users, Globe, Building } from "lucide-react"
import FadeInSection from "@/components/fade-in-section"

export default function RemoteAndOnsiteHiringPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <FadeInSection>
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-5xl font-bold mb-6">Remote & On-site Hiring Solutions</h1>
              <p className="text-xl text-blue-100 mb-8">
                Flexible hiring solutions to match your needs, whether you're seeking talent for remote roles or onsite
                positions.
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
                <h2 className="text-3xl font-bold text-blue-900 mb-6">Empowering Your Team with the Right Talent</h2>
                <p className="text-gray-700 mb-6">
                  Whether you're looking to build a fully remote team, hire for onsite positions, or create a hybrid
                  workforce, our Remote and Onsite Hiring solutions are tailored to your specific needs. We help
                  organizations adapt to the evolving workplace by connecting them with top talent for both remote and
                  onsite roles.
                </p>
                <p className="text-gray-700 mb-6">
                  Our recruitment strategy covers both global talent pools for remote hiring and localized talent for
                  onsite staffing. We ensure that you find the right fit for your team's culture and requirements,
                  whether they are working from home or in the office.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                      <Globe className="h-6 w-6 text-blue-700" />
                    </div>
                    <h3 className="text-lg font-semibold text-blue-800 mb-2">Remote Hiring</h3>
                    <p className="text-gray-700">
                      Expand your reach by tapping into a global talent pool. Hire the best remote professionals
                      regardless of their location and foster a flexible work environment.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                      <Building className="h-6 w-6 text-blue-700" />
                    </div>
                    <h3 className="text-lg font-semibold text-blue-800 mb-2">Onsite Hiring</h3>
                    <p className="text-gray-700">
                      Hire local talent with the right expertise to fill onsite positions at your organization. Whether
                      for short-term projects or permanent roles, we ensure you find the right fit.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                      <Users className="h-6 w-6 text-blue-700" />
                    </div>
                    <h3 className="text-lg font-semibold text-blue-800 mb-2">Hybrid Hiring</h3>
                    <p className="text-gray-700">
                      Build a flexible workforce by combining remote and onsite talent. Our hybrid hiring solutions let
                      you meet the specific needs of your business while promoting collaboration across teams.
                    </p>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-blue-900 mt-10 mb-4">Our Remote and Onsite Hiring Process</h3>
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h4 className="text-lg font-semibold text-blue-800 mb-2">1. Understanding Your Hiring Needs</h4>
                    <p className="text-gray-700">
                      We collaborate with you to understand your unique requirements for remote, onsite, or hybrid
                      roles, and ensure we align our search strategy to match those needs.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h4 className="text-lg font-semibold text-blue-800 mb-2">2. Sourcing the Best Talent</h4>
                    <p className="text-gray-700">
                      Using our extensive global and local networks, we find candidates that match your exact skill set,
                      whether for a remote position or onsite placement.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h4 className="text-lg font-semibold text-blue-800 mb-2">3. Screening & Evaluation</h4>
                    <p className="text-gray-700">
                      All candidates go through a thorough screening process, including technical assessments,
                      behavioral interviews, and reference checks to ensure they meet your needs.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h4 className="text-lg font-semibold text-blue-800 mb-2">4. Candidate Presentation & Interviews</h4>
                    <p className="text-gray-700">
                      We present you with a curated list of candidates, facilitating the interview process, whether
                      remote or in-person, to ensure the best match for your team.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h4 className="text-lg font-semibold text-blue-800 mb-2">5. Onboarding and Integration</h4>
                    <p className="text-gray-700">
                      Once your candidate is selected, we help with onboarding, ensuring smooth integration into your
                      team, whether they’re working remotely or onsite.
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
                      <span className="text-gray-700">Retail & E-commerce</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                      <span className="text-gray-700">Engineering & Manufacturing</span>
                    </li>
                  </ul>

                  <div className="mt-8">
                    <h4 className="font-semibold text-blue-900 mb-2">Roles We Hire for Remote and Onsite Positions:</h4>
                    <ul className="space-y-2">
                      <li className="text-gray-700">• Software Developers & Engineers</li>
                      <li className="text-gray-700">• IT Support & Network Administrators</li>
                      <li className="text-gray-700">• Customer Support & Service Representatives</li>
                      <li className="text-gray-700">• Sales and Marketing Professionals</li>
                      <li className="text-gray-700">• Project & Program Managers</li>
                      <li className="text-gray-700">• Administrative & HR Professionals</li>
                    </ul>
                  </div>

                  <div className="mt-8">
                    <Button asChild className="w-full">
                      <Link href="/contact" className="text-white">
                        Discuss Your Hiring Needs
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
              <h2 className="text-3xl font-bold text-blue-900 mb-6">
                Looking for the Best Talent for Your Remote or Onsite Roles?
              </h2>
              <p className="text-gray-700 mb-8">
                Connect with us today to start building your team with top-quality professionals for both remote and
                onsite positions.
              </p>
              <Button size="lg" asChild>
                <Link href="/contact" className="text-white">
                  Contact Our Hiring Team
                </Link>
              </Button>
            </div>
          </FadeInSection>
        </div>
      </section>
    </div>
  )
}
