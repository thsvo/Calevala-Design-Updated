import Image from "next/image"
import Navbar from "@/components/navbar"
import Image1 from "@/public/1.jpg"
import Image2 from "@/public/2.jpg"
import Image3 from "@/public/3.jpg"
import Image4 from "@/public/4.jpg"
import Image5 from "@/public/5.jpg"
import Image6 from "@/public/6.jpg"
import Image7 from "@/public/7.jpg"

export default function Services() {
  const services = [
    {
      id: 1,
      title: "SITE AUDIT",
      description: "A new approach to site audits and comparative analysis",
      type: "SaaS Service",
      available: "H1/2025",
      image: Image1,
    },
    {
      id: 2,
      title: "CITIZENS",
      description: "A citizen feedback system designed for Smart Cities",
      type: "SaaS Service",
      available: "H1/2025",
      image: Image2,
    },
    {
      id: 3,
      title: "COLLECTORS",
      description: "A platform for collectors to manage and organize their item portfolios",
      type: "SaaS Service",
      available: "H1/2025",
      image: Image3,
    },
    {
      id: 4,
      title: "MODELS",
      description: "A reimagined digital service for the fashion industry",
      type: "SaaS Service",
      available: "concept phase",
      image: Image4,
    },
    {
      id: 5,
      title: "AMS",
      description: "An Athlete Management System to accelerate athlete development",
      type: "SaaS Service",
      available: "H1/2025",
      image: Image5,
    },
    {
      id: 6,
      title: "AI COACH",
      description: "A coaching application to enhance training programs for team sports",
      type: "Tablet app",
      available: "H2/2025",
      image: Image6,
    },
    {
      id: 7,
      title: "360 GAME",
      description: "A SaaS-based service for team sports statistics and analytics – a joint venture",
      type: "SaaS Service",
      available: "H1/2025",
      image: Image7,
    },
  ]

  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <div className="container mx-auto">
        {/* Title row */}
        <div className="grid grid-cols-12 mb-8">
          <div className="col-span-2 md:col-span-2 lg:col-span-2">
            {/* <Image
              src="/logo.png"
              alt="Calevala Interactive"
              width={120}
              height={60}
              className="ml-4"
            /> */}
          </div>
          <div className="col-span-10">
            <h1 className="text-2xl font-bold text-[#00ff00] pl-4">PORTFOLIO OF SERVICES</h1>
          </div>
        </div>

        {/* Content grid */}
        <div className="grid grid-cols-12 gap-4">
          {/* Left padding column */}
          <div className="col-span-2 md:col-span-2 lg:col-span-2"></div>

          {/* Main content column */}
          <div className="col-span-8 md:col-span-8 lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {services.map((service) => (
                <div key={service.id} className="mb-4">
                  <div className="mb-2 relative h-64 w-full overflow-hidden bg-black rounded-lg">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      fill
                      className="object-cover brightness-[1.2] hue-rotate-[120deg] filter saturate-[1.2]"
                    />
                  </div>
                  <h2 className="text-base font-bold text-[#00ff00] mb-1">{service.title}</h2>
                  <div className="mb-1 text-sm">
                    <span className="font-bold text-yellow-400">Description:</span>{" "}
                    <span className="text-white">{service.description}</span>
                  </div>
                  <div className="mb-1 text-sm">
                    <span className="font-bold text-yellow-400">Type:</span>{" "}
                    <span className="text-white">{service.type}</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-bold text-yellow-400">Available:</span>{" "}
                    <span className="text-white">{service.available}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right padding column */}
          <div className="col-span-2 md:col-span-2 lg:col-span-2"></div>
        </div>
      </div>
    </main>
  )
}

