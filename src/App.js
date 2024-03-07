import logo from './logo.svg';
import Home from './home';
import Nav from './navbar/nav';
import Header from './navbar/header';
import Create from './create';
import Register from './register';
import Footer from './footer';
function App() {
  return (
    <div className="App"  >
      <nav >
        <Nav />
      </nav>

        <div className="App-header" >
          <Header />
        </div>
        <Home />
        <Create />

        <Register />
      <Footer />
    </div>
  );
}

export default App;
