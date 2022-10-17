import React from 'react'
import BookLink2 from '../book-link/book-link2'
const BookInfo = (props)=>{
    return(
        <>
            <div className="columns book-container-ft">
                
                <div className="column">
                    <div className="bookImgContainer">
                        <img alt="main-book" src={props.data.imgSrc} />
                    </div>
                </div>
                
                <div className="column" id={props.data.id}>

                    <section className="contentBook">

                        <h1>{props.data.title}</h1>

                        <p className="sub-heading">
                            {props.data.spanFirst}
                        </p>
                        
                        <span>{props.data.spanTitle}</span> 

                        <div className="content-body" 
                             dangerouslySetInnerHTML={{__html: `${props.data.content}`}} />

                    </section>


                    <BookLink2
                        data={{
                            ebooks:{
                                barnes: props.data.ebooks.barnes,
                                amazon : props.data.ebooks.amazon, 
                            },
                            paperback:{
                                // amazon: props.data.paperback.amazon,
                                barnes: props.data.paperback.barnes,
                                // booksamillion: props.data.paperback.booksamillion,
                            },
                            
                            reviews:{},
                            isNonfront:true,
                        }}
                    />


                </div>	
            </div>
        </>
    )
} 

export default BookInfo;