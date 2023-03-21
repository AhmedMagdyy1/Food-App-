import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer Fr2V-UeYxZwU4ptIh3wsHlTUZqWEROofLXfZk7Iy-3bMd4LwJSHteqISTDomKafyajfPsPRaCsN2wnG9T2kaGc_vjFHG8YtsjtsCaSfJ5SCCVABnE0aCFvGiTqfnY3Yx",
  },
});
