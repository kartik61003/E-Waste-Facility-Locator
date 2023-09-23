import React from 'react'

const Cards = ({cardsData}) => {
  return (
    <>
        {cardsData.map((curEle)=>{
          const {id,color,pic,desc} = curEle;
          return(
            <>
            <div style={{background:{color}}} className='info-card' >
            <div className='card-svg'>
                <img src={pic}></img>
            </div>
            <div className='card-desc'>
                <p>
                {desc}
                </p> 
            </div>
        </div>
            </>
          );
        })}

    </>
  )
}

export default Cards
