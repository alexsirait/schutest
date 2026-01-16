/**
 * FAQ Section Component
 */

import FAQAccordion from "@/components/ui/FAQAccordion";

const faqItems = [
    {
        question: "Wie lange dauert die Prüfung eines BU-Antrags?",
        answer: "Gesetzlich ist keine feste Frist vorgeschrieben, üblich sind jedoch 3-6 Monate. Bei anwaltlicher Begleitung lässt sich dieser Prozess oft beschleunigen, da Rückfragen der Versicherung proaktiv vorgebeugt wird.",
    },
    {
        question: "Kann ich trotz Ablehnung noch Leistungen erhalten?",
        answer: "Ja, eine Ablehnung ist oft nur der Beginn der Verhandlung. Durch einen begründeten Widerspruch oder eine Klage vor dem Landgericht können viele Ablehnungen revidiert werden. Die Erfolgsquote bei spezialisierten Kanzleien ist hoch.",
    },
];

export default function FAQSection() {
    return (
        <section className="px-4 py-12">
            <h3 className="text-xl font-bold mb-8">Häufig gestellte Fragen (FAQ)</h3>
            <FAQAccordion items={faqItems} />
        </section>
    );
}
