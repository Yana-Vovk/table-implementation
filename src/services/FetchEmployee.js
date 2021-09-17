import employeeItems from '../employees.json';
 
const FetchEmployee = async () => {
    try {
        const response = await fetch(employeeItems);
        const data = await response.json();
        return data;
    } catch (error) {
        throw error;
    }
}
export default FetchEmployee;

// const FetchEmployee = () => {
//     return fetch(employeeItems)
//         .then(response => response.json())
//             .catch(error => { throw error; })
// }
// export default FetchEmployee;

// import axios from 'axios';

// const KEY = '21320653-fe4a570a23bb891fd74acd9f9';

// const FetchImageByAPI = ({ query = '', currentPage = 1, pageSize = 12 }) => {
//   return axios
//     .get(
//       `https://pixabay.com/api/?q=${query}&page=${currentPage}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=${ pageSize}`,
//   )
      
//     .then(response => response.data.hits);
// };

// export default FetchImageByAPI; 