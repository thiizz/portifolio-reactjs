import Particles from "react-tsparticles";
import { loadSlim } from 'tsparticles-slim'
import { useCallback, useMemo } from "react";

const ParticlesComp = () => {
	const options = useMemo(() => {
		return {
			number: {
				value: 1,
				density: {
					enable: true,
					value_area: 800
				  }
			},
			fullScreen: { enable: false },
			interactivity: {
				events: {
					onHover:{
						enable: true,
						mode: "repulse"
					}
				},
				modes:{
					repulse:{
						distance: 80,
					}
				}
			},
			particles: {
				color: { value: ["#ad00ad", "#FFE459", "#43D8C9" ]
			},
				
				shape: {
					type: "circle",
				},
				attract:
					{ enable: true, },
				collisions:{
					enable: true,
				},
				move:{
					enable: true,
					random: true,
					speed: { min: 2, max:5 },
				},
				opacity:{
					value: { min: 0.1, max: 0.3},
				},
				size:{
					value: { min: 3, max: 8 },
				}
				
			}
		};
	}, [])
	const particlesInit = useCallback((engine) => {
		loadSlim(engine);
	}, []);
	return <Particles init={particlesInit} options={options} />
}
export default ParticlesComp