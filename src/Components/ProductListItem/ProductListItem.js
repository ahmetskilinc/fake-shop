import "./ProductListItem.css";

export const ProductListItem = ({ product }) => {
	const { title, price, image, id } = product;

	return (
		<div className="card">
			<div className="card-image">
				<figure className="image is-4by3">
					<img src={image} alt={title} />
				</figure>
			</div>
			<div className="card-content">
				<div className="media">
					<div className="media-content">
						<p className="title is-4">
							<a href={`/p/${id}`}>{title}</a>
						</p>
						<p className="subtitle is-6">£{price}</p>
					</div>
				</div>
			</div>
			<footer class="card-footer">
				<a href="#" className="card-footer-item">
					Add to basket
				</a>
			</footer>
		</div>
	);
};
