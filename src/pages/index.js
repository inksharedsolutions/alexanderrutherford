import React from "react"

import Layout from "../components/layout"
import Nav from "../components/nav"
import Banner from "../components/banner"
import UpperMain from "../components/author"
import MidBook from "../components/front-book"
import FeaturedLogos from "../components/mid-main"
import Trailer from "../components/trailer"



const IndexPage = (props) => (
  <Layout>
      <Nav pathExt={props.path}/>
      <Banner/>
      <MidBook/>	
      <Trailer/>
      <UpperMain/>
      <FeaturedLogos/>
  </Layout>
)

export default IndexPage