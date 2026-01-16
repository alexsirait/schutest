/**
 * Search Bar Component
 */

import { useState } from "react";

export default function SearchBar({ placeholder = "Stichwort eingeben...", onSearch }) {
    const [query, setQuery] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch?.(query);
    };

    return (
        <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto">
            <label className="flex flex-col w-full">
                <span className="sr-only">Suche</span>
                <div className="flex w-full h-14 items-stretch rounded-xl overflow-hidden shadow-lg focus-within:outline-none">
                    <div className="text-[#f4c025] bg-[#393528] flex items-center justify-center px-3 border-0">
                        <span className="material-symbols-outlined">search</span>
                    </div>
                    <input
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        className="flex w-full border-none border-l-0 border-r-0 bg-[#393528] text-white focus:ring-0 focus:outline-none px-4 text-lg font-normal placeholder:text-[#bab29c]"
                        placeholder={placeholder}
                    />
                    <button
                        type="submit"
                        className="bg-[#f4c025] hover:bg-[#f4c025]/90 text-[#181611] px-6 font-bold transition-colors duration-200 focus:outline-none cursor-pointer"
                    >
                        Suchen
                    </button>
                </div>
            </label>
        </form>
    );
}
