import { motion } from "framer-motion";

function Contato() {
	return (
		<motion.div
			className="container text-center"
			initial={{ x: -2000 }}
			animate={{ x: 0 }}
			exit={{ x: 2000, marginBottom: '1000px' }}
			transition={{ duration: '0.8' }}
		>
			<h1>Contact us</h1>

			<p>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio mollitia
				in minima architecto odit sunt enim quidem blanditiis voluptates,
				provident veritatis labore. Natus pariatur eos at nemo, officia
				voluptatibus accusamus.
			</p>
		</motion.div>
	)
}
export default Contato