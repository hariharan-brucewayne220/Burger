import axios from 'axios';


const instance=axios.create({
    baseURL:'https://react-my-burger-fdfb6.firebaseio.com/'
});

export default instance;