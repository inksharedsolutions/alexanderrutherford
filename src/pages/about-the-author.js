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
                                    The secret is inside of you; you can 
                                    create your world with your words.
                                    You are framing your reality every day.
                                    You are literally what you think of yourself.
                                    Your beliefs are not made of realities. Rather,
                                    your reality is being formed every day by your
                                    beliefs, thoughts and words. Manifest intentions
                                    in your words and become the author of reality.
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
                                    <span className="ata-name">Ed Vergara</span>
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