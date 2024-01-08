import { SignInButton, SignedOut, UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { ThemeToggler } from '@/components/ThemeToggler'

const Header = () => {
  return (
    <header className="flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
           <div className="bg-[#0160FE] w-fit">
            <Image 
                src="/header/dropbox.png"
                alt="logo"
                className="invert"
                height={50}
                width={50}
            />
           </div>
            <h1 className="font-bold">Dropbox</h1>
        </Link>

        <div className="px-5 flex space-x-2 items-center">
           <ThemeToggler />

            <UserButton afterSignOutUrl="/" />

            <SignedOut>
                <SignInButton afterSignInUrl="/dashboard" />
            </SignedOut>
        </div>
    </header>
  )
}

export default Header