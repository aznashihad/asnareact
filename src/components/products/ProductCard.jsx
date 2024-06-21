
import { useDispatch } from "react-redux";
import { useNavigate} from "react-router-dom";

import { toast } from "react-toastify";
import { addToCart } from "../../slices/CartSlice";



function ProductCard({prod}){
    const navigate= useNavigate();
    const dispatch = useDispatch();
    
    return (
    <div className="flex gap-2 hover:scale-105 duration-300 shadow-md shadow-black rounded-md overflow-hidden flex-col items-center">
    <img
      className="w-full h-60 object-cover object-center "
      src={prod.thumbnail}
      alt=""
    />

    <div className="w-full p-5">
      <h2 className="text-xl font-bold">{prod.title}</h2>
      <div className="w-full mt-1">
<h3 className="text-l">{prod.brand}</h3>
</div>
      <div className="flex justify-between items-center mt-1">
        <h2 className="text-red-600 font-bold">${prod.price}</h2>
        <h2 className="text-green-600 font-bold">
          {prod.discountPercentage}% off
        </h2>
      </div>
      <div className="flex justify-between text-lg">
        <i className="fa-solid fa-cart-plus cursor-pointer"
        type="submit"
        onClick={() => {dispatch(addToCart(prod))
          toast.success($ `{prod.title} added to cart`)
        }}  ></i>
        <i 
        onClick={() => navigate(  `/productdetails/$ {prod.id}  `)}
        className="fa-solid cursor-pointer fa-magnifying-glass-plus"></i>
        <i className="fa-solid fa-heart-circle-plus"></i>
      </div>
    </div>
    
  </div>
    )
}
export default ProductCard