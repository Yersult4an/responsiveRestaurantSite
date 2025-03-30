import { onBreak } from '@/store/counter/counterSlice';
import { RootState, useAppDispatch } from '@/store/store';
import CloseIcon from '@mui/icons-material/Close';

import { useDispatch, useSelector } from 'react-redux';

function NavMobile() {

  const toggle = useSelector((state:RootState)=> state.counter.toggle)
  const dispatch = useDispatch<useAppDispatch>();


  return (
    <div className={`nav-mobile ${toggle?'on-close':''}`}>
    <ul><li>
					{' '}
					<a href='#'>HOME</a>{' '}
				</li>
				<li>
					{' '}
					<a href='#'>PRODUCT</a>
				</li>
				<li>
					<a href='#'>PROMO</a>
				</li>
				<li>
					<a href='#'>ABOUT </a>
				</li>
				<li>
					<a href='#'>CONTACT</a>
				</li>
        <div style={{position:'absolute',top:'15px', right:'15px',color:'white',zIndex:99}}>
          <button onClick={()=>{
        dispatch(onBreak());
        }} >
        <CloseIcon sx={{fontSize:'42px',cursor:'pointer'}} />
        </button>
        </div>
        </ul>      
  </div>
  )
}

export default NavMobile