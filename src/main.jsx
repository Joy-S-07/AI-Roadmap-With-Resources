import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { initCursor } from './Cursor/Cursor.jsx'
initCursor()

createRoot(document.getElementById('root')).render(
    <App />
)
