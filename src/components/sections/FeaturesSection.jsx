/**
 * Features Grid Section Component
 */

import FeatureCard from "@/components/ui/FeatureCard";

const features = [
    {
        id: "antrag",
        icon: "description",
        title: "Antrag",
        description: "Vom ersten Formular bis zur Einreichung. Wir zeigen Ihnen, wie der Prozess reibungslos verläuft.",
        color: "primary",
    },
    {
        id: "ablehnung",
        icon: "cancel",
        title: "Ablehnung",
        description: "Versicherung zahlt nicht? Strategien für den Widerspruch und rechtliche Durchsetzung Ihrer Ansprüche.",
        color: "red",
    },
    {
        id: "kosten",
        icon: "payments",
        title: "Kosten",
        description: "Transparente Honorare, Anwaltsgebühren und Gerichtskosten im Überblick erklärt.",
        color: "green",
    },
    {
        id: "rechtsschutz",
        icon: "verified_user",
        title: "Rechtsschutz",
        description: "Wann die Rechtsschutzversicherung greift und wie Sie eine Deckungszusage erhalten.",
        color: "blue",
    },
];

export default function FeaturesSection({ onFeatureClick }) {
    return (
        <section className="px-4 py-6">
            <h3 className="text-xl font-bold mb-6 border-l-4 border-[#f4c025] pl-3">
                Themenbereiche
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {features.map((feature) => (
                    <FeatureCard
                        key={feature.id}
                        icon={feature.icon}
                        title={feature.title}
                        description={feature.description}
                        color={feature.color}
                        onClick={() => onFeatureClick?.(feature.id)}
                    />
                ))}
            </div>
        </section>
    );
}
