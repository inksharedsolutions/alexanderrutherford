import React from 'react'
import Layout from '../components/layout'
import Nav from '../components/nav'
import Banner from '../components/non-front-banner'
import AuthorImg from '../../static/author/main_author.jpg'

const ATB = (props)=>{
	
	return (
		<> 
		 	<Layout>
		 		<Nav pathExt={props.path}/>

                <Banner 
                    spanFirst={`About The`} 
                    contextHeading={`Author`}/>
                
		 		<div className="container">
				    <section className="body-author-contents columns">
                         
                        <div className="heading-quote column">
                            <div className="author-image-container">
                                <img src={AuthorImg} />
                            </div>

                            <div className="heading-quote">

                                <h4>
                                  Dreams have been realized on this day.
                                  And other dreams may have been fulfilled before this day.
                                  Other dreams may not have even been born yet. There is just one
                                  thing to keep in mind: whatever dream you have...keep the faith!
                                </h4>
                                
                                <span className="ata-span-fx">
                                    author quote
                                </span>
                            </div>
                        </div>

                        <article className="article-section column" id="author">
                            <p>
                                Born: December 5, 1977 - 7:35am (Queens General Hospital:
                                Saint Albans, New York), the middle child of three sons.
                                Widower (wife, Leslie Rutherford [née Osouna] born on July 13,
                                1970 passed away on August 19, 2016 after a lengthy battle with
                                Scleroderma.) Father of 3 sons: oldest two are stepchildren
                                (Jerome Darrell Johnson: born October 12, 1990; Daniel Patrick
                                Raymond Card: born June 5, 1994). Youngest is biological
                                (Benjamin Alexander Rutherford: born October 12, 2002).
                            </p>

                            <p>
                                <span className="author-name">
                                    <span className="author-span-ft">Author | Writer </span>
                                    <span className="ata-name">Alexander Rutherford</span>
                                </span>
                            </p>
                            
                        </article>

                    </section>
                </div>

		 	</Layout>
		</>
	)
}


export default ATB;