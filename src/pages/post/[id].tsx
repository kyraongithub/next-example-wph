import { useRouter } from "next/router";
import React from "react";

const PostView = () => {
  const { query } = useRouter();
  return <div>post id: {query.id}</div>;
};

export default PostView;
