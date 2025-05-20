import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import React from 'react'
import App from './App.jsx'
import { GoogleOAuthProvider } from '@react-oauth/google';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GoogleOAuthProvider clientId="813351025785-qu7b9a5svgstiabqokio6ujr6tr6btqr.apps.googleusercontent.com">
    <App/>
    </GoogleOAuthProvider>
  </StrictMode>,
)
