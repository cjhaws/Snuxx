import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';

const Header = () => {
	return (
		<nav>
			<Link to="/about" activeClassName="active">About</Link>
		</nav>
	);
};

export default Header;

//If ever needed for a Home page. 

//<IndexLink to="/" activeClassName="active">Home</IndexLink>
