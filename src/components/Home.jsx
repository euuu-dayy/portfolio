"use client"
import React from "react"
import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { TextPlugin } from "gsap/TextPlugin"
import { Briefcase, User, Mail, Github, Linkedin, Twitter, ArrowDown, ExternalLink } from "lucide-react"
import ContactSection from "./ContactSection"
import ProjectsSection from "./ProjectsSection"
// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, TextPlugin)
}


const Home = () => {
  const introRef = useRef(null)

  const udayRef = useRef(null)
  const taglineRef = useRef(null)
  const buttonRef = useRef(null)
  const emojiRef = useRef(null)
  const particlesRef = useRef(null)
  const scrollIndicatorRef = useRef(null)
  const aboutSectionRef = useRef(null)
  const skillsSectionRef = useRef(null)
  const projectsSectionRef = useRef(null)
  const contactSectionRef = useRef(null)
  const cursorRef = useRef(null)
  const typingTextRef = useRef(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  // Handle mouse movement for custom cursor
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  // Update cursor position
  useEffect(() => {
    const cursor = cursorRef.current
    if (cursor) {
      gsap.to(cursor, {
        x: mousePosition.x,
        y: mousePosition.y,
        duration: 0.2,
        ease: "power2.out",
      })
    }
  }, [mousePosition])

  // Create particles
  useEffect(() => {
    const particlesContainer = particlesRef.current
    if (!particlesContainer) return

    // Clear any existing particles
    particlesContainer.innerHTML = ""

    // Create particles
    for (let i = 0; i < 50; i++) {
      const particle = document.createElement("div")
      particle.className = "particle"

      // Random size between 2-6px
      const size = Math.random() * 4 + 2

      // Random position
      const posX = Math.random() * 100
      const posY = Math.random() * 100

      // Random opacity
      const opacity = Math.random() * 0.5 + 0.2

      // Set styles
      particle.style.width = `${size}px`
      particle.style.height = `${size}px`
      particle.style.left = `${posX}%`
      particle.style.top = `${posY}%`
      particle.style.opacity = opacity.toString()

      // Add to container
      particlesContainer.appendChild(particle)

      // Animate with GSAP
      gsap.to(particle, {
        x: Math.random() * 100 - 50,
        y: Math.random() * 100 - 50,
        duration: Math.random() * 20 + 10,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      })
    }
  }, [])

  useEffect(() => {
    // Split intro text into individual characters
    const introText = introRef.current
    const introContent = introText.textContent
    introText.innerHTML = introContent
      .split("")
      .map((char) => `<span class="intro-char">${char}</span>`)
      .join("")

    // Split name into individual characters
    const udayText = udayRef.current
    const udayContent = udayText.textContent
    udayText.innerHTML = udayContent
      .split("")
      .map((char) => `<span class="name-char">${char}</span>`)
      .join("")

    // Split tagline into characters
    const tagline = taglineRef.current
    const taglineText = tagline.textContent
    tagline.innerHTML = taglineText
      .split("")
      .map((char) => `<span class="tagline-char">${char}</span>`)
      .join("")

    // GSAP Timeline for animations
    const tl = gsap.timeline()

    // Initial setup
    gsap.set(
      [
        introRef.current.querySelectorAll(".intro-char"),
        udayRef.current.querySelectorAll(".name-char"),
        taglineRef.current.querySelectorAll(".tagline-char"),
        buttonRef.current,
        emojiRef.current,
        scrollIndicatorRef.current,
      ],
      { opacity: 0, y: 20 },
    )

    // Modern intro animation
    tl.to(introRef.current.querySelectorAll(".intro-char"), {
      opacity: 1,
      y: 0,
      stagger: 0.03,
      duration: 0.4,
      ease: "power3.out",
      color: "#a5b4fc",
    })
      // Name animation with impact
      .to(
        udayRef.current.querySelectorAll(".name-char"),
        {
          opacity: 1,
          y: 0,
          stagger: 0.08,
          duration: 0.7,
          ease: "back.out(1.7)",
          color: "#ffffff",
        },
        "-=0.2",
      )
      // Emoji animation
      .to(
        emojiRef.current,
        {
          opacity: 1,
          y: 0,
          scale: 1.3,
          duration: 0.8,
          ease: "elastic.out(1, 0.5)",
          rotation: 15,
        },
        "-=0.4",
      )
      // Tagline animation
      .to(
        taglineRef.current.querySelectorAll(".tagline-char"),
        {
          opacity: 1,
          y: 0,
          stagger: 0.02,
          duration: 0.3,
          ease: "power1.out",
          color: "#c7d2fe",
        },
        "-=0.3",
      )
      // Button animation
      .to(
        buttonRef.current,
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "elastic.out(1, 0.5)",
        },
        "-=0.5",
      )
      // Scroll indicator animation
      .to(
        scrollIndicatorRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power1.out",
        },
        "-=0.3",
      )

    // Continuous animations
    gsap.to(emojiRef.current, {
      y: -10,
      rotation: -15,
      duration: 2.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    })

    gsap.to(buttonRef.current, {
      scale: 1.03,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    })

    // Scroll indicator animation
    gsap.to(scrollIndicatorRef.current, {
      y: 10,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    })

    // Button interactions
    const button = buttonRef.current
    const hoverAnimation = () => {
      gsap.to(button, {
        scale: 1.1,
        boxShadow: "0 0 30px rgba(165, 180, 252, 0.6)",
        duration: 0.3,
      })
    }
    const leaveAnimation = () => {
      gsap.to(button, {
        scale: 1,
        boxShadow: "0 0 15px rgba(99, 102, 241, 0.4)",
        duration: 0.3,
      })
    }

    button.addEventListener("mouseenter", hoverAnimation)
    button.addEventListener("mouseleave", leaveAnimation)
    button.addEventListener("click", () => {
      gsap.to(button, {
        scale: 0.95,
        duration: 0.2,
        yoyo: true,
        repeat: 1,
      })
    })

    // Typing animation
    const typingText = typingTextRef.current
    if (typingText) {
      const phrases = [
        "Building modern web apps",
        "Crafting user experiences",
        "Solving complex problems",
        "Creating digital solutions",
      ]

      let currentPhrase = 0

      const typeNextPhrase = () => {
        gsap.to(typingText, {
          duration: 1.5,
          text: phrases[currentPhrase],
          ease: "none",
          onComplete: () => {
            // Pause at the end of typing
            gsap.delayedCall(1.5, () => {
              // Delete the text
              gsap.to(typingText, {
                duration: 1,
                text: "",
                ease: "none",
                onComplete: () => {
                  // Move to next phrase
                  currentPhrase = (currentPhrase + 1) % phrases.length
                  // Start typing again
                  gsap.delayedCall(0.5, typeNextPhrase)
                },
              })
            })
          },
        })
      }

      // Start the typing animation
      typeNextPhrase()
    }

    // Scroll animations
    if (typeof window !== "undefined") {
      // About section animation
      ScrollTrigger.create({
        trigger: aboutSectionRef.current,
        start: "top 80%",
        onEnter: () => {
          gsap.fromTo(
            aboutSectionRef.current.querySelectorAll(".animate-on-scroll"),
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, stagger: 0.2, duration: 0.8, ease: "power2.out" },
          )
        },
        once: true,
      })

      // Skills section animation
      ScrollTrigger.create({
        trigger: skillsSectionRef.current,
        start: "top 80%",
        onEnter: () => {
          gsap.fromTo(
            skillsSectionRef.current.querySelectorAll(".skill-item"),
            { scale: 0.8, opacity: 0 },
            {
              scale: 1,
              opacity: 1,
              stagger: 0.1,
              duration: 0.6,
              ease: "back.out(1.7)",
            },
          )
        },
        once: true,
      })

      // Projects section animation
      ScrollTrigger.create({
        trigger: projectsSectionRef.current,
        start: "top 80%",
        onEnter: () => {
          gsap.fromTo(
            projectsSectionRef.current.querySelectorAll(".project-card"),
            { y: 100, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              stagger: 0.2,
              duration: 0.8,
              ease: "power3.out",
            },
          )
        },
        once: true,
      })

      // Contact section animation
      ScrollTrigger.create({
        trigger: contactSectionRef.current,
        start: "top 80%",
        onEnter: () => {
          gsap.fromTo(
            contactSectionRef.current.querySelectorAll(".contact-item"),
            { x: -50, opacity: 0 },
            {
              x: 0,
              opacity: 1,
              stagger: 0.2,
              duration: 0.8,
              ease: "power2.out",
            },
          )
        },
        once: true,
      })
    }

    return () => {
      button.removeEventListener("mouseenter", hoverAnimation)
      button.removeEventListener("mouseleave", leaveAnimation)
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  const handleExploreClick = () => {
    const projectsSection = document.getElementById("projects")
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" })
    }
  }



  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;600;700&family=Syne:wght@700;800&display=swap');
          
          .home-bg {
            background: radial-gradient(circle at 70% 30%, rgba(79, 70, 229, 0.15) 0%, transparent 60%);
            animation: pulse-bg 8s infinite alternate;
          }
          @keyframes pulse-bg {
            0% { transform: scale(1); opacity: 0.2; }
            100% { transform: scale(1.1); opacity: 0.4; }
          }
          
          .intro-text {
            font-family: 'Space Grotesk', sans-serif;
            font-weight: 600;
            letter-spacing: 0.05em;
          }
          
          .name-text {
            font-family: 'Syne', sans-serif;
            font-weight: 800;
            letter-spacing: -0.03em;
          }
          
          .gradient-name {
            background: linear-gradient(135deg, #a5b4fc 0%, #6366f1 50%, #8b5cf6 100%);
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
            text-shadow: 0 2px 10px rgba(99, 102, 241, 0.3);
          }
          
          .tagline-text {
            font-family: 'Space Grotesk', sans-serif;
            font-weight: 400;
            letter-spacing: 0.03em;
          }
          
          .button-glow {
            transition: all 0.3s ease;
            font-family: 'Space Grotesk', sans-serif;
          }
          
          .char {
            display: inline-block;
          }
          
          .particles-container {
            position: absolute;
            width: 100%;
            height: 100%;
            overflow: hidden;
            z-index: 1;
          }
          
          .particle {
            position: absolute;
            background: linear-gradient(135deg, #a5b4fc, #6366f1);
            border-radius: 50%;
            pointer-events: none;
          }
          
          .scroll-indicator {
            position: absolute;
            bottom: 40px;
            left: 50%;
            transform: translateX(-50%);
            z-index: 10;
          }
          
          .section {
            padding: 100px 0;
            position: relative;
          }
          
          .section-title {
            font-family: 'Syne', sans-serif;
            font-weight: 800;
            margin-bottom: 2rem;
            position: relative;
            display: inline-block;
          }
          
          .section-title::after {
            content: '';
            position: absolute;
            bottom: -10px;
            left: 0;
            width: 60px;
            height: 4px;
            background: linear-gradient(90deg, #6366f1, #8b5cf6);
            border-radius: 2px;
          }
          
          .skill-item {
            background: rgba(99, 102, 241, 0.1);
            border: 1px solid rgba(99, 102, 241, 0.2);
            border-radius: 8px;
            padding: 1rem;
            transition: all 0.3s ease;
          }
          
          .skill-item:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
            background: rgba(99, 102, 241, 0.15);
          }
          
          .project-card {
            border-radius: 12px;
            overflow: hidden;
            background: rgba(17, 24, 39, 0.7);
            border: 1px solid rgba(99, 102, 241, 0.2);
            transition: all 0.3s ease;
          }
          
          .project-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
            border-color: rgba(99, 102, 241, 0.5);
          }
          
          .contact-item {
            transition: all 0.3s ease;
          }
          
          .contact-item:hover {
            transform: translateY(-5px);
          }
          
          .social-icon {
            transition: all 0.3s ease;
          }
          
          .social-icon:hover {
            transform: scale(1.2);
            color: #6366f1;
          }
          
          .custom-cursor {
            width: 30px;
            height: 30px;
            border: 2px solid #6366f1;
            border-radius: 50%;
            position: fixed;
            pointer-events: none;
            z-index: 9999;
            mix-blend-mode: difference;
            transform: translate(-50%, -50%);
          }
          
          .typing-container {
            display: inline-block;
            min-height: 1.5em;
          }
          
          .typing-text {
            border-right: 3px solid #6366f1;
            padding-right: 5px;
            animation: blink 0.7s step-end infinite;
          }
          
          @keyframes blink {
            from, to { border-color: transparent }
            50% { border-color: #6366f1 }
          }
          
          .glow-effect {
            position: relative;
          }
          
          .glow-effect::before {
            content: '';
            position: absolute;
            top: -20px;
            left: -20px;
            right: -20px;
            bottom: -20px;
            background: radial-gradient(circle at center, rgba(99, 102, 241, 0.3) 0%, transparent 70%);
            z-index: -1;
            opacity: 0;
            transition: opacity 0.3s ease;
          }
          
          .glow-effect:hover::before {
            opacity: 1;
          }
        `}
      </style>

      {/* Custom cursor */}
      <div ref={cursorRef} className="custom-cursor hidden md:block"></div>

      {/* Hero Section */}
      <section
        id="home"
        className="h-screen flex items-center justify-center text-center px-4 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden"
      >
        <div className="home-bg absolute inset-0" />
        <div ref={particlesRef} className="particles-container"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 leading-tight">
            <span ref={introRef} className="intro-text text-indigo-300">
              HELLO... IT'S{" "}
            </span>
            <span ref={udayRef} className="name-text gradient-name">
              UDAY
            </span>
            <span ref={emojiRef} className="inline-block ml-2">
              ✌️
            </span>
          </h1>

          <p ref={taglineRef} className="text-lg md:text-xl lg:text-2xl mb-4 tagline-text text-indigo-200">
            Full-Stack Developer | Creating Modern Web Experiences
          </p>

          <div className="typing-container mb-10">
            <span ref={typingTextRef} className="typing-text text-lg md:text-xl text-purple-300"></span>
          </div>
          <br />
          <button
            ref={buttonRef}
            onClick={handleExploreClick}
            className="relative bg-gradient-to-r from-indigo-500 to-purple-600 px-8 py-3 rounded-lg text-base md:text-lg font-semibold button-glow text-white hover:from-indigo-400 hover:to-purple-500 hover:shadow-xl transition-all duration-300"
          >
            Explore My Work
            <span className="absolute -right-2 -top-2 flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-indigo-500"></span>
            </span>
          </button>
        </div>

        <div ref={scrollIndicatorRef} className="scroll-indicator text-indigo-300 animate-bounce">
          <ArrowDown className="w-6 h-6" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" ref={aboutSectionRef} className="section bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="section-title text-3xl md:text-4xl lg:text-5xl mb-12 text-white animate-on-scroll">
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="animate-on-scroll">
              <div className="relative rounded-lg overflow-hidden glow-effect">
                <img
                  src="me22.jpg"
                  alt="Uday's portrait"
                  className="w-full h-auto rounded-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
              </div>
            </div>

            <div className="space-y-6 animate-on-scroll">
              <p className="text-lg text-gray-300 leading-relaxed">
                Hello! I'm Uday, a passionate Full-Stack Developer with expertise in building modern, responsive, and
                user-friendly web applications. With a strong foundation in both frontend and backend technologies, I
                create seamless digital experiences that solve real-world problems.
              </p>

              <p className="text-lg text-gray-300 leading-relaxed">
                My journey in web development started 5 years ago, and since then, I've worked on various projects
                ranging from e-commerce platforms to complex enterprise applications. I'm constantly learning and
                adapting to new technologies to stay at the forefront of web development.
              </p>

              <div className="pt-4">
                <h3 className="text-xl font-bold text-indigo-300 mb-3">My approach:</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-indigo-400 mr-2">✓</span>
                    User-centered design and development
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-400 mr-2">✓</span>
                    Clean, maintainable, and scalable code
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-400 mr-2">✓</span>
                    Performance optimization and accessibility
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-400 mr-2">✓</span>
                    Continuous learning and improvement
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" ref={skillsSectionRef} className="section bg-gray-800 text-white py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="section-title text-3xl md:text-4xl lg:text-5xl mb-12 text-white">My Skills</h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <div className="skill-item flex flex-col items-center text-center p-6">
              <div className="w-16 h-16 bg-indigo-900/30 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8 text-indigo-400"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 2l10 6.5v7L12 22 2 15.5v-7L12 2z"></path>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-indigo-300 mb-2">React</h3>
              <p className="text-sm text-gray-400">Building interactive UIs with modern React</p>
            </div>

            <div className="skill-item flex flex-col items-center text-center p-6">
              <div className="w-16 h-16 bg-indigo-900/30 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8 text-indigo-400"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-indigo-300 mb-2">Next.js</h3>
              <p className="text-sm text-gray-400">Server-side rendering and static site generation</p>
            </div>

            <div className="skill-item flex flex-col items-center text-center p-6">
              <div className="w-16 h-16 bg-indigo-900/30 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8 text-indigo-400"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                  <path d="M2 17l10 5 10-5"></path>
                  <path d="M2 12l10 5 10-5"></path>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-indigo-300 mb-2">Node.js</h3>
              <p className="text-sm text-gray-400">Backend development with JavaScript</p>
            </div>

            <div className="skill-item flex flex-col items-center text-center p-6">
              <div className="w-16 h-16 bg-indigo-900/30 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8 text-indigo-400"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1-2-1z"></path>
                  <path d="M16 8h.01"></path>
                  <path d="M12 8h.01"></path>
                  <path d="M8 8h.01"></path>
                  <path d="M16 12h.01"></path>
                  <path d="M12 12h.01"></path>
                  <path d="M8 12h.01"></path>
                  <path d="M16 16h.01"></path>
                  <path d="M12 16h.01"></path>
                  <path d="M8 16h.01"></path>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-indigo-300 mb-2">TypeScript</h3>
              <p className="text-sm text-gray-400">Type-safe JavaScript development</p>
            </div>

            <div className="skill-item flex flex-col items-center text-center p-6">
              <div className="w-16 h-16 bg-indigo-900/30 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8 text-indigo-400"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M2 9l3-3 3 3"></path>
                  <path d="M13 15l3 3 3-3"></path>
                  <path d="M9 22V2"></path>
                  <path d="M15 2v20"></path>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-indigo-300 mb-2">TailwindCSS</h3>
              <p className="text-sm text-gray-400">Utility-first CSS framework</p>
            </div>

            <div className="skill-item flex flex-col items-center text-center p-6">
              <div className="w-16 h-16 bg-indigo-900/30 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8 text-indigo-400"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                  <line x1="8" y1="21" x2="16" y2="21"></line>
                  <line x1="12" y1="17" x2="12" y2="21"></line>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-indigo-300 mb-2">UI/UX Design</h3>
              <p className="text-sm text-gray-400">Creating intuitive user experiences</p>
            </div>

            <div className="skill-item flex flex-col items-center text-center p-6">
              <div className="w-16 h-16 bg-indigo-900/30 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8 text-indigo-400"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="16 18 22 12 16 6"></polyline>
                  <polyline points="8 6 2 12 8 18"></polyline>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-indigo-300 mb-2">API Development</h3>
              <p className="text-sm text-gray-400">RESTful and GraphQL APIs</p>
            </div>

            <div className="skill-item flex flex-col items-center text-center p-6">
              <div className="w-16 h-16 bg-indigo-900/30 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8 text-indigo-400"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                  <path d="M2 17l10 5 10-5M2 12l10 5 10-5"></path>
                </svg>
              </div>
              <h3 className="text-lg font-bold text-indigo-300 mb-2">Databases</h3>
              <p className="text-sm text-gray-400">MongoDB, PostgreSQL, Firebase</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" ref={projectsSectionRef} className="section bg-gray-900 text-white py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="section-title text-3xl md:text-4xl lg:text-5xl mb-12 text-white">Featured Projects</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="project-card">
              <div className="relative overflow-hidden">
                <img
                  src="./Project1.png"
                  alt="Project 1"
                  className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-indigo-300 mb-2">E-Health Record System Using Blockchain Methods</h3>
                <p className="text-gray-400 mb-4">
                  Blockchain based Electronic Health Records
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs bg-indigo-900/40 text-indigo-300 px-2 py-1 rounded">React</span>
                  <span className="text-xs bg-indigo-900/40 text-indigo-300 px-2 py-1 rounded">Solidity</span>
                  <span className="text-xs bg-indigo-900/40 text-indigo-300 px-2 py-1 rounded">Truffle-Ganache</span>
                  <span className="text-xs bg-indigo-900/40 text-indigo-300 px-2 py-1 rounded">Web3.js</span>
                </div>

                <div className="flex justify-between items-center">
                  <a
                    href="#"
                    className="text-indigo-400 hover:text-indigo-300 flex items-center gap-1 transition-colors"
                  >
                    <span>View Project</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>

                  <a
                    href="#"
                    className="text-indigo-400 hover:text-indigo-300 flex items-center gap-1 transition-colors"
                  >
                    <span>Code</span>
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>


            <div className="project-card">
              <div className="relative overflow-hidden">
                <img
                  src="Project2.png"
                  alt="Project 2"
                  className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-indigo-300 mb-2">Event Booking Platform</h3>
                <p className="text-gray-400 mb-4">
                  A platform for booking and managing events with real-time updates.
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs bg-indigo-900/40 text-indigo-300 px-2 py-1 rounded">NextJS</span>
                  <span className="text-xs bg-indigo-900/40 text-indigo-300 px-2 py-1 rounded">Nodemailer</span>
                  <span className="text-xs bg-indigo-900/40 text-indigo-300 px-2 py-1 rounded">GSAP</span>
                </div>

                <div className="flex justify-between items-center">
                  <a
                    href="https://khall.vercel.app/"
                    className="text-indigo-400 hover:text-indigo-300 flex items-center gap-1 transition-colors"
                  >
                    <span>View Project</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>

                  <a
                    href="#"
                    className="text-indigo-400 hover:text-indigo-300 flex items-center gap-1 transition-colors"
                  >
                    <span>Code</span>
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="relative overflow-hidden">
                <img
                  src="Project3.png"
                  alt="Project 3"
                  className="w-full h-48 object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-indigo-300 mb-2">Task Management App</h3>
                <p className="text-gray-400 mb-4">
                  A collaborative task management application with real-time updates and team features.
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs bg-indigo-900/40 text-indigo-300 px-2 py-1 rounded">React.js</span>
                  <span className="text-xs bg-indigo-900/40 text-indigo-300 px-2 py-1 rounded">JavaScript</span>
                  <span className="text-xs bg-indigo-900/40 text-indigo-300 px-2 py-1 rounded">MongoDB</span>
                </div>

                <div className="flex justify-between items-center">
                  <a
                    href="#"
                    className="text-indigo-400 hover:text-indigo-300 flex items-center gap-1 transition-colors"
                  >
                    <span>View Project</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>

                  <a
                    href="#"
                    className="text-indigo-400 hover:text-indigo-300 flex items-center gap-1 transition-colors"
                  >
                    <span>Code</span>
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Contact Section */}
      <><ContactSection></ContactSection></>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">© {new Date().getFullYear()} Uday. All rights reserved.</p>

        </div>
      </footer>
    </>
  )
}

export default Home
