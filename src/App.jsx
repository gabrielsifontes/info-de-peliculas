import { Layout } from 'antd' 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom' 

// Páginas
import Home from './pages/home' 
import NewMovies from './pages/new-movies' 
import Search from './pages/search' 
import Popular from './pages/popular'
import Movie from './pages/movie'
import Error404 from './pages/error404'


// Componentes
import MenuTop from './components/MenuTop'





export default function App() {
  const { Header, Content } = Layout
 
  return (
    <Layout className='App'>
      <Router>
        <Header>
          <MenuTop />
        </Header>
        
        <Content>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new-movies" element={<NewMovies />} />
            <Route path="/popular" element={<Popular />} />
            <Route path="/search" element={<Search />} />
            <Route path="/movie/:id" element={<Movie />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </Content>
      </Router>
    </Layout>
  ) 
} 
 