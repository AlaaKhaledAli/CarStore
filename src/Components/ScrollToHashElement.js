import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToHashElement = () => {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash;

    // Check if there is a hash present in the URL (e.g., #contact)
    if (hash) {
      // Try to find the element with that ID in the DOM.
      // We remove the '#' character to just get the ID name.
      const element = document.getElementById(hash.substring(1));

      if (element) {
        // If found, scroll to it smoothly
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      // Optional: If there is no hash, scroll to the top of the page on route change.
      // This is usually desired behavior in SPAs.
      window.scrollTo(0, 0);
    }
    // Run this effect every time the 'location' changes
  }, [location]);

  // This component doesn't render anything visually
  return null;
};

export default ScrollToHashElement;