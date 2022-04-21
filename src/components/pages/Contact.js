import React from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Footer from "../layout/Footer";
import Title from "../layout/Title";
import Loading from "../basics/Loading";
import { gsap } from "gsap";
import ContactCont from "../includes/ContactCont";


// function Contact(){
//     return (
//         <>
//             <Header />
//             <Contents>
//                 <ContactCont />
//             </Contents>
//             <Footer />
//         </>
//     )
// }
// export default Contact;

class Contact extends React.Component {
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
              gsap.to(".contact__inner", {
                duration:0.6,
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
                    <Loading />
                ) : (
                    <>
                        <Header />
                        <Contents>
                            <ContactCont />
                        </Contents>
                        <Footer />
                </>
                )}
          </>
        )
    }
}
export default Contact;