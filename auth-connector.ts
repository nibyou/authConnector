import 'dotenv/config';
import axios from 'axios';


const keycloakUrl = process.env.KEYCLOAK_URL!;
const keycloakRealm = process.env.KEYCLOAK_REALM!;
const keycloakClient = process.env.KEYCLOAK_CLIENT!;

const login = async (username: string, password: string) => {
    const params = new URLSearchParams();
    params.append('grant_type', 'password');
    params.append('client_id', keycloakClient);
    params.append('username', username);
    params.append('password', password);
  const response = await axios.post(
    `${keycloakUrl}/realms/${keycloakRealm}/protocol/openid-connect/token`,
    params,
    {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    },
  );
  return response.data;
};