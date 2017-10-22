import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
    render() {
        return (
            <div className="my-portfolio">
                <h1>My Portfolio</h1>
                <p>Stuff I like...</p>
                <Link to="about" className="btn btn-primary btn-lg">Enter at your own risk</Link>
            </div>
        );
    }
}

export default HomePage;
