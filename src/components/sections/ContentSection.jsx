/**
 * Content Section Component - SEO long-form content
 */

export default function ContentSection() {
    return (
        <section className="px-4 py-12 max-w-4xl">
            <article>
                <h2 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">
                    Berufsunfähigkeit: Was Sie im Ernstfall wissen müssen
                </h2>

                <div className="space-y-6 text-slate-700 dark:text-[#bab29c] leading-relaxed">
                    <p>
                        Die Berufsunfähigkeitsversicherung (BU) gehört zu den wichtigsten privaten Absicherungen. Doch wenn der Ernstfall eintritt und die Gesundheit die Ausübung des Berufs unmöglich macht, beginnt oft ein bürokratischer Hürdenlauf. Versicherer prüfen Anträge extrem akribisch, was häufig zu Verzögerungen oder Ablehnungen führt.
                    </p>

                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                        Häufige Gründe für eine Ablehnung
                    </h3>

                    <p>
                        In der Praxis beobachten wir immer wieder drei Hauptgründe für verweigerte Leistungen: Verletzung der vorvertraglichen Anzeigepflicht (falsche Angaben bei Vertragsschluss), Nichterreichen des 50%-Grades der Berufsunfähigkeit oder die sogenannte Verweisungsklausel.
                    </p>

                    {/* Expert Tip Box */}
                    <div className="bg-[#f4c025]/5 border-l-4 border-[#f4c025] p-6 rounded-r-lg my-8">
                        <h4 className="font-bold text-slate-900 dark:text-white mb-2">
                            Experten-Tipp
                        </h4>
                        <p className="text-sm italic">
                            „Reichen Sie niemals einen Leistungsantrag ohne vorherige anwaltliche Prüfung ein. Ein kleiner Fehler in der Selbstauskunft kann den Anspruch für immer gefährden."
                        </p>
                    </div>

                    <p>
                        Unser Knowledge Hub bietet Ihnen detaillierte Leitfäden, um diese Stolperfallen zu vermeiden. Wir erklären Ihnen die rechtlichen Grundlagen des VVG (Versicherungsvertragsgesetz) und geben praktische Tipps für die Kommunikation mit Ihrer Versicherung.
                    </p>
                </div>
            </article>
        </section>
    );
}
