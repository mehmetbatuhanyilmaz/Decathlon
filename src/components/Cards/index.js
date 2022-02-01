/*import { useState, useEffect } from 'react';


    const BASE_URL = 'https://dummyapi.io/data/api/post?limit=10';
    const APP_ID= '61f8627b955e8c334aa7740d'
    
     export const useFetch = () => {
      const [loading, setLoading] = useState(true);
      const [data, setData] = useState([]);
    
      const getProducts = async () => {
        const response = await fetch(${BASE_URL}/user, {
          headers: { 'app-id': APP_ID },
        });
        const data = await response.json();
    
        setData(paginate(data.data));
        setLoading(false);
      };
    
      useEffect(() => {
        getProducts();
      }, []);
    
      return { loading, data };
    };


*/