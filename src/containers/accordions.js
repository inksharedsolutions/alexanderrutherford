import React from 'react'
import { Collapse, Select } from 'antd'
import { SettingOutlined, PlusOutlined,MinusOutlined } from '@ant-design/icons'
import BookLink from '../components/book-link/book-link'
import { Link } from 'gatsby'
const { Panel } = Collapse
const { Option } = Select


const text = `
  The First in the Alex’s Dreams Trilogy, is a fascinating story
  of teenager Alex and her friends. Capturing the everyday lives
  of a colorful cast of characters moving into young adulthood
  – including dating, relationships, and academic and social pressures
  – this memorable novel also delves into highly intriguing, more
  complicated territory.
`;


class Accordions extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
        expandIconPosition: 'left',
        activeClicks: false,
    };

    this.callback = this.callback.bind(props);
    this.iconChanger = this.iconChanger.bind(props);

  }

  onPositionChange = expandIconPosition => {
    this.setState({ expandIconPosition });
  };


  callback(key) {
    console.log(key);
    const {activeClicks} = {...this.state}
  }

  iconChanger = ()=>{
    console.log('clicks')
  }

   genExtra = () => {
        if(this.state.activeClicks){
            return (
                <MinusOutlined
                    onClick={event => {
                      event.stopPropagation();
                }}
            />
          )
        }else{
            return (
                <PlusOutlined
                    onClick={event => {
                    event.stopPropagation();
                    }}
                />
            )
        }
  }

  render() {
    const { expandIconPosition, activeClicks } = this.state;
    
    return (
      <div>
        <Collapse
          defaultActiveKey={['1']}  
          onChange={this.callback}
          expandIconPosition={expandIconPosition}
        >
          <Panel 
            header="About The Book"
            key="1" 

            onClick={()=>this.iconChanger()}
            extra={this.genExtra()}>
            <div>
              {text}
              <span><Link class="link-read" to="/about-the-book">read more</Link></span>
            </div>
          </Panel>

          <Panel
            header="Ebooks"
            key="2"
            extra={this.genExtra()}>
            <div>
               <BookLink
                    data={{
                      ebooks:{
                          stratton:'https://www.stratton-press.com/books/bffs-best-friends-forever-the-first-in-the-alexs-dreams-trilogy//',
                          barnes:'https://www.barnesandnoble.com/w/bffs-alexander-rutherford/1131218865?ean=9781643452029',
                          amazon:'https://www.amazon.com/BFFs-DREAMS-Trilogy-Friends-Forever-ebook/dp/B07HMDB3LL/ref=tmm_kin_swatch_0?_encoding=UTF8&qid=1554403392&sr=8-1', 
                      },
                      reviews:{},
                      isNonfront:false,
                      paperback:{}
                  }}
              />
            </div>
          </Panel>

          <Panel
            header="Purchase PaperBack"
            key="3"
            extra={this.genExtra()}>
            <div>
                <BookLink
                      data={{
                        paperback:{
                          amazon:'https://www.amazon.com/Bffs-Dreams-Trilogy-Friends-Forever/dp/1948654733/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1554403392&sr=8-1',
                          barnes:'https://www.barnesandnoble.com/w/bffs-alexander-rutherford/1131218865?ean=9781948654739',
                          booksamillion:'https://www.booksamillion.com/p/BFFs/Alexander-Rutherford/9781948654739?id=7714171848832',
                        },
                        ebooks:{},
                        isNonfront:false,
                        reviews:{},
                      }}
                  />
            </div>
          </Panel>
        </Collapse>
  
      </div>
    );
  }
}

export default Accordions