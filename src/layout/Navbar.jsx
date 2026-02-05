import { Button } from "@/components/Button";
import {Menu , X} from "lucide-react"; 
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'; 
import { useContext } from "react";
import { ThemeContext } from "@/Context"; 
import { useTranslation } from "react-i18next";
import Backend from 'i18next-http-backend'









export const Navbar = ()=>{
    
    const {t, i18n}= useTranslation();
    const navLinks=[
    {href: "#about", label: t('navbar.about') },
    {href: "#projects", label: t('navbar.projects')},
    {href: "#experience", label: t('navbar.experience')},
    

];

const changeLanguage = (lang) => {
        i18n.changeLanguage(lang)
            .then(() => {
                console.log("Dil başarıyla değiştirildi:", lang);
            })
            .catch((err) => console.error("Dil değiştirme hatası:", err));
    };
    const clickHandle = lang => {
        i18n.changeLanguage(lang)
    }
    const [search, setSearch] = useState("");

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const theme = useContext(ThemeContext);
    const isLight = !theme.state.lightMode;
    const languages = [
  { code: 'en', label: 'En', flag: 'https://flagcdn.com/w40/gb.png' },
  { code: 'fi', label: 'Fi', flag: 'https://flagcdn.com/w40/fi.png' },
  { code: 'tr', label: 'Tr', flag: 'https://flagcdn.com/w40/tr.png' },
];

    useEffect(()=> {
        const handleScroll = () => {
            setIsScrolled(window.scrollY >50)
        };
        window.addEventListener("scroll", handleScroll);

        return () => window.addEventListener("scroll", handleScroll);

    },[]);

    return (


    <header className={`fixed top-0 left-0 right-0 transition-all duration-500 ${
    isScrolled ? "glass-strong py-3" : " bg-transparent py-5 "  } z-50 `}>
        <nav className="container mx-auto px-6 flex items-center justify-between">

            {/* LOGO*/}
            <a href="#" className="ml-10 text-xl font-bold tracking-tight hover:text-(--color-primary)">
                Yadigar Arslan <span className="text-primary"></span>
            </a>

            {/* Language Options*/}
            <div className=" hidden md:flex glass rounded-full px-2 py-1  items-center gap-2 ml-8 ">
                {languages.map((lang) => (
                    <button
                        key={lang.code}
                        onClick={() => clickHandle(lang.code)}
                        className={`px-4 py-2 text-sm flex items-center gap-2 rounded-full transition-all cursor-pointer duration-300
                            ${i18n.language === lang.code 
                                ? "bg-(--color-surface) text-(--color-foreground) shadow-sm" 
                                : `hover:bg-(--color-surface)/50 ${isLight ? "text-black" : "text-(--color-muted-foreground)"}`
                            }`}
                    >
                        <img 
                            src={lang.flag} 
                            alt={lang.code} 
                            className="w-4 h-4 rounded-full object-cover" 
                        />
                        <span className="font-medium">{lang.label}</span>
                    </button>
                ))}
            </div>


            {/* NAVIGATION LINKS */}
            <div className="hidden md:flex justify-center gap-5 ml-8">
                <div className="glass rounded-full px-2 py-1 flex items-center gap-10">
                    {navLinks.map((link, index) => (
                        <a href={link.href} 
                        key={index}
                        className={`px-4 py-2 text-sm hover:text-(--color-foreground) rounded-full hover:bg-(--color-surface) ${isLight ? "text-black" : "text-(--color-muted-foreground)" }`}
                        >{link.label}</a>
                    ))}

                </div>

            </div>


        {/* BUTTONS */}

        <div  className=" flex items-center space-x-8">

            {/*SEARCH AREA */}

            <div>
                <form
                    onSubmit={(e) => {
                    e.preventDefault();
                    window.find(search);
                }}>
                    <div className=" hidden md:flex group border-r px-4 mx-4 py-1 border-(--color-primary) ">
                        <input type="text" 
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder= {t('navbar.search')}
                        className=" opacity-0 group-hover:opacity-100 bg-transparent border-b border-(--color-primary) focus:outline-none w-10 lg:w-20 transition duration-500 " />
                        <button type="submit" 
                        aria-label="search-button"
                        
                        className="group -ml-4 transition duration-500">
                <FontAwesomeIcon 
                className="group-hover:text-(--color-opposite) transation duration-500" 
                icon={faMagnifyingGlass} 
                />
                 </button>
                    </div>
                </form>
            </div>

            <div className="mr-8 hidden md:block">
        <Button 
        size="sm" 
        className="bg-linear-to-r from-[#4CFF9A] to-[#ff0088] text-black font-bold hover:opacity-90 transition-opacity border-none"
        aria-label="contact-button"
        onClick={()=>{
            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth'});
        }}
        >
        {t('navbar.contact_me')}
        </Button>
        </div>

        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2 text-(--color-foreground) cursor-pointer"
        aria-label="Toggle-Menu"
         onClick={()=> setIsMobileMenuOpen((prev)=>!prev)}>
           {isMobileMenuOpen ? < X size={24} />  : <Menu  size={24} /> }

        </button>


        

        </nav>

        {/*Mobile Menu */}
        {isMobileMenuOpen && (
            <div className="md:hidden glass-strong animate-fade-in">
            <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
                 {navLinks.map((link, index) => (
                        <a href={link.href} 
                        key={index}
                        onClick={()=>setIsMobileMenuOpen(false)}
                        className=" text-lg px-4 py-2 text-(--color-muted-foreground) hover:text-(--color-foreground) rounded-full hover:bg-(--color-surface)"
                        >{link.label}
                        </a>
                    ))}

                    {/* Mobile Language Options */}
                    <div className="flex flex-wrap justify-center gap-2 mt-2 px-2">
                        {languages.map((lang) => (
                            <button
                                key={lang.code}
                                onClick={() => {
                                    clickHandle(lang.code);
                                    setIsMobileMenuOpen(false); 
                                }}
                                className={`flex-1 min-w-25 py-3 text-sm flex items-center justify-center gap-3 rounded-full transition-all cursor-pointer border border-white/5
                                    ${i18n.language === lang.code 
                                        ? "bg-(--color-surface) text-(--color-foreground) shadow-md" 
                                        : `glass text-(--color-muted-foreground)`
                                    }`}
                            >
                                <img 
                                    src={lang.flag} 
                                    alt={lang.code} 
                                    className="w-5 h-5 rounded-full object-cover" 
                                />
                                <span className="font-bold uppercase">{lang.code}</span>
                            </button>
                        ))}
                    </div>

                    <Button className="bg-linear-to-r from-[#4CFF9A] to-[#ff0088] text-black font-bold hover:opacity-90 transition-opacity border-none"
                      aria-label="mobile-contact-button"
                      onClick={() => {
  
                        setIsMobileMenuOpen(false);
    
   
                        setTimeout(() => {
                        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                        }, 100);
                    }}  
                        > {t('navbar.contact_me')}</Button>

            </div>

        </div>
        )}
    </header>
    );
};