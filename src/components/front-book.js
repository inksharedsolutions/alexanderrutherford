import React from 'react'
import FrontBook from '../../static/books/Book_Cover.png'
import Accordions from '../containers/accordions'

const MidBook = (props)=>{
    return(
        <>    
            <section className="upper-main">
                <div className="container-gt separator-line">

                    <div className="grid-two-columns" id="wrapper-two-books">

                        <div className="book-wraps">
                            <img src={FrontBook}/>
                        </div>

                        <div className="content-wraps">

                            <span className="italic-tag">
                                Read, listen, and learn in various formats
                            </span>

                            <h1>Featured Book</h1>

                            <p>
                               
                            </p>

                            <Accordions/>
                            
                        </div>
               
                    </div>
                </div>
            </section>
        </>
    )
}

export default MidBook