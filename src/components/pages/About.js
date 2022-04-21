import React from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Footer from "../layout/Footer";
import Title from "../layout/Title";
import ContContact from "../layout/ContContact";
import Loading from "../basics/Loading";
import { gsap } from "gsap";
import AboutCont from "../includes/AboutCont";

// function About(){
//     return (
//         <>
//             <Header color="light"/>
//             <Contents>
//                 <Title color="light"  title={["ABOUT","ME"]}/>
//                 <AboutCont color="light"/>
//                 <ContContact/>
//             </Contents>
//             <Footer />
//         </>
//     )
// }
// export default About;

class About extends React.Component {
    state = {
        isLoading: true,
    } 

    mainAnimation = () => {
        gsap.set(".about__inner", {opacity: 0})
    }

    getSite = () => {
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
            gsap.to(".cont__title strong", {
                duration:0.4,
                y: 0,
                opacity: 1,
                delay: 0.6,
              });
              gsap.to(".cont__title em", {
                duration:0.4,
                y: 0,
                opacity: 1,
                delay: 0.6,
              });
              gsap.to(".about__inner", {
                duration:0.8,
                y: 0,
                opacity: 1,
                delay: 0.8,
              });
        },900)
    }

    componentDidMount(){
        setTimeout(() => {
            document.getElementById("loading").classList.remove("loading__active");
        }, 1000)

        setTimeout(() => {
            this.setState({isLoading:false});
            this.getSite();
        }, 3000)
    }
    //로딩 소스가 로딩이 되고 render()가 실행
    
    render(){
        const {isLoading} = this.state;
        return (
            <>
                {isLoading ? (
                    <Loading color="light"/>
                ) : (
                    <>
                        <Header color="light"/>
                        <Contents>
                            <Title color="light"  title={["ABOUT","ME"]}/>
                            <AboutCont color="light"/>
                            <ContContact/>
                        </Contents>
                        <Footer />
                    </>
                )}
          </>
        )
    }
}
export default About;

