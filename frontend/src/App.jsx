import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import css from './App.module.css';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';

function App() {

  return (
    <>
      <Header />
      <main className={css.main}> <Main /> </main> 
      <footer className={css.footer}> <Footer /> </footer>
    </>

  );
}

export default App;
