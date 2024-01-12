import { router } from "expo-router";

const useRoutesFn = ({ route, isAuthenticated }) => {
  if (isAuthenticated) {
    router.push(`/${route}`);
  } else {
    console.log("hello you dan do rubbish");
  }
};

export default useRoutesFn;
