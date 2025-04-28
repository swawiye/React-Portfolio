import Header, {HomeTitle, HomeContent} from './contents/Home';
//import Title, { FavFruit, SecondFavFruit, ExoticFruit, InfoOnExoticFruit } from './components/Fruits';
//import {Test, MyTest} from './components/MyTest';
////Embedding expressions
//import Greeting from './components/Expressions';
//import FavouriteFruit from './components/Favefruit';
//
////Class based components
//import Greet from './components/Class';

//Rendering children components inside parents, Everything enclosed in the "Parent" wrapper becomes a child
import Parent from './contents/ContentWrapper';

function App() {
  return(
    <Parent>

      <Header/>
      <HomeTitle/>
      <HomeContent/>
    
    </Parent>
  )
}

export default App
