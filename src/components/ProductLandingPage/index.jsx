import { useState } from 'react';
import './style.css';

const Landing = () => {
	const [imageChanged, setImageChanged] = useState(require("./Images/7.png"))

	const handleImageUpdate = (bhu) => {
		setImageChanged(bhu);
	};

	return (
		<div className="container">
			<header>
				<div className="logo">
					<img src="./Images/logo.png" alt="" />
					<h1>
						Watch<span>.co</span>
					</h1>
				</div>
				<ul>
					<li>
						<a href="#">Inicio</a>
					</li>
					<li>
						<a href="#">Cont&aacute;ctanos</a>
					</li>
				</ul>
			</header>
			<div className="main">
				<div className="main-one">
					<span className="title">Nueva Colecci&oacute;n</span>
					<h1>Luxury</h1>
					<span className="subtitle">Mejores productos de la colecci&oacute;n</span>
					<div className="underline" />
					<p>
						Lorem ipsum Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam, iste dolor sit
						amet consectetur adipisicing elit. Optio quam alias odio voluptatum necessitatibus neque dolor
						quos magnam voluptatibus maxime accusamus sed voluptates deserunt impedit suscipit beatae, id ea
						asperiores.
					</p>
					<button onClick={()=>alert('Gracias por su compra')} >Shop now</button>
				</div>
				<div className="main-two">
					<img className="image" src={imageChanged} alt="pic" />
				</div>
				<div className="subpics">
					<img src={require("./Images/13.png")} alt="pic" onClick={() => handleImageUpdate(require('./Images/13.png'))} />
					<img src={require("./Images/12.png")} alt="pic" onClick={() => handleImageUpdate(require('./Images/12.png'))} />
					<img src={require("./Images/6.png")} alt="pic" onClick={() => handleImageUpdate(require('./Images/6.png'))} />
				</div>
			</div>
		</div>
	);
};

export default Landing;
