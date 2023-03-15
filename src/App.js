import { Route, Routes } from 'react-router-dom';
import Layout from './components/layout';
import HomePage from "./components/home/HomePage"
import BlogPage from './components/blog/BlogPage';
import AuthorPage from './components/author/AuthorPage';
import ScrollToTop from './components/shared/ScrollToTop';
import BlogsPage from './components/blog/BlogsPage';
import AuthorsPage from './components/author/AuthorsPage';

function App() {
  return (
    <Layout>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blogs" element={<BlogsPage />} />
        <Route path="/authors" element={<AuthorsPage />} />
        <Route path="/blogs/:slug" element={<BlogPage />} />
        <Route path="/authors/:slug" element={<AuthorPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
