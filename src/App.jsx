import { useState, useEffect } from "react";
import LoadingScreen from "./components/LoadingScreen";
import MainPage from "./components/Home";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 4000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {loading ? <LoadingScreen /> : <MainPage />}
    </>
  );
}

export default App;
