import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import { Header } from './Views/Header/Header';
import { FloatingIcons } from './Views/FloatingIcons/FloatingIcons';

function App() {
  return (
    <div>
      {/* <div>
        <NavbarCom />
      </div> */}
      <Header />
      <FloatingIcons />
    </div>
  );
}

export default App;
