import React from "react";
import {Link} from 'react-router-dom';

function ReferInfo({id, desc, title}){
    return (
         <tr>
            <td>{id}</td>
            <td>{title}</td>
            <td>
                <Link to= {{
                    pathname : "/refer-detail",
                    state:{id, desc, title},
                }}>
                    {desc.slice(0,180)}
                </Link>
            </td>
        </tr>
    )
}

function ReferCont(props){
    return(
            <section className={`refer__cont  ${props.color}`}>
                <div className="container">
                    <div className="refer__inner">
                        <div className="text">
                            <h2>CSS REFERENCE</h2>
                        </div>
                        <table>
                        <colgroup>
                            <col style={{width: "10%"}} />
                            <col style={{width: "30%"}} />
                            <col style={{width: "60%"}} />
                        </colgroup>
                        <tbody>
                        {props.refer.map((refer) => (
                            <ReferInfo
                                key={refer.id}
                                id={refer.id}
                                title={refer.title}
                                desc={refer.desc}
                            />
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    )
}
export default ReferCont;

// function ReferCont(props){
//     return(
//         <section className={`refer__cont  ${props.color}`}>
//             <div className="container">
//                 <div className="refer__inner">
//                         <div className="text">
//                             <h2>CSS REFERENCE</h2>
//                         </div>
//                         <table>
//                             <colgroup>
//                                 <col style={{width: "10%"}} />
//                                 <col style={{width: "30%"}} />
//                                 <col style={{width: "60%"}} />
//                             </colgroup>
//                             <tbody>
//                             <tr>
//                                 <td>A</td>
//                                 <td>align-content</td>
//                                 <td>align-content 속성은 콘텐츠의 상하관계 정렬 상태를 정의합니다.</td>
//                             </tr>
//                             <tr>
//                                 <td></td>
//                                 <td>align-content</td>
//                                 <td>align-content 속성은 콘텐츠의 상하관계 정렬 상태를 정의합니다.</td>
//                             </tr>
//                             </tbody>

//                         </table>
//                 </div>
//             </div>
//         </section>
//     )
// }
