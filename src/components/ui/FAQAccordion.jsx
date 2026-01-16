/**
 * FAQ Accordion Component
 */

export default function FAQAccordion({ items = [] }) {
    return (
        <div className="space-y-4">
            {items.map((item, index) => (
                <details
                    key={index}
                    className="group bg-[#27241b] rounded-xl border border-[#393528] overflow-hidden hover:shadow-md transition-shadow"
                >
                    <summary className="flex items-center justify-between p-5 cursor-pointer list-none select-none">
                        <span className="font-bold pr-4">{item.question}</span>
                        <span className="material-symbols-outlined group-open:rotate-180 transition-transform duration-200 shrink-0">
                            expand_more
                        </span>
                    </summary>
                    <div className="p-5 pt-4 text-[#bab29c] text-sm leading-relaxed border-t border-[#393528]">
                        {item.answer}
                    </div>
                </details>
            ))}
        </div>
    );
}
