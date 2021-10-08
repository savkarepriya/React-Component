import Header from './component/Header';
import Footer from './component/Footer';
import Section from './component/Section';

import './App.css';
import React from 'react';

function App() {
    return (
        <div className="color">
            <h1>
                Hello from default file.
            </h1>
            <Header />
            <hr />
            <Section />
            <hr />
            <Footer />
            <hr />
        </div>
    );
}



export default App;
