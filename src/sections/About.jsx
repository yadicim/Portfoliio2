import { Code2Icon, LightbulbIcon, PuzzleIcon, UsersIcon } from "lucide-react";
import { useContext } from "react";
import { ThemeContext } from "@/Context"; 
import { useTranslation } from 'react-i18next';

export const About = () => {
    const { t } = useTranslation();
    const theme = useContext(ThemeContext);
    
    const isLight = !theme.state.lightMode;

    
    const highlights = [
        {
            icon: Code2Icon,
            title: "about.highlights.title_1",
            description: "about.highlights.desc_1"
        },
        {
            icon: LightbulbIcon,
            title: "about.highlights.title_2",
            description: "about.highlights.desc_2"
        },
        {
            icon: PuzzleIcon,
            title: "about.highlights.title_3",
            description: "about.highlights.desc_3"
        },
        {
            icon: UsersIcon,
            title: "about.highlights.title_4",
            description: "about.highlights.desc_4"
        },
    ];

    return (
        <section id="about" className="py-32 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    
                    {/* LEFT COLUMN -  */}
                    <div className="space-y-8">
                        <div className="animate-fade-in">
                            <span className="text-(--color-primary) text-sm font-medium tracking-wider uppercase">
                                {t('about.badge')}
                            </span>
                        </div>
                        
                        <h2 className="font-serif text-xl italic font-bold leading-tight animate-fade-in animation-delay-100 text-white">
                            {t('about.title_main')}{" "} 
                            <span className="not-italic text-4xl font-matrix text-(--color-opposite)">
                                {t('about.title_highlight')}
                            </span>
                        </h2>

                        <div className="space-y-4 text-(--color-muted-foreground) animate-fade-in animation-delay-200">
                            <p>{t('about.p1')}</p>
                            <p>{t('about.p2')}</p>
                            <p>{t('about.p3')}</p>
                        </div>

                        <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
                            <p className="text-lg font-medium italic text-(--color-foreground)">
                                {t('about.quote')}
                            </p>
                        </div>
                    </div>

                    {/* RIGHT COLUMN - (Highlights) */}
                    <div className="grid sm:grid-cols-2 gap-6 lg:pt-28">
                        {highlights.map((item, idx) => (
                            <div 
                                key={idx} 
                                className="glass p-6 rounded-2xl animate-fade-in"
                                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
                            >
                                <div className="w-12 h-12 rounded-xl bg-(--color-primary)/10 flex items-center justify-center mb-4 hover:bg-(--color-primary)/20"> 
                                    <item.icon className="w-6 h-6 text-(--color-primary)" />
                                </div>
                                
                                
                                <h3 className="text-lg font-semibold mb-2">
                                    {t(item.title)}
                                </h3>
                                <p className={`text-sm ${isLight ? "text-black" : "text-(--color-muted-foreground)"}`}>
                                    {t(item.description)}
                                </p>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};