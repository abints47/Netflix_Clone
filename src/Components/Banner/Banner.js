import React from 'react'

function Banner() {
  return (
    <div className='banner'>
        <div className='content' >
            <h1 className='title' >Movie Name</h1>
            <div className='banner_button' >
                <button className='button' >Play</button>
                <button className='button' >My list</button>
            </div>
            <h1 className='description'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</h1>
        </div>
    <div className="fade_button"></div>
    </div>
  )
}

export default Banner