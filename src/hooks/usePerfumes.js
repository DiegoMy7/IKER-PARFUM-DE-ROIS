import { useState, useEffect } from 'react';
import { getPerfumes } from '../services/perfumeStore';

export function usePerfumes() {
  const [perfumes, setPerfumes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetch = async () => {
    try {
      setLoading(true);
      setError(null);
      setPerfumes(await getPerfumes());
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetch();
    window.addEventListener('storage', fetch);
    window.addEventListener('iker-perfumes-change', fetch);

    return () => {
      window.removeEventListener('storage', fetch);
      window.removeEventListener('iker-perfumes-change', fetch);
    };
  }, []);

  return { perfumes, loading, error, refetch: fetch };
}
