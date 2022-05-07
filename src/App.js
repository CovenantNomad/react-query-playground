import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
//styles
import GlobalStyle from "./styles/GlobalStyle";
// pages
import GraphqlPage from "./pages/graphql/GraphqlPage";
import QueryPractice from "./pages/graphql/sub/QueryPractice";
import MutationPractice from "./pages/graphql/sub/MutationPractice";
import QueryTest from "./pages/graphql/sub/QueryTest";
import MutationTest from "./pages/graphql/sub/MutationTest";
import UsePostPractice from "./pages/graphql/sub/UsePostPractice";
import UseCreatePostPractice from "./pages/graphql/sub/UseCreatePostPractice";


const queryClient = new QueryClient();

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<GraphqlPage />}>
            <Route path="query-prac" element={<QueryPractice />} />
            <Route path="mutation-prac" element={<MutationPractice />} />
            <Route path="query-test" element={<QueryTest />} />
            <Route path="mutation-test" element={<MutationTest />} />
            <Route path="query-hook-prac" element={<UsePostPractice />} />
            <Route path="mutation-hook-prac" element={<UseCreatePostPractice />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
