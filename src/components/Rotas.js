import { Routes, Route, useLocation } from 'react-router-dom'
import Home from '../pages/home/Home'
import Sobre from '../pages/sobre/Sobre'
import Projetos from '../pages/projetos/Projetos'
import Experiencia from '../pages/experiencia/Experiencia'
import Contato from '../pages/contato/Contato'
import NotFound from '../pages/notfoud/NotFound'

import { AnimatePresence } from "framer-motion";


function Rotas() {
	const location = useLocation();
	return (
		<AnimatePresence exitBeforeEnter>
			<Routes key={location.pathname} location={location}>
				<Route exact path='/' element={<Home />} />
				<Route exact path='/about' element={<Sobre />} />
				<Route exact path='/experience' element={<Experiencia />} />
				<Route exact path='/projects' element={<Projetos />} />
				<Route exact path='/contact' element={<Contato />} />
				<Route exact path='*' element={<NotFound />} />
			</Routes>
		</AnimatePresence>
	)
}
export default Rotas