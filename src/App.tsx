import { useState } from 'react';
import './App.scss';
import ChickenWing from './components/ChickenWing';
import Footer from './components/Footer';

import Header from './components/Header';
import PopularMenu from './components/PopularMenu';
import Statistic from './components/Statistic';
import NavMobile from './components/NavMobile';


function App() {

  const [onOpen,setOnOpen] = useState(false);

	return <>
  <Header/>
  <PopularMenu/>
  <ChickenWing/>
  <Statistic/>
  <Footer/>
  <NavMobile/>
  </>;
}

export default App;