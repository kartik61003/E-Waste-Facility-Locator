import React from 'react'

const MapApi = () => {
  return (
    <>
      <div >
      <div style={{marginTop:'0px'}} className='card-container-heading'>
      <h1>Locate our <span style={{color:'green'}}>green</span> facilites 🌱</h1>
      <div className="google-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3498.94187025118!2d77.13919537540666!3d28.72128317561649!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0170e8096b31%3A0x9a906c658b08a033!2sVivekananda%20Institute%20of%20Professional%20Studies!5e0!3m2!1sen!2sin!4v1695461337217!5m2!1sen!2sin"
          width="600"
          height="450"
          style={{ border: '0' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
         </div>
        </div>
      </div>
    </>
  )
}

export default MapApi
