import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';
import '../style/Footer.css'

class Footer extends React.Component {
    render() {
        return (
            <footer>
     
                  <h3><FontAwesomeIcon icon={faCopyright} />      All Rights Reserved by Lydec Diouri</h3>
					
			</footer>

		);
	}
}
export default Footer;