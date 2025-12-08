// src/components/ScrollToTop.jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // When the 'pathname' (URL) changes, scroll the window to the top.
    window.scrollTo(0, 0); 
  }, [pathname]); // Rerun this effect whenever the path changes

  return null; // This component doesn't render anything
}