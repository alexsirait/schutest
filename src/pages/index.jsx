/**
 * Home Page
 * Main landing page with all sections composed together
 */

import Head from "next/head";
import HeroSection from "@/components/sections/HeroSection";
import CategoriesSection from "@/components/sections/CategoriesSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import ContentSection from "@/components/sections/ContentSection";
import CTASection from "@/components/sections/CTASection";
import FAQSection from "@/components/sections/FAQSection";

export default function HomePage() {
    const handleSearch = (query) => {
        console.log("Search query:", query);
    };

    const handleCategoryChange = (categoryId) => {
        console.log("Selected category:", categoryId);
    };

    const handleFeatureClick = (featureId) => {
        console.log("Feature clicked:", featureId);
    };

    return (
        <>
            <Head>
                <title>BU Knowledge Hub | Berufsunfähigkeitsrecht Experten</title>
                <meta
                    name="description"
                    content="Ihr umfassender Ratgeber zum Berufsunfähigkeitsrecht. Erfahren Sie alles über Antragstellung, Ablehnung, Kosten und Rechtsschutz."
                />
                <meta
                    property="og:title"
                    content="BU Knowledge Hub | Berufsunfähigkeitsrecht Experten"
                />
                <meta
                    property="og:description"
                    content="Ihr umfassender Ratgeber zum Berufsunfähigkeitsrecht."
                />
            </Head>

            {/* Hero Search Section */}
            <HeroSection onSearch={handleSearch} />

            {/* Category Filter Chips */}
            <CategoriesSection onCategoryChange={handleCategoryChange} />

            {/* Feature Topic Cards */}
            <FeaturesSection onFeatureClick={handleFeatureClick} />

            {/* Long-form SEO Content */}
            <ContentSection />

            {/* Call-to-Action Banner */}
            <CTASection />

            {/* FAQ Accordion */}
            <FAQSection />
        </>
    );
}
