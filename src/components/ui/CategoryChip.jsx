/**
 * Category Chip Component
 */

export default function CategoryChip({ label, isActive = false, onClick }) {
    const baseStyles = "flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full px-6 cursor-pointer transition-colors duration-200 text-sm font-medium";
    const activeStyles = "bg-[#f4c025] text-[#181611] font-bold";
    const inactiveStyles = "bg-[#393528] hover:bg-[#f4c025]/20 text-white";

    return (
        <button
            onClick={onClick}
            className={`${baseStyles} ${isActive ? activeStyles : inactiveStyles}`}
            aria-pressed={isActive}
        >
            {label}
        </button>
    );
}
