/**
 * Custom App Component
 * Wraps all pages with global layout, styles, and providers
 */

import "@/styles/globals.css";
import Head from "next/head";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import LoadingScreen from "@/components/ui/LoadingScreen";
import { useState, useEffect } from "react";

export default function App({ Component, pageProps }) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Wait for fonts to load
        document.fonts.ready.then(() => {
            // Add small delay to ensure everything is ready
            setTimeout(() => {
                setLoading(false);
            }, 300);
        });
    }, []);

    return (
        <>
            <Head>
                {/* Global Meta Tags */}
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="theme-color" content="#f4c025" />
                <link rel="icon" href="/favicon.ico" />

                {/* Google Fonts */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Public+Sans:wght@300;400;500;600;700&display=swap"
                    rel="stylesheet"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght@100..700&display=block"
                    rel="stylesheet"
                />
            </Head>

            {loading ? (
                <LoadingScreen />
            ) : (
                <div className="dark min-h-screen flex flex-col animate-fade-in">
                    <Header />
                    <main className="flex-1 max-w-screen-xl mx-auto w-full pb-12">
                        <Component {...pageProps} />
                    </main>
                    <Footer />
                </div>
            )}
        </>
    );
}
