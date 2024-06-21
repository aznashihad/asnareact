import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { initialState } from "../contexts/todoContext/initialState";
import Products from "./Products";
import ProductCard from "./ProductCard";

function ProductDetails() {
  const [activeImage, setActiveImage] = useState(null);
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [relatedproducts, setRelatedproducts] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          `https://dummyjson.com/products/${id}`
        );
        setProduct(data);
        const fectchproduct = await axios.get(
          `https://dummyjson.com/products/category/${data.category}`
        );

        setRelatedproducts(fectchproduct.data.products.filter(product=>
          product.id!=id));

        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    })();
  }, [id]);
  console.log(relatedproducts);

  return loading ? (
    <div>loading.....</div>
  ) : (
    <div>
      <div>
        <h1>{product.title}</h1>
        <div className="flex">
          <div className="flex flex-col gap-2 p-5">
            {product.images.map((ele) => (
              <img
                onMouseOver={() => setActiveImage(ele)}
                className="w-20 object-contain"
                key={ele}
                src={ele}
                alt=""
              />
            ))}
          </div>

          <img src={activeImage ? activeImage : product.images[0]} alt="" />
        </div>

        <p>{product?.description}</p>
      </div>
      <h1>relatedproducts</h1>
      <div className="grid grid-cols-4 gap-2 p-4">
        {relatedproducts.map((product) => (
          <ProductCard prod={product} key={product.id} />
        ))}
      </div>
    </div>
  );
}

export default ProductDetails;
