import reactLogo from "./assets/react.svg";
import PostList from "./PostList";
import "./PostList.css";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Blog Posts</h1>
      <PostList />
    </>
  );
}

export default App;
