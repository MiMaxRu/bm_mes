import logo from './logo.svg';
import './App.css';
import Head from './Components/Head/Head';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Dialogs from './Components/Content/Profile/ProfileInfo/Dialogs/Dialogs';
import Home from './Components/Content/Home/Home';
import Profile from './Components/Content/Profile/Profile';

import Footer from './Components/Footer/Footer';
import News from './Components/Content/News/News';

function App(props) {

  return (

    <BrowserRouter>
      <div className="App-wrapper">

        <Head />
        <Navbar />
        <div className='App-wrapper-contet'>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/dialogs" element={<Dialogs state={props.stateData.profilePage}/>} />
            <Route path="/profile" element={<Profile state={props.stateData.messagePage}/>} />
            <Route path="/news" element={<News />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
