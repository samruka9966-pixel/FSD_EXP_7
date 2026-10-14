function AcademicDetails({ form, handleChange }) {
  return (
    <>
      <h3>Academic Details</h3>

      <select
        name="department"
        value={form.department}
        onChange={handleChange}
        required
      >
        <option value="">Select Department</option>
        <option>IT</option>
        <option>CSE</option>
        <option>ECE</option>
        <option>EEE</option>
        <option>Mechanical</option>
      </select>

      <select
        name="year"
        value={form.year}
        onChange={handleChange}
        required
      >
        <option value="">Select Year</option>
        <option>First Year</option>
        <option>Second Year</option>
        <option>Third Year</option>
        <option>Fourth Year</option>
      </select>
    </>
  );
}

export default AcademicDetails;