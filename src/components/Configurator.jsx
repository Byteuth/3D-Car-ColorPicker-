import { useCustomization, paintColors } from "../contexts/Customization";

export const Configurator = () => {
	const { color, setColor } = useCustomization();

	return (
		<div className="configurator">
			<div className="configurator-section">
				<div className="configurator-section-title">Body Color</div>
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
	);
};