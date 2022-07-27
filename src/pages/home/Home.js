import { motion } from "framer-motion";
import style from './Home.module.css'
import { FaLinkedin, FaGithub } from 'react-icons/fa';

function Home() {
	return (
		<motion.div
			className={style.home}
			initial={{ scale: 0, y: 3000, opacity: 0 }}
			animate={{ scale: 1, y: 0, opacity: 1 }}
			exit={{ scale: 6, y: 3000, opacity: 0 }}
			transition={{ duration: '0.8' }}
		><section className={style.container}>
				<div>
					<h1>Hello, World.</h1>
					<h3>Lorem sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h3>
					<div>
						<button><strong><FaGithub /></strong>Github</button>
						<button><strong><FaLinkedin /></strong>Linkedin</button>
					</div>
				</div>

			</section>
		</motion.div>
	)

}
export default Home