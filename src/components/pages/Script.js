import React from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Footer from "../layout/Footer";
import Title from "../layout/Title";
import ContContact from "../layout/ContContact";
import Loading from "../basics/Loading";
import { gsap } from "gsap";
import ScriptCont from "../includes/ScriptCont";

// function Script(){
//     return(
//         <>
//         <Header color="light"/>
//         <Contents>
//             <Title  color="light" title={["SCRIPT","JAVASCRIPT"]} />
//             <ScriptCont  color="light"/>
//             <ContContact/>
//         </Contents>
//         <Footer />
//         </>
//     )
// }
// export default Script;

class Script extends React.Component {
    state = {
        isLoading: true,
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
              gsap.to(".script__inner", {
                duration:0.4,
                y: 0,
                opacity: 1,
                delay: 0.8,
              });
        },200)
    }

    componentDidMount(){
        setTimeout(() => {
            document.getElementById("loading").classList.remove("loading__active");
        }, 1000)

        setTimeout(() => {
            this.setState({isLoading:false});
            this.getSite();
        },3000)
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
                            <Title  color="light" title={["SCRIPT","JAVASCRIPT"]} />
                            <ScriptCont  color="light"/>
                            <ContContact/>
                        </Contents>
                        <Footer />
                </>
                )}
          </>
        )
    }
}
export default Script;