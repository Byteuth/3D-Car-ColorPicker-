import * as THREE from "three";
import React from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useCustomization } from "../contexts/Customization";

export function Car(props) {
	const group = React.useRef();
	const { nodes, materials, animations } = useGLTF("/models/car/scene.gltf");
	const { actions } = useAnimations(animations, group);
	const { color, setColor } = useCustomization();


	return (
		<group ref={group} {...props} dispose={null}>
			<group name="Sketchfab_Scene">
				<group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
					<group name="root">
						<group
							name="GLTF_SceneRootNode"
							rotation={[Math.PI / 2, 0, 0]}
							position-z={-0.9}
						>
							<group name="Empty_58" />
							<group
								name="Plane_53"
								position={[0, 0.029, 0]}
								rotation={[-0.043, -0.004, -0.045]}
							>
								<group
									name="Circle_0"
									position={[0.6, 0.503, 1.419]}
									rotation={[Math.PI / 2, 0, 0]}
									scale={0.065}
								>
									<mesh
										name="Object_9"
										geometry={nodes.Object_9.geometry}
										material={materials.Screw_Metal}
									/>
								</group>
								<group
									name="Circle001_1"
									position={[0.6, 0.503, -1.512]}
									rotation={[Math.PI / 2, 0, 0]}
									scale={0.065}
								>
									<mesh
										name="Object_11"
										geometry={nodes.Object_11.geometry}
										material={materials.Screw_Metal}
									/>
								</group>
								<group name="Cube_2" position={[0, -0.029, 0]}>
									<mesh
										name="Object_13"
										geometry={nodes.Object_13.geometry}
										material={materials.Black_Metal}
									/>
								</group>
								<group name="Cube002_3" position={[0, -0.029, 0]}>
									<mesh
										name="Object_15"
										geometry={nodes.Object_15.geometry}
										material={materials.RedLamp}
									/>
								</group>
								<group name="Cylinder001_4">
									<mesh
										name="Object_17"
										geometry={nodes.Object_17.geometry}
										material={materials.FrontSmallLamp}
									/>
									<mesh
										name="Object_18"
										geometry={nodes.Object_18.geometry}
										material={materials.HeadlightGlass}
									/>
								</group>
								<group name="Cylinder002_5" position={[0, -0.029, 0]}>
									<mesh
										name="Object_20"
										geometry={nodes.Object_20.geometry}
										material={materials.Black_Metal}
									/>
								</group>
								<group name="Cylinder003_6">
									<mesh
										name="Object_22"
										geometry={nodes.Object_22.geometry}
										material={materials.Screw_Metal}
									/>
								</group>
								<group name="Cylinder004_7" position={[0, 0.022, 0.046]}>
									<mesh
										name="Object_24"
										geometry={nodes.Object_24.geometry}
										material={materials.Screw_Metal}
									/>
									<mesh
										name="Object_25"
										geometry={nodes.Object_25.geometry}
										material={materials.Black_Metal}
									/>
								</group>
								<group name="Cylinder005_8">
									<mesh
										name="Object_27"
										geometry={nodes.Object_27.geometry}
										material={materials.FrontSmallLamp}
									/>
									<mesh
										name="Object_28"
										geometry={nodes.Object_28.geometry}
										material={materials.HeadlightGlass}
									/>
								</group>
								<group
									name="Cylinder006_9"
									position={[-0.24, 0.95, -2.256]}
									rotation={[0.019, Math.PI / 2, 0]}
								>
									<mesh
										name="Object_30"
										geometry={nodes.Object_30.geometry}
										material={materials.material_0}
									/>
								</group>
								<group
									name="Cylinder007_10"
									position={[0.676, 0.95, -2.256]}
									rotation={[0.019, Math.PI / 2, 0]}
								>
									<mesh
										name="Object_32"
										geometry={nodes.Object_32.geometry}
										material={materials.RedLamp}
									/>
								</group>
								<group name="Cylinder009_11" position={[0, -0.029, 0]}>
									<mesh
										name="Object_34"
										geometry={nodes.Object_34.geometry}
										material={materials.Black_Metal}
									/>
								</group>
								<group name="Cylinder010_12" position={[0, -0.029, 0]}>
									<mesh
										name="Object_36"
										geometry={nodes.Object_36.geometry}
										material={materials.Black_Metal}
									/>
									<mesh
										name="Object_37"
										geometry={nodes.Object_37.geometry}
										material={materials.Screw_Metal}
									/>
								</group>
								<group name="Cylinder011_13" position={[0, -0.029, -2.919]}>
									<mesh
										name="Object_39"
										geometry={nodes.Object_39.geometry}
										material={materials.Black_Metal}
									/>
								</group>
								<group name="Cylinder012_14" position={[0, -0.029, -2.919]}>
									<mesh
										name="Object_41"
										geometry={nodes.Object_41.geometry}
										material={materials.Black_Metal}
									/>
								</group>
								<group name="Cylinder013_15" position={[0, -0.029, -2.919]}>
									<mesh
										name="Object_43"
										geometry={nodes.Object_43.geometry}
										material={materials.Black_Metal}
									/>
								</group>
								<group name="Cylinder014_16" position={[0, -0.029, -2.919]}>
									<mesh
										name="Object_45"
										geometry={nodes.Object_45.geometry}
										material={materials.Screw_Metal}
									/>
								</group>
								<group name="Cylinder015_17" position={[0, -0.029, 0]}>
									<mesh
										name="Object_47"
										geometry={nodes.Object_47.geometry}
										material={materials.Screw_Metal}
									/>
								</group>
								<group name="Cylinder016_18" position={[0, -0.194, -0.155]}>
									<mesh
										name="Object_49"
										geometry={nodes.Object_49.geometry}
										material={materials.Screw_Metal}
									/>
								</group>
								<group
									name="Cylinder017_19"
									position={[0, -0.029, 0]}
									rotation={[0, 0, -Math.PI / 2]}
								>
									<mesh
										name="Object_51"
										geometry={nodes.Object_51.geometry}
										material={materials.material_0}
									/>
								</group>
								<group name="Cylinder018_20" position={[0, -0.029, 0]}>
									<mesh
										name="Object_53"
										geometry={nodes.Object_53.geometry}
										material={materials.Tires}
									/>
								</group>
								<group name="Cylinder020_21" position={[0, -0.029, 0]}>
									<mesh
										name="Object_55"
										geometry={nodes.Object_55.geometry}
										material={materials.Rims}
									/>
								</group>
								<group name="Plane001_22">
									<mesh
										name="Object_57"
										geometry={nodes.Object_57.geometry}
										material={materials.Black_Metal}
									/>
								</group>
								<group name="Plane002_23">
									<mesh
										name="Object_59"
										geometry={nodes.Object_59.geometry}
										material={
											new THREE.MeshStandardMaterial({ color: color.color })
										}
									/>
									<mesh
										name="Object_60"
										geometry={nodes.Object_60.geometry}
										material={materials.CarInterior}
									/>
								</group>
								<group name="Plane003_24">
									<mesh
										name="Object_62"
										geometry={nodes.Object_62.geometry}
										material={materials.Rims}
									/>
									<mesh
										name="Object_63"
										geometry={nodes.Object_63.geometry}
										material={materials.Black_Metal}
									/>
								</group>
								<group name="Plane004_25" position={[0.099, 0.009, 0]}>
									<mesh
										name="Object_65"
										geometry={nodes.Object_65.geometry}
										material={
											new THREE.MeshStandardMaterial({ color: color.color })
										}
									/>
								</group>
								<group name="Plane006_26" position={[0, 0.039, 0.124]}>
									<mesh
										name="Object_67"
										geometry={nodes.Object_67.geometry}
										material={materials.Rims}
									/>
								</group>
								<group name="Plane007_27" position={[0, 0.039, 0.124]}>
									<mesh
										name="Object_69"
										geometry={nodes.Object_69.geometry}
										material={materials.Black_Metal}
									/>
								</group>
								<group name="Plane008_28">
									<mesh
										name="Object_71"
										geometry={nodes.Object_71.geometry}
										material={materials.Rims}
									/>
								</group>
								<group name="Plane009_29">
									<mesh
										name="Object_73"
										geometry={nodes.Object_73.geometry}
										material={materials.Black_Metal}
									/>
								</group>
								<group name="Plane010_30" position={[0, 1.408, -0.032]}>
									<mesh
										name="Object_75"
										geometry={nodes.Object_75.geometry}
										material={materials.WindowGlass}
									/>
								</group>
								<group name="Plane011_31" position={[0, 0.004, -0.029]}>
									<mesh
										name="Object_77"
										geometry={nodes.Object_77.geometry}
										material={
											new THREE.MeshStandardMaterial({ color: color.color })
										}
									/>
									<mesh
										name="Object_78"
										geometry={nodes.Object_78.geometry}
										material={materials.Side_Mirrors}
									/>
								</group>
								<group name="Plane012_32">
									<mesh
										name="Object_80"
										geometry={nodes.Object_80.geometry}
										material={materials.WindowGlass}
									/>
								</group>
								<group name="Plane013_33">
									<mesh
										name="Object_82"
										geometry={nodes.Object_82.geometry}
										material={materials.WindowGlass}
									/>
								</group>
								<group name="Plane014_34">
									<mesh
										name="Object_84"
										geometry={nodes.Object_84.geometry}
										material={
											new THREE.MeshStandardMaterial({ color: color.color })
										}
									/>
									<mesh
										name="Object_85"
										geometry={nodes.Object_85.geometry}
										material={materials.FrontSmallLamp}
									/>
								</group>
								<group name="Plane015_35">
									<mesh
										name="Object_87"
										geometry={nodes.Object_87.geometry}
										material={materials.Black_Metal}
									/>
								</group>
								<group name="Plane016_36">
									<mesh
										name="Object_89"
										geometry={nodes.Object_89.geometry}
										material={materials.Black_Metal}
									/>
								</group>
								<group name="Plane017_37">
									<mesh
										name="Object_91"
										geometry={nodes.Object_91.geometry}
										material={materials.Black_Metal}
									/>
								</group>
								<group name="Plane018_38">
									<mesh
										name="Object_93"
										geometry={nodes.Object_93.geometry}
										material={
											new THREE.MeshStandardMaterial({ color: color.color })
										}
									/>
								</group>
								<group name="Plane019_39" position={[0, -0.011, 0.001]}>
									<mesh
										name="Object_95"
										geometry={nodes.Object_95.geometry}
										material={materials.Seats}
									/>
								</group>
								<group name="Plane020_40">
									<mesh
										name="Object_97"
										geometry={nodes.Object_97.geometry}
										material={materials.CarBody}
									/>
								</group>
								<group name="Plane021_41">
									<mesh
										name="Object_99"
										geometry={nodes.Object_99.geometry}
										material={materials.Black_Metal}
									/>
									<mesh
										name="Object_100"
										geometry={nodes.Object_100.geometry}
										material={materials.Rims}
									/>
								</group>
								<group name="Plane022_42" position={[0.466, 0.981, 0.231]}>
									<mesh
										name="Object_102"
										geometry={nodes.Object_102.geometry}
										material={materials.Black_Metal}
									/>
								</group>
								<group name="Plane023_43">
									<mesh
										name="Object_104"
										geometry={nodes.Object_104.geometry}
										material={
											new THREE.MeshStandardMaterial({ color: color.color })
										}
									/>
								</group>
								<group name="Plane024_44">
									<mesh
										name="Object_106"
										geometry={nodes.Object_106.geometry}
										material={materials.FrontSmallLamp}
									/>
									<mesh
										name="Object_107"
										geometry={nodes.Object_107.geometry}
										material={materials.RedLamp}
									/>
								</group>
								<group name="Plane025_45">
									<mesh
										name="Object_109"
										geometry={nodes.Object_109.geometry}
										material={materials.Fuel_Container}
									/>
								</group>
								<group name="Plane026_46">
									<mesh
										name="Object_111"
										geometry={nodes.Object_111.geometry}
										material={
											new THREE.MeshStandardMaterial({ color: color.color })
										}
									/>
								</group>
								<group name="Plane027_47">
									<mesh
										name="Object_113"
										geometry={nodes.Object_113.geometry}
										material={materials.Black_Metal}
									/>
								</group>
								<group name="Plane028_48">
									<mesh
										name="Object_115"
										geometry={nodes.Object_115.geometry}
										material={materials.Screw_Metal}
									/>
								</group>
								<group name="Plane029_49">
									<mesh
										name="Object_117"
										geometry={nodes.Object_117.geometry}
										material={materials.Black_Metal}
									/>
								</group>
								<group name="Plane030_50">
									<mesh
										name="Object_119"
										geometry={nodes.Object_119.geometry}
										material={materials.CarBody}
									/>
								</group>
								<group name="Plane032_51">
									<mesh
										name="Object_121"
										geometry={nodes.Object_121.geometry}
										material={materials.Black_Metal}
									/>
								</group>
								<group name="Torus_52" position={[0, -0.029, 0]}>
									<mesh
										name="Object_123"
										geometry={nodes.Object_123.geometry}
										material={materials.Seats}
									/>
								</group>
								<mesh
									name="Object_4"
									geometry={nodes.Object_4.geometry}
									material={
										new THREE.MeshStandardMaterial({ color: color.color })
									}
								/>
								<mesh
									name="Object_5"
									geometry={nodes.Object_5.geometry}
									material={materials.CarInterior}
								/>
								<mesh
									name="Object_6"
									geometry={nodes.Object_6.geometry}
									material={materials.Seats}
								/>
								<mesh
									name="Object_7"
									geometry={nodes.Object_7.geometry}
									material={materials.Black_Metal}
								/>
							</group>

							<group name="Cylinder019_60" position={[0, -0.03, 0]}>
								<group name="Cylinder_59">
									<mesh
										name="Object_134"
										geometry={nodes.Object_134.geometry}
										material={materials.Tires}
									/>
								</group>
								<mesh
									name="Object_132"
									geometry={nodes.Object_132.geometry}
									material={materials.Rims}
								/>
							</group>
							<group
								name="Cylinder022_64"
								position={[-0.848, 0.458, 1.407]}
								rotation={[0, 0.47, 0]}
							>
								<group name="Cube003_61" position={[0.848, -0.374, -1.407]}>
									<mesh
										name="Object_138"
										geometry={nodes.Object_138.geometry}
										material={materials.Black_Metal}
									/>
								</group>
								<group name="Cylinder021_62" position={[0.848, -0.374, -1.407]}>
									<mesh
										name="Object_140"
										geometry={nodes.Object_140.geometry}
										material={materials.Tires}
									/>
								</group>
								<group name="Cylinder027_63" position={[0.848, -0.374, -1.407]}>
									<mesh
										name="Object_142"
										geometry={nodes.Object_142.geometry}
										material={materials.Black_Metal}
									/>
								</group>
								<mesh
									name="Object_136"
									geometry={nodes.Object_136.geometry}
									material={materials.Rims}
								/>
							</group>
							<group name="Cylinder024_66" position={[0, 0.036, 0]}>
								<group name="Cylinder023_65">
									<mesh
										name="Object_146"
										geometry={nodes.Object_146.geometry}
										material={materials.Tires}
									/>
								</group>
								<mesh
									name="Object_144"
									geometry={nodes.Object_144.geometry}
									material={materials.Rims}
								/>
							</group>
							<group
								name="Cylinder025_70"
								position={[0.848, 0.374, 1.407]}
								rotation={[0, 0.47, 0]}
							>
								<group name="Cube001_67" position={[-0.848, -0.374, -1.407]}>
									<mesh
										name="Object_150"
										geometry={nodes.Object_150.geometry}
										material={materials.Black_Metal}
									/>
								</group>
								<group
									name="Cylinder008_68"
									position={[-0.848, -0.374, -1.407]}
								>
									<mesh
										name="Object_152"
										geometry={nodes.Object_152.geometry}
										material={materials.Black_Metal}
									/>
								</group>
								<group
									name="Cylinder026_69"
									position={[-0.848, -0.374, -1.407]}
								>
									<mesh
										name="Object_154"
										geometry={nodes.Object_154.geometry}
										material={materials.Tires}
									/>
								</group>
								<mesh
									name="Object_148"
									geometry={nodes.Object_148.geometry}
									material={materials.Rims}
								/>
							</group>
						</group>
					</group>
				</group>
			</group>
		</group>
	);
}

useGLTF.preload("/models/car/scene.gltf");
