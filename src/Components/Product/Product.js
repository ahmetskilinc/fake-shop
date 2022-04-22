import "./Product.css";
import { useEffect, useState } from "react";
import { LoadingSpinner } from "../";

export const Product = ({ match }) => {
	const { params } = match;
	const [product, setProduct] = useState({});
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const getProduct = async () => {
			let response = await fetch(`https://fakestoreapi.com/products/${params.id}`);
			response = await response.json();
			setProduct(response);
			console.log(response);
			setLoading(false);
		};
		getProduct();
	}, [params]);

	if (product) {
	}

	return (
		<>
			{loading ? (
				<LoadingSpinner />
			) : (
				<>
					<p>{product.title}</p>
					<p>{product.description}</p>
					<p>{product.price}</p>
				</>
			)}
		</>
	);
};

/***
category: "men clothing"

description: "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore…"

id: 4

image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg"

price: 15.99

title: "Mens Casual Slim Fit"
***/
