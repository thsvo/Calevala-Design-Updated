import Image from "next/image"
import Navbar from "@/components/navbar"
import Image12 from "@/public/12.jpg"
import Image13 from "@/public/13.jpg"
import Image14 from "@/public/14.jpg"
import Image15 from "@/public/15.jpg"
import Image16 from "@/public/16.jpg"

export default function AboutUs() {
  const teamMembers = [
    {
      id: 1,
      role: "Software Architect",
      image: Image12,
    },  
    {
      id: 2,
      role: "Lead Developer",
      image: Image13,
    },
    {
      id: 3,
      role: "CEO",
      image: Image14,
    },
    {
      id: 4,
      role: "Service Manager",
      image: Image15,
    },
    {
      id: 5,
      role: "Customer Support",
      image: Image16,
    },
  ]

  return (
    <main className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background Image with Opacity */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/70 z-10"></div>
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/button-sportathlete-left.jpg-tViEJ7b3QEKk4Qi8xarpgFBnzHm521.jpeg"
          alt="AI Background"
          fill
          className="object-cover object-right opacity-30 md:opacity-40"
          priority
        />
      </div>

      <Navbar />

      <div className="max-w-7xl mx-auto relative z-10 px-4 py-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-green-500 text-center">ABOUT US</h1>

        {/* Team Members - Now in a single row with smaller images */}
        <div className="flex flex-wrap justify-center gap-6 mb-8 lg:pl-[350px]">
          {teamMembers.map((member) => (
            <div key={member.id} className="flex flex-col items-center">
              <div className="relative h-36 w-36 overflow-hidden rounded-md mb-2">
                <Image src={member.image || "/placeholder.svg"} alt={member.role} fill className="object-cover" />
              </div>
              <h2 className="text-xs font-bold text-yellow-400 text-center">{member.role}</h2>
            </div>
          ))}
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column - Company Info and Story (30%) */}
          <div className="lg:w-[30%] space-y-4">
            <div>
              <h2 className="text-lg font-bold text-green-500 mb-2">:: Calevala Interactive Ltd.</h2>
              <div className="space-y-1">
                <p className="text-xs text-white">
                  <span className="font-bold text-yellow-400">Est: </span>2009
                </p>
                <p className="text-xs text-white">
                  <span className="font-bold text-yellow-400">Y-tunnus: </span>2256157-0
                </p>
                <p className="text-xs text-white">
                  <span className="font-bold text-yellow-400">Locations: </span>Espoo & Turku, Finland
                </p>
                <p className="text-xs text-white">
                  <span className="font-bold text-yellow-400">Contact: </span>maarit@calevala.com
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold text-green-500 mb-2">:: Story</h3>
              <div className="space-y-2">
                <p className="text-xs text-white">
                  The company was founded by two software enthusiasts who developed an SMS-based quiz game for a
                  nighttime-oriented broadcasting company. The game was played during the evening and nighttime on teletext.
                  Since the work required invoicing, establishing a company became necessary.
                </p>
                <p className="text-xs text-white">
                  Over the years, Calevala Interactive has invested in various portfolio companies, some of which have been
                  successfully acquired.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Job Opportunities and Other Sections (70%) */}
          <div className="lg:w-[70%] space-y-6">
            <div>
              <h2 className="text-xl font-bold text-green-500 mb-4">:: Job opportunities</h2>
              <div className="space-y-4">
                <p className="text-sm text-white">
                  First and foremost, we collaborate with several universities of applied sciences in Finland, offering
                  training, thesis work opportunities, and job training placements. Additionally, we have some entry-level
                  job opportunities across Finland for athletes, as most of our work is location- and time-independent—it
                  can be done from anywhere.
                </p>
                <p className="text-sm text-white">
                  Our team communicates primarily via Slack, with weekly meetings, making our way of working fully
                  "cloud-based", where the entire work environment is digital.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-green-500 mb-4">:: Our Tech Stack & Work Culture</h3>
              <div className="space-y-4">
                <p className="text-sm text-white">
                  We develop software using both SQL- and NoSQL-based tools, coding in Golang, Python, Node.js, Next.js,
                  Angular, and React, following modern software development practices. We utilize Visual Studio as our
                  primary development environment, host our projects on Amazon AWS, and use Git for version control. Our
                  CI/CD pipeline is fully automated, and we conduct UAT (User Acceptance Testing) and QA (Quality Assurance)
                  testing to ensure reliability.
                </p>
                <p className="text-sm text-white">
                  We integrate AI-driven tools and platforms, including LLMs (Large Language Models) and object detection
                  platforms. We work with annotations and use Jira for sprint management, frequently holding Google Meet and
                  Slack Huddles for discussions.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-green-500 mb-4">:: Our Work Philosophy</h3>
              <div className="space-y-4">
                <p className="text-sm text-white">
                  Our corporate language is English, and we foster a blameless postmortem culture, ensuring that failures
                  lead to learning rather than blame. We also embrace a "fail fast" mindset, encouraging rapid iteration and
                  continuous improvement.
                </p>
                <p className="text-sm text-white">
                  If you're passionate about cutting-edge technology, remote-first collaboration, and a growth-oriented work
                  culture, we'd love to hear from you! 🚀
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

