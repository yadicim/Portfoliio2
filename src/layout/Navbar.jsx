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
    const isLight = !theme.state.lightMode;

    const languages = [
        { code: 'en', label: 'En', flag: 'https://flagcdn.com/w40/gb.png' },
        { code: 'fi', label: 'Fi', flag: 'https://flagcdn.com/w40/fi.png' },
        { code: 'tr', label: 'Tr', flag: 'https://flagcdn.com/w40/tr.png' },
    ];

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            isScrolled ? "glass-strong py-2" : "bg-transparent py-3"
        }`}>

            <nav className="w-full px-3 md:px-6 flex items-center justify-between gap-2">

                {/* LOGO */}
                <a href="#" className="text-sm md:text-xl font-bold whitespace-nowrap">
                    Yadigar Arslan
                </a>

                {/* NAV LINKS (scrollable mobile) */}
                <div className="flex-1 overflow-x-auto">
                    <div className="flex items-center gap-2 md:gap-6 px-2">
                        {navLinks.map((link, i) => (
                            <a
                                key={i}
                                href={link.href}
                                className={`whitespace-nowrap px-2 md:px-4 py-1 md:py-2 rounded-full text-xs md:text-sm
                                hover:bg-(--color-surface)
                                ${isLight ? "text-black" : "text-(--color-muted-foreground)"}`}
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>

                {/* RIGHT SIDE */}
                <div className="flex items-center gap-2 md:gap-6">

                    {/* LANGUAGE (mobile compact) */}
                    <div className="flex gap-1 md:gap-2">
                        {languages.map((lang) => (
                            <button
                                key={lang.code}
                                onClick={() => changeLanguage(lang.code)}
                                className={`px-2 md:px-3 py-1 rounded-full text-xs md:text-sm flex items-center gap-1
                                ${i18n.language === lang.code
                                    ? "bg-(--color-surface)"
                                    : "opacity-70 hover:opacity-100"
                                }`}
                            >
                                <img src={lang.flag} className="w-3 h-3 md:w-4 md:h-4 rounded-full" />
                                <span className="hidden md:inline">{lang.label}</span>
                            </button>
                        ))}
                    </div>

                    {/* SEARCH (desktop only) */}
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            window.find(search);
                        }}
                        className="hidden md:flex items-center border-l pl-4 border-(--color-primary)"
                    >
                        <input
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder={t('navbar.search')}
                            className="bg-transparent border-b border-(--color-primary) focus:outline-none w-20 text-sm"
                        />
                        <button type="submit" className="ml-2">
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </form>

                    {/* CONTACT (desktop only) */}
                    <div className="hidden md:block">
                        <Button
                            size="sm"
                            className="bg-linear-to-r from-[#4CFF9A] to-[#ff0088] text-black font-bold"
                            onClick={() => {
                                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                        >
                            {t('navbar.contact_me')}
                        </Button>
                    </div>

                </div>
            </nav>
        </header>
    );
};
