import { NavLink } from 'react-router-dom'
import style from './Header.module.css'
import { Player } from '@lottiefiles/react-lottie-player'



function Header() {
	const home = '{Home}'
	const about = '{About}'
	const exp = '{Experience}'
	const projects = '{Projects}'
	const contact = '{Contact}'
	
	const LinkStyles = ({ isActive }) => {
		return{
			color: isActive ? '#FFE459' : '#fff',
			stroke: isActive ? '#43D8C9' : '',
		}
	}

	return (
		<header className={style.header}>
			<div className={style.particle}>
				{/* <ParticlesComp/> */}
			</div>
			<ul>
				<li><NavLink style={LinkStyles} to="/"><span>{home}</span></NavLink></li>
				<li><NavLink style={LinkStyles} to="/about"><span>{about}</span></NavLink></li>
				<li><NavLink style={LinkStyles} to="/experience"><span>{exp}</span></NavLink></li>
				<li><NavLink style={LinkStyles} to="/projects"><span>{projects}</span></NavLink></li>
				<li><NavLink style={LinkStyles} to="/contact"><span>{contact}</span></NavLink></li>
			</ul>
		</header>
	);
}
export default Header