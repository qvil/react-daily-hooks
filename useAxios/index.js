import { useState, useEffect, useCallback } from "react";
import axios from "axios";

export default (url, autoFetch = false) => {
  const [state, setState] = useState({
    loading: autoFetch,
    error: null,
    data: null
  });

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
  }, [url, autoFetch]);

  return { ...state, fetchAxios };
};
