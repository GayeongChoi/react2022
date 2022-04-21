import React from 'react'

function ContactInfo({text1,text2,text3,text4}){
  return (
      <>
       <div className="text">
          <div>{text1}</div>
          <div>{text2}</div>
          <div>{text3}</div>
        </div>
        <p className="desc">
            {text4}
        </p>
      </>
  )
}

const contactText = {
  text1 : "You are",
  text2 : "already",
  text3 : "doing well.",
  text4 : "같은 목표를 위해 달려갈 웹 퍼블리셔 & 프론트 앤드 개발자를 모집합니다. 관심 있는 분들은 카카오톡 또는 카페에 문의해주세요.",
}

function ContactCont() {
  return (
    <section className="contact__cont">
        <div className="contact__inner">
          <ContactInfo
              text1 = {contactText.text1}
              text2 = {contactText.text2}
              text3 = {contactText.text3}
              text4 = {contactText.text4}
          />
        </div>
    </section>
  )
}

export default ContactCont