import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomeContent from './contents/Home';
//Embedding expressions
import AboutContent from './contents/AboutMe';
//Class based components
import ReachOut from './contents/ContactMe';

//Rendering children components inside parents, Everything enclosed in the "Parent" wrapper becomes a child
import Parent from './contents/ContentWrapper';

//Navbar
import Navbar from './contents/Navbar';
//Styling


import Dashboard from './contents/Dashboard';

function App() {
  //let Component
  //switch (window.location.pathname) {
  //  case "/":
  //    Component = HomeContent
  //    break
  //  case "/aboutme":
  //    Component = QuestionContent
  //    break
  //  case "/contactme":
  //    Component = ReachOut
  //    break
  //}
  return(
    <Router>
      <Parent>
        <Navbar/>
        <Dashboard/>
        <div className='container'>
          <Routes>
            <Route path="/" element={<HomeContent/>}/>
            <Route path="/aboutme" element={<AboutContent/>}/>
            <Route path="/contactme" element={<ReachOut/>}/>
          </Routes>
        </div>
      </Parent>
    </Router>
  )
}

export default App
//  <Header/>
//  <HomeTitle/>
//  <HomeContent/>
//  
//  <Question/>
//  <QuestionContent/>
//  <Interests/>
//  
//  <ReachOut email="sovereign.wawiye@gmail.com" phone="+254701374708" linkedin="Sovereign Wawiye"/>


