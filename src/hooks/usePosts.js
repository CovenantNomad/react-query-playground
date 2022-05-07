import { useQuery } from 'react-query';
import request, { gql } from 'graphql-request';
import { endpoint } from '../api/api';

const usePosts = (postId) => {
  const getPostQuery = gql`
    query getPost($id: ID!) {
      post(id: $id) {
        id
        title
        body
        user {
          id
          name
          username
        }
      }
    }
  `;

  const getPostById = async (postId) => {
    const data = await request(endpoint, getPostQuery, { id: postId })
    return data.post
  }

  return useQuery(['getPost', postId], () => getPostById(postId), {
    enabled: !!postId
  })
}

export default usePosts;