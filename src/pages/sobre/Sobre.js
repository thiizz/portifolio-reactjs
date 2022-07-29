
import { motion } from "framer-motion";
import style from './Sobre.module.css'
import Background from "../../components/background/Background";
import stylebg from "../../components/background/Background.module.css";

function Sobre() {
	return (
		<motion.div
			className={`${style.about} ${stylebg.section}`}
			initial={{ x: -2000}}
			animate={{ x: 0 }}
			exit={{ x: 2000 }}
			transition={{ duration: '0.8' }}
		><Background/>
			<h1>ESSA É A PAGINA SOBRE</h1>
		</motion.div>
	)
}
export default Sobre