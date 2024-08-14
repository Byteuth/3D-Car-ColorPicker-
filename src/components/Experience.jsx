import {
	Float,
	MeshReflectorMaterial,
	PresentationControls,
	Stage,
} from "@react-three/drei";

import { Car } from "./Car";

export const Experience = () => {
	return (
		<PresentationControls
			speed={1.5}
			global={true}
			polar={[-0.4, Math.PI / 4]}
			rotation={[Math.PI / 8, Math.PI / 8, 0]}
		>
			<Stage
				environment="city"
				castShadow={true}
				adjustCamera
				intensity={0.5}
				shadows="contact"
			>
				<Car />
			</Stage>
			<mesh rotation={[-Math.PI / 2, 0, 0]} position-y={-0.92}>
				<planeGeometry args={[90000, 90000]} />
				<MeshReflectorMaterial
					blur={[700, 700]}
					resolution={2048}
					mixBlur={0.9}
					mixStrength={70}
					roughness={1}
					depthScale={1.2}
					minDepthThreshold={0.4}
					maxDepthThreshold={1.4}
					color="#101010"
					metalness={0.5}
					position={[0, -100, 0]}
				/>
			</mesh>
		</PresentationControls>
	);
};
