import React, {Component} from 'react'
import './index.css'


class App extends Component {
  state = {
    hh: '',
    mm: '',
    ss: '',
    
  }

  time = () => {
    let now = new Date();
    let hh = now.getHours();
    let mm = now.getUTCMinutes();
    let ss = now.getSeconds();
    
    this.setState({
      hh,
      mm,
      ss, 
      
    })
   }
  
   render(){

    setInterval(()=>this.time(), 1000)
     const {hh, mm, ss} = this.state;
     const rndm = (x) => {
      return Math.round(x * 4.2) 
     }
     const rndmColor = () => {
       return `rgb(${rndm(hh * 2.5)}, ${rndm(mm)}, ${rndm(ss)})`
     }  
       return(
          <div className='container' style={{backgroundColor: rndmColor()}}>
            <div className='clock' >
            <p>{hh}: </p><p>{mm>9?mm:'0'+mm}: </p><p>{ss>9?ss:'0'+ss} {hh > 12 ? 'PM' : 'AM'}</p>
            </div>
            
          </div>
   )
  }
}

export default App 

