import React from 'react'
import AuthorImg from '../../static/author/main_author.jpg'

const Author = () =>{
    return(
        <>
            <section className="upper-main" id="main-upper-author">
                <div className="grid-two-columns">

                     <div className="grid-child" id="author-contents">

                        <p>
                           Born: December 5, 1977 - 7:35am 
                           (Queens General Hospital: Saint Albans, New York), 
                           the middle child of three sons. Widower (wife, Leslie 
                           Rutherford [née Osouna] born on July 13, 1970 passed
                           away on August 19, 2016 after a lengthy battle with Scleroderma.) 
                        </p>

                        <h1 className="author-name-tag">
                            <span>Alexander</span>
                            <span>Rutherford</span>
                        </h1>
                        
                        <span className="author-tagline">Author & Writer</span>

                     </div>

                    <div className="grid-child" id="author-image-container">
                        <img src={AuthorImg}/>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Author;