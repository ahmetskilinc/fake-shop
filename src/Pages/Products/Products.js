import "./Products.css";
import {
  ProductListItem,
  HeroImage,
  LoadingSpinner,
  Dropdown
} from "../../Components";
import { useEffect, useState } from "react";

export const Products = () => {
  const [products, setProducts] = useState([]);
  const [productsFiltered, setProductsFiltered] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProducts = async () => {
      let productsRes = await fetch("https://fakestoreapi.com/products");
      productsRes = await productsRes.json();
      setProducts(productsRes);

      let categoriesRes = await fetch(
        "https://fakestoreapi.com/products/categories"
      );
      categoriesRes = await categoriesRes.json();
      setCategories(categoriesRes);

      setLoading(false);
    };

    getProducts();
  }, []);

  const handleCategorySelection = (value) => {
    setProductsFiltered(
      products.filter((product) => {
        return product.category.includes(value);
      })
    );
  };

  return (
    <>
      <HeroImage backgroundUrl="./images/hero-bg.jpg" />
      {loading ? (
        <LoadingSpinner />
      ) : (
        <>
          <Dropdown
            items={categories}
            handleSelected={handleCategorySelection}
          />
          <div className="items-container">
            {productsFiltered.length > 0
              ? productsFiltered.map((product) => (
                  <ProductListItem
                    product={product}
                    key={product.id}
                  ></ProductListItem>
                ))
              : products.map((product) => (
                  <ProductListItem
                    product={product}
                    key={product.id}
                  ></ProductListItem>
                ))}
          </div>
        </>
      )}
    </>
  );
};
