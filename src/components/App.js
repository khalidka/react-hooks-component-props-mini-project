import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";

function App() {
  console.log(blogData);
  return (
    <div className="App">
     <Header blogData={blogData} />
     <About imageUrl={blogData.image} aboutText={blogData.about}/>
     <ArticleList posts={blogData.posts}/>
    </div>
  );
}

export default App;
