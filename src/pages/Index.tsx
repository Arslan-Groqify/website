import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import ProductDemo from "@/components/home/ProductDemo";
import Waitlist from "@/components/home/Waitlist";
import { TooltipProvider } from "@/components/ui/tooltip";

const Index = () => {
  return (
    <TooltipProvider>
      <Navbar />
      <main>
        <div id="hero">
          <Hero />
        </div>

        <div className="flex justify-center my-12">
            <button className="bg-[#508CA4] text-white px-8 py-3 rounded-2xl text-xl font-semibold shadow-md hover:bg-[#3c7087] hover:scale-105 transition-all duration-300">
              🎮 Try Our Game
            </button>
        </div>

        <ProductDemo />
        <Waitlist />
      </main>
      <Footer />
    </TooltipProvider>
  );
};

export default Index;
