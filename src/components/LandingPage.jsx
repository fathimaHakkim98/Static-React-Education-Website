import React from 'react'
import { Card } from 'react-bootstrap'
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './LandingPage.css'


function LandingPage() {
  return (
    <>
      <div className="header">
  <div className="row">
  <div className="container" style={{ position: 'relative', width: '100%', height: '500px' }}>
  <img src="https://images.pexels.com/photos/6146978/pexels-photo-6146978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="Description of image" />
  <div className="content" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', padding: '20px', color: 'white', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
 
      <h1 className='mt-5 ms-lg-5 mb-r' style={{ fontSize: '50px' }}>Boost up Your Skills  <br /><span style={{ color: '#DEB887' }}>With a New Way Of Learning </span></h1>
      <button className='btnr  ms-5' style={{ backgroundColor: '#DEB887', width: '100px', color: 'white', height: '50px', border: 'none' }}>Register</button>
    </div>
  </div>
  </div>
</div>


      <hr />
      <section>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about__img">
              <img src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="about__content">
              <h2 style={{ color: '#DEB887' }}>About Us</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Excepturi cupiditate animi deserunt libero nesciunt corporis
                explicabo nobis ex quo molestiae!
              </p>
              
             
                <div className="about__counter ">
                  <div style={{backgroundColor:'#DEB887'}} className="box__wrapper">
                    <div className="d-flex gap-5 align-items-center">
                      <div className="single__counter ">
                        <span style={{color:'#ffff',marginLeft:'20px', fontWeight:'400',fontSize:'20px'}} className="counter mt-5">
                                    Online Courses</span>
                        <p style={{marginLeft:'30px'}}className="counter__title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti nulla laudantium deserunt enim voluptatem, ea facilis eveniet ratione non. Autem laboriosam sunt voluptas delectus provident minus repellat vero quod sit!</p>
                      </div>
  
                     </div>
             
            
                   <hr/>

                <div style={{marginTop: '50px'}} className="box__wrapper ">
                  <div className="d-flex gap-5 align-items-center ">
                    <div className="single__counter">
                      <span style={{color:'#ffff',marginLeft:'20px', fontWeight:'400',fontSize:'20px'}}  className="counter">
                                 Earn A Certificates</span>
                      <p style={{marginLeft:'30px'}} className="counter__title">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim nihil molestias consequuntur atque veniam dolore sint explicabo expedita illo tenetur accusantium ullam, odio ducimus nemo hic ratione officiis, possimus totam!</p>
                    </div>
                    </div>
                </div>
             
             
 
                <hr/ >
                <div  className="box__wrapper mt-4">
                  <div className="d-flex gap-5 align-items-center"></div>
                    <div className="single__counter">
                      <span style={{color:'#ffff',marginLeft:'20px', fontWeight:'500',fontSize:'20px'}}className="counter">Learn With Expert</span>
                      <p style={{marginLeft:'30px'}} className="counter__title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, ipsum. Dignissimos doloremque nostrum mollitia ducimus repudiandae aliquid, pariatur perspiciatis assumenda natus tenetur, ipsam maxime deserunt odit numquam laudantium rem. Atque.</p>
                    </div>
                    </div>
                    
                 
            </div>

            
            <hr/>

<div style={{marginTop: '50px'}} className="box__wrapper ">
  <div className="d-flex gap-5 align-items-center ">
    <div className="single__counter">
      <span style={{color:'#DEB887',marginLeft:'20px', fontWeight:'600',fontSize:'40px'}}  className="counter">
           Why Choose Us  </span>
      <p style={{marginLeft:'30px'}} className="counter__title mt-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim nihil molestias consequuntur atque veniam dolore sint explicabo expedita illo tenetur accusantium ullam, odio ducimus nemo hic ratione officiis, possimus totam!</p>
    </div>
    </div>
</div>

               </div>

            </div>
          </Col>
        </Row>
      </Container>
    </section>

      

      <div className="experience" id="experience" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '15rem', height: '30vh', marginBottom: '8rem', color: '#ffff' }}>
      <div className="achievement" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div className="circle" style={{ width: '9rem', height: '9rem', background: '#DEB887', borderRadius: '100%', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '5rem', fontWeight: 'bold', marginBottom: '2rem' }}>
          14+
        </div>
        <span style={{color:'#DEB887'}}>years Experience</span>
      </div>
      <div className="achievement" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center',color: '#fffff' }}>
        <div className="circle" style={{ width: '7rem', height: '7rem', background: '#DEB887', borderRadius: '100%', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '2rem' }}>
          5000+
        </div>
        <span style={{color:'#DEB887'}}>Success Stories</span>
      </div>
      <div className="achievement" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center',color: '#fffff' }}>
        <div className="circle" style={{ width: '5rem', height: '5rem', background: '#DEB887', borderRadius: '100%', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '2rem' }}>
          2000+
        </div>
        <span style={{color:'#DEB887'}}>Students</span>
      </div>

      <div className="achievement" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center',color: '#fffff' }}>
        <div className="circle" style={{ width: '3rem', height: '3rem', background: '#DEB887', borderRadius: '100%', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '2rem' }}>
          10+
        </div>
        <span style={{color:'#DEB887'}}>Courses</span>
      </div>
    </div>
  
  <hr />
    
    <section>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center mb-5">
            <h2 style={{color: '#DEB887'}} className="fw-bold">Our Courses</h2>
          </div>
          
            <div className="col-lg-3 col-md-4 mb-4">
              <div className="single-course-item card">
                <div className="course-img">
                  <img src="https://images.pexels.com/photos/7643856/pexels-photo-7643856.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="card-img-top w-100" />
                </div>
                <div className="course-details card-body">
                  <h6 className="course-title card-title mb-4">Master of Business Administration</h6>
                  <div className="d-flex justify-content-between align-items-center">
                    <p className="lesson d-flex align-items-center gap-1">
                    <i style={{color: '#DEB887'}} class="fa-solid fa-user"></i>15.3K+
                    </p>
                    <p className="students d-flex align-items-center gap-1">
                    <i style={{color: '#DEB887'}} class="fa-solid fa-star"></i>5.3K+
                    </p>
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <p className="rating d-flex align-items-center gap-1">
                     
                    </p>
                    <p className="enroll d-flex align-items-center gap-1">
                      <button style={{backgroundColor:'#DEB887'}}>Enroll Now</button>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-4 mb-4">
              <div className="single-course-item card">
              <div className="course-img">
                  <img src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="card-img-top w-100" />
                </div>
                <div className="course-details card-body">
                  <h6 className="course-title card-title mb-4">artificial intelligence</h6>
                  <div className="d-flex justify-content-between align-items-center">
                    <p className="lesson d-flex align-items-center gap-1">
                    <i style={{color: '#DEB887'}} class="fa-solid fa-user"></i>15.3K+
                    </p>
                    <p className="students d-flex align-items-center gap-1">
                    <i style={{color: '#DEB887'}} class="fa-solid fa-star"></i>5.3K+
                    </p>
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <p className="rating d-flex align-items-center gap-1">
                     
                    </p>
                    <p className="enroll d-flex align-items-center gap-1">
                      <button style={{backgroundColor:'#DEB887'}}>Enroll Now</button>
                    </p>
                  </div>
                </div>
              </div>
            </div>


            <div className="col-lg-3 col-md-4 mb-4">
              <div className="single-course-item card">
              <div className="course-img">
                  <img src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="card-img-top w-100" />
                </div>
                <div className="course-details card-body">
                  <h6 className="course-title card-title mb-4">Software Development</h6>
                  <div className="d-flex justify-content-between align-items-center">
                    <p className="lesson d-flex align-items-center gap-1">
                    <i style={{color: '#DEB887'}} class="fa-solid fa-user"></i>15.3K+
                    </p>
                    <p className="students d-flex align-items-center gap-1">
                    <i style={{color: '#DEB887'}} class="fa-solid fa-star"></i>5.3K+
                    </p>
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <p className="rating d-flex align-items-center gap-1">
                     
                    </p>
                    <p className="enroll d-flex align-items-center gap-1">
                      <button style={{backgroundColor:'#DEB887'}}>Enroll Now</button>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-4 mb-4">
              <div className="single-course-item card">
              <div className="course-img">
                  <img src="https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="card-img-top w-100" />
                </div>
                <div className="course-details card-body">
                  <h6 style={{fontWeight:'500'}} className="course-title card-title mb-4">Electronics & Communication</h6>
                  <div className="d-flex justify-content-between align-items-center">
                    <p className="lesson d-flex align-items-center gap-1">
                    <i style={{color: '#DEB887'}} class="fa-solid fa-user"></i>15.3K+
                    </p>
                    <p className="students d-flex align-items-center gap-1">
                    <i style={{color: '#DEB887'}} class="fa-solid fa-star"></i>5.3K+
                    </p>
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <p className="rating d-flex align-items-center gap-1">
                     
                    </p>
                    <p className="enroll d-flex align-items-center gap-1">
                      <button style={{backgroundColor:'#DEB887'}}>Enroll Now</button>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-4 mb-4">
              <div className="single-course-item card">
              <div className="course-img">
                  <img src="https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="card-img-top w-100" />
                </div>
                <div className="course-details card-body">
                  <h6 style={{fontWeight:'500'}} className="course-title card-title mb-4">Electronics & Communication</h6>
                  <div className="d-flex justify-content-between align-items-center">
                    <p className="lesson d-flex align-items-center gap-1">
                    <i style={{color: '#DEB887'}} class="fa-solid fa-user"></i>15.3K+
                    </p>
                    <p className="students d-flex align-items-center gap-1">
                    <i style={{color: '#DEB887'}} class="fa-solid fa-star"></i>5.3K+
                    </p>
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <p className="rating d-flex align-items-center gap-1">
                     
                    </p>
                    <p className="enroll d-flex align-items-center gap-1">
                      <button style={{backgroundColor:'#DEB887'}}>Enroll Now</button>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-4 mb-4">
              <div className="single-course-item card">
              <div className="course-img">
                  <img src="https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="card-img-top w-100" />
                </div>
                <div className="course-details card-body">
                  <h6 style={{fontWeight:'500'}} className="course-title card-title mb-4">Electronics & Communication</h6>
                  <div className="d-flex justify-content-between align-items-center">
                    <p className="lesson d-flex align-items-center gap-1">
                    <i style={{color: '#DEB887'}} class="fa-solid fa-user"></i>15.3K+
                    </p>
                    <p className="students d-flex align-items-center gap-1">
                    <i style={{color: '#DEB887'}} class="fa-solid fa-star"></i>5.3K+
                    </p>
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <p className="rating d-flex align-items-center gap-1">
                     
                    </p>
                    <p className="enroll d-flex align-items-center gap-1">
                      <button style={{backgroundColor:'#DEB887'}} >Enroll Now</button>
                    </p>
                  </div>
                </div>
              </div>
            </div>


            <div className="col-lg-3 col-md-4 mb-4">
              <div className="single-course-item card">
              <div className="course-img">
                  <img src="https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="card-img-top w-100" />
                </div>
                <div className="course-details card-body">
                  <h6 style={{fontWeight:'500'}} className="course-title card-title mb-4">Electronics & Communication</h6>
                  <div className="d-flex justify-content-between align-items-center">
                    <p className="lesson d-flex align-items-center gap-1">
                    <i style={{color: '#DEB887'}} class="fa-solid fa-user"></i>15.3K+
                    </p>
                    <p className="students d-flex align-items-center gap-1">
                    <i style={{color: '#DEB887'}} class="fa-solid fa-star"></i>5.3K+
                    </p>
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <p className="rating d-flex align-items-center gap-1">
                     
                    </p>
                    <p className="enroll d-flex align-items-center gap-1">
                      <button style={{backgroundColor:'#DEB887'}}>Enroll Now</button>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-4 mb-4">
              <div className="single-course-item card">
              <div className="course-img">
                  <img src="https://images.pexels.com/photos/3755700/pexels-photo-3755700.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="card-img-top w-100"/>
                </div>
                <div className="course-details card-body">
                  <h6 style={{fontWeight:'500'}} className="course-title card-title mb-4">Electronics & Communication</h6>
                  <div className="d-flex justify-content-between align-items-center">
                    <p className="lesson d-flex align-items-center gap-1">
                    <i style={{color: '#DEB887'}} class="fa-solid fa-user"></i>15.3K+
                    </p>
                    <p className="students d-flex align-items-center gap-1">
                    <i style={{color: '#DEB887'}} class="fa-solid fa-star"></i>5.3K+
                    </p>
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <p className="rating d-flex align-items-center gap-1">
                     
                    </p>
                    <p className="enroll d-flex align-items-center gap-1">
                      <button style={{backgroundColor:'#DEB887'}}>Enroll Now</button>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            


               
              </div>
            </div>
        
      
      
    </section>


 
   
          <hr/>


          <div className='col-lg-12 text-center mb-5'>
            <h2 style={{color: ' #DEB887', fontSize: '50px', fontWeight: '500'}}>What Our Student Says</h2>
          </div>


         
        <div className='testimonial'>
         <i class="fa-solid fa-circle-arrow-right first"></i>
         <i class="fa-solid fa-circle-arrow-left second"></i>
  
        <div className='slider'>
