import { createRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import SupportPage from './components/SupportPage'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <HelmetProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/support" element={<SupportPage />} />
      </Routes>
    </BrowserRouter>
  </HelmetProvider>
)
