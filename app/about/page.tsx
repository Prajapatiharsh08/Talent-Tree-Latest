import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import FadeInSection from '@/components/fade-in-section'

export default function AboutPage () {
  return (
    <div className='min-h-screen'>
      {/* Hero Section */}
      <section className='relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 md:py-28 overflow-hidden'>
        {/* Background Image */}
        <div
          className='absolute inset-0 bg-cover bg-center opacity-20'
          style={{ backgroundImage: "url('/about.png')" }}
        ></div>

        {/* Overlay Content */}
        <div className='relative z-10 container mx-auto px-4'>
          <FadeInSection>
            <div className='max-w-3xl mx-auto text-center'>
              <h1 className='text-3xl md:text-5xl font-bold mb-6'>
                About TalentTree
              </h1>
              <p className='text-xl text-blue-100 mb-8'>
                We're a premium recruitment agency dedicated to connecting
                exceptional talent with industry-leading companies.
              </p>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Our Story Section */}
      <section className='py-16 md:py-24 bg-white'>
        <div className='container mx-auto px-4'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
            <FadeInSection>
              <div>
                <h2 className='text-3xl font-bold text-blue-900 mb-6'>
                  Our Story
                </h2>
                <p className='text-gray-700 mb-6'>
                  Founded in June 2024, Talent Tree Recruits is backed by 10+
                  years of experience in the staffing and recruitment industry.
                  From startups to large enterprises, we help organizations meet
                  their workforce goals with the most qualified and pre-screened
                  candidates.
                </p>
                <p className='text-gray-700 mb-6'>
                  We cater to a wide array of industries—IT, Non-IT,
                  Hospitality, Manufacturing, Engineering, BPO, RPO, and
                  KPO—ensuring tailored hiring solutions for every business
                  need. Our deep understanding of industry-specific requirements
                  enables us to identify and deliver cream profiles that align
                  with your goals.
                </p>
                <p className='text-gray-700'>
                  At Talent Tree Recruits, we believe recruitment is more than
                  just filling a position—it's about building lasting
                  partnerships. Our consultative approach, commitment to
                  quality, and client-first mindset make us a trusted ally in
                  your growth journey.
                </p>
              </div>
            </FadeInSection>

            <FadeInSection delay={0.2}>
              <div className='relative h-[400px] rounded-xl overflow-hidden shadow-lg'>
                <Image
                  src='image3.png'
                  alt='Our team at work'
                  fill
                  className='object-cover'
                />
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className='py-16 md:py-24 bg-gray-50'>
        <div className='container mx-auto px-4'>
          <div>
            <h2 className='text-3xl font-bold text-blue-900 mb-10 text-center'>
              Why Talent Tree Recruits?
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
              <div className='bg-white p-8 rounded-xl shadow-md h-full'>
                <h3 className='text-xl font-semibold text-blue-800 mb-2'>
                  Customized Recruitment Solutions
                </h3>
                <p className='text-gray-600'>
                  We tailor our hiring strategies to meet your specific business
                  needs, ensuring a perfect fit every time.
                </p>
              </div>

              <div className='bg-white p-8 rounded-xl shadow-md h-full'>
                <h3 className='text-xl font-semibold text-blue-800 mb-2'>
                  Expert Screening Process
                </h3>
                <p className='text-gray-600'>
                  Our team of industry experts conducts rigorous screening to
                  shortlist only the most qualified candidates.
                </p>
              </div>

              <div className='bg-white p-8 rounded-xl shadow-md h-full'>
                <h3 className='text-xl font-semibold text-blue-800 mb-2'>
                  Fast Turnaround Time
                </h3>
                <p className='text-gray-600'>
                  Speed matters. We deliver quality profiles quickly without
                  compromising on standards.
                </p>
              </div>

              <div className='bg-white p-8 rounded-xl shadow-md h-full'>
                <h3 className='text-xl font-semibold text-blue-800 mb-2'>
                  Dedicated Support
                </h3>
                <p className='text-gray-600'>
                  Our recruitment specialists provide end-to-end support to
                  ensure a smooth and successful hiring process.
                </p>
              </div>

              <div className='bg-white p-8 rounded-xl shadow-md h-full'>
                <h3 className='text-xl font-semibold text-blue-800 mb-2'>
                  One-Time Replacement Within 3 Months
                </h3>
                <p className='text-gray-600'>
                  We stand by our service with a free replacement guarantee
                  within 90 days if the candidate doesn’t work out.
                </p>
              </div>

              <div className='bg-white p-8 rounded-xl shadow-md h-full'>
                <h3 className='text-xl font-semibold text-blue-800 mb-2'>
                  Focus on Growth
                </h3>
                <p className='text-gray-600'>
                  Let us handle your hiring complexities so you can focus on
                  what matters most—growing your business.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className='py-16 md:py-24 bg-white'>
        <div className='container mx-auto px-4'>
          <FadeInSection>
            <div className='text-center mb-16'>
              <h2 className='text-3xl font-bold text-blue-900 mb-4'>
                Our Leadership Team
              </h2>
              <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
                Meet the experienced professionals who guide our company's
                vision and strategy.
              </p>
            </div>
          </FadeInSection>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            <FadeInSection delay={0.1}>
              <div className='bg-white rounded-xl shadow-sm overflow-hidden'>
                <div className='h-64 relative'>
                  <Image
                    src='image4.png'
                    alt='Ananya Desai'
                    fill
                    className='object-cover'
                  />
                </div>
                <div className='p-6'>
                  <h3 className='text-xl font-bold text-blue-900 mb-1'>
                    Ananya Desai
                  </h3>
                  <p className='text-blue-600 mb-3'>
                    Head of Talent Acquisition
                  </p>
                  <p className='text-gray-600 mb-4'>
                    Ananya drives our talent strategies with a focus on
                    innovation and inclusion, helping startups scale quickly
                    with the right people.
                  </p>
                </div>
              </div>
            </FadeInSection>

            <FadeInSection delay={0.2}>
              <div className='bg-white rounded-xl shadow-sm overflow-hidden'>
                <div className='h-64 relative'>
                  <Image
                    src='image5.png'
                    alt='Ravi Mehta'
                    fill
                    className='object-cover'
                  />
                </div>
                <div className='p-6'>
                  <h3 className='text-xl font-bold text-blue-900 mb-1'>
                    Ravi Mehta
                  </h3>
                  <p className='text-blue-600 mb-3'>
                    Head of Client Partnerships
                  </p>
                  <p className='text-gray-600 mb-4'>
                    With a strong background in consulting and client success,
                    Ravi ensures long-term value through strategic recruitment
                    solutions.
                  </p>
                </div>
              </div>
            </FadeInSection>

            <FadeInSection delay={0.3}>
              <div className='bg-white rounded-xl shadow-sm overflow-hidden'>
                <div className='h-64 relative'>
                  <Image
                    src='image6.png'
                    alt='Meera Kapoor'
                    fill
                    className='object-cover'
                  />
                </div>
                <div className='p-6'>
                  <h3 className='text-xl font-bold text-blue-900 mb-1'>
                    Meera Kapoor
                  </h3>
                  <p className='text-blue-600 mb-3'>
                    Senior Recruitment Consultant
                  </p>
                  <p className='text-gray-600 mb-4'>
                    Meera specializes in tech hiring and has helped place
                    hundreds of engineers and product leaders in high-growth
                    roles.
                  </p>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className='py-16 bg-blue-50'>
        <div className='container mx-auto px-4'>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8 text-center'>
            <FadeInSection delay={0.1}>
              <div className='bg-white p-8 rounded-xl shadow-sm'>
                <div className='text-4xl font-bold text-blue-700 mb-2'>12+</div>
                <p className='text-gray-700'>Years of Experience</p>
              </div>
            </FadeInSection>

            <FadeInSection delay={0.2}>
              <div className='bg-white p-8 rounded-xl shadow-sm'>
                <div className='text-4xl font-bold text-blue-700 mb-2'>
                  50+
                </div>
                <p className='text-gray-700'>Successful Placements</p>
              </div>
            </FadeInSection>

            <FadeInSection delay={0.3}>
              <div className='bg-white p-8 rounded-xl shadow-sm'>
                <div className='text-4xl font-bold text-blue-700 mb-2'>
                  15+
                </div>
                <p className='text-gray-700'>Corporate Partners</p>
              </div>
            </FadeInSection>

            {/* <FadeInSection delay={0.4}>
              <div className='bg-white p-8 rounded-xl shadow-sm'>
                <div className='text-4xl font-bold text-blue-700 mb-2'>8</div>
                <p className='text-gray-700'>Global Offices</p>
              </div>
            </FadeInSection> */}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='py-16 md:py-24 bg-gradient-to-r from-blue-600 to-blue-800 text-white'>
        <div className='container mx-auto px-4'>
          <FadeInSection>
            <div className='max-w-3xl mx-auto text-center'>
              <h2 className='text-3xl md:text-4xl font-bold mb-6'>
                Ready to Work With Us?
              </h2>
              <p className='text-xl mb-8 text-blue-100'>
                Whether you're seeking exceptional talent or your next career
                opportunity, we're here to help.
              </p>
              <div className='flex flex-col sm:flex-row gap-4 justify-center'>
                <Button
                  size='lg'
                  className='bg-white text-blue-700 hover:bg-blue-50'
                >
                  <Link href='/contact'>Contact Our Team</Link>
                </Button>
                <Button
                  size='lg'
                  variant='outline'
                  className='border-white text-blue-700 hover:bg-blue-700'
                >
                  <Link href='/jobs'>Browse Opportunities</Link>
                </Button>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>
    </div>
  )
}
