import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "3095d1bde78c46f68e087f66b97b1288",
  },
});
