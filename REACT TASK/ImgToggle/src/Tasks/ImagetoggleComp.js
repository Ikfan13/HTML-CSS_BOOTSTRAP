import React, { Component } from 'react'
import staticData from '../Shared/Constant/staticData'
export class ImagetoggleComp extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
        toggle:true,
        imageName:"Messi"
    }
  }
  toggle = () => {
    this.setState((prevState) => ({
      toggle: !prevState.toggle,
      imageName: prevState.toggle ? 'Messi' : 'Ronaldo'
    }));
  }
    render() {
    return (
      <div>
        {this.state.toggle ? <img src={staticData.messi} alt='Messi' height="300px" width="300px"/>:
        <img src={staticData.ronaldo} alt='Ronaldo' height="300px" width="300px"/>
        }
        <br/>
        <span>{this.state.imageName}</span>
        <br/>
        <button type='button' onClick={()=>this.toggle()}>Toggle Image</button>
      </div>

    )
  }
}

export default ImagetoggleComp