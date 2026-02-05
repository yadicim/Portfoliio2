import { Button } from "@/components/Button";
import { ArrowRight, ChevronDown, Download, Github, Linkedin , } from "lucide-react";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";
import { useContext } from "react";
import { ThemeContext } from "@/Context"; 
import { text } from "@fortawesome/fontawesome-svg-core";
import { useTranslation } from 'react-i18next';
const skills =[
    "React",
    "Python",
    "JavaScript/ Bootstrap /JQuery",
    "C#",
    "C",
    "SQL",
    "PHP",
    "HTML",
    "CSS/Tailwindcss",
    "SVG"
];
export const Hero = ()=>{
    const theme = useContext(ThemeContext);
    const isLight = !theme.state.lightMode;
    const { t } = useTranslation();

    return ( <section className="relative min-h-screen flex items-center overflow-hidden">
        {/*Background*/}
        <div className={` absolute inset-0 ${isLight ? "hidden" : "block" }`}>
            <img 
            src="projects/hero-bg4.webp" 
            alt="Hero image" 
            className="w-full h-full object-cover opacity-40"
            fetchPriority="high" 
            loading="eager"
            width="1920"
            height="1080"
            />

            <div className=" absolute inset-0  bg-linear-to-b from-background/20 via-background/80 to-background"></div>
        </div>
    {/*Matrix-Fall*/}
  {Array.from({ length: 20 }).map((_, i) => {
  const side = Math.random() > 0.5 ? "left" : "right";
  
  // Define how far from the edge the columns start and how wide the area is
  const margin = 0; 
  const spread = 6; // Columns will appear within a 6% wide zone
  
  const xOffset = Math.random() * spread;

  return (
    <div
      key={i}
      className={`font-mono text-xs opacity-70 leading-tight absolute ${isLight ? "hidden" : "md:block hidden"}`}
      style={{
        color: "#6BFFB3",
        willChange: "transform, top",
        // Logic: 
        // Left side: margin + offset (moves right)
        // Right side: (100 - margin) - offset (moves left)
        left: side === "left" 
          ? `${margin + xOffset}%` 
          : `${(100 - margin) - xOffset}%`,

        top: "0%",
        // Transform to ensure the element's own width doesn't shift the symmetry
        transform: side === "right" ? "translateX(-100%)" : "none",

        animation: `matrix-fall ${8 + Math.random() * 12}s linear infinite`,
        animationDelay: `${Math.random() * 5}s`,
      }}
    >
      {Array.from({ length: 25 }).map((_, j) => (
        <div key={j}>{Math.round(Math.random())}</div>
      ))}
    </div>
  );
})}

    {/*Content*/}
    <div className="container mx-auto px-6 pt-20 lg:pt-32 pb-20 relative z-10 ">
        <div className=" grid lg:grid-cols-2 gap-12 items-center " >
            {/*Left-Column Text */}
            <div className=" space-y-8">
                <div className=" ml-0 md:ml-12 animate-fade-in animate-delay-100">
                    <span className=" inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-(--color-primary) ">
                        <span className=" w-2 h-2 bg-(--color-primary) rounded-full animate-pulse " /> {t('hero.title_1')} <span className= {` rotate-30 ${isLight ? "text-black" : "text-(--color-muted-foreground)" }`}> {t('hero.title_1_1')} </span> 
                    </span>
                </div>
                {/*HEADLINE*/}
                <div className="ml-0 md:ml-12 space-y-4">
                    <h1 className="text-3xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animate-delay-300"> {t('hero.title_2')} <span className="text-(--color-opposite) glow-text"> {t('hero.title_2_2')} </span>
                        <br/>
                        {t('hero.title_3')} 
                        <br/>
                        <span className=" text-(--color-primary) font-serif italic font-normal"> {t('hero.title_4')}  </span>  
                    </h1>

                    <p className={`text-lg  max-w-lg animate-fade-in animate-delay-600 ${isLight ? "text-black" : "text-(--color-muted-foreground)" }`} >
                        {t('hero.description')}
                    </p>
                </div>
                {/*ACTION*/}
                <div className=" ml-0 md:ml-12 flex flex-wrap gap-4 animate-fade-in animation-delay-300 ">
                    < a href="#contact" >
                    <Button className=" text-black" > {t('hero.contact_me')} <ArrowRight className="w-5  h-5  text-black" />

                    </Button>
                    </a>

                    
                    <a
                    href="/cv/Yadigar_Arslan_en_cv.pdf"
                    download
                    className="inline-block "
                    >
                        <AnimatedBorderButton>
                        < Download className=" w-5 h-5 " />
                            {t('hero.download_cv')}
                    </AnimatedBorderButton>
                    </a>
                </div>

                {/*SOCIAL LINKS */}
                <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
                    <span className="ml-0 md:ml-12 text-sm  text-(--color-muted-foreground)  ">{t('hero.follow_me')} </span>
                    {[
                        { icon: Github, href: "https://github.com/yadicim"},
                        { icon: Linkedin, href: "https://www.linkedin.com/in/yadigara/"},
                        
                    ].map ((social, idx) => (
                        <a key={idx} href={social.href}
                        className="p-2 rounded-full glass hover:bg-(--color-primary)/10 hover:text-(--color-opposite) transition-all duration-300">
                            {<social.icon  />}
                            
                        </a>
                    ))}
                    
                </div>
            </div>

            {/*Right-Column Image */}
            <div className="relative animate-fade-in animation-delay-300">
                {/*PROFILE IMAGE*/}
                <div className=" relative max-w-md mx-auto">
                    <div
                    className=" absolute inset-0 bg-linear-to-br from-(--color-primary)/30 via-transparent to-(--color-opposite)/20 blur-2xl animate-pulse"></div>
                    <div className=" relative glass rounded-3xl p-2 glow-border">
                        <img src="projects/profil-photo-3.webp" alt="Yadigar Arslan" 
                        fetchPriority="high"
                        loading="eager"
                        width="570"
                        height="854"
                        className="w-full  object-cover rounded-2xl" />
                    </div>

                    {/*FLOATING BADGE*/}
                    <div className={` absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float  ${isLight ? "text-white" : "text-white" } `}>
                        <div className="flex items-center gap-3">
                            <div className="w-3 h-3 bg-(--color-primary) rounded-full animate-pulse" ></div>
                            <span className=" text-sm font-medium ">
                                    {t('hero.available')}

                            </span>
                            
                        </div>
                    </div>
                        {/*STATS BADGE */}
                        <div className="hidden md:block absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500 ">
                            <div>
                                <div className="text-md text-(--color-opposite)  ">{t('hero.law')} </div>
                                <div className=" text-2xl font-bold text-(--color-primary)">  {t('hero.software')}</div>

                            </div>

                        </div>
                    

                </div>

            </div>

        </div>
        {/*SKILLS*/}

        <div className="mt-20 animate-fade-in animation-delay-500">
            <p className=" text-sm text-(--color-muted-foreground) mb-6 text-center"> Tech Stack </p>

        </div>
        <div className=" relative overflow-hidden">
            <div className="flex animate-marquee">
                {[...skills,...skills]. map ((skill,idx)=> (
                    <div key={idx} className="shrink-0 px-8 py-4">
                        <span className=" text-xl font-semibold text-(--color-muted-foreground)/50 hover:text-(--color-muted-foreground) transition-colors">{skill}</span> 
                        </div>
                ))} 
           </div>
        </div>
    </div>

    <div className=" absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in animation-delay-600">
                <a
                href="#About"
                className="flex flex-col items-center gap-2 text-(--color-muted-foreground) hover:text-(--color-primary) transition-colors group">
                    <span className="text-xs uppercase tracking-wider">Scroll</span>
                    <ChevronDown className="w-6 h-6 animate-bounce"/>

                </a>

    </div>
    


    </section>
    );
};