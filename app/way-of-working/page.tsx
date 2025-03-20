import Image from "next/image"
import Navbar from "@/components/navbar"
import Image7 from "@/public/7.jpg"
import Image8 from "@/public/8.jpg"
import Image9 from "@/public/9.jpg"
import Image10 from "@/public/10.jpg"

export default function WayOfWorking() {
  const ventureStages = [
    {
      id: 1,
      stage: "V -1 :: IDEATE",
      description:
        "Generate ideas by reimagining existing concepts with a fresh perspective. The solution must break away from stagnant markets, be a fully digital service, and incorporate an AI-driven advantage.",
      type: "Brainstorming",
      timeframe: "1-4 weeks",
      image: Image7,
    },
    {
      id: 2,
      stage: "V 0 :: EVALUATE",
      description:
        "Develop a business model canvas, outline an MVP or PoC, and reach out to potential customers for validation. Explore small-scale launches with the potential for expansion. Assess whether the idea could evolve into a niche platform or even a broader ecosystem.",
      type: "Planning",
      timeframe: "1-2 months",
      image: Image8,
    },
    {
      id: 3,
      stage: "V 1 :: BUILD",
      description:
        "Begin software development from the ground up. Collaborate on Slack, define requirements in Jira, and design interfaces with Figma. Conduct penetration tests, QA, and engage with a global network of expert freelancers.",
      type: "Development",
      timeframe: "1-18 months",
      image: Image9,
    },
    {
      id: 4,
      stage: "V 2 :: SELL",
      description:
        "Launch and test the service—does it take off? If so, how can it scale further and faster? If not, identify necessary improvements. Decide whether to establish a standalone company around the innovation or integrate it into the KOLMIO or KUUTIO portfolio.",
      type: "Go-To-Market",
      timeframe: "1-4 weeks",
      image: Image10,
    },
  ]

  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <div className="container mx-auto">
        {/* Title row */}
        <div className="grid grid-cols-12 mb-8">
          <div className="col-span-2 md:col-span-2 lg:col-span-2">
          </div>
          <div className="col-span-10">
            <h1 className="text-2xl font-bold text-[#00ff00] pl-4">CALEVALA VENTURING PROCESS</h1>
          </div>
        </div>

        {/* Content grid */}
        <div className="grid grid-cols-12 gap-4">
          {/* Left padding column */}
          <div className="col-span-2 md:col-span-2 lg:col-span-2"></div>

          {/* Main content column */}
          <div className="col-span-8 md:col-span-8 lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {ventureStages.map((stage) => (
                <div key={stage.id} className="mb-4">
                  <div className="mb-2 relative h-64 w-full overflow-hidden bg-black rounded-lg">
                    <Image
                      src={stage.image}
                      alt={stage.stage}
                      fill
                      className="object-cover brightness-[1.2] hue-rotate-[120deg] filter saturate-[1.2]"
                    />
                  </div>
                  <h2 className="text-base font-bold text-[#00ff00] mb-1">{stage.stage}</h2>
                  <div className="mb-1 text-sm">
                    <span className="font-bold text-yellow-400">Description:</span>{" "}
                    <span className="text-white">{stage.description}</span>
                  </div>
                  <div className="mb-1 text-sm">
                    <span className="font-bold text-yellow-400">Type:</span>{" "}
                    <span className="text-white">{stage.type}</span>
                  </div>
                  <div className="text-sm">
                    <span className="font-bold text-yellow-400">Timeframe:</span>{" "}
                    <span className="text-white">{stage.timeframe}</span>
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

