import React from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Footer from "../layout/Footer";
import Title from "../layout/Title";
import ContContact from "../layout/ContContact";
import Loading from "../basics/Loading";
import { gsap } from "gsap";
import ReferCont from "../includes/ReferCont";
import axios from "axios";

// function Reference(){
//     return(
//         <>
//         <Header color="light"/>
//         <Contents>
//             <Title color="light" title={["Reference","Book"]} />
//             <ReferCont color="light"/>
//             <ContContact/>
//         </Contents>
//         <Footer />
//     </>
//     )
// }
// export default Reference;

class Reference extends React.Component {
    state = {
        isLoading: true,
        refers: [],
    }
    mainAnimation = () => {
        setTimeout(() => {
            gsap.to("#header", {
                duration: 0.8,
                top: 0,
            });
            gsap.to("#footer", {
                duration: 0.8,
                bottom: 0,
                delay: 0.2,
            });
            gsap.to(".cont__title strong", {
                duration: 0.7,
                y: 0,
                opacity: 1,
                delay: 1.0,
                ease: "power4.out"
            });
            gsap.to(".cont__title em", {
                duration: 0.7,
                y: 0,
                opacity: 1,
                delay: 1.3,
                ease: "power4.out"
            });
            gsap.to(".refer__inner", {
                duration: 0.7,
                y: 0,
                opacity: 1,
                delay: 1.5,
                ease: "power4.out"
            });
        }, 10)
    }
    getSite = async () => {
        const {
            data : {
                data: {htmlRefer}
            }
        } = await axios.get("https://webstoryboy.github.io/react2022/src/assets/json/refer.json");

        this.setState({refers:htmlRefer, isLoading:false})
   
        setTimeout(() => {
            this.setState({isLoading: false});
            this.mainAnimation();
        }, 1600)
    }

    componentDidMount(){
        setTimeout(() => {
            document.getElementById("loading").classList.remove("loading__active");
            document.querySelector("body").style.background = "#F0EEEB";
            this.getSite();
        }, 2000);
    }
    render(){
        const {isLoading, refers} = this.state;
        console.log(refers);
        return (
            <>
                {isLoading ? (
                    <Loading color="light" />
                ) : (
                    <>
                        <Header color="light" />
                        <Contents>
                            <Title title={["Reference","book"]} color="light" />
                            <ReferCont refer={refers} color="light" />
                            <ContContact/>
                        </Contents>
                        <Footer color="light" />
                    </>
                )}
            </>
        )
    }
}
export default Reference;