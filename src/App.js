import { useEffect } from "react";
import Header from "./Header";
import Main from "./Main";

initialState = {
  questions: [],
  status: "loading",
};
function reducer(state, action) {}
export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    fetch("http://localhost:8000/questions")
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  });
  return (
    <div className="app">
      <Header />
      <Main>
        <p>1/15</p>
        <p>question</p>
      </Main>
    </div>
  );
}
