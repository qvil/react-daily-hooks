# useAxios

React Hook to fetch using axios.

## Install

```
npm i @react-daily-hooks/use-axios
```

## Basic Usage

[Live Demo(Code Sandbox)](https://codesandbox.io/s/react-daily-hooksuse-axios-example-kur53)

```js
import React, { useState } from "react";
import useAxios from "@react-daily-hooks/use-axios";

const App = () => {
  const [fetchTrigger, setFetchTrigger] = useState(false);
  const { loading, error, data } = useAxios(
    {
      url: "http://ddragon.leagueoflegends.com/api/versions.json"
    },
    fetchTrigger
  );

  const refetch = () => {
    setFetchTrigger(true);
  };

  return (
    <div>
      <h1>UseAxios</h1>
      <h2>{loading && "Loading..."}</h2>
      <h2>{error && `error : ${error}`}</h2>
      <h2>{!loading && !error && data && `status : ${data.status}`}</h2>
      <button onClick={refetch}>refetch</button>
    </div>
  );
};
```

## Parameters

| Parameter | Type    | Description                                                              | Required | Default Value |
| --------- | ------- | ------------------------------------------------------------------------ | -------- | ------------- |
| url       | string  | API URL                                                                  | yes      | undefined     |
| autoFetch | boolean | Fetch trigger, If you want to not fetch automatically set value to false | no       | true          |

## Return value

| value   | Type    | Description     |
| ------- | ------- | --------------- |
| loading | boolean | Loading state   |
| error   | boolean | Error           |
| data    | boolean | Data from axios |
