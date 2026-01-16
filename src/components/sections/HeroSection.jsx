/**
 * Hero Section Component
 */

import SearchBar from "@/components/ui/SearchBar";

export default function HeroSection({ onSearch }) {
    return (
        <section className="px-4 pt-8 pb-4 text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
                Wie können wir Ihnen helfen?
            </h1>
            <p className="text-slate-600 dark:text-[#bab29c] mb-6 text-sm sm:text-base">
                Suchen Sie in unserem Experten-Wissen zum Berufsunfähigkeitsrecht.
            </p>
            <SearchBar
                placeholder="Stichwort eingeben (z.B. Leistungsantrag)..."
                onSearch={onSearch}
            />
        </section>
    );
}
