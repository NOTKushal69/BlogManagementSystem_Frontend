import { Link } from "react-router-dom"

const Navbar=()=>{
  return(
    <>
<div>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Extreme Cyberpunk Navbar</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
  <style dangerouslySetInnerHTML={{__html: "\n        @keyframes neon-pulse {\n            0%, 100% { text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #00ffff, 0 0 35px #00ffff, 0 0 40px #00ffff, 0 0 50px #00ffff, 0 0 75px #00ffff; }\n            50% { text-shadow: 0 0 2px #fff, 0 0 5px #fff, 0 0 7px #fff, 0 0 10px #00ffff, 0 0 17px #00ffff, 0 0 20px #00ffff, 0 0 25px #00ffff, 0 0 37px #00ffff; }\n        }\n\n        .neon-text {\n            animation: neon-pulse 1.5s infinite alternate;\n        }\n\n        .bg-animated {\n            background: linear-gradient(-45deg, #000000, #1a1a1a, #000033, #003366);\n            background-size: 400% 400%;\n            animation: gradient 15s ease infinite;\n        }\n\n        @keyframes gradient {\n            0% { background-position: 0% 50%; }\n            50% { background-position: 100% 50%; }\n            100% { background-position: 0% 50%; }\n        }\n\n        .cyber-grid {\n            background-image: linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),\n                              linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px);\n            background-size: 20px 20px;\n            animation: cyber-grid-move 20s linear infinite;\n        }\n\n        @keyframes cyber-grid-move {\n            0% { background-position: 0 0; }\n            100% { background-position: 20px 20px; }\n        }\n\n        .nav-link {\n            position: relative;\n            overflow: hidden;\n        }\n\n        .nav-link::before {\n            content: '';\n            position: absolute;\n            bottom: 0;\n            left: 0;\n            width: 100%;\n            height: 2px;\n            background-color: #00ffff;\n            transform: translateX(-100%);\n            transition: transform 0.3s ease;\n        }\n\n        .nav-link:hover::before {\n            transform: translateX(0);\n        }\n\n        .nav-link::after {\n            content: attr(data-text);\n            position: absolute;\n            top: 0;\n            left: 0;\n            width: 100%;\n            height: 100%;\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            transform: translateY(100%);\n            background: linear-gradient(to bottom, #00ffff, #0080ff);\n            -webkit-background-clip: text;\n            -webkit-text-fill-color: transparent;\n            transition: transform 0.3s ease;\n        }\n\n        .nav-link:hover::after {\n            transform: translateY(0);\n        }\n\n        .glitch-effect {\n            position: relative;\n        }\n\n        .glitch-effect::before,\n        .glitch-effect::after {\n            content: attr(data-text);\n            position: absolute;\n            top: 0;\n            left: 0;\n            width: 100%;\n            height: 100%;\n            opacity: 0.8;\n        }\n\n        .glitch-effect::before {\n            left: 2px;\n            text-shadow: -2px 0 #ff00de;\n            clip: rect(24px, 550px, 90px, 0);\n            animation: glitch-anim 3s infinite linear alternate-reverse;\n        }\n\n        .glitch-effect::after {\n            left: -2px;\n            text-shadow: -2px 0 #00ffff;\n            clip: rect(85px, 550px, 140px, 0);\n            animation: glitch-anim 2s infinite linear alternate-reverse;\n        }\n\n        @keyframes glitch-anim {\n            0% { clip: rect(39px, 9999px, 71px, 0); }\n            20% { clip: rect(3px, 9999px, 5px, 0); }\n            40% { clip: rect(6px, 9999px, 38px, 0); }\n            60% { clip: rect(13px, 9999px, 43px, 0); }\n            80% { clip: rect(44px, 9999px, 93px, 0); }\n            100% { clip: rect(54px, 9999px, 47px, 0); }\n        }\n\n        #menu-toggle:checked ~ .menu-icon .hamburger {\n            transform: rotate(45deg);\n        }\n\n        #menu-toggle:checked ~ .menu-icon .hamburger::before {\n            transform: translateY(8px) rotate(90deg);\n        }\n\n        #menu-toggle:checked ~ .menu-icon .hamburger::after {\n            transform: translateY(-8px) rotate(90deg);\n        }\n\n        .hamburger,\n        .hamburger::before,\n        .hamburger::after {\n            content: '';\n            display: block;\n            background: #00ffff;\n            height: 3px;\n            width: 30px;\n            transition: transform 0.5s cubic-bezier(0.23, 1, 0.32, 1);\n        }\n\n        .hamburger::before { transform: translateY(-8px); }\n        .hamburger::after { transform: translateY(8px); }\n\n        @media (max-width: 768px) {\n            .menu {\n                position: fixed;\n                top: 60px;\n                left: 0;\n                width: 100%;\n                height: 0;\n                background: rgba(0, 0, 0, 0.9);\n                overflow: hidden;\n                transition: height 0.5s cubic-bezier(0.23, 1, 0.32, 1);\n            }\n\n            #menu-toggle:checked ~ .menu {\n                height: calc(100vh - 60px);\n            }\n        }\n    " }} />
  <nav className="bg-animated cyber-grid fixed w-full z-50">
    <div className="container mx-auto px-4">
      <div className="flex justify-between items-center py-4">
        <Link to="/" className="text-2xl font-bold neon-text glitch-effect" data-text="BlogManager">BlogManager</Link>
        <input type="checkbox" id="menu-toggle" className="hidden" />
        <label htmlFor="menu-toggle" className="menu-icon cursor-pointer md:hidden">
          <span className="hamburger" />
        </label>
        <ul className="menu hidden md:flex md:items-center space-x-6">
          <li><Link to="/" className="nav-link" data-text="Home">Home</Link></li>
          <li><Link to="/create-page" className="nav-link" data-text="Create">Create</Link></li>
          
          <li><a href="#" className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold py-2 px-4 rounded hover:from-cyan-600 hover:to-blue-600 transition-all duration-300">Sign In</a></li>

          <li><a href="#" className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold py-2 px-4 rounded hover:from-cyan-600 hover:to-blue-600 transition-all duration-300">Sign Up</a></li>
        </ul>
      </div>
    </div>
  </nav>

</div>

    </>
  )

}

export default Navbar