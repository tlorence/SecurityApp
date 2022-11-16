export function getUserAuthToken() {
  localStorage.getItem("authToken");
}
export function setUserAuthToken(token) {
  localStorage.setItem("authToken", token);
}
