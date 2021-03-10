const axios = require("axios");

async function getByronsEmail() {
  const urlToFetch = "https://reqres.in/api/users?page=2";
  const {
    data: { data },
  } = await axios.get(urlToFetch);
  return data[3].email;
}

getByronsEmail().then(console.log);
