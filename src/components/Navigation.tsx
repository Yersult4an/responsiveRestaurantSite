import { onBreak } from '@/store/counter/counterSlice';
import SearchIcon from '@mui/icons-material/Search';
import Logo from '@/assets/Logo.png';
import MenuIcon from '@mui/icons-material/Menu';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '@/store/store';

function Navigation() {
	 const toggle = useSelector((state:RootState)=> state.counter.toggle)
  const dispatch = useDispatch<useAppDispatch>()

	return (
		<div className='nav-main' style={{display:`${toggle?'none':''}`}}>
			<div className='nav-main__logo'>
				<img src={Logo} alt='#' style={{display:toggle?'none':'inline-block'}}/>
			</div>
			<div className='nav-mobile-menu'>
				<button onClick={()=>{
					dispatch(onBreak())
					console.log(toggle)
				}}>
					<MenuIcon sx={{color:'white',fontSize:'52px',display:toggle?'none':'inline-block'}}/>
				</button>
			</div>
			<ul className='nav-main__list'>
				<li>
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
				<li>
					<button onClick={()=>{

					}}>
						<SearchIcon
							sx={{ color: 'rgb(0, 132, 255)', fontSize: '33px' }}
						/>
					</button>
				</li>
			</ul>
		</div>
	);
}

export default Navigation;
