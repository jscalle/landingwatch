import { Link } from "react-router-dom";

const Navbar = ({home}) => {
  return (
    <nav className="w-11/12 flex mx-12 fixed top-3 py-1 px-5 text-slate-50 rounded-large bg-slate-700/50">
      {/* <div className="flex w-1/2">
        <p className="w-1/6 flex justify-center hover:border-2 hover:box-border hover:rounded-lg">Inicio</p>
      </div> */}
      <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
        <Link to="/"
          className="items-nav"
        > <i className="fas fa-arrow-left"></i> {home ? 'Home' : 'Atrás'} </Link>
      </div>
      
      <div className="flex justify-end w-full relative">
        <Link to="#" className="items-nav">CV</Link>
        <Link to="#" className="items-nav">Proyectos</Link>
        <Link to="#" className="items-nav">Redes</Link>
      </div>
    </nav>
  );
}

export default Navbar

// {/* <>
//       <nav className="top-0 absolute z-50 w-full flex items-center justify-between px-2 py-3 navbar-expand-lg">
//         <div className="px-4 mx-auto flex items-center justify-between">
//           <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
//             <Link to="/"
//               className="text-white text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
//             > <i className="fas fa-arrow-left"></i> Atrás </Link>
//           </div>

//           <div className="flex lg:flex lg:flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none">
//             <ul className="flex lg:flex-row list-none lg:ml-auto">
//               <li className="flex items-center">
//                 <Link
//                   className="lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
//                   to="https://www.instagram.com/jscalle"
//                 >
//                   <i className="lg:text-blueGray-200 text-blueGray-400 fab fa-instagram text-lg leading-lg " />
//                   <span className="lg:hidden inline-block ml-2">View Perfile</span>
//                 </Link>
//               </li>

//               <li className="flex items-center">
//                 <Link
//                   className="lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
//                   to="https://twitter.com/Jsebas_Loaiza"
//                   target="_blank"
//                 >
//                   <i className="lg:text-blueGray-200 text-blueGray-400 fab fa-twitter text-lg leading-lg " />
//                   <span className="lg:hidden inline-block ml-2">Tweet</span>
//                 </Link>
//               </li>

//               <li className="flex items-center">
//                 <Link
//                   className="lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
//                   to="https://github.com/jscalle"
//                   target="_blank"
//                 >
//                   <i className="lg:text-blueGray-200 text-blueGray-400 fab fa-github text-lg leading-lg " />
//                   <span className="lg:hidden inline-block ml-2">Star</span>
//                 </Link>
//               </li>
//             </ul>
//           </div>
//           {/* <div className="flex lg:flex lg:flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none">
//             <ul className="flex lg:flex-row list-none lg:ml-auto">
//               <li className="flex items-center">
//                 <Link to="https://www.instagram.com/jscalle"
//                   className="lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold">
//                   <i className="lg:text-blueGray-200 text-blueGray-400 fab fa-instagram text-lg leading-lg " />
//                   <span className="inline-block ml-2">Ins</span>
//                 </Link>
//               </li>
//             </ul>
//           </div> */}
          // </div>
          // </nav>
        // </> */}