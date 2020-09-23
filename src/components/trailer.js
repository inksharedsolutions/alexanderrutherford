import React from "react"
import ReactPlayer from 'react-player/youtube'



const Trailer = () =>{
    return(
        <>
            <section className="book-trailer">
                <div className="grid-two-columns" id="trailer-body">
                    
                    <div className="grid-child-content">
                        <h5>Alexander Rutherford</h5>
                        <h1>
                            <span>Book</span>
                            <span>Trailer</span>
                        </h1>
                        <p>
                           Just like how the story of the book goes, 
                           the process in writing it was also a journey.
                           Hear about it from the author himself.
                           Click the play button and learn more.
                        </p>
                    </div>

                    <div className="grid-video-container">
                        <div className="player-wrapper">
                            <ReactPlayer
                                className="react-player"
                                url={"https://www.youtube.com/watch?v=eCaC9KeyxS4"}
                                width="100%"
                                height="400px"
                                controls={true}
                                playIcon
                            />
                        </div>
                    </div>
                
                </div> 
            </section>
        </>
    )
}

export default Trailer;