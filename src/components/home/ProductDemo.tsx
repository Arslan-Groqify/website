import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Play, Smartphone, Monitor, ExternalLink } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const ProductDemo = () => {
  const [activeTab, setActiveTab] = useState("mobile");

  return (
    <section
      id="products"
      className="section-padding bg-groq-dark-blue relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(155,135,245,0.15),transparent_70%)]"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,rgba(79,209,197,0.1),transparent_70%)]"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            Experience the{" "}
            <span className="text-[#508CA4]">Future of Learning</span>
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Our interactive demos showcase how Groqify transforms traditional
            learning into engaging, effective gameplay.
          </p>
        </div>

        <Tabs
          defaultValue="mobile"
          value={activeTab}
          onValueChange={setActiveTab}
          className="w-full"
        >
          {/* <div className="flex justify-center mb-8">
            <TabsList className="bg-white/10 border border-white/20">
              <TabsTrigger
                value="mobile"
                className="data-[state=active]:bg-[#508CA4] data-[state=active]:text-white"
              >
                <Smartphone size={16} className="mr-2" />
                Mobile Games
              </TabsTrigger>
              <TabsTrigger
                value="desktop"
                className="data-[state=active]:bg-[#508CA4] data-[state=active]:text-white"
              >
                <Monitor size={16} className="mr-2" />
                Desktop Experiences
              </TabsTrigger>
            </TabsList>
          </div> */}

          {/* <TabsContent value="mobile" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {mobileDemos.map((demo, index) => (
                <ProductCard key={index} demo={demo} />
              ))}
            </div>
          </TabsContent> */}

          {/* <TabsContent value="desktop" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {desktopDemos.map((demo, index) => (
                <ProductCard key={index} demo={demo} />
              ))}
            </div>
          </TabsContent> */}
        </Tabs>

        {/* <div className="mt-16 text-center">
          <Button variant="outline" className="text-white border-white/30 hover:bg-white/10">
            View Full Product Catalog <ExternalLink size={16} className="ml-2" />
          </Button>
        </div> */}
      </div>
    </section>
  );
};

interface Demo {
  title: string;
  description: string;
  image: string;
  videoUrl?: string;
  features: string[];
}

const ProductCard = ({ demo }: { demo: Demo }) => {
  return (
    <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden transition-all hover:transform hover:scale-105">
      <div className="relative">
        <img
          src={demo.image}
          alt={demo.title}
          className="w-full h-48 object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
          <h3 className="text-xl font-display font-bold text-white">
            {demo.title}
          </h3>
        </div>

        {demo.videoUrl && (
          <Dialog>
            <DialogTrigger asChild>
              <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-groq-purple/80 hover:bg-groq-purple transition-colors flex items-center justify-center">
                <Play size={24} className="text-white" />
              </button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl">
              <DialogHeader>
                <DialogTitle>{demo.title} - Demo</DialogTitle>
                <DialogDescription>
                  Experience our interactive learning solution
                </DialogDescription>
              </DialogHeader>
              <div className="aspect-video bg-black rounded-md flex items-center justify-center">
                <p className="text-white/70 text-sm">
                  Video demo would play here
                </p>
              </div>
            </DialogContent>
          </Dialog>
        )}
      </div>

      <div className="p-4">
        <p className="text-gray-300 text-sm mb-4">{demo.description}</p>
        <ul className="space-y-2">
          {demo.features.map((feature, index) => (
            <li key={index} className="flex items-center text-xs text-gray-400">
              <span className="w-1.5 h-1.5 bg-groq-purple rounded-full mr-2"></span>
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const mobileDemos: Demo[] = [
  {
    title: "LinguaQuest",
    description:
      "Language learning reimagined as an epic adventure game with AI-driven conversation practice.",
    image:
      "https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80",
    videoUrl: "#demo-video",
    features: [
      "Real-time pronunciation feedback",
      "Vocabulary building through gameplay",
      "Cultural immersion scenarios",
      "Progress tracking dashboard",
    ],
  },
  {
    title: "CyberDefender",
    description:
      "Cybersecurity training delivered through an engaging tower defense gameplay experience.",
    image:
      "https://images.unsplash.com/photo-1548092372-0d1bd40894a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    videoUrl: "#demo-video",
    features: [
      "Real-world attack simulations",
      "Security protocol training",
      "Team collaboration modes",
      "Threat recognition practice",
    ],
  },
  {
    title: "DataMaster",
    description:
      "Data analysis skills developed through puzzle-based gameplay and interactive challenges.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    features: [
      "Interactive data visualization",
      "Statistical analysis practice",
      "Decision-making scenarios",
      "Pattern recognition training",
    ],
  },
];

const desktopDemos: Demo[] = [
  {
    title: "ProjectSim",
    description:
      "Project management training through immersive simulation with real-world scenarios.",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    videoUrl: "#demo-video",
    features: [
      "Resource allocation challenges",
      "Team management simulations",
      "Risk assessment scenarios",
      "Agile methodology practice",
    ],
  },
  {
    title: "SalesForce VR",
    description:
      "Sales training in virtual reality environments with AI-powered customer interactions.",
    image:
      "https://images.unsplash.com/photo-1617802690992-15d93263d3a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    features: [
      "Virtual customer interactions",
      "Sales pitch practice",
      "Objection handling scenarios",
      "Performance analytics",
    ],
  },
  {
    title: "LeadershipQuest",
    description:
      "Leadership and management skills developed through strategic role-playing scenarios.",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    videoUrl: "#demo-video",
    features: [
      "Team building challenges",
      "Decision-making scenarios",
      "Conflict resolution training",
      "Performance evaluation practice",
    ],
  },
];

export default ProductDemo;
