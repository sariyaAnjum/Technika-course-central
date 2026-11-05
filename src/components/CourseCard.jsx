function CourseCard({ course }) {
  return (
    <div className="course-card">
      <div className="course-icon">{course.icon}</div>

      <h3>{course.name}</h3>

      <p className="course-description">
        {course.description}
      </p>

      <div className="course-info">
        <p>⏳ Duration: {course.duration}</p>
        <p>💰 Cost: ₹{course.cost.toLocaleString("en-IN")}</p>
      </div>

      <button
        className="explore-btn"
        onClick={() =>
          alert(
            `${course.name}\nDuration: ${course.duration}\nCost: ₹${course.cost}`
          )
        }
      >
        Explore Course →
      </button>
    </div>
  );
}

export default CourseCard;