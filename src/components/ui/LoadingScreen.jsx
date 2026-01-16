/**
 * Loading Screen Component
 * Shows a spinner while fonts and resources load
 */

export default function LoadingScreen() {
    return (
        <div className="fixed inset-0 bg-[#181611] flex items-center justify-center z-50">
            <div className="text-center">
                {/* Spinner */}
                <div className="w-16 h-16 border-4 border-[#393528] border-t-[#f4c025] rounded-full animate-spin mx-auto mb-4"></div>

                {/* Text */}
                {/* <p className="text-[#bab29c] text-sm">Lädt...</p> */}
            </div>
        </div>
    );
}
