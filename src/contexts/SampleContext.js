import { createContext, useReducer } from "react";

export const SampleContext = createContext();

const SampleReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_TEST":
      state.test = action.payload;
      return state;
    default:
      return state;
  }
};

const SampleProvider = ({ children }) => {
  const [sampleState, dispatch] = useReducer(SampleReducer, {
    test: "sample text",
  });
  return (
    <SampleContext.Provider value={{ test: "sample text" }}>
      {children}
    </SampleContext.Provider>
  );
};

export default SampleProvider;
