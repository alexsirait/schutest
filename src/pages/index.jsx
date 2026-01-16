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
            <div className="animate-fade-in-up">
                <HeroSection onSearch={handleSearch} />
            </div>

            {/* Category Filter Chips */}
            <div className="animate-fade-in-up animate-delay-100">
                <CategoriesSection onCategoryChange={handleCategoryChange} />
            </div>

            {/* Feature Topic Cards */}
            <div className="animate-fade-in-up animate-delay-200">
                <FeaturesSection onFeatureClick={handleFeatureClick} />
            </div>

            {/* Long-form SEO Content */}
            <div className="animate-fade-in-up animate-delay-300">
                <ContentSection />
            </div>

            {/* Call-to-Action Banner */}
            <div className="animate-fade-in-scale animate-delay-300">
                <CTASection />
            </div>

            {/* FAQ Accordion */}
            <div className="animate-fade-in-up animate-delay-400">
                <FAQSection />
            </div>
        </>
    );
}
