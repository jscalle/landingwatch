import { BrowserRouter as Routes } from "react-router-dom";
// import { styled } from "styletron-react";
// import { StyleReset } from 'atomize';
// import "@fortawesome/fontawesome-free/css/all.min.css";
// import "./assets/styles/tailwind.css";

// import Home from "./Main";
import Landing from "./components/ProductLandingPage/index.jsx"
// import Cv from "./components/cv/main"
// import SpaceX from "./components/Spacex/App"
// import Landing from "./components/Landing"

// import './main.css';

// const Home = () => (<p>Hola Home</p>)

const App = () => (
  <Routes>
    {/* <Home /> */}
    <Landing />
    {/* <Route path="/" element={<Home />} /> */}
  </Routes>
)

// function App() {
//   return (
//     // <div className="App">
//       <Routes>
//         <Route path="/" element={<Home />} />
//         {/* <Route path="cv" element={<Cv />} />
//         <Route path="spacex" element={<SpaceX />} />
//         <Route path="pageReactWithTailwindCSS" element={<Landing />} /> */}
//       </Routes>
//     // </div>
//   )
// }

export default App;