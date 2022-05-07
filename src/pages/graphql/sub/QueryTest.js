import React from 'react';
import { useQuery } from 'react-query';
import { request, gql } from 'graphql-request';
import { hyEndpoint } from '../../../api/api';

const QueryTest = () => {

  const query = gql`
    query {
      users {
        id
        name
        phone
      }
    }
  `;

  const getUsers = async () => {
    return await request(hyEndpoint, query)
  }

  const { data, isLoading } = useQuery("getUsers", getUsers)


  

  return (
    <div>
      <h1>교회서버에서 Query 연습해보기</h1>
      {isLoading ? (
        <div>로딩중</div>
      ) : (
        data?.users.map(item => <div key={item.id}>{item.name}</div>)
      )}
    </div>
  );
}


export default QueryTest;