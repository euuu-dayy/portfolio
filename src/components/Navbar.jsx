import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Track scroll position for active section
      const sections = ["home", "about", "projects", "contact"];
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (
          element &&
          scrollPosition >= element.offsetTop &&
          scrollPosition < element.offsetTop + element.offsetHeight
        ) {
          setActiveSection(section);
        }
      });

      // Add shadow when scrolled
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navVariants = {
    hidden: { y: -80, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { 
        duration: 0.8, 
        type: "spring", 
        stiffness: 100,
        damping: 10 
      },
    },
  };

  const itemVariants = {
    hover: { 
      scale: 1.1, 
      color: "#60a5fa", 
      transition: { duration: 0.3 } 
    },
    tap: { 
      scale: 0.95, 
      transition: { duration: 0.2 } 
    },
  };

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      animate="visible"
      className={`fixed w-full top-0 z-50 bg-gradient-to-b from-gray-900/90 to-gray-800/80 backdrop-blur-md p-4 transition-all duration-300 ${scrolled ? "shadow-xl" : "shadow-md"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.ul
          className="flex justify-center gap-6 sm:gap-8 md:gap-10 text-base sm:text-lg font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          {["home", "about", "projects", "contact"].map((section) => (
            <motion.li
              key={section}
              variants={itemVariants}
              whileHover="hover"
              whileTap="tap"
              className={`relative ${activeSection === section ? "text-blue-400" : "text-gray-300 hover:text-gray-100"}`}
            >
              <a
                href={`#${section}`}
                onClick={() => setActiveSection(section)}
                className="block px-2 py-1 transition-colors duration-200"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
                {activeSection === section && (
                  <motion.span 
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-400"
                    layoutId="navUnderline"
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  />
                )}
              </a>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;