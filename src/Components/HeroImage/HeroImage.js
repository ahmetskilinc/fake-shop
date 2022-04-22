import "./HeroImage.css";

export const HeroImage = ({ backgroundUrl }) => {
	return (
		<div
			className="hero-image"
			style={{
				backgroundImage: `url('${backgroundUrl}')`,
			}}
		></div>
	);
};
