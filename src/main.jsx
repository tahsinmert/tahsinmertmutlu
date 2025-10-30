import React from 'react'
import ReactDOM from 'react-dom/client'
import UltraCV from '../UltraCV.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UltraCV 
      name="Tahsin Mert Mutlu"
      role="UI/UX Designer & Web Developer"
      bio="4+ years of experience designing user-centered interfaces and developing modern, fast, and responsive websites. Creating clean, aesthetic, and functional digital experiences."
      email="tahsinmert.mutlu@std.yeditepe.edu.tr"
      phone="+90 545 897 6442"
    />
  </React.StrictMode>,
)

