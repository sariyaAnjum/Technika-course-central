import { useState } from "react";
import CourseList from "./components/CourseList";
import "./App.css";

const courses = [
  // Technical Fields
  {
    id: 1,
    name: "AI & Machine Learning",
    category: "Technical Fields",
    duration: "4 Months",
    cost: 12000,
    icon: "🤖",
    description: "Build intelligent applications using AI."
  },
  {
    id: 2,
    name: "Web Development",
    category: "Technical Fields",
    duration: "3 Months",
    cost: 9000,
    icon: "🌐",
    description: "Create modern and responsive websites."
  },
  {
    id: 3,
    name: "Data Science",
    category: "Technical Fields",
    duration: "5 Months",
    cost: 15000,
    icon: "📊",
    description: "Analyze data and find useful insights."
  },
  {
    id: 4,
    name: "Cloud Computing",
    category: "Technical Fields",
    duration: "3 Months",
    cost: 10000,
    icon: "☁️",
    description: "Learn cloud platforms and deployment."
  },
  {
    id: 5,
    name: "Cybersecurity",
    category: "Technical Fields",
    duration: "4 Months",
    cost: 13000,
    icon: "🔐",
    description: "Protect systems and secure applications."
  },

  // Programming Languages
  {
    id: 6,
    name: "JavaScript",
    category: "Programming Languages",
    duration: "2 Months",
    cost: 5000,
    icon: "💛",
    description: "Learn interactive web programming."
  },
  {
    id: 7,
    name: "Python",
    category: "Programming Languages",
    duration: "3 Months",
    cost: 6000,
    icon: "🐍",
    description: "Learn simple and powerful programming."
  },
  {
    id: 8,
    name: "Java",
    category: "Programming Languages",
    duration: "3 Months",
    cost: 7000,
    icon: "☕",
    description: "Develop object-oriented applications."
  },
  {
    id: 9,
    name: "C++",
    category: "Programming Languages",
    duration: "2 Months",
    cost: 4500,
    icon: "💻",
    description: "Understand programming fundamentals."
  },
  {
    id: 10,
    name: "React",
    category: "Programming Languages",
    duration: "2 Months",
    cost: 6000,
    icon: "⚛️",
    description: "Build modern React applications."
  }
];

function App() {
  const [category, setCategory] = useState("Technical Fields");

  const filteredCourses = courses.filter(
    (course) => course.category === category
  );

  return (
    <div className="app">

      {/* Navigation */}
      <nav className="navbar">
        <h2 className="logo">⚡ Technika</h2>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#courses">Courses</a>
          <a href="#about">About</a>
        </div>

        <a href="#courses" className="get-started">
          Get Started
        </a>
      </nav>

      {/* Hero Section */}
      <header className="hero" id="home">
        <div className="hero-content">
          <span className="tag">🚀 Learn. Build. Grow.</span>

          <h1>
            Technika <span>Course Central</span>
          </h1>

          <p>
            Explore industry-relevant technical courses
            and programming languages. Build your
            skills and start your career in technology.
          </p>

          <a href="#courses" className="hero-btn">
            Explore Courses →
          </a>
        </div>

        <div className="hero-image">
          <div className="laptop">💻</div>
          <h2>Learn Technology</h2>
          <p>Build Your Future With Technika</p>
        </div>
      </header>

      {/* About Section */}
      <section className="about" id="about">
        <h2>About Technika</h2>
        <p>
          Technika Course Central is a learning platform
          that provides students with different technical
          courses and programming languages to improve
          their knowledge and career opportunities.
        </p>
      </section>

      {/* Course Section */}
      <section className="courses-section" id="courses">

        <div className="section-heading">
          <h2>Explore Our Courses</h2>
          <p>Choose your learning path</p>
        </div>

        {/* Category Buttons */}
        <div className="category-buttons">
          <button
            className={
              category === "Technical Fields" ? "active" : ""
            }
            onClick={() => setCategory("Technical Fields")}
          >
            ⚙ Technical Fields (5)
          </button>

          <button
            className={
              category === "Programming Languages" ? "active" : ""
            }
            onClick={() =>
              setCategory("Programming Languages")
            }
          >
            {"</>"} Programming Languages (5)
          </button>
        </div>

        <h3 className="category-title">
          {category}
        </h3>

        <CourseList courses={filteredCourses} />

        <p className="total-courses">
          Showing {filteredCourses.length} courses
          out of {courses.length} total courses.
        </p>

      </section>

      {/* Footer */}
      <footer>
        <h2>⚡ Technika Course Central</h2>
        <p>Learn Today. Lead Tomorrow.</p>
        <p>© 2026 Technika. All Rights Reserved.</p>
      </footer>

    </div>
  );
}

export default App;