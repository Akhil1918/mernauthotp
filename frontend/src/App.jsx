import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import EmailForm from './components/EmailForm/EmailForm'
import OTPForm from './components/OTPForm/OTPForm'
import Welcome from './components/Welcome/Welcome'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<EmailForm />} />
        <Route path="/verify-otp" element={<OTPForm />} />
        <Route path="/welcome" element={<Welcome />} />
      </Routes>
    </Router>
  )
}

export default App
