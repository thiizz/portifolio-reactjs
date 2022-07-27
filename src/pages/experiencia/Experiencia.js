import { motion } from "framer-motion";

function Experiencia() {
	return (<motion.div
		className="container text-center"
		initial={{ x: -2000 }}
		animate={{ x: 0 }}
		exit={{ x: 2000, marginBottom: '1000px' }}
		transition={{ duration: '0.8' }}
	>
		<h1>VOCÊ ESTÁ NA PAGINA EXPÊRIENCIA</h1>
	</motion.div >
	)
}
export default Experiencia