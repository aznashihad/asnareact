import axios from "axios";
import ProductCard from "./ProductCard";
import { useState, useEffect } from "react";
import LoadingCard from "../LoadingCard";

function Products() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setLoading(true);
    (async () => {
      try {
        const { data } = await axios.get("https://dummyjson.com/products");
        setTimeout(() => {
          setProducts(data.products);
          setLoading(false);
        }, 5000);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    })();
  }, []);

  return (
    <div className="p-10 w-full grid gap-6 lg:grid-cols-4 md:grid-cols-3">
      {loading ? (
        <>
      
           <LoadingCard />
           <LoadingCard />
           <LoadingCard />
           <LoadingCard />
           <LoadingCard />
           <LoadingCard />
           <LoadingCard />
           <LoadingCard />
           <LoadingCard />
           <LoadingCard />
           <LoadingCard />
           <LoadingCard />
          <LoadingCard />
             </>
        
      ) : (
        products.map(prod => (<ProductCard prod={prod} key={prod.id} />)
        ))}
    </div>
  );
}

export default Products;
