import {useState} from 'react';
import Sidebar from "./Sidebar/Sidebar.jsx";
import Navigation from "./Navigation/Nav.jsx";
import Recommended from "./Recommended/Recommended.jsx";
import Card from "./components/Card.jsx";
import Products from "./Products/Products.jsx";

// Database
import data from './db/data.jsx';

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [query, setQuery] = useState("")

  // -------- Input Filter --------
  const handleInputChange = (event) => {
    setQuery(event.target.value)
  }

  const filteredItems = data.filter((product) =>
    product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) !== -1
  );

  // -------- Radio Filter --------
  const handleChange = (event) => {
    setSelectedCategory(event.target.value)
  }

  // -------- Buttons Filter --------
  const handleClick = (event) => {
    setSelectedCategory(event.target.value)
  }

  function filteredData(products, selected, query) {
    let filteredProducts = products;

    // Filtering Input Items
    if (query) {
      filteredProducts = filteredItems;
    }

    // Selected Filter
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({category, color, company, newPrice, title}) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected
      );
    }

    return filteredProducts.map(({img, title, star, reviews, newPrice, prevPrice}) => (
      <Card
        img={img}
        title={title}
        star={star}
        reviews={reviews}
        newPrice={newPrice}
        prevPrice={prevPrice}
      />
    ));
  }

  const result = filteredData(data, selectedCategory, query)

  return (
    <>
      <Sidebar handleChange={handleChange} />
      <Navigation query={query} handleInputChange={handleInputChange} />
      <Recommended handleClick={handleClick} />
      <Products result={result} />
    </>
  );
};

export default App;