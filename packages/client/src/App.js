import { useEffect, useState } from "react";
import CompareNav from "./components/CompareNav";

import { request } from "./fetch";

import "./App.css";

const { REACT_APP_PROXY = "" } = process.env;

function App() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const json = await request("/api/ecommerce/products");
    const {
      data: { items },
    } = json;

    setProducts(items);
  };

  async function getUser() {
    setLoading(true);
    setUser(null);

    try {
      const json = await request("/api/user");

      if (json.data?.platformUserId) {
        setUser(json.data);
      }
    } catch (e) {
      console.error("Could not load user", e);
      setUser(null);
    }

    setLoading(false);
  }

  function renderBody() {
    if (loading) {
      return <p>Loading...</p>;
    }

    if (!user) {
      return (
        <a
          href={`${REACT_APP_PROXY}/connect?redirectUrl=${encodeURIComponent(
            window.location.href
          )}`}
        >
          Connect
        </a>
      );
    }

    // return <div>Logged in assss: {user.platformUserId}</div>;
  }

  useEffect(() => {
    console.log(products);
  }, [products]);

  useEffect(() => {
    if (user) {
      getProducts();
    }
  }, [user]);

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className='App'>
      {renderBody()}
      <div className='products-view'>
        {products.length > 0 &&
          products.map((p) => (
            <div key={p.id}>
              {p.images && p.images.length && (
                <div>
                  <img className='image' src={p.images[0]} alt='image' />
                </div>
              )}
              {p.title}
            </div>
          ))}
      </div>
      <CompareNav />
    </div>
  );
}

export default App;
