import { useState, useEffect, useCallback } from "react";

// export default (fn, autoExecute = true) => {
export default async fn => {
  const [state, setState] = useState({
    loading: false,
    error: null,
    data: null
  });

  // useEffect(() => {
  //   if (autoExecute) {
  //   }
  // }, []);

  const callback = useCallback(async () => {
    setState({ loading: true });
    try {
      const data = await fn();
      setState({ data });
    } catch (error) {
      setState({ error });
    } finally {
      setState({ loading: false });
    }
  }, []);

  return { ...state, callback };
};
