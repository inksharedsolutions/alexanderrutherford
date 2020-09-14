import React from 'react'
import Layout from '../components/layout'
import Nav from '../components/nav'
import Banner from '../components/non-front-banner'
import BookInfo from '../components/book-info/book-info'
import { DiscussionEmbed } from "disqus-react"
import FrontBook from '../../static/books/Book_Cover.png'


const ATB = (props)=>{

    const slug =(props.location.href);
    
	const disqusConfig = {
	  shortname: 'alexander-rutherford-1',
	  config: { identifier:  12, slug}
    }
    

	return (
		<>
		 	<Layout>
		 		<Nav pathExt={props.path}/>
                 
		 		<Banner
                    spanFirst={`About The`}
                    contextHeading={`Book`}
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
                                        stratton:'https://www.stratton-press.com/books/bffs-best-friends-forever-the-first-in-the-alexs-dreams-trilogy//',
                                        barnes:'https://www.barnesandnoble.com/w/bffs-alexander-rutherford/1131218865?ean=9781643452029',
                                        amazon:'https://www.amazon.com/BFFs-DREAMS-Trilogy-Friends-Forever-ebook/dp/B07HMDB3LL/ref=tmm_kin_swatch_0?_encoding=UTF8&qid=1554403392&sr=8-1', 
                                    },
                                    paperback:{
                                        amazon:'https://www.amazon.com/Bffs-Dreams-Trilogy-Friends-Forever/dp/1948654733/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1554403392&sr=8-1',
                                        barnes:'https://www.barnesandnoble.com/w/bffs-alexander-rutherford/1131218865?ean=9781948654739',
                                        booksamillion:'https://www.booksamillion.com/p/BFFs/Alexander-Rutherford/9781948654739?id=7714171848832',
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