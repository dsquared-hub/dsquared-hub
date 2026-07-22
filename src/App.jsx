import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (event) => {
      const x = (event.clientX / window.innerWidth - 0.5) * 2
      const y = (event.clientY / window.innerHeight - 0.5) * 2

      setMouse({ x, y })
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <div className="space">

      {/* Космический фон */}
      <div className="nebula"></div>

      {/* Звёзды */}
      <div className="stars stars-one"></div>
      <div className="stars stars-two"></div>
      <div className="stars stars-three"></div>

      {/* Летающие частицы */}
      <div className="particles">
        {Array.from({ length: 25 }).map((_, index) => (
          <span key={index}></span>
        ))}
      </div>

      {/* Планета */}
      <div
        className="planet-container"
        style={{
          transform: `
            translate(${mouse.x * 15}px, ${mouse.y * 15}px)
          `,
        }}
      >
        <div className="planet"></div>
        <div className="planet-glow"></div>
        <div className="planet-ring"></div>
      </div>

      {/* Навигация */}
      <header className="navbar">

        <div className="logo">
          <span className="logo-symbol">✦</span>
          DSQUARED
        </div>

        <nav>
          <a href="#home">HOME</a>
          <a href="#about">ABOUT</a>
          <a href="#contact">CONTACT</a>
        </nav>

        <button className="menu-button">
          MENU
        </button>

      </header>

      {/* Главный экран */}
      <main
        className="hero"
        style={{
          transform: `
            translate(${mouse.x * -8}px, ${mouse.y * -8}px)
          `,
        }}
      >

        <div className="hero-badge">
          <span></span>
          SYSTEM ONLINE
        </div>

        <h1>
          EXPLORE
          <br />
          <span>THE UNKNOWN</span>
        </h1>

        <p>
          Welcome to a new digital universe.
          <br />
          Experience technology beyond imagination.
        </p>

        <div className="hero-buttons">

          <button className="primary-button">
            ENTER THE UNIVERSE
            <span>→</span>
          </button>

          <button className="secondary-button">
            DISCOVER MORE
          </button>

        </div>

      </main>

      {/* Нижняя информация */}
      <div className="bottom-info">

        <div>
          <span>01</span>
          <p>DISCOVER</p>
        </div>

        <div>
          <span>02</span>
          <p>EXPLORE</p>
        </div>

        <div>
          <span>03</span>
          <p>CREATE</p>
        </div>

      </div>

      <div className="scroll-indicator">
        <span></span>
        SCROLL TO EXPLORE
      </div>

    </div>
  )
}

export default App
