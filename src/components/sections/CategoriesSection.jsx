/**
 * Categories Section Component
 */

import { useState } from "react";
import CategoryChip from "@/components/ui/CategoryChip";

const categories = [
    { id: "all", label: "Alle Themen" },
    { id: "antrag", label: "Antrag" },
    { id: "ablehnung", label: "Ablehnung" },
    { id: "kosten", label: "Kosten" },
    { id: "rechtsschutz", label: "Rechtsschutz" },
];

export default function CategoriesSection({ activeCategory, onCategoryChange }) {
    const [active, setActive] = useState(activeCategory || "all");

    const handleClick = (categoryId) => {
        setActive(categoryId);
        onCategoryChange?.(categoryId);
    };

    return (
        <section className="py-6 px-4">
            <div
                className="flex gap-3 overflow-x-auto no-scrollbar justify-start md:justify-center pb-2"
                role="tablist"
                aria-label="Themen filtern"
            >
                {categories.map((category) => (
                    <CategoryChip
                        key={category.id}
                        label={category.label}
                        isActive={active === category.id}
                        onClick={() => handleClick(category.id)}
                    />
                ))}
            </div>
        </section>
    );
}
