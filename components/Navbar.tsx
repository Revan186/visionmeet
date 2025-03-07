import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import MobileNav from './MobileNav'
import { SignedIn, UserButton } from '@clerk/nextjs';

const Navbar = () => {
	return (
		<nav className='flex-between fixed z-50 w-full bg-dark-1 px-6 py-4 lg:px-10'>
			<Link href="/" className="flex items-center gap-1">
				<Image src="/icons/logo.svg" width={32} height={32} alt="logo" className='size-12 max-sm:hidden'/>
				<p className='text-[26px] font-extrabold text-white max-sm:hidden'>VisionMeet</p>
			</Link>

			<div className='flex-between gap-5'>
			<SignedIn>
          <UserButton afterSignOutUrl="/sign-in" />
        </SignedIn>
				<MobileNav/>
			</div>
		</nav>
	)
}

export default Navbar