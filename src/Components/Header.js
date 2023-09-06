import React from 'react';
// // Get the current URL path
// var currentPath = window.location.pathname;

// // Get all the navigation links
// var navLinks = document.querySelectorAll('nav a');

// // Loop through the navigation links and add the "active" class to the current page's link
// navLinks.forEach(function(link) {
//     if (link.getAttribute('href') === currentPath) {
//         link.classList.add('active');
//     }
// });

function Header() {
  return (
    <header>
      <header>
      <nav className="navbar">
        <div className="container">
          <a href="#" className="logo">HEMALADHA MURUGAN</a>
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#Skills">Skills</a></li>
            <li><a href="#Education">Education</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
            
          </ul>
        </div>
      </nav>
    </header>
    </header>
  );
}

export default Header;