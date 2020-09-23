import React from 'react'
import Layout from '../components/layout'
import Nav from '../components/nav'
import Banner from '../components/non-front-banner'


const Event = (props) =>{
	return(
		<>
			<Layout>
				<Nav pathExt={props.path}/>

	            <Banner 
	                spanFirst={``} 
	                contextHeading={`Events`}/>

	             	<div className="section-body-events">
	             		<div className="container">
					 		<h1 className="events-heading-section">Events</h1>

						 	<section className="section-events">
						 		<div className="events-info-body">

						 			<h1>Salt City Comic Con</h1>

						 			<div className="events-wrapper">

							 			<span className="events-title">Date</span>
							 			<p>Saturday & Sunday, July 6 & 7, 2019</p>

							 			<span className="events-title">Place</span>
							 			<p>Embassy Suites 311 Hiawatha Boulevard</p>
							 			<p>W Syracause, New York 13204</p>

							 			<span className="events-title">Time</span>
							 			<p>*Events subject to change</p>

						 			</div>
						 		</div>

						 		<div className="events-info-body">
						 			<h1>2019 Harlem Book Fair</h1>

						 			<div className="events-wrapper">
							 			
							 			<span className="events-title">Date</span>
							 			<p>Saturday July 20, 2019</p>
							 			
							 			<span className="events-title">Place</span>
							 			<p>West 135 Street & Malcolm X Boulevard</p>

							 			<span className="events-title">Time</span>
							 			<p>9:00am to 6:00pm (expected, not verified)</p>
							 			<p>*Event subject to change</p>

						 			</div>
						 		</div>
					 		</section>

					 		<h1 className="past-events">Past Events</h1>


					 		<section className="section-events">
						 		<div className="events-info-body">

						 			<h1>Author Reading reading and Book Signing</h1>

						 			<div className="events-wrapper">

							 			<span className="events-title">Date</span>
							 			<p>Wednesday, February 27, 2019</p>

							 			<span className="events-title">Place</span>
							 			<p> NYU Bookstore 726 Broadway</p>
							 			<p>New York, 10003</p>

							 			<span className="events-title">Time</span>
							 			<p>6:00pm</p>

							 			<p>*Event subject to change</p>

						 			</div>
						 		</div>

						 		<div className="events-info-body">
						 			<h1>White Plains Comicfest</h1>

						 			<div className="events-wrapper">
							 			
							 			<span className="events-title">Date</span>
							 			<p>Saturday July 20, 2019</p>
							 			
							 			<span className="events-title">Place</span>
							 			<p>West 135 Street & Malcolm X Boulevard</p>

							 			<span className="events-title">Time</span>
							 			<p>9:00am to 6:00pm (expected, not verified)</p>
							 			<p>*Event subject to change</p>

						 			</div>
						 		</div>

						 		<div className="events-info-body">
						 			<h1>Bronx Book Fair</h1>

						 			<div className="events-wrapper">
							 			
							 			<span className="events-title">Date</span>
							 			<p>Saturday May 4, 2019</p>
							 			
							 			<span className="events-title">Place</span>
							 			<p>Bronx Library Center/New York Public Library</p>
							 			<p>310 East KingBridge Road</p>
							 			<p>Bronx, New York, 10458</p>

							 			<span className="events-title">Time</span>
							 			<p>11:00am to 7:00pm</p>
							 			<p>*Event subject to change</p>

						 			</div>
						 		</div>

					 	</section>

					</div>
				</div>

		 	</Layout>
		</>
	)
}

export default Event;
