import {Table} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { changeName, increase, changeAge } from '../store.js';

function Cart(){

    let state = useSelector((state)=>{ return state });
    // let state = useSelector((state)=> state );
    // 화살표 함수에서 중괄호와 return은 생략가능
    let dispatch = useDispatch();

    return (
        <>
        <div>{state.user.name}({state.user.age})의 장바구니</div>
        <button onClick={()=>{
            dispatch(changeAge(100));
        }}>눌러</button>
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>타이틀</th>
                    <th>수량</th>
                    <th>변경하기</th>
                </tr>
            </thead>
            <tbody>
            {
                state.cartProduct.map((a,i)=>
                    <tr key={i}>
                        <td>{i}</td>
                        <td>{a.name}</td>
                        <td>{a.count}</td>
                        <td>
                        <button onClick={()=>{
                            dispatch(increase());
                        }}>눌러</button>
                        </td>
                    </tr>
                )
            }
            </tbody>
        </Table>
        </>
        
    )
}

export default Cart;