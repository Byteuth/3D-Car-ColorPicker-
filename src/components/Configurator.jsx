import { useState, useEffect } from "react";
import { useCustomization, paintColors } from "../contexts/Customization";

export const Configurator = () => {
	const { color, setColor } = useCustomization();
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const handleResize = () => setIsMobile(window.innerWidth <= 768);
		handleResize();
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return (
		<>
			<div className={`configurator ${isMobile ? "mobile" : ""}`}>
				{isMobile && (
					<div className="text-recommendation">
						Recommended on Web for better experience
					</div>
				)}
			</div>
			<div className={`configurator ${isMobile ? "mobile" : ""}`}>
			<div className="configurator-section">
				<div className="configurator-section-values">
					{paintColors.map((item, index) => (
						<div
							key={index}
							className={`item ${
								item.color === color.color ? "item-active" : ""
							}`}
							onClick={() => setColor(item)}
						>
							<div
								className="item-dot"
								style={{ backgroundColor: item.color }}
							/>
							<div className="item-label">{item.name}</div>
						</div>
					))}
				</div>
			</div>
			</div>
		</>
	);
};
