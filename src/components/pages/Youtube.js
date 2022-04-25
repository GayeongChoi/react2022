import React from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Footer from "../layout/Footer";
import Title from "../layout/Title";
import ContContact from "../layout/ContContact";
import Loading from "../basics/Loading";
import { gsap } from "gsap";
import YoutubeCont from "../includes/YoutubeCont";
// import YoutubeSearch from "../includes/YoutubeSearch";
// import YoutubeList from "../includes/YoutubeList";
import axios from "axios";

// function Youtube(){
//     return(
//         <>
//             <Header color="light"/>
//                 <Contents>
//                     <Title  color="light" title={["CODING","YOUTUBER"]} />
//                     <YoutubeCont  color="light"/>
//                     <ContContact/>
//                 </Contents>
//             <Footer />
//         </>
//     )
// }
// export default Youtube;

class Youtube extends React.Component {
    state = {
        isLoading : true,
        lists: [],
        searchs:[]
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
            gsap.to(".youtube__inner", {
                duration: 0.5,
                y: 0,
                opacity: 1,
                delay: 1.6,
                ease: "power3.out"
            });
        }, 10)
    }

    getYoutubes = async() => {
        const lists = await axios.get("https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=bts&key=AIzaSyDDXEC06dKJzJj7sqkotQnYJzY4_mWxeFY&type=video&maxResults=30"); //데이터 가져오기
        this.setState({lists,isLoading:false});//로딩소스에 false를 보내줌
        console.log(lists); //데이터 가져오는 지 확인
        this.mainAnimation(); //애니메이션 실행
    }

    componentDidMount(){ //
        setTimeout(() => {
            document.getElementById("loading").classList.remove("loading__active"); //로딩소스 제거
            this.getYoutubes(); //유튜브 데이터 가져옴
        }, 2000); //2초뒤 실행
    }

    render(){
        const { isLoading, lists } = this.state; //로딩소스 가져오기
        return (
            <>
            {isLoading ? (
                <Loading color="light"/>
            ) : (
                <>
                    <Header color="light"/>
                    <Contents>
                        <Title  color="light" title={["Youtube", "reference"]} />
                        <YoutubeCont  color="light" lists={lists}/>
                        {/* <YoutubeSearch />
                        <YoutubeList lists={lists}/> */}
                        <ContContact/>
                    </Contents>
                    <Footer />
                </>
            )}
            </>
        )
    }
}
export default Youtube;