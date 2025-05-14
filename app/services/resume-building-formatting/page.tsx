import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle2, ArrowLeft, FileText, PenTool, User, Folder } from "lucide-react"
import FadeInSection from "@/components/fade-in-section"

export default function ResumeBuildingAndFormattingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <FadeInSection>
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-5xl font-bold mb-6">Resume Building & Formatting</h1>
              <p className="text-xl text-blue-100 mb-8">
                Professional resume writing services to help you stand out and land your dream job.
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
                <h2 className="text-3xl font-bold text-blue-900 mb-6">Create a Resume that Gets Noticed</h2>
                <p className="text-gray-700 mb-6">
                  Your resume is your first impression on potential employers, and it's essential to make it stand out
                  in a competitive job market. Our Resume Building & Formatting services help you craft a professional
                  and well-structured resume that highlights your skills, experience, and achievements in the best
                  possible way.
                </p>
                <p className="text-gray-700 mb-6">
                  Whether you're just starting your career or looking to update your current resume, our team of experts
                  will guide you in creating a resume that aligns with industry standards and showcases your strengths.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                      <FileText className="h-6 w-6 text-blue-700" />
                    </div>
                    <h3 className="text-lg font-semibold text-blue-800 mb-2">Professional Resume Building</h3>
                    <p className="text-gray-700">
                      Our resume writing experts will work with you to create a customized resume that effectively
                      highlights your professional experience, accomplishments, and qualifications.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                      <PenTool className="h-6 w-6 text-blue-700" />
                    </div>
                    <h3 className="text-lg font-semibold text-blue-800 mb-2">Formatting and Structure</h3>
                    <p className="text-gray-700">
                      We'll ensure your resume follows the latest industry standards for format and structure, making it
                      easy for hiring managers and applicant tracking systems (ATS) to read and evaluate.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                      <User className="h-6 w-6 text-blue-700" />
                    </div>
                    <h3 className="text-lg font-semibold text-blue-800 mb-2">Tailored to Your Career Goals</h3>
                    <p className="text-gray-700">
                      We take the time to understand your career goals, so your resume reflects the skills and
                      experiences that align with your aspirations and industry expectations.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                      <Folder className="h-6 w-6 text-blue-700" />
                    </div>
                    <h3 className="text-lg font-semibold text-blue-800 mb-2">ATS Optimization</h3>
                    <p className="text-gray-700">
                      Our service includes optimizing your resume for Applicant Tracking Systems (ATS) to increase the
                      chances of your resume being seen by recruiters.
                    </p>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-blue-900 mt-10 mb-4">Our Resume Building Process</h3>
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h4 className="text-lg font-semibold text-blue-800 mb-2">1. Personal Consultation</h4>
                    <p className="text-gray-700">
                      We begin with a one-on-one consultation to discuss your career background, skills, and goals. This
                      helps us understand your experience and tailor your resume accordingly.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h4 className="text-lg font-semibold text-blue-800 mb-2">2. Resume Drafting</h4>
                    <p className="text-gray-700">
                      Our expert resume writers create a draft of your resume, ensuring it highlights your strengths,
                      experience, and accomplishments in the most compelling way.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h4 className="text-lg font-semibold text-blue-800 mb-2">3. Formatting & Optimization</h4>
                    <p className="text-gray-700">
                      We format your resume according to industry standards, ensuring it is ATS-friendly and easy to
                      read by recruiters, while maintaining a professional and clean layout.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h4 className="text-lg font-semibold text-blue-800 mb-2">4. Review & Revisions</h4>
                    <p className="text-gray-700">
                      We provide you with the initial draft for review, and you have the opportunity to suggest
                      revisions or updates to ensure the final version accurately reflects your career profile.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h4 className="text-lg font-semibold text-blue-800 mb-2">5. Final Delivery</h4>
                    <p className="text-gray-700">
                      After final revisions, we deliver the completed resume in multiple formats, including PDF and
                      Word, so you can apply confidently for any job opportunity.
                    </p>
                  </div>
                </div>
              </FadeInSection>
            </div>

            <div className="lg:col-span-1">
              <FadeInSection delay={0.2}>
                <div className="bg-white rounded-xl shadow-sm p-6 sticky top-24">
                  <h3 className="text-xl font-bold text-blue-900 mb-4">Key Features of Our Resume Service</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                      <span className="text-gray-700">Expert Resume Writers</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                      <span className="text-gray-700">Tailored to Your Career Goals</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                      <span className="text-gray-700">ATS Optimization</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                      <span className="text-gray-700">Professional Formatting</span>
                    </li>
                  </ul>

                  <div className="mt-8">
                    <h4 className="font-semibold text-blue-900 mb-2">Resume Writing for Every Career Stage:</h4>
                    <ul className="space-y-2">
                      <li className="text-gray-700">• Entry-Level Resumes</li>
                      <li className="text-gray-700">• Mid-Level Professional Resumes</li>
                      <li className="text-gray-700">• Executive-Level Resumes</li>
                    </ul>
                  </div>

                  <div className="mt-8">
                    <Button asChild className="w-full">
                      <Link href="/contact" className="text-white">
                        Get Your Professional Resume Today
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
              <h2 className="text-3xl font-bold text-blue-900 mb-6">Ready to Craft a Resume That Gets Results?</h2>
              <p className="text-gray-700 mb-8">
                Contact us today to get started on building a powerful resume that stands out in today's job market.
              </p>
              <Button size="lg" asChild>
                <Link href="/contact" className="text-white">
                  Contact Our Resume Experts
                </Link>
              </Button>
            </div>
          </FadeInSection>
        </div>
      </section>
    </div>
  )
}
