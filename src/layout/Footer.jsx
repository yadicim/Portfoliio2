import { Github, Linkedin } from "lucide-react";
import { useTranslation } from "react-i18next";

const socialLinks = [
  { icon: Github, href: "https://github.com/yadicim", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/yadigara/", label: "LinkedIn" }
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useTranslation();

  const footerLinks = [
    { href: "#about", label: t("footer.about") },
    { href: "#projects", label: t("footer.projects") },
    { href: "#experience", label: t("footer.experience") },
    { href: "#contact", label: t("footer.contact") }
  ];

  return (
    <footer className="py-6 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">

          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <a href="#" className="text-xl font-bold tracking-tight hover:text-(--color-opposite)">
              YA.
            </a>
            <p className="text-sm text-(--color-muted-foreground) mt-2">
              © {currentYear} {t('footer.rights')}
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-(--color-muted-foreground) hover:text-(--color-foreground) transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="p-2 rounded-full glass hover:bg-(--color-primary)/10 hover:text-(--color-primary) transition-all"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>

        </div>
      </div>
    </footer>
  );
};
