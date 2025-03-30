import Stake from '@/assets/Checking-wings/stake.png';

function ChickenWing() {
	return (
		<div className='wrapper'>
			<div className='chickwing'>
				<div className='chickwing__main'>
					<div className='chickwing__img'>
						<img src={Stake} alt='#' />
					</div>
					<div className='chickwing__group'>
						<h3 className='chickwing__title'>CHI<wbr/>CKEN WIN<wbr/>GS</h3>
						<p className='chickwing__description'>
							Lorem ipsum dolor sit amet, consecte- <br />
							tur adipiscing elit. Vivamus  lacinia  <br /> odio vitae vestibulum
							vestibulum.{' '}
						</p>
            <button className='chickwing__button'>ORDER NOW</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ChickenWing;
