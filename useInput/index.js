import { useState } from "react";

export default initialStaate => {
  const [value, setValue] = useState(initialStaate);
  const onChange = event => {
    setValue(event.target.value);
  };

  return { onChange, value };
};
