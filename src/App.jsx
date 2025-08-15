import React, { useRef, useState } from "react";
import {
  Menu,
  X,
  Instagram,
  Twitter,
  Linkedin,
  Mail,
  Play,
  Award,
  Sparkles,
  Users,
  Briefcase,
  Zap,
  Target,
  MessageSquare,
  BookOpen,
  Settings,
  Cpu,
  Star,
  Calendar,
  Clock,
  CheckCircle,
  CheckCircle2,
  ArrowLeft
} from "lucide-react";

/**
 * Main application component responsible for rendering the navigation bar,
 * routing between the homepage and the apply form, and rendering the
 * footer. The homepage itself is decomposed into sections (hero, about,
 * curriculum, instructors, testimonials and call to action) and the
 * apply page contains a simple form that reveals a confirmation once
 * submitted.
 */
export default function App() {
  // Track which page is visible: 'home' for the landing page or 'apply' for the application form.
  const [page, setPage] = useState("home");
  // Control the visibility of the mobile menu.
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // Refs for in-page scrolling to specific sections.
  const sectionsRef = {
    about: useRef(null),
    curriculum: useRef(null),
    instructors: useRef(null),
    testimonials: useRef(null)
  };

  /**
   * Smoothly scroll to a given section on the homepage and close the mobile menu if open.
   *
   * @param {keyof typeof sectionsRef} id - The identifier for the section to scroll to.
   */
  const scrollTo = (id) => {
    const el = sectionsRef[id]?.current;
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation bar */}
      <nav className="fixed top-0 w-full z-50 blur-bg border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              {/* Logo and brand */}
              <div className="w-10 h-10 bg-brandPurple rounded-lg flex items-center justify-center">
                <img
                  src="https://i.imgur.com/g55c0n5.png"
                  alt="Community CVS Logo"
                  className="w-8 h-8"
                />
              </div>
              <h1 className="font-bold text-xl text-brandPurple">
                Community CVS
              </h1>
            </div>
            {/* Desktop links */}
            <div className="hidden md:flex items-center gap-8">
              {page === "home" ? (
                <>
                  <button
                    onClick={() => scrollTo("about")}
                    className="text-gray-700 hover:text-brandPurple font-medium"
                  >
                    About
                  </button>
                    <button
                    onClick={() => scrollTo("curriculum")}
                    className="text-gray-700 hover:text-brandPurple font-medium"
                  >
                    Curriculum
                  </button>
                  <button
                    onClick={() => scrollTo("instructors")}
                    className="text-gray-700 hover:text-brandPurple font-medium"
                  >
                    Instructors
                  </button>
                  <button
                    onClick={() => scrollTo("testimonials")}
                    className="text-gray-700 hover:text-brandPurple font-medium"
                  >
                    Success Stories
                  </button>
                </>
              ) : (
                <button
                  onClick={() => setPage("home")}
                  className="text-gray-700 hover:text-brandPurple font-medium"
                >
                  Home
                </button>
              )}
              <button
                onClick={() => setPage("apply")}
                className="px-4 py-2 rounded-md text-white gradient-bg hover:opacity-90"
              >
                Apply Now
              </button>
            </div>
            {/* Mobile menu toggle */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
          {/* Mobile menu items */}
          {isMenuOpen && (
            <div className="md:hidden pb-4 space-y-2">
              {page === "home" ? (
                <>
                  <button
                    onClick={() => scrollTo("about")}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-50 rounded-lg"
                  >
                    About
                  </button>
                  <button
                    onClick={() => scrollTo("curriculum")}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-50 rounded-lg"
                  >
                    Curriculum
                  </button>
                  <button
                    onClick={() => scrollTo("instructors")}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-50 rounded-lg"
                  >
                    Instructors
                  </button>
                  <button
                    onClick={() => scrollTo("testimonials")}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-50 rounded-lg"
                  >
                    Success Stories
                  </button>
                </>
              ) : (
                <button
                  onClick={() => {
                    setPage("home");
                    setIsMenuOpen(false);
                  }}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-50 rounded-lg"
                >
                  Home
                </button>
              )}
              <div className="px-4">
                <button
                  onClick={() => {
                    setPage("apply");
                    setIsMenuOpen(false);
                  }}
                  className="w-full gradient-bg text-white rounded-md py-2"
                >
                  Apply Now
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Main content area with top padding equal to the nav height */}
      <main className="pt-16">
        {page === "home" ? (
          <Home sectionsRef={sectionsRef} goApply={() => setPage("apply")} />
        ) : (
          <Apply goHome={() => setPage("home")} />
        )}
      </main>

      {/* Footer always shown */}
      <footer className="bg-gray-900 text-white py-16 mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            {/* About column */}
            <div>
              <h3 className="font-semibold text-xl mb-4">About Community CVS</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Community CVS is a not-for-profit organisation dedicated to
                empowering arts, cultural and digital communities across the
                North West. We deliver training, bootcamps and mentoring to
                support creative leaders.
              </p>
            </div>
            {/* Quick links column */}
            <div>
              <h3 className="font-semibold text-xl mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>
                  <button
                    onClick={() => scrollTo("about")}
                    className="hover:text-white"
                  >
                    About
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollTo("curriculum")}
                    className="hover:text-white"
                  >
                    Curriculum
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollTo("instructors")}
                    className="hover:text-white"
                  >
                    Instructors
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollTo("testimonials")}
                    className="hover:text-white"
                  >
                    Success Stories
                  </button>
                </li>
              </ul>
            </div>
            {/* Contact column */}
            <div>
              <h3 className="font-semibold text-xl mb-4">Get in touch</h3>
              <p className="text-gray-400 text-sm mb-4">
                Have questions? We’d love to hear from you. Reach out and one
                of our team members will get back to you shortly.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://www.instagram.com"
                  aria-label="Instagram"
                  className="text-gray-400 hover:text-white"
                >
                  <Instagram className="w-6 h-6" />
                </a>
                <a
                  href="https://twitter.com"
                  aria-label="Twitter"
                  className="text-gray-400 hover:text-white"
                >
                  <Twitter className="w-6 h-6" />
                </a>
                <a
                  href="https://www.linkedin.com"
                  aria-label="LinkedIn"
                  className="text-gray-400 hover:text-white"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href="mailto:info@communitycvs.com"
                  aria-label="Email"
                  className="text-gray-400 hover:text-white"
                >
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-800 pt-6 text-center text-gray-600 text-xs">
            &copy; {new Date().getFullYear()} Community CVS. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

