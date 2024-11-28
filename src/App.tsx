import { Header } from './components/Header';
import { Body } from './components/Body'
import { useEffect, useState } from 'react';
import { fetchMenuDetails, Menu } from './api/menuApi';

function App() {
  const [menu, setMenu] = useState<Menu | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getMenuDetails = async () => {
      try {
        const data = await fetchMenuDetails();
        console.log(data);
        setMenu(data);
      } catch (err) {
        setError('Erro ao carregar o menu' + err);
      } finally {
        setLoading(false);
      }
    };

    getMenuDetails();
  }, []);

  if (loading) return <div>Carregando...</div>;
  if (error) return <div>{error}</div>;

  return (
    <>
      <Header />
      <Body />
      {menu && (<div>
        <h1>{menu?.name}</h1>
        {menu?.sections.map((section) => (
          <div key={section.id}>
            <h2>{section.name}</h2>
            <ul>
              {section.items.map((item) => (
                <li key={item.id}>
                  <strong>
                    {item.name}
                  </strong> - {item.price} BRL
                  <p>{item.description}</p>
                  {item.images && item.images.length > 0 && (
                    <img src={item.images[0].image} alt={item.name} />
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>)}
    </>
  );
}

export default App
