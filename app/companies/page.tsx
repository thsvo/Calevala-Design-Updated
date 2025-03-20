import Image from "next/image"
import Navbar from "@/components/navbar"

export default function Companies() {
  return (
    <main className="min-h-screen bg-[#060708] text-white">
      <Navbar />
      
      <div className="flex flex-col lg:flex-row min-h-[calc(100vh-64px)]">
        {/* Left side - Image Section */}
        <div className="relative w-full lg:w-1/2 min-h-[400px] lg:min-h-full">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/button-kaze.jpg-pNmck9XFh6nZWJ2GRTkawV6XgHAdZX.jpeg"
            alt="AI Background"
            fill
            className="object-cover object-center opacity-70"
            priority
          />
          <div className="absolute inset-0 bg-black/50 mix-blend-multiply"></div>
        </div>

        {/* Right side - Content Section */}
        <div className="w-full lg:w-1/2 p-8 lg:p-16 bg-[#060708]">
          <h1 className="text-2xl md:text-3xl font-bold mb-12 text-green-500">PORTFOLIO OF COMPANIES</h1>

          <div className="space-y-12">
            <div className="flex items-center space-x-6">
              <div className="w-20 h-20 border-4 border-yellow-400 flex-shrink-0"></div>
              <div>
                <h2 className="text-xl font-bold text-yellow-400 mb-2">Company: Kuutio</h2>
                <p className="text-gray-200">
                  Calevala Interactive is a portfolio company focused on leveraging AI to enhance service development in
                  the fields of media, fashion, catalogs, and categorization.
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-6">
              <div className="w-20 h-20 flex-shrink-0">
                <div className="w-full h-full border-4 border-yellow-400 transform rotate-45"></div>
              </div>
              <div>
                <h2 className="text-xl font-bold text-yellow-400 mb-2">Company: Kolmio</h2>
                <p className="text-gray-200">
                  The company aims to bring an AI-driven edge to the sports industry, enhancing performance development
                  for athletes, players, and sports scouts.
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-6">
              <div className="w-20 h-20 flex-shrink-0 flex items-center justify-center">
                <div className="text-9xl text-yellow-400 font-bold">?</div>
              </div>
              <div>
                <h2 className="text-xl font-bold text-yellow-400 mb-2">Next generation</h2>
                <p className="text-gray-200">
                  Are you our next superstar and the creator of the next disruptive SaaS-based service? We continuously
                  drive new ideas through our venturing process, month after month, year after year.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