<ul>
  <li>
   <div className='slide'>
   <div className='user-info'>
              <img src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
              <div>
                    <h3>Aneeta William</h3>
                    <span>USA</span>

                </div>
  </div>
<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda sit corrupti, dicta id optio repellendus quod. Consequuntur animi accusamus aspernatur iste esse, itaque voluptate inventore non eius, assumenda, ipsum error!</p>

   </div>
  </li>
  <li>
   <div className='slide'>
   <div className='user-info'>
     <img src="https://images.pexels.com/photos/2531553/pexels-photo-2531553.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />

              <div>
                    <h3>Shazam Afzal</h3>
                    <span>Saudi Arabia</span>

                </div>
  </div>
<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda sit corrupti, dicta id optio repellendus quod. Consequuntur animi accusamus aspernatur iste esse, itaque voluptate inventore non eius, assumenda, ipsum error!</p>

   </div>
  </li>
  <li>
   <div className='slide'>
   <div className='user-info'>
   <img src="https://images.pexels.com/photos/7181860/pexels-photo-7181860.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />

              <div>
                    <h3>anoha niman</h3>
                    <span>USA</span>

                </div>
  </div>
<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda sit corrupti, dicta id optio repellendus quod. Consequuntur animi accusamus aspernatur iste esse, itaque voluptate inventore non eius, assumenda, ipsum error!</p>

   </div>
  </li>
</ul>

















          </div> 
          </div>

      

    </>
  )
}

export default LandingPage

  

    
     
    
      