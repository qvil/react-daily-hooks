import { useState, useEffect, useCallback } from "react";
import axios from "axios";

export default (url, autoFetch = false) => {
  const [state, setState] = useState({
    loading: autoFetch,
    error: null,
    data: null
  });
  const [trigger, setTrigger] = useState(0);

  const refetch = () => {
    setState(prev => ({ ...prev, loading: true }));
    setTrigger(Date.now());
  };

  const fetchAxios = useCallback(async () => {
    try {
      setState({ ...state, loading: true });
      const result = await axios(url);
      if (result.status === 200) {
        setState({ ...state, data: result.data });
      }
    } catch (error) {
      setState({ ...state, error });
    } finally {
      setState({ ...state, loading: false });
    }
  }, [url]);

  useEffect(() => {
    if (autoFetch) {
      fetchAxios();
    }
  }, [trigger, autoFetch]);

  return { ...state, refetch };
};
