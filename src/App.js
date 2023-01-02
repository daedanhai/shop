import './App.css';
import { useEffect, useState, createContext } from 'react';
import {Navbar, Nav, Container } from 'react-bootstrap';
import data from './data.js';
import { Routes, Route, Link, useNavigate, Outlet} from 'react-router-dom';
import Detail from './pages/Detail';
import Cart from './pages/Cart'
import axios from 'axios';

export let Context1 = createContext();

function App() {

  let [shoes,setShoes] = useState(data);
  let [alert,setAlert] = useState(true);
  let [num,setNum] = useState('');
  let [재고] = useState([10, 11, 12]);
  
  
  useEffect(()=>{
  
  if(isNaN(num) === true){
    console.log('그러지마세요.');
  }
  
  let a = setTimeout(()=>{ setAlert(false) }, 2000);

  return () => {
    clearTimeout(a);
  }

  },[num]);

  return (
    <div className="App">
      
      <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand><Link to="/">Reebok</Link></Navbar.Brand>
        <Nav className="me-auto">
          <Nav><Link to="/">Home</Link></Nav>
          <Nav><Link to="detail">detail</Link></Nav>
          <Nav><Link to="about">about</Link></Nav>
        </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={
          <>
          <div className="main-bg"></div>
            {
              alert === true ? <div className="alert alert-warning">2초이내 구매시 할인</div> : null
            }

            <div>
              <input tpye="text" onChange={(e)=>{
                if(isNaN(e.target.value) == true){
                  setNum(e.target.value)
                }
              }}/>
            </div>

            <div className="container">
              <div className="row">
                
                {
                  shoes.map((a,i)=>{
                    return(
                      <Card a={a} key={i}/>
                    )
                  })
                }
                <button onClick={()=>{
                  axios.get('https://codingapple1.github.io/shop/data2.json').then((결과)=>{
                    let copy = [...shoes, ...결과.data]
                    setShoes(copy)
                  })
                  .catch(()=>{
                    console.log('실패함')
                  })
               }}>버튼</button>
              </div>
            </div>
          </>
        }/>
        <Route path="/detail/:id" element={
          <Context1.Provider value={{ 재고,shoes }}>
            <Detail shoes={shoes}/>
          </Context1.Provider>
        }/>
        <Route path="/about" element={<About/>}>
          <Route path="member" element={<div>멤버페이지임</div>}/>
          <Route path="location" element={<div>장소페이지임</div>}/>
        </Route>
        <Route path="event" element={<div><h4>이벤트페이지임</h4><Outlet></Outlet></div>}>
          <Route path="one" element={<div>생일기념 쿠폰받기</div>}/>
          <Route path="two" element={<div>첫주문시 양배추즙 무료</div>}/>
        </Route>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="*" element={<div>404 페이지임</div>}/>
      </Routes>


    </div>
  );
}

function About(){
  return (
    <div>
      <h4>about페이지임</h4>
      <Outlet></Outlet>
    </div>
  )
}

function Card(props){
  return(
    <div className="col-md-4">
      <img src={"https://codingapple1.github.io/shop/shoes"+ (props.a.id + 1) + ".jpg"} width="80%" />
      <h4>{props.a.title}</h4>
      <p>{props.a.content}</p>
    </div>
  )
}


export default App;
