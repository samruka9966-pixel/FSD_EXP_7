function StudentDetails({ form, handleChange }) {
  return (
    <>
      <h3>Student Details</h3>

      <input
        name="name"
        placeholder="Student Name"
        value={form.name}
        onChange={handleChange}
        required
      />

      <input
        name="rollno"
        placeholder="Roll Number"
        value={form.rollno}
        onChange={handleChange}
        required
      />

      <select
        name="gender"
        value={form.gender}
        onChange={handleChange}
        required
      >
        <option value="">Select Gender</option>
        <option>Male</option>
        <option>Female</option>
        <option>Other</option>
      </select>
    </>
  );
}

export default StudentDetails;