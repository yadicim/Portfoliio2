import { Button } from "@/components/Button";
import { useEffect, useState, useContext } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { ThemeContext } from "@/Context";
import { useTranslation } from "react-i18next";

export const Navbar = () => {
    const { t, i18n } = useTranslation();

    const navLinks = [
        { href: "#about", label: t('navbar.about') },
        { href: "#projects", label: t('navbar.projects') },
        { href: "#experience", label: t('navbar.experience') },
    ];

    const [search, setSearch] = useState("");
    const [isScrolled, setIsScrolled] = useState(false);

    const theme = useContext(ThemeContext);
    // Not: Context yapına göre theme.state.lightMode veya theme.lightMode olabilir, kontrol et.
    const isLight = theme?.state?.lightMode; 

    const languages = [
        { code: 'en', label: 'En', flag: 'https://flagcdn.com/w40/gb.png' },
        { code: 'fi', label: 'Fi', flag: 'https://flagcdn.com/w40/fi.png' },
        { code: 'tr', label: 'Tr', flag: 'https://flagcdn.com/w40/tr.png' },
    ];

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang).catch(err => console.error("Dil değiştirme hatası:", err));
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        // HATA DÜZELTİLDİ: return içinde addEventListener değil, removeEventListener olmalı.
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            isScrolled ? "glass-strong py-2 shadow-lg" : "bg-transparent py-4"
        }`}>
            <nav className="container mx-auto px-4 md:px-6 flex items-center justify-between gap-4">

                {/* LOGO */}
                <a href="#" className="text-lg md:text-xl font-bold tracking-tighter whitespace-nowrap">
                    Yadigar Arslan
                </a>

                {/* NAV LINKS (Desktop) */}
                <div className="hidden md:flex items-center gap-2 lg:gap-6 bg-white/5 rounded-full px-4 py-1">
                    {navLinks.map((link, i) => (
                        <a
                            key={i}
                            href={link.href}
                            className={`px-3 py-2 rounded-full text-sm transition-colors hover:text-primary
                            ${isLight ? "text-slate-900" : "text-slate-300"}`}
                        >
                            {link.label}
                        </a>
                    ))}
                </div>

                {/* RIGHT SIDE (Actions) */}
                <div className="flex items-center gap-2 md:gap-4">
                    
                    {/* LANGUAGE SELECTOR */}
                    <div className="flex bg-white/10 rounded-full p-1">
                        {languages.map((lang) => (
                            <button
                                key={lang.code}
                                onClick={() => changeLanguage(lang.code)}
                                className={`p-1.5 md:px-3 md:py-1 rounded-full text-xs transition-all flex items-center gap-2
                                ${i18n.language === lang.code
                                    ? "bg-white shadow-sm text-black"
                                    : "opacity-60 hover:opacity-100 text-current"
                                }`}
                            >
                                <img src={lang.flag} alt={lang.code} className="w-4 h-4 rounded-full object-cover" />
                                <span className="hidden sm:inline font-medium">{lang.label}</span>
                            </button>
                        ))}
                    </div>

                    {/* SEARCH - Sadece Desktop */}
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            if(search) window.find(search);
                        }}
                        className="hidden lg:flex items-center border-l pl-4 border-slate-500/30"
                    >
                        <input
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder={t('navbar.search')}
                            className="bg-transparent border-b border-transparent focus:border-primary focus:outline-none w-24 text-sm transition-all"
                        />
                        <button type="submit" className="ml-2 opacity-70 hover:opacity-100">
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </form>

                    {/* CONTACT BUTTON */}
                    <Button
                        size="sm"
                        className="hidden sm:flex bg-gradient-to-r from-[#4CFF9A] to-[#ff0088] text-black font-bold border-none hover:scale-105 transition-transform"
                        onClick={() => {
                            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                    >
                        {t('navbar.contact_me')}
                    </Button>
                </div>
            </nav>
        </header>
    );
};
