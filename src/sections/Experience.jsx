import { useContext } from "react";
import { ThemeContext } from "@/Context"; 
import { useTranslation } from 'react-i18next';



    export const Experience = () => {
        const { t } = useTranslation();
        const theme = useContext(ThemeContext);
        const isLight = !theme.state.lightMode;


        const experiences = [

    {
        period: "exp.period_1",
        role: "exp.role_1",
        company: "exp.company_1",
        description: "exp.desc_1",
       
       
    },

    {
        period: "exp.period_2",
        role: "exp.role_2",
        company: "exp.company_2",
        description:"exp.desc_2",
           
        
    },


    {
        period: "exp.period_3",
        role: "exp.role_3",
        company: "exp.company_3",
        description: "exp.desc_3",
            
    },

    {
        period: "exp.period_4",
        role: "exp.role_4",
        company: "exp.company_4",
        description: "exp.desc_4",
            
      
    },
    {
        period: "exp.period_5",
        role: "exp.role_5",
        company: "exp.company_5",
        description:"exp.desc_5",
           
        
    },

    {
        period: "exp.period_6",
        role: "exp.role_6",
        company: "exp.company_6",
        description: "exp.desc_6",
            
    },
    {
        period: "exp.period_7",
        role:"exp.role_7",
        company: "exp.company_7",
        description:"exp.desc_7",
           
       
    },
    
    ];
         return (
             <section
             id="experience"
             className="py-32 relative overflow-hidden">
                <div className=" absolute top-1/2 left-1/4 w-96 h-96 
                  bg-(--color-primary)/5 rounded-full blur-3xl -translate-y-1/2">
                    
                </div>

                <div className=" container mx-auto px-6 relative z-10">
                    {/*SECTION HEADER*/}
                    <div className=" max-w-3xl mb-16">
                        <span className="text-(--color-primary) text-sm font-medium tracking-wider uppercase animate-fade-in "> {t('exp.header_1')} </span>
                        <h2 className=" text-(--color-opposite) text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100">
                             {t('exp.header_2')}<span className="font-serif italic font-normal text-white"> {t('exp.header_3')} </span>
                        </h2>
                        <p className="text-(--color-muted-foreground) animate-fade-in animation-delay-200">
                             {t('exp.header_p')}
                        </p>

                    </div>

                    {/*TIMELINE*/}
                    <div className=" relative">
                        <div className=" timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-(--color-primary)/70 via-(--color-primary)/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(76,255,154,0.8)]"/>
                        
                        {/*EXPERIENCE ITEMS*/}
                        <div className=" space-y-12">
                            {experiences.map((exp, idx) =>(
                                <div key={idx} className=" relative grid md:grid-cols-2 gap-8 animate-fade-in"
                                style={{ animationDelay: `${(idx +1)*150}ms`}}
                                >

                                    {/*TIMELINE DOT */}
                                    <div className=" absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-(--color-primary) rounded-full -translate-x-1/2 ring-4 ring-(--color-opposite) z-10 ">

                                    </div>

                                    {/*CONTENT*/} 
                                    <div className={`pl-8 md:pl-0 ${idx % 2 === 0 
                                        ? "md:pr-16 md:text-right"
                                        : " md:col-start-2 md:pl-16"
                                        }`}>
                                        <div className={` glass p-6 rounded-2xl border border-(--color-opposite)/40 hover:border-(--color-opposite)/80 transition-all duration-500`}>
                                            <span className=" text-sm text-(--color-primary) font-medium"> {t(exp.period)} </span>
                                            <h3 className=" text-xl font-bold mt-2">{t(exp.role)} </h3>
                                            <p className={` ${isLight ? "text-white" : "text-(--color-muted-foreground)" }`}>{t(exp.company)} </p>
                                            <p className={` text-sm ${isLight ? "text-black" : "text-(--color-muted-foreground)" }`}>{t(exp.description)} </p>

                                        </div>

                                    </div>


                                </div>
                            ))}

                        </div>

                        

                    </div>


                </div>

             </section> 
        );

    };


   
