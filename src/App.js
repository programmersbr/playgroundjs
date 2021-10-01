import './App.css'

// import ImageLoad from './components/ImageLoad'
// import originalImg from './original-image.jpg'
// import placeholderImg from './placeholder.jpg'

// import MyComponent from './components/freecode/MyComponent'
// import TypesOfFood from './components/freecode/TypesOfFood'
// import Calendar from './components/freecode/Calendar';
// import ToDo from './components/freecode/ToDo';
// import Override from './components/freecode/OverrideDefaultProps'
// import Access from './components/freecode/Access-props-using-this-props'
// import UsePropTypes from './components/freecode/Use-proptypes-to-define-the-props-you-expect'
// import CalendarDefault from './components/datepicker/CalendarDefault'
import CalendarInline from './components/datepicker/CalendarInline'
// import PropsWithStateless from './components/freecode/Review-using-props-with-stateless-functional-components'
import Menu from './components/MenuPlayground'

function App() {
  return (
    <div className="App">
      <Menu />
      {/* <ImageLoad 
        src = {originalImg} 
        placeholder = {placeholderImg} 
        alt = "Description" 
      /> */}
      <div className="container">
      {/* <MyComponent /> */}
      {/* <TypesOfFood /> */}
      {/* <Calendar /> */}
      {/* <ToDo />
      <Override /> */}
      {/* <Access /> */}
      {/* <UsePropTypes /> */}
      {/* <CalendarDefault /> */}
      <CalendarInline />
      {/* <PropsWithStateless /> */}      
      </div>
    </div>
  );
}

export default App;
