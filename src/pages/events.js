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

			 	<h1>Events</h1> 

			 	<section className="section-events">
			 		<div className="events-info-body">
			 			<h1>Salt City Comic Con</h1>

			 			<div className="events-wrapper">
				 			<span>Date</span>
				 			<p>Saturday & Sunday, July 6 & 7, 2019</p>
				 			<span>Place</span>
				 			<p>Embassy Suites 311 Hiawatha Boulevard</p>
				 			<p>W Syracause, New York 13204</p>
				 			<span>Time</span>
				 			<p>*Events subject to change</p>
			 			</div>

			 		</div>
			 	</section>
		 	</Layout>
		</>
	)
}

export default Event;
