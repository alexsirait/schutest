/**
 * Feature Card Component
 */

const colorSchemes = {
    primary: {
        bg: "bg-[#f4c025]/10",
        text: "text-[#f4c025]",
        hoverBg: "group-hover:bg-[#f4c025]",
        hoverText: "group-hover:text-[#181611]",
    },
    red: {
        bg: "bg-red-500/10",
        text: "text-red-500",
        hoverBg: "group-hover:bg-red-500",
        hoverText: "group-hover:text-white",
    },
    green: {
        bg: "bg-green-500/10",
        text: "text-green-500",
        hoverBg: "group-hover:bg-green-500",
        hoverText: "group-hover:text-white",
    },
    blue: {
        bg: "bg-blue-500/10",
        text: "text-blue-500",
        hoverBg: "group-hover:bg-blue-500",
        hoverText: "group-hover:text-white",
    },
};

export default function FeatureCard({
    icon,
    title,
    description,
    color = "primary",
    ctaText = "Mehr erfahren",
    onClick,
}) {
    const scheme = colorSchemes[color];

    return (
        <article
            onClick={onClick}
            className="flex flex-col gap-4 rounded-xl border border-[#544e3b] bg-[#27241b] p-6 hover:shadow-xl transition-all duration-300 group cursor-pointer"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && onClick?.()}
        >
            <div className={`w-12 h-12 rounded-lg flex items-center justify-center transition-colors duration-300 ${scheme.bg} ${scheme.text} ${scheme.hoverBg} ${scheme.hoverText}`}>
                <span className="material-symbols-outlined text-[32px]">{icon}</span>
            </div>

            <div className="flex flex-col gap-2">
                <h2 className="text-lg font-bold leading-tight">{title}</h2>
                <p className="text-[#bab29c] text-sm leading-relaxed">{description}</p>
            </div>

            <div className="mt-auto pt-2 flex items-center text-[#f4c025] font-bold text-sm">
                {ctaText}
                <span className="material-symbols-outlined ml-1 text-sm group-hover:translate-x-1 transition-transform">
                    arrow_forward
                </span>
            </div>
        </article>
    );
}
