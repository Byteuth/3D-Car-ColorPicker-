import { createContext, useContext, useState } from "react";

const CustomizationContext = createContext({});
export const paintColors = [
    {
		color: "#000000", 
		name: "Black",
	},
	{
		color: "#FFFFFF", 
		name: "White",
	},
    {
		color: "#708090", 
		name: "Slate gray",
	},
	
	{
		color: "#8B4513",  
		name: "Brown",
	},
	{
		color: "#228B22",  
		name: "Forest Green",
	},
	{
		color: "#9370DB", 
		name: "Purple",
	},
	{
		color: "#FFA500", 
		name: "Orange",
	},
	{
		color: "#F21324",  
		name: "Red",
	},
	{
		color: "#00CED1",
		name: "Turquoise",
	},
	{
		color: "#FF69B4", 
		name: "Hot Pink",
	},
];


export const CustomizationContextProvider = (props) => {
	const [material, setMaterial] = useState("corrugated-metal");
    const [color, setColor] = useState(paintColors[0]);

	return (
		<CustomizationContext.Provider
			value={{
				material,
				setMaterial,
                color,
                setColor
			}}
		>
			{props.children}
		</CustomizationContext.Provider>
	);
};

export const useCustomization = () => {
	const context = useContext(CustomizationContext);
	return context;
};
