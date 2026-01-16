/**
 * CTA Banner Section Component
 */

import Button from "@/components/ui/Button";

export default function CTASection() {
    const handleSchedule = () => {
        console.log("Schedule appointment");
    };

    const handleCallback = () => {
        console.log("Request callback");
    };

    return (
        <section className="mx-4 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#f4c025] to-yellow-600 text-[#181611] shadow-2xl relative overflow-hidden">
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8">
                {/* Content - Full width text */}
                <div className="w-full lg:flex-1 text-center lg:text-left">
                    <h3 className="text-xl sm:text-2xl font-black mb-2">
                        Kostenlose Erstberatung
                    </h3>
                    <p className="font-medium opacity-90 text-sm sm:text-base">
                        Lassen Sie Ihren Fall von unseren spezialisierten Anwälten prüfen.
                        Wir klären Ihre Chancen innerhalb von 24 Stunden.
                    </p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto shrink-0">
                    <Button
                        variant="dark"
                        size="lg"
                        icon="calendar_today"
                        onClick={handleSchedule}
                        className="w-full sm:w-auto"
                    >
                        Termin vereinbaren
                    </Button>
                    <Button
                        variant="ghost"
                        size="lg"
                        icon="call"
                        onClick={handleCallback}
                        className="w-full sm:w-auto"
                    >
                        Rückruf anfordern
                    </Button>
                </div>
            </div>

            {/* Decorative Background Icon */}
            <div
                className="absolute -right-10 -bottom-10 opacity-10 pointer-events-none"
                aria-hidden="true"
            >
                <span className="material-symbols-outlined text-[200px]">gavel</span>
            </div>
        </section>
    );
}
