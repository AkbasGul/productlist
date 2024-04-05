

const ProductCard = ({ price, title, image }) => {
  return (
    <div className="card">
      <div className="price">
        <h3>{price} $</h3>
      </div>
      <img src={image} alt={title} />
      <div className="card_over">
        <h2>{title} </h2>
      </div>
    </div>
  );
};
export default ProductCard;























// const ProductCard = ({ products }) => {
// const {price, title, image, id } = products

//   return (
//     <div className="card">
//       {products.map((product, id) => (
//         <div>
//           <div className="price">
//             <h3>{product.price}</h3>
//           </div>
//           <div>
//             <img src={product.image} alt={product.titel} />
//             <div className="card_over">
//               <h2>{product.titel}</h2>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };
// export default ProductCard;
