import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

function Footer() {
  return (
    <div className="wrapper">
      <div className="footer">
        <ul className="footer__groups">
          <li>
            <ul>
              <li><h4 className="footer__title">Title here</h4></li>
              <li><p className="footer__description">Lorem ipsum dolor sit amet, consecte- <br />tur adipiscing elit. Aliquam at dignis- <br /> sim nunc, id maximus ex. Etiam nec <br /> dignissim elit, at dignissim enim. </p></li>
              <li className='footer__icons'><a href="#"><InstagramIcon fontSize='large'/></a>
              <a href="#"><FacebookIcon fontSize='large'/></a>
              <a href="#"> <TwitterIcon fontSize='large'/> </a>
              <a href="#"> <WhatsAppIcon fontSize='large'/> </a>
              </li>
            </ul>
          </li>
          <li>
            <ul className='footer__group'>
              <li>
                <ul className='footer__group-end'>
                  <li>
                    <h4 className='footer__title'>About</h4>
                  </li>
                  <li>
                    <a href="#" className='footer__description'>
                    History
                    </a>
                  </li>
                  <li>
                    <a href="#" className='footer__description'>
                    Our team
                    </a>
                  </li>
                  <li>
                    <a href="#" className='footer__description'>
                    Brand Guidelines
                    </a>
                  </li>
                  <li>
                    <a href="#" className='footer__description'>
                    Terms & Condition 
                    </a>
                  </li>
                  <li>
                    <a href="#" className='footer__description'>
                    Privacy Policy 
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <ul className='footer__group-end'>
                  <li>
                    <h4 className='footer__title'>Services</h4>
                  </li>
                  <li>
                    <a href="#" className='footer__description'>
                    How to order
                    </a>
                  </li>
                  <li>
                    <a href="#" className='footer__description'>
                    Our Product
                    </a>
                  </li>
                  <li>
                    <a href="#" className='footer__description'>
                    Order Status
                    </a>
                  </li>
                  <li>
                    <a href="#" className='footer__description'>
                    Promo 
                    </a>
                  </li>
                  <li>
                    <a href="#" className='footer__description'>
                    Payment Method
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <ul className='footer__group-end'>
                  <li>
                    <h4 className='footer__title'>Services</h4>
                  </li>
                  <li>
                    <a href="#" className='footer__description'>
                    Contact Status
                    </a>
                  </li>
                  <li>
                    <a href="#" className='footer__description'>
                    Help
                    </a>
                  </li>
                  <li>
                    <a href="#" className='footer__description'>
                    Privacy
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Footer