// this is just a context example

import { createContext, useContext } from "react";

const defaultValue = {
  abc: 1,
};

const MyContext = createContext(defaultValue);

export function ComponentWithCtx() {
  const ctx = useContext(MyContext);

  console.log(ctx);

  return (
    <MyContext.Provider value={defaultValue}>
      <div>this is some page with ctx</div>
    </MyContext.Provider>
  );
}
