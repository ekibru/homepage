export default function EducationSection({ schools }) {
    return (
      <div className="education-section">
        <h2>Education</h2>
        {schools.map((school, index) => (
          <div className="education-item" key={index}>
            <h3>{school.schoolName}</h3>
            <p>{school.degree}</p>
            <p>{school.major}</p>
            <p>{school.graduationYear}</p>
          </div>
        ))}
      </div>
    );
  }
  