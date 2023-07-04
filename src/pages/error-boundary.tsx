import { useEffect } from 'react';

export default function ErrorBoundary() {
  useEffect(() => {
    throw new Error('boom');
  }, []);
  return <>ErrorBoundary</>;
}
