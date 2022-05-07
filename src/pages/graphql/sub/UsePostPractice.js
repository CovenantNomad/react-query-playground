import React, { useState } from 'react';
import usePosts from '../../../hooks/usePosts';

const UsePostPractice = () => {
  const [ text, setText ] = useState(0)
  const [ postId, setPostId ] = useState(4)
  
  const { data, isLoading } = usePosts(postId)

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault()
    setPostId(text)
  }

  return (
    <div>
      <h1>Hook으로 Query 연습하기</h1>

      <h4>Post 지정하기</h4>
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

export default UsePostPractice;