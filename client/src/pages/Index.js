import React, { useState } from 'react'
import TypewriterEffect from '../components/TypewriterEffect'
import Cards from '../components/Cards'
import CardData from '../components/CardData'
import MapApi from '../components/MapApi'

const Index = () => {
  const [cardsData, setcardsData] = useState(CardData);
  return (
    <>
      <div className='about-container'>
        <img src='https://images.pexels.com/photos/2609107/pexels-photo-2609107.jpeg'></img>

        <div className='type-effect'>
          <h1> We are <span id='type-word'><TypewriterEffect /></span></h1>
        </div>

        <div className='aboutus-content'>
        <p>
        Our dedicated team has created this user-friendly website to simplify your electronic waste recycling journey. We understand the importance of responsible e-waste disposal and its impact on the environment. With our platform, you can effortlessly find nearby e-waste facilities, whether it's a recycling center, drop-off point, or upcoming collection event. But that's not all; we go beyond just locating facilities. You can also calculate and visualize the positive environmental footprint you're leaving behind through your recycling efforts. Dive into our community of like-minded individuals and organizations who are passionate about reducing e-waste. Stay informed about the latest innovations and trends in the e-waste recycling sector. Join us today in our mission to safeguard the planet, conserve valuable resources, and create a sustainable future for generations to come. Start by locating your nearest recycling center and tracking your impactful journey toward a greener world. Together, one electronic device at a time, we can make a lasting difference. 
        </p>
        </div>
      </div>

        <div className='card-container-heading'><h1>But Why You Need Us <span style={{color:'green'}}>?</span></h1></div>
        <div className='cards-container'>
          <Cards cardsData={cardsData}/>
        </div>
        <MapApi/>
      
    </>
  )
}

export default Index
