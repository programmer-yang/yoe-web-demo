import React from 'react';
import { Route } from 'react-router-dom';


const HomePage = () => {
  return (
    <div>
      HomePage
    </div>
  );
}
const DemoPage = () => {
  return (
    <div>
      DemoPage
    </div>
  );
}

const PrimaryLayout = () => {
  return (
    <div>
      <header>
        head
      </header>
      <div className="container">
        <Route path="/" exact component={HomePage} />
        <Route path="/demo" component={DemoPage} />
      </div>
    </div>
  );
};

export default PrimaryLayout;