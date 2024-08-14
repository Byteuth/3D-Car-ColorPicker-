import { useState } from "react";
import "./App.css";
import { Canvas } from "@react-three/fiber";

import { Experience } from "./components/Experience";
import { Configurator } from "./components/Configurator";
import { CustomizationContextProvider } from "./contexts/Customization";

function App() {
	return (
		<CustomizationContextProvider>
			<div className="App">
				<Canvas>
					<color attach="background" args={["#232324"]} />
					<fog attach="fog"  args={['#232324', .1, 24]}/>
					<Experience />
				</Canvas>
				<Configurator />
			</div>
		</CustomizationContextProvider>
	);
}

export default App;
