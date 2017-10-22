import React from 'react';
import {Link} from 'react-router';

class AboutPage extends React.Component {
    render() {
        return (
            <div className="hobbies">

                <h1>Stuff I like</h1>

                  <ul>
                    <li>Golf</li>
                    <li>Basketball</li>
                    <li>Heavy Music</li>
                    <li>Mosh Pits</li>
                    <li>Learning Code</li>
                  </ul>

                  <h1>Stuff I want to learn</h1>

                  <ul>
                    <li>How to write a React App</li>
                    <li>Code better!</li>
                  </ul>

                  <a className="btn btn-primary" href="http://localhost:3000/">Home Page</a>

            </div>


        );
    }
}

export default AboutPage;
