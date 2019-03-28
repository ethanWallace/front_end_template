import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// components
import LocalizedConfigSection from '../components/info/ConfigurationSection';
import StructSection from '../components/info/StructureSection';
import TogetherSection from '../components/info/TogetherSection';

class Info extends Component {
  componentDidMount() {
    document.title = 'Using the Front-end template';
  }
  render() {
    return (
      <div className="mt-5">
        <h1>Using the Front-end Template</h1>

        <LocalizedConfigSection />
        <StructSection />
        <TogetherSection />
        <div>
          <p className="text-center h2 mt-4">Happy Coding</p>
        </div>
        <div className="mt-5 mb-5">
          <Link
            to="/"
            href="/"
          >
            Return to home
          </Link>
        </div>
      </div>
    );
  }
}

export default Info;
