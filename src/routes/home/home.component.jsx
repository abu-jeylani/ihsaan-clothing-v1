import { useState, useEffect } from "react";
import Spinner from "../../components/spinner/spinner.component";

import Directory from "../../components/directory/directory.component";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, [isLoading]);

  return <div>{isLoading ? <Spinner /> : <Directory />}</div>;
};

export default Home;
