import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Users, Briefcase, Award, CheckCircle2, ChevronRight, Settings } from "lucide-react"
import FadeInSection from "@/components/fade-in-section"

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 md:py-28">
        <div className="container mx-auto px-4">
          <FadeInSection>
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-5xl font-bold mb-6">Our Premium Services</h1>
              <p className="text-xl text-blue-100 mb-8">
                Comprehensive recruitment solutions tailored to your organization's unique needs.
              </p>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <FadeInSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">How We Can Help You</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We offer a range of specialized recruitment services designed to meet your specific talent acquisition
                needs.
              </p>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Permanent Staffing */}
            <FadeInSection delay={0.1}>
              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <Users className="h-7 w-7 text-blue-700" />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">Permanent Staffing</h3>
                <p className="text-gray-600 mb-4">
                  We help you build a long-term team with highly qualified professionals who align with your company
                  culture and goals.
                </p>
                <Link
                  href="/services/permanent-staffing"
                  className="text-blue-600 font-medium flex items-center hover:text-blue-800 transition-colors"
                >
                  Learn More <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </FadeInSection>

            {/* Contract Staffing */}
            <FadeInSection delay={0.2}>
              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <Briefcase className="h-7 w-7 text-blue-700" />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">Contract Staffing</h3>
                <p className="text-gray-600 mb-4">
                  Flexible workforce solutions to meet your short-term project or seasonal needs with skilled contract
                  professionals.
                </p>
                <Link
                  href="/services/contract-staffing"
                  className="text-blue-600 font-medium flex items-center hover:text-blue-800 transition-colors"
                >
                  Learn More <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </FadeInSection>

            {/* Bulk Hiring Solutions */}
            <FadeInSection delay={0.3}>
              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <Users className="h-7 w-7 text-blue-700" />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">Bulk Hiring Solutions</h3>
                <p className="text-gray-600 mb-4">
                  Scalable recruitment drives for high-volume hiring needs, ensuring quick turnaround without
                  compromising quality.
                </p>
                <Link
                  href="/services/bulk-hiring-solutions"
                  className="text-blue-600 font-medium flex items-center hover:text-blue-800 transition-colors"
                >
                  Learn More <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </FadeInSection>

            {/* Remote & On-site Hiring */}
            <FadeInSection delay={0.4}>
              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <Briefcase className="h-7 w-7 text-blue-700" />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">Remote & On-site Hiring</h3>
                <p className="text-gray-600 mb-4">
                  Whether remote or on-site, we provide the right talent wherever you need it—efficiently and
                  seamlessly.
                </p>
                <Link
                  href="/services/remote-onsite-hiring"
                  className="text-blue-600 font-medium flex items-center hover:text-blue-800 transition-colors"
                >
                  Learn More <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </FadeInSection>

            {/* Resume Building */}
            <FadeInSection delay={0.5}>
              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <Award className="h-7 w-7 text-blue-700" />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">Resume Building & Formatting</h3>
                <p className="text-gray-600 mb-4">
                  We help freshers create professional resumes that stand out and increase their chances of landing
                  interviews.
                </p>
                <Link
                  href="/services/resume-building-formatting"
                  className="text-blue-600 font-medium flex items-center hover:text-blue-800 transition-colors"
                >
                  Learn More <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </FadeInSection>

            {/* End-to-End RPO */}
            <FadeInSection delay={0.6}>
              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <Settings className="h-7 w-7 text-blue-700" />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">End-to-End RPO</h3>
                <p className="text-gray-600 mb-4">
                  Comprehensive Recruitment Process Outsourcing to streamline and manage all your hiring needs under one
                  roof.
                </p>
                <Link
                  href="/services/end-to-end-rpo"
                  className="text-blue-600 font-medium flex items-center hover:text-blue-800 transition-colors"
                >
                  Learn More <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <FadeInSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">Our Recruitment Process</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                A systematic approach to finding the perfect match for your organization.
              </p>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FadeInSection delay={0.1}>
              <div className="bg-white p-8 rounded-xl shadow-sm relative">
                <div className="absolute top-8 right-8 w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg">
                  1
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-4 mt-8">Needs Assessment</h3>
                <p className="text-gray-600 mb-4">
                  We begin by understanding your requirements, company culture, and the specific skills needed for the
                  role.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">In-depth consultation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Job description development</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Timeline establishment</span>
                  </li>
                </ul>
              </div>
            </FadeInSection>

            <FadeInSection delay={0.2}>
              <div className="bg-white p-8 rounded-xl shadow-sm relative">
                <div className="absolute top-8 right-8 w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg">
                  2
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-4 mt-8">Talent Search</h3>
                <p className="text-gray-600 mb-4">
                  Our experts identify and engage with qualified candidates from our extensive network and targeted
                  sourcing strategies.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Database mining</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Direct outreach</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Referral networks</span>
                  </li>
                </ul>
              </div>
            </FadeInSection>

            <FadeInSection delay={0.3}>
              <div className="bg-white p-8 rounded-xl shadow-sm relative">
                <div className="absolute top-8 right-8 w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg">
                  3
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-4 mt-8">Evaluation</h3>
                <p className="text-gray-600 mb-4">
                  Rigorous screening and assessment to ensure the perfect fit for your position and company culture.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Skills assessment</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Behavioral interviews</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Reference checks</span>
                  </li>
                </ul>
              </div>
            </FadeInSection>

            <FadeInSection delay={0.4}>
              <div className="bg-white p-8 rounded-xl shadow-sm relative">
                <div className="absolute top-8 right-8 w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg">
                  4
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-4 mt-8">Placement</h3>
                <p className="text-gray-600 mb-4">
                  Seamless onboarding and follow-up to ensure long-term success for both the candidate and your
                  organization.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Offer negotiation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Onboarding support</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Follow-up and retention</span>
                  </li>
                </ul>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <FadeInSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">Industries We Serve</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We have specialized expertise across a wide range of industries and sectors.
              </p>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FadeInSection delay={0.1}>
              <div className="bg-blue-50 p-8 rounded-xl">
                <h3 className="text-xl font-bold text-blue-900 mb-3">Technology</h3>
                <p className="text-gray-700 mb-4">
                  From startups to enterprises, we help build innovative teams in software development, cybersecurity,
                  data science, and more.
                </p>
              </div>
            </FadeInSection>

            <FadeInSection delay={0.2}>
              <div className="bg-blue-50 p-8 rounded-xl">
                <h3 className="text-xl font-bold text-blue-900 mb-3">Financial Services</h3>
                <p className="text-gray-700 mb-4">
                  We serve banks, investment firms, insurance companies, and fintech startups with specialized talent
                  across all functions.
                </p>
              </div>
            </FadeInSection>

            <FadeInSection delay={0.3}>
              <div className="bg-blue-50 p-8 rounded-xl">
                <h3 className="text-xl font-bold text-blue-900 mb-3">Healthcare</h3>
                <p className="text-gray-700 mb-4">
                  Our expertise spans hospitals, pharmaceutical companies, biotech firms, and healthcare technology
                  providers.
                </p>
              </div>
            </FadeInSection>

            <FadeInSection delay={0.4}>
              <div className="bg-blue-50 p-8 rounded-xl">
                <h3 className="text-xl font-bold text-blue-900 mb-3">Manufacturing</h3>
                <p className="text-gray-700 mb-4">
                  We help manufacturing companies find leadership and specialized talent to drive innovation and
                  operational excellence.
                </p>
              </div>
            </FadeInSection>

            <FadeInSection delay={0.5}>
              <div className="bg-blue-50 p-8 rounded-xl">
                <h3 className="text-xl font-bold text-blue-900 mb-3">Retail & Consumer Goods</h3>
                <p className="text-gray-700 mb-4">
                  We partner with retailers and consumer goods companies to find talent that drives growth, customer
                  experience, and digital transformation.
                </p>
              </div>
            </FadeInSection>

            <FadeInSection delay={0.6}>
              <div className="bg-blue-50 p-8 rounded-xl">
                <h3 className="text-xl font-bold text-blue-900 mb-3">Professional Services</h3>
                <p className="text-gray-700 mb-4">
                  Law firms, consulting agencies, and other professional service providers trust us to find exceptional
                  talent for their organizations.
                </p>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <FadeInSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">Client Success Stories</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                See how our services have helped organizations find exceptional talent and achieve their goals.
              </p>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FadeInSection delay={0.1}>
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="flex items-center mb-6">
                  <div className="mr-4">
                    <Image src="image2.png" alt="Sarah Johnson" width={60} height={60} className="rounded-full" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-blue-900">Sarah Johnson</h4>
                    <p className="text-gray-600">CEO, TechVision Enterprises</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">
                  "Working with EliteRecruit has been transformative for our organization. They truly understand our
                  company culture and consistently deliver exceptional talent that aligns with our values and goals.
                  Their executive search team found us a CTO who has been instrumental in our growth."
                </p>
              </div>
            </FadeInSection>

            <FadeInSection delay={0.2}>
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="flex items-center mb-6">
                  <div className="mr-4">
                    <Image src="image1.png" alt="Michael Chen" width={60} height={60} className="rounded-full" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-blue-900">Michael Chen</h4>
                    <p className="text-gray-600">COO, Global Finance Partners</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">
                  "Their professional staffing services are unmatched. They found us a team of financial analysts who
                  not only had the technical expertise we needed but also fit perfectly with our company culture. The
                  entire process was smooth and professional."
                </p>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <FadeInSection>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Find Your Perfect Match?</h2>
              <p className="text-xl mb-8 text-blue-100">
                Let's discuss how our recruitment services can help you achieve your hiring goals.
              </p>
              <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50">
                <Link href="/contact">Contact Our Team</Link>
              </Button>
            </div>
          </FadeInSection>
        </div>
      </section>
    </div>
  )
}
