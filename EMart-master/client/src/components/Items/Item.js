import React, { useState } from "react";
import ItemCard from "./ItemCard";
import axios from "axios";
import { API } from "../../config";
export default function Item(props) {
  // console.log(props.BadgeData);
  const [product, setProduct] = useState([]);

  async function getProducts() {
    const ProductRes = await axios.get(`${API}/product`);
    console.log(ProductRes)
    setProduct(ProductRes.data);
    // console.log(product[0].tagsUI);
  }
                        
  React.useEffect(() => {
      getProducts();
      
  }, []);

  return (
    <>
      <div className="container mt-3"> 
        <div className="row">
          {props?.DataToFetch?.length > 0 ? (
            <>
              {props?.DataToFetch?.map((item) => {
                return (
                  <div className="col">
                    <ItemCard
                      name={item.name}
                      imageLink={item.imageLink}
                      tagsUI={item.tagsUI}
                      price={item.price}
                      id={item._id}
                      // BadgeData={props.BadgeData}
                    />
                  </div>
                );
              })}
            </>
          ) : (
            <>
              {product.map((item) => {
                return (
                  <div className="col">
                    <ItemCard
                      name={item.name}
                      imageLink={item.imageLink}
                      tags={item.tags}
                      tagsUI={item.tagsUI}
                      price={item.price}
                      id={item._id}
                      // BadgeData={props.BadgeData}
                    />
                  </div>
                );
              })}
            </>
          )}
        
        </div>
      </div>
    </>
  );
}
