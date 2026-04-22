import { Button } from "@/components/Button";
import { Menu, X } from "lucide-react";
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

    const clickHandle = (lang) => {
        i18n.changeLanguage(lang);
    };

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

    // ✅ Scroll effect fix
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // ✅ Scroll lock when mobile menu open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [isMobileMenuOpen]);

    return (
        <header className={`fixed top-0 left-0 right-0 transition-all duration-500 ${
            isScrolled ? "glass-strong py-3" : "bg-transparent py-5"
        } z-50`}>

            <nav className="container mx-auto px-6 flex items-center justify-between">

                {/* LOGO */}
                <a href="#" className="ml-10 text-xl font-bold tracking-tight hover:text-(--color-primary)">
                    Yadigar Arslan
                </a>

                {/* Language */}
                <div className="hidden md:flex glass rounded-full px-2 py-1 items-center gap-2 ml-8">
                    {languages.map((lang) => (
                        <button
                            key={lang.code}
                            onClick={() => clickHandle(lang.code)}
                            className={`px-4 py-2 text-sm flex items-center gap-2 rounded-full transition-all
                                ${i18n.language === lang.code
                                    ? "bg-(--color-surface) text-(--color-foreground)"
                                    : `hover:bg-(--color-surface)/50 ${isLight ? "text-black" : "text-(--color-muted-foreground)"}`
                                }`}
                        >
                            <img src={lang.flag} className="w-4 h-4 rounded-full" />
                            {lang.label}
                        </button>
                    ))}
                </div>

                {/* Desktop Nav */}
                <div className="hidden md:flex gap-5 ml-8">
                    <div className="glass rounded-full px-2 py-1 flex items-center gap-10">
                        {navLinks.map((link, i) => (
                            <a
                                key={i}
                                href={link.href}
                                className={`px-4 py-2 text-sm rounded-full hover:bg-(--color-surface)
                                ${isLight ? "text-black" : "text-(--color-muted-foreground)"}`}
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Right side */}
                <div className="flex items-center space-x-6">

                    {/* Search */}
                    <form onSubmit={(e) => {
                        e.preventDefault();
                        window.find(search);
                    }}>
                        <div className="hidden md:flex group border-r px-4 py-1 border-(--color-primary)">
                            <input
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                placeholder={t('navbar.search')}
                                className="opacity-0 group-hover:opacity-100 bg-transparent border-b border-(--color-primary) focus:outline-none w-10 lg:w-20 transition duration-500"
                            />
                            <button type="submit" className="-ml-4">
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </button>
                        </div>
                    </form>

                    {/* Contact */}
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

                    {/* Mobile button */}
                    <button
                        className="md:hidden p-2"
                        onClick={() => setIsMobileMenuOpen(prev => !prev)}
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>

                </div>
            </nav>

            {/* ✅ MOBILE MENU FULL SCREEN */}
            {isMobileMenuOpen && (
                <div className="fixed inset-0 z-40 md:hidden glass-strong animate-fade-in">
                    <div className="container mx-auto px-6 py-20 flex flex-col gap-6">

                        {navLinks.map((link, i) => (
                            <a
                                key={i}
                                href={link.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-lg px-4 py-2 rounded-full hover:bg-(--color-surface)"
                            >
                                {link.label}
                            </a>
                        ))}

                        {/* Languages */}
                        <div className="flex flex-wrap gap-2 mt-4">
                            {languages.map((lang) => (
                                <button
                                    key={lang.code}
                                    onClick={() => {
                                        clickHandle(lang.code);
                                        setIsMobileMenuOpen(false);
                                    }}
                                    className="flex-1 py-3 rounded-full glass"
                                >
                                    {lang.code}
                                </button>
                            ))}
                        </div>

                        <Button
                            className="mt-4 bg-linear-to-r from-[#4CFF9A] to-[#ff0088] text-black"
                            onClick={() => {
                                setIsMobileMenuOpen(false);
                                setTimeout(() => {
                                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                                }, 100);
                            }}
                        >
                            {t('navbar.contact_me')}
                        </Button>

                    </div>
                </div>
            )}
        </header>
    );
};
