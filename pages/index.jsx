import DownloadProfilePicture from "@/components/DownloadProfilePicture";
import Hero from "@/components/Hero";
import HowToPay from "@/components/HowToPay/HowToPay";
import LearnMore from "@/components/LearnMore/LearnMore";
import OurTeam from "@/components/OurTeam/OurTeam";
import RoadMap from "@/components/RoadMap/RoadMap";
import Tax from "@/components/Tax/Tax";
import TradingChart from "@/components/TradingChart";

export default function Home() {
  return (
    <div className="w-full h-full">
      <Hero />
      <LearnMore />
      <HowToPay />
      <RoadMap />
      <DownloadProfilePicture />
      <Tax />
      <TradingChart />
      <OurTeam />
    </div>
  );
}
