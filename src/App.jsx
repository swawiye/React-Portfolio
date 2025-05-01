import Header, {HomeTitle, HomeContent} from './contents/Home';
//Embedding expressions
import Question ,{QuestionContent, Interests} from './contents/AboutMe';
//Class based components
import ReachOut from './contents/ContactMe';

//Rendering children components inside parents, Everything enclosed in the "Parent" wrapper becomes a child
import Parent from './contents/ContentWrapper';
//Navbar
import Navbar from './contents/Navbar';
//Styling
import "./App.css"

function App() {
  return(
    <Parent>
      <Navbar/>
      
      <Header/>
      <HomeTitle/>
      <HomeContent/>

      <Question/>
      <QuestionContent/>
      <Interests/>

      <ReachOut email="sovereign.wawiye@gmail.com" phone="+254701374708" linkedin="Sovereign Wawiye"/>
    
    </Parent>
  )
}

export default App
