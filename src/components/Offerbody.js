import React, { Component } from 'react'
import Offerfilter from './Offerfilter'
import Offerlist from './Offerlist'

export default class offerbody extends Component {
  render() {
    return (
      <div className='offers'>
        <div className="container">
            <div className="row">
            <div class="col-lg-1 temp_col"></div>
                <Offerfilter/>
                <Offerlist/>        

            </div>
        </div>	
    </div>
    )
  }
}
