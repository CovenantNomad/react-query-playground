import request, { gql } from 'graphql-request';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { endpoint } from '../../../api/api';

const QueryPractice = () => {
  const [ text, setText ] = useState(0)
  const [ postId, setPostId ] = useState(4)

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault()
    setPostId(text)
  }
  
  const getPostMutation = gql`
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

  const getPostRequest = async (postId) => {
    const data = await request(endpoint, getPostMutation, { id: postId })
    return data.post
  }

  const {data, isLoading} = useQuery(['getPost', postId], () => getPostRequest(postId), {
    enabled: !!postId
  })


  return (
    <div className='mt-6'>
      <h1 className="text-4xl font-bold">Query 연습해보기</h1>

      <div className='border-dashed border-gray-300 border-2 p-4 my-8'>
        <span className='block text-2xl'>1. useQuery([키, 변수], 함수자리, 옵션)</span>
        <span className='block text-2xl'>2. 함수자리에 들어갈 함수작성 : request(endpoint, 쿼리작성, 변수)</span>
        <span className='block text-2xl'>3. 쿼리작성: gql``</span>
      </div>

      <h4 className="text-xl font-semibold">Post 지정하기</h4>
      <form onSubmit={onSubmit}>
        <input 
          type="number"
          onChange={onChange}
          value={text}
        />
        <button type='submit'>제출</button>
      </form>
      {isLoading ? (
        <h3>로딩중...</h3>
      ) : (
        <div>
          <h2>제목: {data?.title}</h2>
          <h3>저자: {data?.user.name}</h3>
          <p>{data.body}</p>
        </div>
      )}
    </div>
  );
}

export default QueryPractice;