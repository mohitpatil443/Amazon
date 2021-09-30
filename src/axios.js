import axios from "axios";

const obj = axios.create({
  baseURL: "https://us-central1-clone-28b1f.cloudfunctions.net/api",
  //"http://localhost:5001/clone-28b1f/us-central1/api",
});

export default obj;
