import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle2, ArrowLeft, Users, Award, Building, Clock } from "lucide-react"
import FadeInSection from "@/components/fade-in-section"

export default function BulkHiringSolutionsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <FadeInSection>
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-5xl font-bold mb-6">Bulk Hiring Solutions</h1>
              <p className="text-xl text-blue-100 mb-8">
                Streamlined recruitment for large-scale hiring projects, providing you with a high volume of skilled
                talent quickly and efficiently.
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
                <h2 className="text-3xl font-bold text-blue-900 mb-6">Efficient and Scalable Bulk Hiring Solutions</h2>
                <p className="text-gray-700 mb-6">
                  Our Bulk Hiring Solutions are designed to meet the needs of organizations looking to hire large
                  volumes of talent quickly and efficiently. Whether you’re launching a new project, expanding your
                  workforce, or meeting seasonal hiring demands, we have the expertise and resources to scale your
                  recruitment efforts.
                </p>
                <p className="text-gray-700 mb-6">
                  We provide a customized approach to bulk recruitment, ensuring that you get the right talent to meet
                  your business objectives. From sourcing to onboarding, we handle every step of the recruitment
                  process, allowing you to focus on your core operations.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                      <Users className="h-6 w-6 text-blue-700" />
                    </div>
                    <h3 className="text-lg font-semibold text-blue-800 mb-2">High-Volume Recruitment</h3>
                    <p className="text-gray-700">
                      Streamline the hiring of large numbers of employees across different roles, ensuring fast and
                      efficient placement.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                      <Clock className="h-6 w-6 text-blue-700" />
                    </div>
                    <h3 className="text-lg font-semibold text-blue-800 mb-2">Time-Sensitive Hiring</h3>
                    <p className="text-gray-700">
                      Meet your urgent hiring deadlines by leveraging our large talent pool and quick-turnaround
                      recruitment strategies.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                      <Award className="h-6 w-6 text-blue-700" />
                    </div>
                    <h3 className="text-lg font-semibold text-blue-800 mb-2">Customizable Solutions</h3>
                    <p className="text-gray-700">
                      Tailor the recruitment process to your specific industry needs, whether you require technical
                      expertise, entry-level workers, or specialized skill sets.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                      <Building className="h-6 w-6 text-blue-700" />
                    </div>
                    <h3 className="text-lg font-semibold text-blue-800 mb-2">Nationwide Talent Pool</h3>
                    <p className="text-gray-700">
                      Access a broad network of candidates across the country, providing you with a diverse range of
                      qualified professionals for large-scale hiring.
                    </p>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-blue-900 mt-10 mb-4">Our Bulk Hiring Process</h3>
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h4 className="text-lg font-semibold text-blue-800 mb-2">1. Understanding Your Needs</h4>
                    <p className="text-gray-700">
                      We begin by working closely with you to understand your specific hiring needs, including the
                      roles, skills, and quantity of talent required.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h4 className="text-lg font-semibold text-blue-800 mb-2">2. Targeted Sourcing</h4>
                    <p className="text-gray-700">
                      Utilizing our extensive network, we source a large pool of candidates quickly and efficiently,
                      ensuring a match for your specific requirements.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h4 className="text-lg font-semibold text-blue-800 mb-2">3. Screening & Evaluation</h4>
                    <p className="text-gray-700">
                      We conduct a thorough screening process, including interviews, skill assessments, and background
                      checks, to ensure the best candidates are selected.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h4 className="text-lg font-semibold text-blue-800 mb-2">4. Bulk Placement</h4>
                    <p className="text-gray-700">
                      Candidates are placed based on your specific needs and timelines, with streamlined onboarding to
                      get them up to speed quickly.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h4 className="text-lg font-semibold text-blue-800 mb-2">5. Ongoing Support</h4>
                    <p className="text-gray-700">
                      We provide continuous support, ensuring that both you and the hired candidates are satisfied
                      throughout the engagement.
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
                      <span className="text-gray-700">Manufacturing & Production</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                      <span className="text-gray-700">Retail & E-commerce</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                      <span className="text-gray-700">Healthcare</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                      <span className="text-gray-700">Logistics & Supply Chain</span>
                    </li>
                  </ul>

                  <div className="mt-8">
                    <h4 className="font-semibold text-blue-900 mb-2">Roles We Hire in Bulk:</h4>
                    <ul className="space-y-2">
                      <li className="text-gray-700">• Customer Service Representatives</li>
                      <li className="text-gray-700">• Data Entry & Administrative Support</li>
                      <li className="text-gray-700">• Warehouse Workers & Logistics Personnel</li>
                      <li className="text-gray-700">• Sales Associates</li>
                      <li className="text-gray-700">• Manufacturing Technicians</li>
                      <li className="text-gray-700">• IT Support Specialists</li>
                    </ul>
                  </div>

                  <div className="mt-8">
                    <Button asChild className="w-full">
                      <Link href="/contact" className="text-white">
                        Start Your Bulk Hiring Journey
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
              <h2 className="text-3xl font-bold text-blue-900 mb-6">Ready to Scale Your Workforce?</h2>
              <p className="text-gray-700 mb-8">
                Let’s talk about how our Bulk Hiring Solutions can help you efficiently meet your staffing needs at
                scale, with a quick turnaround and high-quality hires.
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
