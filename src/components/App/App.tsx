import { Navbar } from "../Navbar/Navbar";
import { Hero } from "../Hero/Hero";
import { Skills } from "../Skills/Skills";
import { Projects } from "../Projects/Projects";
import { Contact } from "../Contact/Contact";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </>
  );
}

export default App;
