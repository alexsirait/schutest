/**
 * Header Component
 */

import Link from "next/link";

export default function Header() {
    return (
        <header className="sticky top-0 z-50 bg-[#181611]/95 backdrop-blur-md border-b border-[#393528]">
            <div className="flex items-center justify-between p-4 max-w-screen-xl mx-auto">
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="text-[#f4c025] text-2xl">
                        <span className="material-symbols-outlined">balance</span>
                    </div>
                    <h2 className="text-lg font-bold leading-tight tracking-tight group-hover:text-[#f4c025] transition-colors">
                        BU Knowledge Hub
                    </h2>
                </Link>

                <nav className="flex items-center gap-4">
                    <button
                        className="w-10 h-10 flex items-center justify-center hover:bg-[#393528] rounded-full transition-colors duration-200"
                        aria-label="Benutzerkonto"
                    >
                        <span className="material-symbols-outlined text-2xl">account_circle</span>
                    </button>
                </nav>
            </div>
        </header>
    );
}
