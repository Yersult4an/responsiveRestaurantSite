import First from '@/assets/popular-group/first.png';
import Second from '@/assets/popular-group/second.png';
import Third from '@/assets/popular-group/third.png';

function PopularMenu() {
	return (
		<div className='wrapper'>
			<div className='restaurant-popular'>
				<div className='restaurant-popular__menu'>
					<h2 className='restaurant-popular__title'>Pop<wbr/>ular Menu</h2>
					<p className='restaurant-popular__description'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.{' '}
						<br />
						Vivamus lacina odio vestibulum vestibulum.
					</p>
				</div>
				<div className='restaurant-popular__albums'>
					<div className='restaurant-popular__album'>
						<div className='restaurant-popular__album-image'>
							<img src={First} alt='#' />
						</div>
						<h3 className='restaurant-popular__album-title'>PACKAGE 1</h3>
						<p className='restaurant-popular__album-description'>
							Lorem ipsum dolor sit amet <br />
							consectetur adipscing elit
						</p>
					</div>
					<div className='restaurant-popular__album'>
						<div className='restaurant-popular__album-image'>
							<img src={Second} alt='#' />
						</div>
						<h3 className='restaurant-popular__album-title'>PACKAGE 1</h3>
						<p className='restaurant-popular__album-description'>
							Lorem ipsum dolor sit amet <br />
							consectetur adipscing elit
						</p>
					</div>
					<div className='restaurant-popular__album'>
						<div className='restaurant-popular__album-image'>
							<img src={Third} alt='#' />
						</div>
						<h3 className='restaurant-popular__album-title'>PACKAGE 1</h3>
						<p className='restaurant-popular__album-description'>
							Lorem ipsum dolor sit amet <br />
							consectetur adipscing elit
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default PopularMenu;