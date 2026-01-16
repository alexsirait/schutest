/**
 * Custom Document Component
 * Customizes the HTML document structure
 */

import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="de" className="dark">
            <Head>
                {/* Character Encoding */}
                <meta charSet="utf-8" />

                {/* SEO Meta Tags */}
                <meta
                    name="description"
                    content="BU Knowledge Hub - Ihr Experten-Portal für Berufsunfähigkeitsrecht. Umfassende Informationen zu Antrag, Ablehnung, Kosten und Rechtsschutz."
                />
                <meta
                    name="keywords"
                    content="Berufsunfähigkeit, BU-Versicherung, Rechtsanwalt, Ablehnung, Widerspruch, Rechtsschutz"
                />

                {/* Open Graph */}
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="BU Knowledge Hub" />
                <meta property="og:locale" content="de_DE" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <body className="antialiased">
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
