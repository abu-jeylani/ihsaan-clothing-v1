import { useState, useEffect, Fragment } from "react";

import Spinner from "../spinner/spinner.component";

export const LoadPage = (props) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 100);
  }, [isLoading]);

  return (
    <Fragment>{isLoading ? <Spinner /> : <div>{props.children}</div>}</Fragment>
  );
};

export default LoadPage;
