import { useContext } from "react";
import { Navbar } from "@/layout/Navbar";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Projects } from "@/sections/Projects";
import { Experience } from "@/sections/Experience";
import { Contact } from "@/sections/Contact";
import { Footer } from "@/layout/Footer";
import  Toggle  from "@/components/Toggle"; 
import { ThemeContext } from "@/Context";
import { useTranslation } from "react-i18next";

function App() { 
  const {t, i18n}= useTranslation()

  const theme = useContext(ThemeContext);
  
  
  const lightMode = !theme.state.lightMode; 

  return (



    <div
    
      style={{
       
        backgroundColor: lightMode ?   "#f3d2cf" : "#0f1418",
        color: lightMode ?  "white" : "white" ,
        
      }}
      className="min-h-screen overflow-x-hidden"

    >
      
      <Navbar />
      <main>
        <Toggle />
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;