import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Users, Briefcase, Award, ChevronRight, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"
import AnimatedCounter from "@/components/animated-counter"
import FadeInSection from "@/components/fade-in-section"
import ClientLogos from "@/components/client-logos"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/image.png')] opacity-20"></div>
        </div>
        <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
          <FadeInSection>
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Welcome to <span className="text-blue-200">Talent Tree Recruits</span>
              </h1>
              <p className="text-xl md:text-1xl mb-8 text-blue-100">
                Where talent meets opportunity. With over a decade of recruitment expertise, we specialize in delivering
                the best-fit candidates across industries—IT, Non-IT, Hospitality, Manufacturing, Engineering, BPO, RPO,
                and KPO. We connect exceptional talent with exceptional companies.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50">
                  <Link href="/jobs" className="flex items-center">
                    Browse Opportunities <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <a href="/about">
                  <button className="px-8 w-full py-2.5 text-md border rounded-lg border-white text-white text-[14px] hover:bg-white hover:text-blue-700 transition-colors duration-300">
                    Learn More About Us
                  </button>
                </a>
              </div>
            </div>
          </FadeInSection>
        </div>
        {/* <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div> */}
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <FadeInSection>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-blue-50 p-8 rounded-xl text-center">
                <AnimatedCounter value={50} suffix="+" className="text-4xl font-bold text-blue-700 mb-2" />
                <p className="text-blue-900">Successful Placements</p>
              </div>
              <div className="bg-blue-50 p-8 rounded-xl text-center">
                <AnimatedCounter value={15} suffix="+" className="text-4xl font-bold text-blue-700 mb-2" />
                <p className="text-blue-900">Corporate Partners</p>
              </div>
              <div className="bg-blue-50 p-8 rounded-xl text-center">
                <AnimatedCounter value={95} suffix="%" className="text-4xl font-bold text-blue-700 mb-2" />
                <p className="text-blue-900">Client Satisfaction</p>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <FadeInSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Our Premium Services</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We offer comprehensive recruitment solutions tailored to your organization's unique needs.
              </p>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                  href="/services"
                  className="text-blue-600 font-medium flex items-center hover:text-blue-800 transition-colors"
                >
                  Learn More <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </FadeInSection>

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
                  href="/services"
                  className="text-blue-600 font-medium flex items-center hover:text-blue-800 transition-colors"
                >
                  Learn More <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </FadeInSection>

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
                  href="/services"
                  className="text-blue-600 font-medium flex items-center hover:text-blue-800 transition-colors"
                >
                  Learn More <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </FadeInSection>

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
                  href="/services"
                  className="text-blue-600 font-medium flex items-center hover:text-blue-800 transition-colors"
                >
                  Learn More <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </FadeInSection>

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
                  href="/services"
                  className="text-blue-600 font-medium flex items-center hover:text-blue-800 transition-colors"
                >
                  Learn More <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </FadeInSection>

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
                  href="/services"
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
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <FadeInSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Our Recruitment Process</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                A systematic approach to finding the perfect match for your organization.
              </p>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <FadeInSection delay={0.1}>
              <div className="relative">
                <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg mb-4 z-10 relative">
                  1
                </div>
                <div className="absolute top-5 left-5 right-0 h-0.5 bg-blue-200 hidden md:block"></div>
                <h3 className="text-xl font-bold text-blue-900 mb-2">Needs Assessment</h3>
                <p className="text-gray-600">We thoroughly understand your requirements and organizational culture.</p>
              </div>
            </FadeInSection>

            <FadeInSection delay={0.2}>
              <div className="relative">
                <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg mb-4 z-10 relative">
                  2
                </div>
                <div className="absolute top-5 left-5 right-0 h-0.5 bg-blue-200 hidden md:block"></div>
                <h3 className="text-xl font-bold text-blue-900 mb-2">Talent Search</h3>
                <p className="text-gray-600">Our experts engage with qualified candidates from our network.</p>
              </div>
            </FadeInSection>

            <FadeInSection delay={0.3}>
              <div className="relative">
                <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg mb-4 z-10 relative">
                  3
                </div>
                <div className="absolute top-5 left-5 right-0 h-0.5 bg-blue-200 hidden md:block"></div>
                <h3 className="text-xl font-bold text-blue-900 mb-2">Evaluation</h3>
                <p className="text-gray-600">
                  Rigorous screening and assessment to ensure the perfect fit for your position.
                </p>
              </div>
            </FadeInSection>

            <FadeInSection delay={0.4}>
              <div className="relative">
                <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg mb-4 z-10 relative">
                  4
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-2">Placement</h3>
                <p className="text-gray-600">Seamless onboarding and follow-up to ensure long-term success.</p>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Recruitment Infographics Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <FadeInSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Our Recruitment Impact</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Discover how our recruitment expertise is transforming organizations
              </p>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FadeInSection delay={0.1}>
              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100 text-center">
                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Briefcase className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-blue-700 mb-2">50+</h3>
                <p className="text-xl font-semibold text-blue-900 mb-3">Placements</p>
                <p className="text-gray-600">Successful placements across various industries and job roles</p>
              </div>
            </FadeInSection>

            <FadeInSection delay={0.2}>
              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100 text-center">
                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-blue-700 mb-2">85%</h3>
                <p className="text-xl font-semibold text-blue-900 mb-3">Retention Rate</p>
                <p className="text-gray-600">Our placements have an industry-leading 1-year retention rate</p>
              </div>
            </FadeInSection>

            <FadeInSection delay={0.3}>
              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100 text-center">
                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-blue-700 mb-2">12 Days</h3>
                <p className="text-xl font-semibold text-blue-900 mb-3">Average Time-to-Hire</p>
                <p className="text-gray-600">We deliver top talent faster than the industry average of 30+ days</p>
              </div>
            </FadeInSection>
          </div>

          <FadeInSection delay={0.4}>
            <div className="mt-12 text-center">
              <Link href="/jobs">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  Browse All Opportunities <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <FadeInSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">What Our Clients Say</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Hear from organizations that have successfully partnered with us.
              </p>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FadeInSection delay={0.1}>
              <div className="bg-blue-50 p-8 rounded-xl">
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
                  "Working with this recruitment agency has been transformative for our organization. They truly
                  understand our company culture and consistently deliver exceptional talent that aligns with our values
                  and goals."
                </p>
                <div className="flex mt-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-500 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
              </div>
            </FadeInSection>

            <FadeInSection delay={0.2}>
              <div className="bg-blue-50 p-8 rounded-xl">
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
                  "Their executive search capabilities are unmatched. They found us a CFO who not only had the technical
                  expertise we needed but also fit perfectly with our company culture. The entire process was smooth and
                  professional."
                </p>
                <div className="flex mt-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-500 fill-current" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <FadeInSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">Trusted By Industry Leaders</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We partner with prestigious organizations across various industries.
              </p>
            </div>
          </FadeInSection>

          <ClientLogos />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <FadeInSection>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Find Your Perfect Match?</h2>
              <p className="text-xl mb-8 text-blue-100">
                Whether you're seeking exceptional talent or your next career opportunity, we're here to help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50">
                  <Link href="/contact">Contact Our Team</Link>
                </Button>
                <a href="/jobs">
                  <button className="px-6 py-2.5 rounded-md w-full text-[15px] font-medium border border-white  text-white hover:bg-white hover:text-blue-700 transition-colors duration-300">
                    Browse Opportunities
                  </button>
                </a>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>
    </div>
  )
}
