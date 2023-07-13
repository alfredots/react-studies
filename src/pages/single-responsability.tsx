import { useEffect, useState } from 'react';

import axios from 'axios';
import { People } from 'services/people';

const useSingle = () => {
  const [data, setData] = useState<People[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleFetch = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get('https://randomuser.me/api/?results=20');

      setData(response.data.results);
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      }
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    handleFetch();
  }, []);

  return {
    data,
    isLoading
  };
};

const setColorByGender = (gender: string) => {
  return gender === 'male' ? 'blue' : 'red';
};

export default function SingleResponsability() {
  const { data, isLoading } = useSingle();

  return (
    <section className="w-100 h-screen flex flex-col items-center justify-center">
      <h2>Single Responsability Principle</h2>
      {isLoading && <div>Loading ...</div>}

      {data?.map((item) => (
        <div key={item.cell} style={{ color: setColorByGender(item.gender) }}>
          {item.name.first}
        </div>
      ))}
    </section>
  );
}
