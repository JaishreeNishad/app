import Navbar from "./Navbar";
import Home from "./Home";
import Brands from "./Brands";
import Project from "./Project";

export default function App() {
  return (
    <main className="bg-[#F2F1F1]">
      <div className="w-full "></div>

      <Navbar />
      <Home />
      <Brands />
      <Project />
    </main>
  );
}
