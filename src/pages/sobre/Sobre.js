
import { motion } from "framer-motion";
import style from './Sobre.module.css'

function Sobre() {
	return (
		<motion.div
			className={style.about}
			initial={{ x: -2000, margin: 0 }}
			animate={{ x: 0 }}
			exit={{ x: 2000, marginBottom: '1000px' }}
			transition={{ duration: '0.8' }}
		>
			<h1>ESSA É A PAGINA SOBRE</h1>
		</motion.div>
	)
}
export default Sobre