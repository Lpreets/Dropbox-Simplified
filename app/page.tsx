import { UserButton } from "@clerk/nextjs";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col">
        <div className="p-10 flex flex-col bg-[#2B2929] dark:bg-slate-800 text-white space-y-5">
          <h1 className="text-5xl font-bold">Welcome to Dropbox Simplified<br />
          <br />
          Storing everything you need in one place upload your files and access them anywhere
          </h1>

          <p className="pb-20">
            Enhance your personal and professional life with Dropbox, offering cloud storage for all your files, photos, videos and more.
          </p>

          <Link href="/dashboard" className="flex cursor-pointer bg-blue-500 p-5 w-fit ">
              Try it for free!
              <ArrowRight className="ml-10" />
          </Link>
        </div>
        <div className="bg-[#1E1919] dark:bg-slate-800 h-full p-10">
          <video autoPlay loop muted className="rounded-lg">
            <source 
              src="https://aem.dropbox.com/cms/content/dam/dropbox/warp/en-us/overview/lp-header-graphite200-1920x1080.mp4"
            />

          </video>
        </div>
      </div>
    </main>
  )
}
