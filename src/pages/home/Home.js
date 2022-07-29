import { motion } from "framer-motion";
import style from './Home.module.css'
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import Background from "../../components/background/Background";
import stylebg from "../../components/background/Background.module.css";

function Home() {
	return (
		<motion.div
			className={style.home}
			initial={{ x: 2000, opacity: 0 }}
			animate={{ x: 0, opacity: 1 }}
			exit={{ x: -2000, opacity: 0 }}
			transition={{ duration: '0.8' }}
		>
			<section className={`${style.container} ${stylebg.section}`}>
					<Background/>
					<div className={style.elements}>
						<h1>Hello, World.</h1>
						<h3>Lorem sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h3>
						<div className={style.btn}>
							<button><strong><FaGithub /></strong>Github</button>
							<button><strong><FaLinkedin /></strong>Linkedin</button>
						</div>
					</div>
				</section>
		</motion.div>
	)

}
export default Home