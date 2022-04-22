import { useState } from "react";
import "./Dropdown.css";

export const Dropdown = ({ items, handleSelected }) => {
	const [menuOpen, setMenuOpen] = useState(false);
	const [selectedOption, setSelectedOption] = useState("");

	const handleDropdownOpen = () => {
		setMenuOpen(!menuOpen);
	};

	const handleDropdownSelected = (item) => {
		handleSelected(item);
		setSelectedOption(item);
		setMenuOpen(!menuOpen);
	};

	return (
		<div className={`dropdown ${menuOpen ? "is-active" : ""}`}>
			<div className="dropdown-trigger">
				<button
					className="button"
					onClick={handleDropdownOpen}
					aria-haspopup="true"
					aria-controls="dropdown-menu"
				>
					<span style={{ textTransform: "capitalize" }}>
						{selectedOption ? selectedOption : "Select a category"}
					</span>
					<span className="icon is-small">
						<i className="fas fa-angle-down" aria-hidden="true"></i>
					</span>
				</button>
			</div>
			<div className="dropdown-menu" id="dropdown-menu" role="menu">
				<div className="dropdown-content">
					<span onClick={() => handleDropdownSelected("")} className="dropdown-item">
						Clear All
					</span>
					{items.map((item) => (
						<span
							style={{ textTransform: "capitalize" }}
							key={item}
							onClick={() => handleDropdownSelected(item)}
							className="dropdown-item"
						>
							{item}
						</span>
					))}
				</div>
			</div>
		</div>
	);
};
