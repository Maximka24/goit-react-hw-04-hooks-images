import axios from "axios";

// import PropTypes from "prop-types";

const IMG_Get_API = "https://pixabay.com/api/";
const KEY_API = "22248336-3f9f08778186b55c7ac32d168";

const fetchApi = async ({ nameImg, pageImg }) => {
  const res = await axios.get(
    `${IMG_Get_API}?q=${nameImg}&page=${pageImg}&key=${KEY_API}&image_type=photo&orientation=horizontal&per_page=12`
  );
  return res.data.hits;
};

// fetchApi.propTypes = {
//   nameImg: PropTypes.string.isRequired,
//   pageImg: PropTypes.number.isRequired,
// };

export default { fetchApi };
