import React from 'react'
import './Footer.css'


function Footer() {
  return (
    <>
      <div style={{backgroundColor: '#DEB887'}} className= "mt-4">
        <div className="container mt-5 w-100 " style={{ height: '250px' }}>
          <div className="footer-content d-flex justify-content-between ">
            <div className="xylem">
          
             <h1 style={{ backgroundColour: '#DEB887'}}>xylem</h1>
              <p>Copyright &copy; 2024 xylem ltd.
                All rights reserved</p>
              <div className="icons d-flex justify-content-between mt-5">
                <a href='https://react.dev/' target='_blank' style={{ textDecoration: 'none', color: 'white' }}><i class="fa-brands fa-instagram"></i></a>
                <a href='https://react.dev/' target='_blank' style={{ textDecoration: 'none', color: 'white' }}><i class="fa-brands fa-twitter"></i></a>

                <a href='https://react.dev/' target='_blank' style={{ textDecoration: 'none', color: 'white' }}><i class="fa-brands fa-facebook"></i></a>
                <a href='https://react.dev/' target='_blank' style={{ textDecoration: 'none', color: 'white' }}><i class="fa-brands fa-linkedin"></i></a>
              </div>

            </div>
            <div className="Company d-flex flex-column">
            <h5>Quick Links</h5>
            <a href='#Home'  target='_blank' style={{textDecoration:'none',color:'white'}}>Home</a>
            <a href='#About'  target='_blank' style={{textDecoration:'none',color:'white'}}>About</a>
            <a href='#courses'  target='_blank' style={{textDecoration:'none',color:'white'}}>Courses</a>
            <a href='#Home'  target='_blank' style={{textDecoration:'none',color:'white'}}>Reviews</a>
            <a href='#Home'  target='_blank' style={{textDecoration:'none',color:'white'}}>Contact</a>



        </div>
        <div className="support d-flex flex-column">
            <h5>Support</h5>
            <a href='https://react.dev/'  target='_blank' style={{textDecoration:'none',color:'white'}}>Help center</a>
            <a href='#'  target='_blank' style={{textDecoration:'none',color:'white'}}>Terms of service</a>
            <a href='#'  target='_blank' style={{textDecoration:'none',color:'white'}}>Legal</a>
            <a href='#'  target='_blank' style={{textDecoration:'none',color:'white'}}>Privacy policy</a>
            <a href='#'  target='_blank' style={{textDecoration:'none',color:'white'}}>Status</a>



        </div>
        <div className="contact">
            <h5>Contacts Us</h5>
            <div className="d-flex">
                <input className="form-control me-1" type='text' placeholder='Email Id Please' style={{height:'50px'}}></input>
                <button className='ms-2 rounded' style={{ backgroundColor: '#ffff', width: '100px', color: 'white', height: '50px', border: 'none' }}><i style={{ backgroundColor: '#DEB887'}}class="fa-solid fa-arrow-right"></i></button>
              
            </div>
            
        </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Footer



