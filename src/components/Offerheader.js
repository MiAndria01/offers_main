import React, { Component } from 'react'
import bgOffer from '../images/background7.png'
import '../styles/offer.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


export default class offerheader extends Component {
  render() {
    return (
        <div className="home">
		    <div className="home_background parallax-window" data-parallax="scroll" style={{ backgroundImage: `url(${bgOffer})` }}></div>
            <div className="home_content">
                <div className="home_title">Les offres</div>
            </div>
		    <div className="search_panel active col-lg-8">
			    <Form action="#" id="search_form_1" className="search_panel_content d-flex flex-lg-row flex-column align-items-lg-center align-items-start justify-content-lg-between justify-content-start" data-animation-in="flipInX" data-animation-out="animate-out fadeOut">
                    <Form.Group className="search_item">
                        <Form.Control type="text" className="destination search_input" required="required" placeholder="Départ"/>
                    </Form.Group>
                    <Form.Group className="search_item">
                        <Form.Control type="text" className="destination search_input" required="required" placeholder="Destination"/>                        
                    </Form.Group>
                    <Form.Group className="search_item">
                        <Form.Control type="datetime-local" className="check_out search_input" placeholder="Date | Heure"/>
                    </Form.Group>
                    <Form.Group className="search_item">
                        <Form.Select name="adults" id="adults_1" value="" className="dropdown_item_select search_input" placeholder="Passagers">                           
                            <option>01</option>
                            <option>02</option>
                            <option>03</option>
                            <option>04</option>
                        </Form.Select>
                    </Form.Group>
				
				    <Button className="button search_button"><i className="fa fa-search" aria-hidden="true"></i></Button>
			    </Form>
		    </div>
	    </div>
    )
  }
}
