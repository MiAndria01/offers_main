import React, { Component } from 'react'
import Offerheader  from './Offerheader'
import Offerbody from './Offerbody'
import Offerfooter from './Offerfooter'


export default class offermain extends Component {
  render() {
    return (
      <React.Fragment>
        <Offerheader/>
        <Offerbody/>
        <Offerfooter/>
        
      </React.Fragment>
    )
  }
}


