import logo from './logo.svg';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import './App.css';

function Home() {
  return (
    <>
    </>
  )
}

function Page1() {
  return (
    <>
      <h2>Page 1</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lobortis viverra mauris nec sagittis. Phasellus interdum tortor a efficitur fermentum. Vivamus lorem augue, mollis eu lobortis sit amet, interdum vitae dui. In eleifend, nulla sit amet fringilla interdum, odio mi sodales enim, vel sollicitudin erat lectus eu neque. Proin eget consequat odio. Pellentesque vestibulum auctor odio, id ultricies dolor sagittis ut. Sed non leo ac nulla placerat sagittis. Curabitur venenatis molestie est a suscipit.</p>
    </>
  )
}

function Page2() {
  return (
    <>
      <h2>Page 2</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lobortis viverra mauris nec sagittis. Phasellus interdum tortor a efficitur fermentum. Vivamus lorem augue, mollis eu lobortis sit amet, interdum vitae dui. In eleifend, nulla sit amet fringilla interdum, odio mi sodales enim, vel sollicitudin erat lectus eu neque. Proin eget consequat odio. Pellentesque vestibulum auctor odio, id ultricies dolor sagittis ut. Sed non leo ac nulla placerat sagittis. Curabitur venenatis molestie est a suscipit.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lobortis viverra mauris nec sagittis. Phasellus interdum tortor a efficitur fermentum. Vivamus lorem augue, mollis eu lobortis sit amet, interdum vitae dui. In eleifend, nulla sit amet fringilla interdum, odio mi sodales enim, vel sollicitudin erat lectus eu neque. Proin eget consequat odio. Pellentesque vestibulum auctor odio, id ultricies dolor sagittis ut. Sed non leo ac nulla placerat sagittis. Curabitur venenatis molestie est a suscipit.</p>
    </>
  )
}

function Page3() {
  return (
    <>
      <h2>Page 3</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lobortis viverra mauris nec sagittis. Phasellus interdum tortor a efficitur fermentum. Vivamus lorem augue, mollis eu lobortis sit amet, interdum vitae dui. In eleifend, nulla sit amet fringilla interdum, odio mi sodales enim, vel sollicitudin erat lectus eu neque. Proin eget consequat odio. Pellentesque vestibulum auctor odio, id ultricies dolor sagittis ut. Sed non leo ac nulla placerat sagittis. Curabitur venenatis molestie est a suscipit.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lobortis viverra mauris nec sagittis. Phasellus interdum tortor a efficitur fermentum. Vivamus lorem augue, mollis eu lobortis sit amet, interdum vitae dui. In eleifend, nulla sit amet fringilla interdum, odio mi sodales enim, vel sollicitudin erat lectus eu neque. Proin eget consequat odio. Pellentesque vestibulum auctor odio, id ultricies dolor sagittis ut. Sed non leo ac nulla placerat sagittis. Curabitur venenatis molestie est a suscipit.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lobortis viverra mauris nec sagittis. Phasellus interdum tortor a efficitur fermentum. Vivamus lorem augue, mollis eu lobortis sit amet, interdum vitae dui. In eleifend, nulla sit amet fringilla interdum, odio mi sodales enim, vel sollicitudin erat lectus eu neque. Proin eget consequat odio. Pellentesque vestibulum auctor odio, id ultricies dolor sagittis ut. Sed non leo ac nulla placerat sagittis. Curabitur venenatis molestie est a suscipit.</p>
    </>
  )
}
 
 
function App() {
  return (
    <div className="App">
      <img src="https://cdn-cpdmn.nitrocdn.com/orEWXKDMGNeMQjNOdQRAQfYcFKerZCvg/assets/images/optimized/rev-a443ec7/wp-content/uploads/2021/07/logo-white.svg" className="logo"/>
      <h1>React / SEO demo application</h1>
      <BrowserRouter>
        <Link to="/" className="nav-link">Home</Link>
        <Link to='/page1' className="nav-link"> Page 1</Link>
        <Link to='/page2' className="nav-link"> Page 2</Link>
        <Link to='/page3' className="nav-link"> Page 2</Link>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/page1" exact element={<Page1/>} />
          <Route path="/page2" exact element={<Page2/>} />
          <Route path="/page3" exact element={<Page3/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
