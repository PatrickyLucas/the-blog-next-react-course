import { JsonPostRepository } from './json-post-repository';
import { PostRepository } from './json-repository';

export const postRepository: PostRepository = new JsonPostRepository();
