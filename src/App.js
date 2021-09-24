import ImageLoad from './components/ImageLoad'

import originalImg from './original-image.jpg'
import placeholderImg from './placeholder.jpg'

function App() {
  return (
    <div className="App">
      <ImageLoad 
        src = {originalImg} 
        placeholder = {placeholderImg} 
        alt = "Description" 
      />
    </div>
  );
}

export default App;
