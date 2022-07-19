import Banner from './components/Banner';
import CustomContainer from './components/CustomContainer';
// import Card from "./components/Card";
// import Navbar from "./components/Navbar/AuthNavbar.js";
import Navbar from './components/Navbar/IndexNavbar.js';
import './main.css'
// const photo = "https://firebasestorage.googleapis.com/v0/b/cvpersonal-d2b5a.appspot.com/o/photo-perfil.jpg?alt=media&token=d8cb8ccb-a4af-4e0d-8dbe-48b58f0bf2bd"
// const illust = require("./assets/Blogging Minimalistic/blogging.png")
const illust = 'https://assets.website-files.com/5e51c674258ffe10d286d30a/5e535e838e249316920983c3_peep-sitting-5.svg';

function Main() {
  const handleImageUpdate = () => {
    console.log('hola')
  }
	return (
		<div className="w-full h-full bg-white">
			<Navbar home />

			<div className="main">
				<div className="main-one">
					<span className="title">Colecci&oacute;n</span>
					<h1>Relojes de lujo</h1>
					<span className="subtitle">Mejores productos de la colecci&oacute;n</span>
					<div className="underline">
						<p>
							Id ipsum ea eiusmod elit culpa aliqua voluptate laboris occaecat aliqua. Amet laborum eu
							duis duis nostrud. Excepteur pariatur voluptate sit do dolor sunt amet sit. Id quis sit
							cillum proident cupidatat eiusmod. Dolore incididunt do excepteur aliquip laboris do amet
							ullamco aliqua ad ex ea non. Et voluptate ad enim anim cillum incididunt labore. Enim est
							sit deserunt nisi laborum magna et. Occaecat amet aliquip sint dolore do ad et occaecat ea
							exercitation. Ut esse cupidatat officia nisi nisi. Veniam exercitation velit qui nisi
							aliquip incididunt enim proident. Culpa cupidatat elit irure id laboris magna duis deserunt
							aliqua pariatur consectetur officia Lorem commodo. Eu laboris laborum id pariatur dolor.
						</p>
            <button>Comprar Ahora</button>
					</div>
          <div className='main-two'>
            <img className='image' src={illust} alt='pic'/>
          </div>
				</div>
        <div className='subpics'>
          <img src={illust} alt='pic' onClick={handleImageUpdate}/>
        </div>
			</div>

			{/* <div className="container">
        <Banner illust={illust} />
        <CustomContainer 
          node={<>
            <div className="flex justify-center py-8 h-96">
              <div className="mx-4">
                <Card />
              </div>
              <div className="mx-4">
                <Card />
              </div>
            </div>
            <div className="flex justify-center py-8">
              <div className="mx-4">
                <Card />
              </div>
              <div className="mx-4">
                <Card />
              </div>
            </div>
            <div className="flex justify-center py-8">
              <div className="mx-4">
                <Card />
              </div>
              <div className="mx-4">
                <Card /> 
              </div>
            </div>
          </>}
        />
      </div> */}
		</div>
	);
}

export default Main;
