import React from 'react'

function App() {

  return (
    <>
        <div className='container'>
              <img className="image" src="./images/screenshot.jpeg" alt="my screenshot" />
              <h3>ILYAS DOLLIAZAL</h3>
              <p>Frontend Developer</p>
              <div className='button-container'>
                    <button className='email' > Email</button>
                    <button className='linkedin'>LinkedIn</button>
              </div>
               <div className='text-content'>
                    <h4>About</h4>
                    <p>I am a frontend developer, My focus revolves around simplifying daily tasks through coding, with a touch of simplicity.
                      I'm driven by an insatiable curiosity to learn and grow</p>
                      <br />
                    <h4>Interests</h4>
                    <p>Art expert. geek info, love details, gym Lover</p>
               </div>
               <div className='footer'>
                    <img className='gitcone' src="./images/gitcone.png" alt="" />
               </div>
    </div>
    </>
  )
}

export default App
