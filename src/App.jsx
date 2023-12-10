import { Layout } from 'antd' 
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Páginas
import Home from './pages/home' 
import NewMovies from './pages/new-movies' 
import Search from './pages/search' 
import PopularMovies from './pages/popular'
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
          <Switch>
            <Route path="/" exact={true}>
              <Home />
            </Route>

            <Route path="/new-movies" exact={true}>
              <NewMovies />
            </Route>

            <Route path="/popular" exact={true}>
              <PopularMovies />
            </Route>

            <Route path="/search" exact={true}>
              <Search />
            </Route>

            <Route path="/movie/:id" exact={true}>
              <Movie />
            </Route>

            <Route path="*">
              <Error404 />
            </Route>
          </Switch>
        </Content>
      </Router>
    </Layout>  

  ) 
} 
 