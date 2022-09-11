import React, { Component } from 'react'

export default class Offerfooter extends Component {
  render() {
    return (
      <footer class="footer">
		<div class="container">
			<div class="row">

				{/* Footer Column */}
				<div class="col-lg-4 footer_column">
					<div class="footer_col">
						<div class="footer_content footer_about">
							{/* <div class="logo_container footer_logo">
								<div class="logo"><a href="#"><img src="images/logo.png" alt="">travelix</a></div>
              </div> */}
							<p class="footer_about_text">Il nous est venu l’idée de créer une application qui, en plus des solutions économiques et écologiques apportées par le concept de covoiturage, permet en quelques clics de trouver des partenaires de covoiturage partageant idéalement les mêmes centres d’intérêts, rendant ainsi, l’expérience plus enrichissante.</p>
							<ul class="footer_social_list">
								<li class="footer_social_item"><a href="#"><i class="fa fa-pinterest"></i></a></li>
								<li class="footer_social_item"><a href="#"><i class="fa fa-facebook-f"></i></a></li>
								<li class="footer_social_item"><a href="#"><i class="fa fa-twitter"></i></a></li>
								<li class="footer_social_item"><a href="#"><i class="fa fa-dribbble"></i></a></li>
								<li class="footer_social_item"><a href="#"><i class="fa fa-behance"></i></a></li>
							</ul>
						</div>
					</div>
				</div>

				{/* Footer Column */}
				<div class="col-lg-4 footer_column">
					<div class="footer_col">
						<div class="footer_title">Mots clés</div>
						<div class="footer_content footer_tags">
							<ul class="tags_list clearfix">
								<li class="tag_item"><a href="#">design</a></li>
								<li class="tag_item"><a href="#">sport</a></li>
								<li class="tag_item"><a href="#">musique</a></li>
								<li class="tag_item"><a href="#">video</a></li>
								<li class="tag_item"><a href="#">spéctacles</a></li>
								<li class="tag_item"><a href="#">photographie</a></li>
								<li class="tag_item"><a href="#">aventure</a></li>
								<li class="tag_item"><a href="#">voyages</a></li>
							</ul>
						</div>
					</div>
				</div>

				{/* Footer Column */}
				<div class="col-lg-4 footer_column">
					<div class="footer_col">
						<div class="footer_title">contact info</div>
						<div class="footer_content footer_contact">
							<ul class="contact_info_list">
								<li class="contact_info_item d-flex flex-row">
									<div><div class="contact_info_icon"><i class="fa fa-map-marker contact_info_icon" aria-hidden="true"></i></div></div>
									<div class="contact_info_text">5 Avenue de l'Indépendance Analakely Antananarivo Madagascar</div>
								</li>
								<li class="contact_info_item d-flex flex-row">
									<div><div class="contact_info_icon"><i class="fa fa-volume-control-phone contact_info_icon" aria-hidden="true"></i></div></div>
									<div class="contact_info_text">+261 32 77 747 69</div>
								</li>
								<li class="contact_info_item d-flex flex-row">
									<div><div class="contact_info_icon"><i class="fa fa-envelope-o contact_info_icon" aria-hidden="true"></i></div></div>
									<div class="contact_info_text"><a href="mailto:contactme@gmail.com?Subject=Hello" target="_top">contactwhee@gmail.com</a></div>
								</li>
								<li class="contact_info_item d-flex flex-row">
									<div><div class="contact_info_icon"><i class="fa fa-globe contact_info_icon" aria-hidden="true"></i></div></div>
									<div class="contact_info_text"><a href="https://colorlib.com">www.whee!.com</a></div>
								</li>
							</ul>
						</div>
					</div>
				</div>

			</div>
		</div>
	</footer>
    )
  }
}
