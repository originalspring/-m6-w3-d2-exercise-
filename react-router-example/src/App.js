import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link, Outlet, useParams } from 'react-router-dom';




function App(){
  return(<Router>
      <nav style={{margin:0}}>
          <Link to='/' style = {{padding:5}}>
            Home
          </Link>
          <Link to='/about' style = {{padding:5}}>
            About
          </Link>
           <Link to='/posts' style = {{padding:5}}>
            Posts
          </Link>
      </nav>

    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/about" element ={<About />} />
      <Route path="/posts" element ={<Posts/>} >
        <Route path="/posts" element = {<PostLists />} />
        <Route path=':slug' element={<Post />} />
      {/* not nested no need to close Route */}
      </Route>
    </Routes>
    </Router>);
}

function Home(){
  return(
    <div style={{ padding:20}}>
      <h2>Home View</h2>
      <p>fadkfadfkfadfdasfdas</p>

    </div>
  );
}

function About(){
  return(
    <div style={{ padding:20 }}>
      <h2>About View</h2>
      <p>fadkfadfkfadfdasfdas</p>
    </div>
  );
}

const BlogPosts = {
  '1':{
    title: "First Blog Post",
    description: 'dffdsafjajldfa'
  },

  '2':{
    title: "Second Blog Post",
    description: 'Hello react router V6'
  }
  };

  function Posts(){
    return(
      <div style={{ padding:20 }}>
        <h2>Blog</h2>
        <Outlet />
      </div>
    );
  }

function Post(){
  const {slug} = useParams();
  const post = BlogPosts[slug];
  const { title, description } = post;
  return(
    <div style={{padding:20}}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

  function PostLists() {
    return(
      <ul>
        {Object.entries(BlogPosts).map(([slug, {title}]) => (
          <li key={slug}>
            <Link to={`/posts/${slug}`}>
              <h3>{title}</h3>
            </Link>
          </li>
        ))}
      </ul>
    );
  }











// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
