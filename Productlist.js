const cardingstyle6 = {
  border: '2px solid pink',
  borderRadius: '12px',
  padding: '20px',
  maxWidth: '400px',
  margin: '20px auto',
  textAlign: 'center',
  fontFamily: 'cursive',
  boxShadow: '5px 5px 15px purple',
  backgroundColor: '#f5f5f5',
  color: '#333'
};

const Productlist = ({ products }) => {
  return (
    <div className="product-list-container">
      {products.map((item) => (
        <div key={item.id} style={cardingstyle6}>
          <h2>{item.nameofproduct}</h2>
          <p>Price:  ₹{item.price.toFixed(2)}</p>
        </div>
      ))}
    </div>
  );
};

const App = () => {
  const products = [
    { id: 1, nameofproduct: 'Wireless Headphones', price: 99.99 },
    { id: 2, nameofproduct: 'Ergonomic Keyboard', price: 125.00 },
    { id: 3, nameofproduct: '4K Monitor', price: 349.99 },
    { id: 4, nameofproduct: 'Gaming Mouse', price: 59.99 },
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ textAlign: 'center', fontFamily: 'sans-serif' }}>Our Products</h1>
      <Productlist products={products} />
    </div>
  );
};

export default App;
