import { Navbar } from "../Navbar/Navbar";
import { Hero } from "../Hero/Hero";
import { Skills } from "../Skills/Skills";
import { Projects } from "../Projects/Projects";
import { Footer } from "../Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Footer />
      </main>
    </>
  );
}

export default App;
