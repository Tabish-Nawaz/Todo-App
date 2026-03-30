import WithData from "./hoc/WithData"
import PostList from "./PostList"

const PostLishWithData = WithData(PostList, "https://jsonplaceholder.typicode.com/posts" )

export default PostLishWithData