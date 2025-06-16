/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

const PostList = ({ posts }: any) => {
  return (
    <div>
      <h1>Post List</h1>
      <ul>
        {posts.map((post: any) => (
          <li key={post.id}>
            <a href={`/post/${post.id}`}>{post.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export async function getServerSideProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return {
    props: {
      posts: data,
    },
  };
}

export default PostList;
