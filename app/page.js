import MainScreen from "../components/MainScreen/MainScreen";
import About from "@/components/About/About";
import Roadmap from "@/components/Roadmap/Roadmap";

export default function Home() {
  return (
    <main>
      <MainScreen />
      <About />
      <Roadmap />

      <div style={{ height: "300vh" }} />
    </main>
  );
}
