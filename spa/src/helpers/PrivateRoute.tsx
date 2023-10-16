import { useKeycloak } from "@react-keycloak/web";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const PrivateRoute = ({ children }: any) => {
 const { keycloak } = useKeycloak();

 const isLoggedIn = keycloak.authenticated;

 return isLoggedIn ? children : null;
};

export default PrivateRoute;