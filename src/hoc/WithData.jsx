import { useState, useEffect } from 'react';

function WithData(WrappedComponent, url) {
  return function EnhancedComponent() {
    const [data, setData] = useState([]);

    useEffect(() => {
      fetch(url)
        .then(res => res.json())
        .then(data => setData(data))
        .catch(err => console.error('Error fetching data:', err));
    }, [url]);

    return <WrappedComponent data={data} />;
  };
}

export default WithData;