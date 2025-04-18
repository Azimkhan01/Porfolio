import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ReactGA from 'react-ga4';
// Initialize Google Analytics with your GA4 Measurement ID
ReactGA.initialize('G-VDXCWBK4XB');

// Track page views
ReactGA.send('pageview'); // Sends a pageview hit when the app starts

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
