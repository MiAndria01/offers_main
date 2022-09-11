import React, {useState} from 'react'
import Button from 'react-bootstrap/esm/Button'
import AnnonceForm from "./AnnonceForm"

function Offerfilter () {
  
    const [modalOpen, setModalOpen] = useState(false);
    return (
        <div class="col-lg-11">
              
        {/*Offers Sorting*/}
        <div class="offers_sorting_container">
            <ul class="offers_sorting">
                <li>
                    <span class="sorting_text">Prix</span>
                    <i class="fa fa-chevron-down"></i>
                    <ul>
                        <li class="sort_btn" data-isotope-option='{ "sortBy": "original-order" }' data-parent=".price_sorting"><span>Tout afficher</span></li>
                        <li class="sort_btn" data-isotope-option='{ "sortBy": "price" }' data-parent=".price_sorting"><span>Croissante</span></li>
                    </ul>
                </li>
                <li>
                    <span class="sorting_text">Localisation</span>
                    <i class="fa fa-chevron-down"></i>
                    <ul>
                        <li class="sort_btn" data-isotope-option='{ "sortBy": "original-order" }'><span>Décroissante</span></li>
                        <li class="sort_btn" data-isotope-option='{ "sortBy": "name" }'><span>Croissante</span></li>
                    </ul>
                </li>
                <li>
                    <span class="sorting_text">Note</span>
                    <i class="fa fa-chevron-down"></i>
                    <ul>
                        <li class="filter_btn" data-filter="*"><span>Afficher tout</span></li>
                        <li class="sort_btn" data-isotope-option='{ "sortBy": "stars" }'><span>Décroissante</span></li>
                        <li class="filter_btn" data-filter=".rating_3"><span>3</span></li>
                        <li class="filter_btn" data-filter=".rating_4"><span>4</span></li>
                        <li class="filter_btn" data-filter=".rating_5"><span>5</span></li>
                    </ul>
                </li>
                <Button className="button pub_button" onClick={() => {
                    setModalOpen(true);
                  }}>Publier une annonce</Button>
                  
            </ul>
        </div>
        {modalOpen ? <AnnonceForm setOpenModal={setModalOpen}/> : undefined}
    </div>
    )  
}
export default Offerfilter