/**
 * @author Taesu Hyeon
 */

import { useState, useCallback } from "react";

const useInput = initValue => {
  const [value, setValue] = useState(initValue);

  const onChange = useCallback(
    e => {
      setValue(e.target.value);
    },
    [initValue]
  );
  return { value, onChange };
};

export default useInput;
