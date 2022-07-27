import { NavLink } from 'react-router-dom'
import style from './Header.module.css'
import { Player } from '@lottiefiles/react-lottie-player'


function Header() {
	const about = '{About} ( )'
	const exp = '{Experience} ( )'
	const projects = '<Projects</> ( )'
	const contact = '{Contact} ( )'
	
	const LinkStyles = ({ isActive }) => {
		return{
			color: isActive ? '#FFE459' : '#fff',
			stroke: isActive ? '#43D8C9' : '',
		}
	}

	return (
		<header className={style.header}>
			<ul>
				<li><NavLink style={LinkStyles} to="/"><Player
					className={style.image}
	
					autoplay
					loop
					speed={1}
					src="https://assets8.lottiefiles.com/packages/lf20_6ojnw6nh.json"
					style={{ height: '104px', width: '104px' }}
				>
				</Player></NavLink></li>
				<li><NavLink style={LinkStyles} to="/about"><span>{about}</span></NavLink></li>
				<li><NavLink style={LinkStyles} to="/experience">{exp}</NavLink></li>
				<li><NavLink style={LinkStyles} to="/projects">{projects}</NavLink></li>
				<li><NavLink style={LinkStyles} to="/contact">{contact}</NavLink></li>
			</ul>
		</header>
	);
}
export default Header