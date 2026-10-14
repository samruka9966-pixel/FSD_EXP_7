function ContactDetails({ form, handleChange }) {
  return (
    <>
      <h3>Contact Details</h3>

      <input
        type="email"
        name="email"
        placeholder="Email Address"
        value={form.email}
        onChange={handleChange}
        required
      />

      <input
        type="tel"
        name="phone"
        placeholder="10-digit Phone Number"
        value={form.phone}
        onChange={handleChange}
        pattern="[0-9]{10}"
        required
      />

      <textarea
        name="address"
        placeholder="Address"
        value={form.address}
        onChange={handleChange}
        required
      />
    </>
  );
}

export default ContactDetails;