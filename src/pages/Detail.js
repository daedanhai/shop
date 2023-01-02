import { useParams } from "react-router-dom";
import {Nav} from "react-bootstrap";
import { useContext, useState, useEffect } from "react";

import {Context1} from './../App.js';

function Detail(props){

    let {재고,shoes} = useContext(Context1);
    let {id} = useParams();
    let 찾은상품 = props.shoes.find((x)=>{
        return x.id == id
    });
    let [tabs,setTabs] = useState(0);

    return(
    <>
    <div className="container">
        <div className="row">
            <div className="col-md-6">
           
            <img src={"https://codingapple1.github.io/shop/shoes" + (찾은상품.id + 1) + ".jpg"} width="100%" />
            </div>
            <div className="col-md-6">
            <h4 className="pt-5">{찾은상품.title}</h4>
            <p>{찾은상품.content}</p>
            <p>{찾은상품.price}</p>
            <button className="btn btn-danger">주문하기</button> 
            </div>
        </div>
    </div> 
    
    <Nav variant="tabs" defaultActiveKey="link0">
      <Nav.Item>
        <Nav.Link eventKey="link0" onClick={()=>{setTabs(0)}}>버튼0</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link1" onClick={()=>{setTabs(1)}}>버튼1</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link2" onClick={()=>{setTabs(2)}}>버튼2</Nav.Link>
      </Nav.Item>
    </Nav>

    <TabsCon tabs={tabs} shoes={props.shoes}/>

    </>
    )
}

// function TabsCon(props){
//     if(props.tabs == 0){
//         return <div>내용0</div>
//     } else if(props.tabs == 1){
//         return <div>내용1</div>
//     } else if(props.tabs == 2) {
//         return <div>내용2</div>
//     }
// }

function TabsCon({tabs,shoes}){
    let {재고} = useContext(Context1);
    return(
        [
            <div>{ shoes[0].title }{재고}</div>,
            <div>내용1</div>,
            <div>내용2</div>
        ][tabs]
    )
}


export default Detail;