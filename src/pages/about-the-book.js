import React from 'react'
import Layout from '../components/layout'
import Nav from '../components/nav'
import Banner from '../components/non-front-banner'
import BookInfo from '../components/book-info/book-info'
import { DiscussionEmbed } from "disqus-react"
import FrontBook from '../../static/books/Book_Cover.png'
import Book2 from '../../static/books/book1.png'
import { Helmet } from 'react-helmet'
import BookInfo2 from '../components/book-info/book-info2'


const ATB = (props)=>{

    const slug =(props.location.href);
    
	const disqusConfig = {
	  shortname: 'alexander-rutherford-1',
	  config: { identifier:  12, slug}
    }
    

	return (
		<>
            <Helmet title='Books | Alexander Rutherford' />
		 	<Layout>
		 		<Nav pathExt={props.path}/>
                 
		 		<Banner
                    spanFirst={`About The`}
                    contextHeading={`Books`}
                />

                <main className="wrapperMain">
                    <div 
                        className="container"
                        id="book-containers" >

                            <BookInfo
                                data={{
                                    title:`Best Friends Forever`,
                                    spanFirst: `The First in the ALEX's DREAMS Trilogy`,
                                    imgSrc: FrontBook,
                                    id:'',
                                    content:
                                    `
                                    <p>
                                        The First in the Alex’s Dreams Trilogy, is a fascinating story
                                        of teenager Alex and her friends. Capturing the everyday
                                        lives of a colorful cast of characters moving into
                                        young adulthood – including dating, relationships,
                                        and academic and social pressures – this memorable
                                        novel also delves into highly intriguing, more complicated territory.
                                        All the passion of emerging sexuality, and the intensity and confusion
                                        it can stir up, are highlighted in BFFs: The First in the Alex’s Dreams Trilogy.
                                        Written with honesty and gritty reality, this is a book that will thoroughly entertain,
                                        surprise, and engage teen and young adult readers.
                                    </p> 

                                    `,

                                    ebooks:{
                                        amazon:'https://www.amazon.com/BFFs-DREAMS-Trilogy-Friends-Forever-ebook/dp/B07HMDB3LL/ref=tmm_kin_swatch_0?_encoding=UTF8&qid=1554403392&sr=8-1', 
                                        barnes:'https://www.barnesandnoble.com/w/bffs-alexander-rutherford/1131218865?ean=9781643452029',
                                    },
                                    paperback:{
                                        amazon:'https://www.amazon.com/Bffs-Dreams-Trilogy-Friends-Forever/dp/1948654733/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1554403392&sr=8-1',
                                        barnes:'https://www.barnesandnoble.com/w/bffs-alexander-rutherford/1131218865?ean=9781948654739',
                                        booksamillion:'https://www.booksamillion.com/p/BFFs/Alexander-Rutherford/9781948654739?id=7714171848832',
                                    }
                                }} 
                            />

                            {/* <div className="columns book-container-ft">
                                
                                <div className="column">
                                    <div className="bookImgContainer">
                                        <img alt="main-book" src={Book2} />
                                    </div>
                                </div>
                                
                                <div className="column" id='omg'>

                                    <section className="contentBook">

                                        <h1>OMG!: Oh My God!</h1>

                                        <p className="sub-heading">
                                            The SECOND in the ALEX's DREAMS Trilogy
                                        </p>
                                        
                                        <span></span> 

                                        <div className="content-body">
                                            <p>
                                                The second installment of this spectacularly imaginative page-turner
                                                picks up right where the first left off. This literary eye-catcher
                                                will delve further into more complex and complicated that the circle
                                                of friends is destined to experience. From triumph to tragedy, this
                                                snapshot in the lives of the colorful cast will leave you wanting
                                                more and will leave you in shock at how this sequence of events unfold.
                                                As it is believed that no one will be able to predict how this part
                                                of the trilogy concludes.
                                            </p> 

                                            <p>
                                                Alexander Rutherford will, once again, marvel all with his gift to
                                                enthrall with his meticulous description and attention to detail,
                                                suspending your disbelief making you feel like a part of all you
                                                read by way of his passion for the written word. This exhibition
                                                in masterful storytelling contains explicit materials and is
                                                intended to be read by individuals ranging from mature teens to
                                                young adults and is not recommended for younger audiences.
                                            </p>
                                            <span />
                                            <i>Book links are coming soon....</i>
                                        </div>

                                    </section>

                                </div>	
                            </div> */}

                            <BookInfo2
                                data={{
                                    title:`OMG!: Oh My God!`,
                                    spanFirst: `The SECOND in the ALEX's DREAMS Trilogy`,
                                    imgSrc: Book2,
                                    id:'',
                                    content:
                                    `
                                    <p>
                                        The second installment of this spectacularly imaginative page-turner
                                        picks up right where the first left off. This literary eye-catcher
                                        will delve further into more complex and complicated that the circle
                                        of friends is destined to experience. From triumph to tragedy, this
                                        snapshot in the lives of the colorful cast will leave you wanting
                                        more and will leave you in shock at how this sequence of events unfold.
                                        As it is believed that no one will be able to predict how this part
                                        of the trilogy concludes.
                                    </p> 

                                    <p>
                                        Alexander Rutherford will, once again, marvel all with his gift to
                                        enthrall with his meticulous description and attention to detail,
                                        suspending your disbelief making you feel like a part of all you
                                        read by way of his passion for the written word. This exhibition
                                        in masterful storytelling contains explicit materials and is
                                        intended to be read by individuals ranging from mature teens to
                                        young adults and is not recommended for younger audiences.
                                    </p>

                                    `,

                                    ebooks:{
                                        amazon:'https://www.amazon.com/OMG-OH-GOD-Alexander-Rutherford-ebook/dp/B0BJ5PTJH2/ref=sr_1_1?keywords=9798887641119&qid=1665758775&qu=eyJxc2MiOiItMC4wMSIsInFzYSI6IjAuMDAiLCJxc3AiOiIwLjAwIn0%3D&sr=8-1', 
                                        barnes:'https://www.barnesandnoble.com/w/omg-alexander-rutherford/1142517119?ean=9798887641119',
                                    },
                                    paperback:{
                                        barnes:'https://www.barnesandnoble.com/w/omg-alexander-rutherford/1142517119?ean=9798887641102',
                                    }
                                }} 
                            />


            
                            <div className="commentSection" >
                                <div id="disqus_thread">
                                    <DiscussionEmbed {...disqusConfig} />
                                </div>
                            </div>
                    </div>	
                </main>


		 	</Layout>
		</>
	)
}


export default ATB;