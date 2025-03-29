import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './TailwindCompiled.css'
import App from './App.jsx'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/ReactToastify.css'
// import 'react-toastify/dist/ReactTostify.css';

createRoot(document.getElementById('root')).render(
    <div>
        <App/>
        <ToastContainer></ToastContainer>
    </div>
)
