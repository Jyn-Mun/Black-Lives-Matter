import React from "react";
import "./protest.css";
import { Link } from "react-router-dom";

const Protest = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behaviour: 'smooth'
    })
  }

  return (
    <>
      <div className="container" id="protestContainer">

        <h1 className="protestHeader">Protest Tips</h1>
        <br></br>

        <div className="protestDiv">

          <div className="protestDiv2" style={{ backgroundColor: "lightyellow", paddingLeft: "10px", paddingRight: "10px" }}>
            <a className="protestNumber">1</a>
            <a className="protestTip">Bring a facemask</a>
          </div>

          <div className="protestDiv2" style={{ backgroundColor: "lavenderblush", paddingLeft: "10px", paddingRight: "10px" }}>
            <a className="protestNumber">2</a>
            <a className="protestTip">Cover tattoos or any easily-identifiable indicators</a>
          </div>

          <div className="protestDiv2" style={{ backgroundColor: "lavender", paddingLeft: "10px", paddingRight: "10px" }}>
            <a className="protestNumber">3</a>
            <a className="protestTip">Do not take photos that can identify another protestor and jeopardize their safety</a>
          </div>

          <div className="protestDiv2" style={{ backgroundColor: "lightyellow", paddingLeft: "10px", paddingRight: "10px" }}>
            <a className="protestNumber">4</a>
            <a className="protestTip">Bring water for drinking and tear gas</a>
          </div>

          <div className="protestDiv2" style={{ backgroundColor: "lavenderblush", paddingLeft: "10px", paddingRight: "10px" }}>
            <a className="protestNumber">5</a>
            <a className="protestTip">Make sure someone is aware of your whereabouts or do not go to protests alone</a>
          </div >

          <div className="protestDiv2" style={{ backgroundColor: "lavender", paddingLeft: "10px", paddingRight: "10px" }}>
            <a className="protestNumber">6</a>
            <a className="protestTip">Don't wear jewellery or anything easily grabbed</a>
          </div >

          <div className="protestDiv2" style={{ backgroundColor: "lightyellow", paddingLeft: "10px", paddingRight: "10px" }}>
            <a className="protestNumber">7</a>
            <a className="protestTip">Bring an ID. If police can't identify you, you are likely to have to go through the system and spend the night in jail</a>
          </div >

          <div className="protestDiv2" style={{ backgroundColor: "lavenderblush", paddingLeft: "10px", paddingRight: "10px" }}>
            <a className="protestNumber">8</a>
            <a className="protestTip">Do your research, make sure the protest you are attending is legitamate and not a police trap</a>
          </div >

          <div className="protestDiv2" style={{ backgroundColor: "lavender", paddingLeft: "10px", paddingRight: "10px" }}>
            <a className="protestNumber">9</a>
            <a className="protestTip">Don't wear contact lenses, they can trap chemicals</a>
          </div >

          <div className="protestDiv2" style={{ backgroundColor: "lightgray", paddingLeft: "10px", paddingRight: "10px" }}>
            <a className="protestNumber">10</a>
            <a className="protestTip" href="https://www.aclu.org/know-your-rights/protesters-rights/">Know Your Rights</a>
          </div >

          <br></br>

          <div className="protestMore">
            <h3 className="protestNumber">More tips</h3>
            <a className="protestLinks" href="https://www.vogue.com/article/protesting-101-what-you-need-to-know?utm_source=nl&utm_brand=vogue&utm_mailing=VOG_Top_Clickers_060420&utm_campaign=aud-dev&utm_medium=email&bxid=5d5aa677954fcf314c353549&cndid=58183036&hasha=0ad68bbe87750c1cbb25dda08a9ebcb7&hashb=3198e058b75696f5ba9349e3615f1132de92b779&hashc=f0b3bb67579cab87b1828853971fd5ab8dc94532e45d0f9e7911480de8054207&esrc=article-newsletter&utm_term=VOG_TopClickers">Vogue detailed explanations on what you should and shouldn't do when going to a protest</a>
            <a className="protestLinks" href="https://www.wired.com/story/how-to-protest-safely-gear-tips/">Wired Article How To Protest Safely</a>
            <a className="protestLinks" href="https://protestinfo.carrd.co/">Protest Info carrd.co</a>
            <a className="protestLinks" href="https://www.instagram.com/p/CA0jzCdg_vR/?utm_source=ig_embed">Aoc Instagram Protesting Safely</a>
            <a className="protestLinks" href="https://docs.google.com/document/d/1-0KC83vYfVQ-2freQveH43PWxuab2uWDEGolzrNoIks/preview?pru=AAABcocgpNo*UBPCW-P6xjFPm_kI7mvPZw#">General Google Doc with Protest Tab</a>
            <a className="protestLinks" href="https://www.amnestyusa.org/pdfs/SafeyDuringProtest_F.pdf">Amnesty USA Safety During Protest</a>
            <a className="protestLinks" href="https://blacklivesmatters.carrd.co/#protesters">blacklivesmatter carrd.co For Protestors</a>
          </div>
        </div >
      </div>
      <div className="backDiv">
        <Link onClick={scrollToTop} className="backButton" tag={Link} to="/">back</Link>
      </div>
    </>
  )
}

export default Protest;
