import { useEffect, useState } from "react";

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  // Show when user scrolls down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 100) setVisible(true);
      else setVisible(false);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <div
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-50 cursor-pointer flex flex-col gap-1 items-center group"
    >
      {/* Three Chevrons */}
      <div className="w-6 h-6 border-l-2 border-t-2 transform rotate-45 group-hover:border-blue-500 border-white opacity-100"></div>
      <div className="w-6 h-6 border-l-2 border-t-2 transform rotate-45 group-hover:border-blue-500 border-white opacity-80"></div>
      <div className="w-6 h-6 border-l-2 border-t-2 transform rotate-45 group-hover:border-blue-500 border-white opacity-60"></div>
    </div>
  );
};

export default ScrollToTopButton;

