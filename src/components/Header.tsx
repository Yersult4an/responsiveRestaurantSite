import Navigation from './Navigation';

function Header() {
	return (
		<div className='wrapper'>
			<div className='hero-restaurant'>
				<Navigation />
				<div className='hero-restaurant__main'>
					<h1 style={{textAlign:'center'}} className='hero-restaurant__title'>DI<wbr/>SCO<wbr/>UNT 50%</h1>
					<p style={{textAlign:'center'}} className='hero-restaurant__description'>
						Lorem ipsum, dolor sit amet, consectetur adipiscing <br />{' '}
						elit. Vivamus lacinia odio vitae vestibulum vestibulum
					</p>

          <button className='hero-restaurant__button'>
            ORDER NOW
          </button>
				</div>
			</div>
		</div>
	);
}

export default Header;
