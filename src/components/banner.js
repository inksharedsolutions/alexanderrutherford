import React, { useState, useEffect, useRef } from 'react'
import * as THREE from 'three'
import {Link} from 'gatsby'




const Banner = ()=>{



    return (
        <>
            <section className="banner-section" >
                <div className="container-gt">
                    <div className="one-grid-columns">
                    
                        <div className="grid-child-elem">
                        </div> 

                        <div className="grid-child-elem">
                            <div className="banner-text">

                                <p>
                                    The First in the Alex's Dreams Trilogy
                                </p>

                                <h1>
                                  <span>This family of friends</span>
                                  <span>is friends of family</span>
                                </h1>

                               
                                <Link className="btn-link" to="/about-the-book">
                                    Read more
                                </Link> 
                              
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Banner;