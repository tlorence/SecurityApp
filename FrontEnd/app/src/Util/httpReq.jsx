import axios from "axios";
import { LOGIN } from "./endpoints";
import { getUserAuthToken } from "./localStorage";

export async function postReq(url, body) {
  try {
    let res;
    if (url === LOGIN) {
      res =await axios.post(url, body);
    } else {
      console.log(getConfig());
      res = axios.post(url, body, getConfig());
    }
    return res;
  } catch (error) {
    console.log(error);
  }
}

function getConfig() {
  console.log();
  return {
    headers: {
      mode: "cors",
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
      Authorization: "Bearer " + getUserAuthToken(),
    },
  };
}
