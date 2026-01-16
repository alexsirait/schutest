/**
 * Reusable Button Component
 * Supports multiple variants and sizes with consistent styling
 */

const variants = {
  primary: `
    bg-primary hover:bg-primary/90 
    text-[#181611] 
    font-bold
  `,
  secondary: `
    bg-[#393528] 
    hover:bg-primary/20 
    text-white
  `,
  dark: `
    bg-[#181611] hover:bg-[#27241b]
    text-white 
    font-bold
  `,
  ghost: `
    bg-white/20 backdrop-blur-md 
    border border-[#181611]/20
    hover:bg-white/30 
    text-[#181611] 
    font-bold
  `,
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  icon,
  iconPosition = "left",
  ...props
}) {
  const baseStyles = `
    inline-flex items-center justify-center gap-2
    rounded-xl
    transition-all duration-200
    hover:scale-105
    cursor-pointer
    focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2
    disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100
  `;

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {icon && iconPosition === "left" && (
        <span className="material-symbols-outlined text-[20px]">{icon}</span>
      )}
      {children}
      {icon && iconPosition === "right" && (
        <span className="material-symbols-outlined text-[20px]">{icon}</span>
      )}
    </button>
  );
}
