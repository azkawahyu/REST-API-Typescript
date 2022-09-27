import postModel from "./post.model";
import Post from "./post.interface";

class PostService {
    private post = postModel

    /**
     * Create New Post
     */

    public async create(title: string, body:string): Promise<Post> {
        try {
            const post = await this.post.create({ title, body })
            return post
        } catch (error:any) {
            throw new Error(error.message)
        }
    }
}

export default PostService