/**
 * The homepage component encapsulating all content sections. Each section is
 * implemented as a semantic <section> with its own heading and content. The
 * sections use refs passed down from App to enable smooth scrolling from
 * navigation links.
 */
function Home({ sectionsRef, goApply }) {
  // Define the curriculum modules with associated icons and descriptions.
  const modules = [
    {
      icon: Award,
      title: "Leadership Fundamentals",
      description:
        "Explore the core principles of leadership, including vision setting, communication and ethical decision‑making."
    },
    {
      icon: Sparkles,
      title: "Creative Innovation",
      description:
        "Learn how to foster innovation in teams, harness creative thinking and drive breakthrough ideas to execution."
    },
    {
      icon: Users,
      title: "Team Dynamics",
      description:
        "Understand group dynamics, conflict resolution and techniques to build high‑performing, inclusive teams."
    },
    {
      icon: Briefcase,
      title: "Project Management",
      description:
        "Gain practical skills in planning, budgeting and risk management for delivering successful creative projects."
    },
    {
      icon: Zap,
      title: "Digital Transformation",
      description:
        "Navigate the digital landscape, leverage emerging tools and develop strategies to stay ahead in the arts and culture sectors."
    },
    {
      icon: Target,
      title: "Personal Development",
      description:
        "Develop habits and mindsets to sustain growth, resilience and continuous improvement as a leader."
    }
  ];

  // Instructors information. Images are sourced from Unsplash and have descriptive alt text.
  const instructors = [
    {
      name: "Alice Greenwood",
      role: "Creative Director & Mentor",
      image:
        "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Samuel Patel",
      role: "Leadership Coach",
      image:
        "https://images.unsplash.com/photo-1544725176-7c40e5a2c9f9?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Yasmin Khan",
      role: "Digital Strategist",
      image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=400&q=80"
    }
  ];

  // Testimonials data. Each testimonial includes the name, quote and a star rating.
  const testimonials = [
    {
      name: "Jamie L.",
      quote:
        "This bootcamp transformed the way I lead my team. The mix of theory and hands‑on practice was perfect.",
      rating: 5
    },
    {
      name: "Marta K.",
      quote:
        "I’ve grown my confidence as a creative leader and gained a network of supportive peers.",
      rating: 4
    },
    {
      name: "Owen R.",
      quote:
        "The instructors really care about your development. I highly recommend this programme!",
      rating: 5
    }
  ];

  return (
    <>
      {/* Hero section */}
      <section className="relative h-[70vh] flex items-center justify-center text-center overflow-hidden">
        {/* Background image */}
        <img
          src="https://images.unsplash.com/photo-1515169067865-5387ec356754?auto=format&fit=crop&w=2000&q=80"
          alt="Creative team brainstorming"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60" />
        {/* Content */}
        <div className="relative z-10 max-w-3xl mx-auto px-4 text-white">
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight">
            Creative Leadership & Management Skills Bootcamp
          </h2>
          <p className="text-lg sm:text-xl mb-8 text-gray-200">
            Fully‑funded programme for arts, culture & digital professionals to
            unlock their leadership potential.
          </p>
          <button
            onClick={goApply}
            className="inline-flex items-center gap-2 px-8 py-3 rounded-md text-white gradient-bg hover:opacity-90 hover-lift"
          >
            Apply Now
            <ArrowLeft className="w-4 h-4 rotate-180" />
          </button>
        </div>
      </section>

      {/* About section */}
      <section ref={sectionsRef.about} className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-4 gradient-text">
            About the Bootcamp
          </h3>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
            Our Creative Leadership & Management Skills Bootcamp is an intensive
            programme designed for individuals working in the arts, culture and
            digital sectors. Over twelve weeks, you’ll develop the mindset,
            skills and network needed to lead with confidence, foster
            innovation and manage complex projects. The bootcamp is fully
            funded, meaning there are no tuition fees for eligible
            participants.
          </p>
        </div>
      </section>

      {/* Curriculum section */}
      <section ref={sectionsRef.curriculum} className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-3xl font-bold mb-12 text-center gradient-text">
            Curriculum Overview
          </h3>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {modules.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="p-6 rounded-lg border border-gray-200 bg-white hover-lift creative-border"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-md gradient-bg text-white mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <h4 className="font-semibold text-lg mb-2">{title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instructors section */}
      <section ref={sectionsRef.instructors} className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-3xl font-bold mb-12 text-center gradient-text">
            Meet Your Instructors
          </h3>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {instructors.map(({ name, role, image }) => (
              <div
                key={name}
                className="text-center p-6 rounded-lg border border-gray-200 bg-white hover-lift creative-border"
              >
                <img
                  src={image}
                  alt={`${name} portrait`}
                  className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
                />
                <h4 className="font-semibold text-lg">{name}</h4>
                <p className="text-gray-500 text-sm">{role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials section */}
      <section ref={sectionsRef.testimonials} className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-3xl font-bold mb-12 text-center gradient-text">
            Success Stories
          </h3>
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Embedded YouTube video */}
            <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.youtube.com/embed/JfOTzbGXZSE"
                title="Bootcamp Success Stories"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
            {/* Testimonials list */}
            <div className="space-y-8">
              {testimonials.map(({ name, quote, rating }) => (
                <div key={name} className="p-6 rounded-lg border border-gray-200 bg-white hover-lift creative-border">
                  <div className="flex items-center gap-2 mb-2">
                    {Array.from({ length: rating }).map((_, idx) => (
                      <Star key={idx} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                  <p className="text-gray-700 italic mb-3">“{quote}”</p>
                  <p className="font-medium text-gray-900">– {name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to action section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-4 gradient-text">Ready to level up your leadership?</h3>
          <p className="text-gray-600 text-lg mb-8">
            Seats are limited. Don’t miss your chance to join the next cohort of
            the Creative Leadership & Management Skills Bootcamp.
          </p>
          <button
            onClick={goApply}
            className="inline-flex items-center gap-2 px-8 py-3 rounded-md text-white gradient-bg hover:opacity-90 hover-lift"
          >
            Apply Now
            <ArrowLeft className="w-4 h-4 rotate-180" />
          </button>
        </div>
      </section>
    </>
  );
}

/**
 * Application form component. Presents a simple form requesting basic
 * applicant details. Upon submission, the form disappears and a success
 * message is displayed. The user can navigate back to the home page using
 * the provided button.
 */
function Apply({ goHome }) {
  const [submitted, setSubmitted] = useState(false);
  // Form state to track user input; not strictly necessary but useful if we
  // wanted to extend functionality such as validation or sending data to a
  // backend. For now, values are stored here for completeness.
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organisation: "",
    message: ""
  });

  // Handle form submission. Prevent default behaviour and mark as submitted.
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  // Handle input changes generically.
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-20">
      {!submitted ? (
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-xl space-y-6 p-8 bg-white rounded-lg shadow-lg border border-gray-200"
        >
          <h2 className="text-2xl font-bold gradient-text mb-4">Apply Now</h2>
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brandPurple focus:ring-brandPurple"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brandPurple focus:ring-brandPurple"
            />
          </div>
          <div>
            <label htmlFor="organisation" className="block text-sm font-medium text-gray-700">
              Organisation
            </label>
            <input
              type="text"
              id="organisation"
              name="organisation"
              value={formData.organisation}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brandPurple focus:ring-brandPurple"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Tell us why you're interested (optional)
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brandPurple focus:ring-brandPurple"
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-3 rounded-md text-white gradient-bg hover:opacity-90 hover-lift"
          >
            Submit Application
          </button>
          <div className="text-center">
            <button
              type="button"
              onClick={goHome}
              className="text-brandPurple hover:underline text-sm"
            >
              &larr; Back to Home
            </button>
          </div>
        </form>
      ) : (
        <div className="w-full max-w-lg p-8 bg-white rounded-lg shadow-lg text-center border border-gray-200">
          <CheckCircle2 className="w-12 h-12 mx-auto text-brandPink mb-4" />
          <h2 className="text-2xl font-bold mb-4 gradient-text">
            Application submitted!
          </h2>
          <p className="text-gray-700 mb-8">
            Thank you for applying. Our team will review your application and
            contact you within the next few working days.
          </p>
          <button
            onClick={goHome}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md text-white gradient-bg hover:opacity-90 hover-lift"
          >
            Back to Home
            <ArrowLeft className="w-4 h-4 rotate-180" />
          </button>
        </div>
      )}
    </div>
  );
}
