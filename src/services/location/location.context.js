import * as React from "react";

import { locationRequest, locationTransform } from "./location.service";

export const LocationContext = React.createContext();

export const LocationContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [location, setLocation] = React.useState(null);
  const [keyword, setKeyword] = React.useState("San Francisco");
  const [error, setError] = React.useState(null);

  const onSearch = (searchKeyword) => {
    setIsLoading(true);
    setKeyword(searchKeyword);

    if (!searchKeyword.length) {
      return;
    }

    locationRequest(searchKeyword)
      .then(locationTransform)
      .then((response) => {
        setIsLoading(false);
        setLocation(response);
      })
      .catch((responseError) => {
        setIsLoading(false);
        setError(responseError);
      });
  };

  React.useEffect(() => {
    onSearch(keyword);
  }, []);

  return (
    <LocationContext.Provider
      value={{ isLoading, error, location, search: onSearch, keyword }}
    >
      {children}
    </LocationContext.Provider>
  );
};
