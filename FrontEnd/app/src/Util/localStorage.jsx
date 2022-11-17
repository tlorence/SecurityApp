export function getUserAuthToken() {
  return localStorage.getItem("authToken");
}
export function setUserAuthToken(token) {
  localStorage.setItem("authToken", token);
}
