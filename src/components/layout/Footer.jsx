/**
 * Footer Component
 */

import { useState } from "react";
import Link from "next/link";

const quickLinks = [
    { label: "Impressum", href: "/impressum" },
    { label: "Datenschutz", href: "/datenschutz" },
    { label: "Über uns", href: "/ueber-uns" },
    { label: "Kontakt", href: "/kontakt" },
];

export default function Footer() {
    const [email, setEmail] = useState("");

    const handleNewsletterSubmit = (e) => {
        e.preventDefault();
        console.log("Newsletter signup:", email);
        setEmail("");
    };

    return (
        <footer className="bg-slate-100 dark:bg-[#12110d] border-t border-slate-200 dark:border-[#393528] py-12 px-4">
            <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                    <div className="flex items-center gap-2 mb-4">
                        <span className="material-symbols-outlined text-[#f4c025]">balance</span>
                        <span className="font-bold text-lg">BU-Rechtsanwälte.de</span>
                    </div>
                    <p className="text-sm text-slate-600 dark:text-[#bab29c]">
                        Ihre Experten für Berufsunfähigkeitsrecht. Deutschlandweite Vertretung gegenüber Versicherern.
                    </p>
                </div>

                <div>
                    <h4 className="font-bold mb-4">Quick Links</h4>
                    <ul className="text-sm space-y-2 text-slate-600 dark:text-[#bab29c]">
                        {quickLinks.map((link) => (
                            <li key={link.href}>
                                <Link href={link.href} className="hover:text-[#f4c025] transition-colors">
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h4 className="font-bold mb-4">Newsletter</h4>
                    <p className="text-sm text-slate-600 dark:text-[#bab29c] mb-4">
                        Erhalten Sie monatlich rechtliche Updates.
                    </p>
                    <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="flex-1 bg-white dark:bg-[#27241b] border border-slate-200 dark:border-[#393528] rounded-lg text-sm px-3 py-2"
                            placeholder="E-Mail Adresse"
                            required
                        />
                        <button
                            type="submit"
                            className="bg-[#f4c025] text-[#181611] px-4 py-2 rounded-lg font-bold text-sm hover:bg-[#f4c025]/90 transition-colors"
                        >
                            Abonnieren
                        </button>
                    </form>
                </div>
            </div>

            <div className="max-w-screen-xl mx-auto mt-8 pt-8 border-t border-slate-200 dark:border-[#393528]">
                <p className="text-center text-sm text-slate-500 dark:text-[#bab29c]">
                    © {new Date().getFullYear()} BU-Rechtsanwälte.de. Alle Rechte vorbehalten.
                </p>
            </div>
        </footer>
    );
}
