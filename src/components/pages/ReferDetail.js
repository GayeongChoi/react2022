import React from 'react'
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Footer from "../layout/Footer";
import { gsap } from "gsap";

class ReferDetail extends React.Component {

  componentDidMount(){
    document.querySelector("body").style.background = "#fff";
    this.mainAnimation();
  }

  mainAnimation = () => {
      setTimeout(()=> {
        gsap.to("#header", {
            duration:0.4, 
            top:0,
        })
        gsap.to("#footer", {
            duration:0.4, 
            bottom:0,
            delay: 0.4,
        })
        gsap.to(".refer__inner", {
          duration:0.6, 
          bottom:0,
          delay: 0.8,
      })
    },200)
  }

  render(props){
    return (
            <>
              <Header color="light" />
              <Contents>
                <section className="refer__cont">
                  <div className="container">
                      <div className="refer__inner">
                        <div>ddd</div>
                      </div>
                  </div>
                </section>
              </Contents>
              <Footer color="light" />
            </>
    )
  }

}
export default ReferDetail