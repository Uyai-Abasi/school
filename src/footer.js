import React from 'react'
import './styles/footer.css'
import img from './image/Frame 1.png'
import twitter from './image/et_twitter.png'
import link from './image/et_linkedin.png'
import ig from './image/bxl_instagram.png'
import fb from './image/circum_facebook.png'

export default function Footer() {
  return (
    <div>
         <footer  style={{marginTop:"100px"}}>
        <div class="footer-container">
            <div class="logo">
                <img src={img} alt="Mw"  />
            </div>
            <div class="footer-section">
            <div class="footer-item">
                    <h3>Follow us</h3>
                    <div style={{display:"flex",alignContent:"center",gap:"16px"}}>

                    <img src={twitter} alt='' />
                    <img src={link} alt='' />
                    <img src={fb} alt='' />
                    <img src={ig} alt='' />

                    </div>
                </div>
                <div class="footer-item">
                    
                    <h3>Useful Links</h3>
                    <p>Our Projects</p>
                    <p>FAQ’s</p>
                    <p>News and Updates</p>
                </div>
                
             
                <div class="footer-item">
                    <h3>Contact</h3>
                    <p>Tel: +234 709 456 1234</p>
                    <p>Email: Support@startup.ng</p>
                </div>
            </div>
        </div>
    </footer>
    </div>
  )
}
