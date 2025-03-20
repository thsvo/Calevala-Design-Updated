import Image from "next/image"
import Link from "next/link"
import Navbar from "@/components/navbar"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#090809] text-white">
      <Navbar />
      
      <div className="flex flex-col lg:flex-row min-h-[calc(100vh-64px)] relative lg:pl-20">
        {/* Left side - Content Section */}
        <div className="w-full lg:w-1/2 p-8 lg:p-16 relative ">
          <div className="lg:max-w-[140%] lg:pl-18 ">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 lg:pt-20 ">
              <span className="text-yellow-400">Bringing AI to life - </span>
              <span className="text-yellow-400">turning data into <span className="text-green-500">iterative</span> action.</span>
            </h1>
            
            <blockquote className="text-lg md:text-xl italic mt-4 text-gray-200">
              &quot;Echoes of the past, amplified for tomorrow&apos;s markets.&quot;
            </blockquote>

            {/* <div className="mt-8">
              <Link
                href="/companies"
                className="inline-block bg-green-500 hover:bg-green-600 text-black font-bold py-3 px-6 rounded-md transition-colors"
              >
                Explore Our Companies
              </Link>
            </div> */}
          </div>
        </div>

        {/* Right side - Image Section */}
        <div className="relative w-full lg:w-1/2 min-h-[400px] lg:min-h-full">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/button-sportathlete-left.jpg-tViEJ7b3QEKk4Qi8xarpgFBnzHm521.jpeg"
            alt="AI Background"
            fill
            className="object-cover object-center opacity-70"
            priority
          />
          <div className="absolute inset-0 bg-black/50 mix-blend-multiply"></div>
        </div>
      </div>
    </main>
  )
}

