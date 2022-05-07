import React, {useState} from 'react';
import { ReactQueryDevtools } from "react-query/devtools";
import QueryPractice from './sub/QueryPractice';
import MutationPractice from './sub/MutationPractice';
import HyQuery from './sub/QueryTest';
import HyMutation from './sub/MutationTest';
import { Link, Outlet } from 'react-router-dom';

const GraphqlPage = () => {

  const routes = [
    {
      title: "Query 연습하기",
      to: "query-prac"
    },
    {
      title: "Mutation 연습하기",
      to: "mutation-prac"
    },
    {
      title: "교회서버에서 Query 테스트해보기",
      to: "query-test"
    },
    {
      title: "교회서버에서 Mutation 테스트해보기",
      to: "mutation-test"
    },
    {
      title: "Hook으로 Query 연습하기",
      to: "query-hook-prac"
    },
    {
      title: "Mutation으로 Query 연습하기",
      to: "mutation-hook-prac"
    },
  ]

  return (
    <div className='px-10'>
      <div className='h-16 bg-blue-400 flex items-center'>
        <h1 className="text-4xl font-bold">GraphQL Example</h1>
      </div>
      <div className='mb-4'>
        <ul>
          {routes.map(route => (
            <li className='mt-4'>
              <Link to={route.to}><h2 className="text-2xl font-bold">{route.title}</h2></Link>
            </li>
          ))}
        </ul>
      </div>
      <hr />
      <Outlet />
      <ReactQueryDevtools initialIsOpen />
    </div>
  );
}

export default GraphqlPage;