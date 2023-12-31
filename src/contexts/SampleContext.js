import { createContext, useContext, useReducer } from "react";

export const SampleContext = createContext();

const SampleReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_TEST":
      state.test = action.payload;
      localStorage.setItem("test", action.payload);
      localStorage.setItem(
        "testObject",
        JSON.stringify({ name: "test", date: "today" })
      );
      return state;
    default:
      return state;
  }
};

const SampleProvider = ({ children }) => {
  const [sampleState, dispatch] = useReducer(SampleReducer, {
    test: "sample text",
  });

  const updateTest = (testvalue) => {
    dispatch({
      type: "UPDATE_TEST",
      payload: testvalue,
    });
  };
  return (
    <SampleContext.Provider value={{ sampleState, updateTest }}>
      {children}
    </SampleContext.Provider>
  );
};

export default SampleProvider;

export const useSample = () => useContext(SampleContext);
