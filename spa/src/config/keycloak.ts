import Keycloak from "keycloak-js";

const keycloak = new Keycloak({
  url: "https://bob.staging.justa.com.vc/keycloak/oauth",
  realm: "staging3",
  clientId: "conta-justa",
});

export default keycloak;
