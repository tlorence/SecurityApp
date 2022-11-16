import axios from "axios";
import { LOGIN } from "./endpoints";
import { getUserAuthToken } from "./localStorage";

export function postReq(url, body) {
  try {
    let res;
    if (url == LOGIN) {
      res = axios.post(url, body);
    } else {
      res = axios.post(url, body, getConfig);
    }
    return res;
  } catch (error) {
    console.log(error);
  }
}

function getConfig() {
  return {
    headers: {
      Authorization: getUserAuthToken() ?? "",
    },
  };
}
