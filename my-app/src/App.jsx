import React from 'react'

import "./App.css"

const App = () => {
  return (
    <div className='body'>
      <div className='header'>
        <div className='nav'>
          <img src="/src/assets/IMAGE (39).png" alt="" />
          <div className='menu'>
            <a href="#">Business areas</a>
            <a href="#">Featured images</a>
            <a href="#">Gear cage</a>
            <a href="#">Contact</a>
            <button className='btnMenu'>Get template</button>
          </div>
        </div>
        <div className='section1'>
          <p className='description'>Photographer & Filmmaker</p>
          <h1 className='title'>Aperture Studios</h1>
          <p className='description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
          <img src="src/assets/Frame (5).png" alt="" />
        </div>
      </div>
      <div className='section2'>
        <h1>What we do.</h1>
        <p>The areas that we're specialized in.</p>
        <div className='cards'>
          <div className='card'>
            <p>Product Photography</p>
            <p>Cras commodo consequat orci, in convallis risus egestas non. Nulla efficitur auctor hendrerit. Etiam ut orci varius, faucibus libero ac, cursus quam.</p>
            <button className='btnRead'><samp>i</samp> Read more</button>
          </div>
          <div className='card card2'>
            <p>Architecture Photography</p>
            <p>Aenean porta neque eget consequat fringilla. Vestibulum ultrices, orci nec egestas pharetra, ligula est semper enim, nec auctor sapien leo nec purus. Fusce tincidunt aliquet sapien, sit amet rhoncus leo imperdiet nec.</p>
            <button className='btnRead'><samp>a</samp> Read more</button>
          </div>
          <div className='card card3'>
            <p>Drone Photography</p>
            <p>Mauris euismod elit et nisi ultrices, ut faucibus orci tincidunt. Duis tristique sed lorem a vestibulum. Cras commodo consequat orci, in convallis risus egestas non. Nulla efficitur auctor hendrerit. Etiam ut orci varius, faucibus libero ac, cursus quam.</p>
            <button className='btnRead'><samp>a</samp> Read more</button>
          </div>
          <div className='card card4'>
            <p>Wildlife Photography</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque aliquam odio et faucibus. Nulla rhoncus feugiat eros quis consectetur. Morbi neque ex, condimentum dapibus congue et, vulputate ut ligula. Vestibulum sit amet urna turpis.</p>
            <button className='btnRead'><samp>a</samp> Read more</button>
          </div>
        </div>
      </div>
      <div className='section3'>
        <img src="/src/assets/Frame (5).png" alt="" />
      </div>
      <div className='section4'>
        <div className='left'>
          <p>The Gear cage</p>
          <h1>The tools that we use.</h1>
          <p>The say that "no place is boring if you've had a good night's sleep and have a pocket full of unexposed film". While we don't shoot (a lot) of film these days — these are the tools that we actually use everyday to capture the amazing things around us.</p>
          <button className='btnRead'><samp>i</samp> Check it out</button>
        </div>
        <img src="/src/assets/Frame (4).png" alt="" />
      </div>
      <div className='section5'>
      <img src="/src/assets/Frame (5).png" alt="" />
      </div>
      <div className='section6'>
        <h1>Past clients</h1>
        <p>Trusted by your favourite companies</p>
        <div className='lineLogos'>
          <img src="/src/assets/IMAGE (34).png" alt="" />
          <img src="/src/assets/Logo-Group-10.png" alt="" />
          <img src="/src/assets/IMAGE (35).png" alt="" />
          <img src="/src/assets/IMAGE (36).png" alt="" />
          <img src="/src/assets/IMAGE (37).png" alt="" />
        </div>
      </div>
      <div className='section7'>
      <img src="/src/assets/Frame (5).png" alt="" />
      </div>
      <div className='section8'>
        <h1>Need help with photography <br /> or videography?</h1>
        <p>We're here for you!</p>
        <button className='btnRead'><samp>a</samp> Get in touch</button>
      </div>
      <div className='footer'>
        <div className='topFooter'>
          <div className='leftFooter'>
            <img src="/src/assets/Image (39).png" alt="" />
            <span>Photographers & videographers capturing the world around us.</span>
          </div>
          <div className='rightFooter'>
            <div>
              <span>Business areas</span>
              <p>Product Photography</p>
              <p>Architecture Photography</p>
              <p>Drone Photography</p>
              <p>Wildlife Photography</p>
            </div>
            <div>
              <span>Pages</span>
              <p>Gear cage</p>
              <p>Featured images</p>
              <p>Contact</p>
              <p>Style guide</p>
              <p>Instructions</p>
              <p>Changelog</p>
            </div>
          </div>
        </div>
        <hr />
        <div className='middleFooter'>
          <div>
            <p>Subscribe to our newsletter</p>
            <span>Read about all the things we do.</span>
          </div>
          <p className='sub'><samp>a</samp></p>
        </div>
        <hr />
      <div className='bottomFooter'>
        <span>© Aperture Photography, Inc. All rights reserved.Licensing.</span>
        <img src="/src/assets/Frame (6).png" alt="" />
      </div>
      </div>
    </div>
  )
}

export default App