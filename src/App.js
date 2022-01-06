import React from 'react'
import './style.css'
import myimage from './2.jpg'

function App() {
 let name='shlomo'
  return (
    <div>
      <div style={{border:'solid 1px black',maxWidth:'100vw'}}>
<h1 className="title red">Your name here:{name}</h1>
<br />

<img src={myimage}/>

<br/>

<img src="./1.jpg"/>



</div>

<video width="320" height="240" controls>

 <source src="myVideo.mp4" type="video/mp4"/ >

</video>


    </div>


  )
}

export default App
