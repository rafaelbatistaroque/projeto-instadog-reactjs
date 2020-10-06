const API_BASE = "http://dogsapi.batista/json";
const TOKEN_ENDPOINT = "jwt-auth/v1/token";
const APP_JSON = { "Content-Type": "application/json" };

export const TOKEN_POST = (body) => {
  return {
    url: `${API_BASE}/${TOKEN_ENDPOINT}`,
    options: {
      method: "POST",
      headers: APP_JSON,
      body: JSON.stringify(body),
    },
  };
};

export const TOKEN_VALIDAR_POST = (token) => {
  return {
    url: `${API_BASE}/${TOKEN_ENDPOINT}/validate`,
    options: {
      method: "POST",
      headers: { Authorization: `Bearer ${token}` },
    },
  };
};

export const USER_GET = (token) => {
  return {
    url: `${API_BASE}/v1/usuario`,
    options: {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    },
  };
};

export const CRIAR_USUARIO_POST = (body) => {
  return {
    url: `${API_BASE}/v1/usuario`,
    options: {
      method: "POST",
      headers: APP_JSON,
      body: JSON.stringify(body),
    },
  };
};
