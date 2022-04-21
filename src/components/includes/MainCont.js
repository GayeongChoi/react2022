import React from "react";


function MainInfo({text1,text2,text3,text4}){
    return (
        <>
            <div>{text1}</div>
            <div>{text2}</div>
            <div>{text3}</div>
            <div>{text4}</div>
        </>
    )
}


const mainText = {
    text1 : "WE PROVIDE",
    text2 : "VISUAL CODING",
    text3 : "SOLUTIONS",
    text4 : "FOR YOU WEBS",
}

function MainCont(){
    return (
        <section className="main__cont">
            <div className="main__inner">
                <MainInfo
                    text1 = {mainText.text1}
                    text2 = {mainText.text2}
                    text3 = {mainText.text3}
                    text4 = {mainText.text4}
                />
            </div>
        </section>
    )
}
export default MainCont;