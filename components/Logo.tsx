// import Link from "next/link"
// import { Briefcase } from "lucide-react"

// export default function Logo() {
//   return (
//     <Link href="/" className="flex items-center gap-2">
//       <div className="relative flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white">
//         <Briefcase className="h-5 w-5" />
//         <div className="absolute -right-1 -top-1 h-3 w-3 rounded-full bg-blue-300 animate-pulse"></div>
//       </div>
//       <div className="flex flex-col">
//         <span className="text-xl font-bold text-blue-700 leading-tight">TalentTree</span>
//         <span className="text-xs text-blue-500 font-medium -mt-1">Where Top Talent Takes Roots</span>
//       </div>
//     </Link>
//   )
// }
import Image from 'next/image'
import Link from 'next/link'
import { Briefcase } from 'lucide-react'
import TalentTree from '../public/TalentTree.png'

export default function Logo () {
  return (
    <Link href='/' className='flex items-center gap-2'>
      {/* <div className='relative flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white'>
        <Briefcase className='h-5 w-5' />
        <div className='absolute -right-1 -top-1 h-3 w-3 rounded-full bg-blue-300 animate-pulse'></div>
      </div> */}

      {/* Logo Image and Text (if needed) */}
      <div className='flex flex-col'>
        <Image
          src={TalentTree} // Replace with your actual logo path
          alt='TalentTree Logo'
          width={100}
          height={30}
          className='object-contain scale-150'
        />
        {/* Optional subtitle below image */}
        {/* <span className='text-xs text-blue-500 font-medium -mt-1'>
          Where Top Talent Takes Roots
        </span> */}
      </div>
    </Link>
  )
}
