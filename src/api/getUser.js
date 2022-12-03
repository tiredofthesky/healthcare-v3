import axios from "axios";
export default class PostService {
	static async getUsers(limit = 5, page = 0) {
		const response = await axios.get('https://jsonplaceholder.typicode.com/users', {
			params: {
				_limit: limit,

			}
		});
		return response;
	}
}