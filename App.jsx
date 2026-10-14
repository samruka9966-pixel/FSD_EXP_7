import { useState } from 'react'
import AcademicDetails from './components/AcademicDetails'
import ContactDetails from './components/ContactDetails'
import StudentDetails from './components/StudentDetails'
import './App.css'

function App() {
  const [form, setForm] = useState({
    name: '',
    rollno: '',
    gender: '',
    department: '',
    year: '',
    email: '',
    phone: '',
    address: '',
  })

  function handleChange(event) {
    const { name, value } = event.target
    setForm((currentForm) => ({ ...currentForm, [name]: value }))
  }

  function handleSubmit(event) {
    event.preventDefault()
    window.alert('Registration submitted successfully!')
  }

  return (
    <main className="container">
      <h2>Student Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <StudentDetails form={form} handleChange={handleChange} />
        <AcademicDetails form={form} handleChange={handleChange} />
        <ContactDetails form={form} handleChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
    </main>
  )
}

export default App
