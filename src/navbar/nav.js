import React from 'react'
import health from '../image/Frame 1.png'
import '../styles/nav.css'
export default function Nav() {

  return (
    <>
<nav class="navbar">

    <div class="logo"><img src={health} alt=""/></div>

    <ul class="nav-links">

      <input type="checkbox" id="checkbox_toggle" />
      <label for="checkbox_toggle" class="hamburger">&#9776;</label>

      <div class="menu">

        <li><a href="/">Home</a></li>
        <li><a href="/">About</a></li>

        <li class="services">
          <a href="/">Courses</a>

          <ul class="dropdown">
            <li><a href="/">Web Development</a></li>
            <li><a href="/">Graphics</a></li>
            <li><a href="/">Web Design</a></li>
            <li><a href="/">3d Animation</a></li>
            <li><a href="/">UI/UX</a></li>
          </ul>

        </li>

        <li><a href="/">Blog</a></li>
        <li><a  href="/">Contact us</a></li>
      </div>
    </ul>
  </nav>

    </>
  )
}
