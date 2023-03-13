import { useQuery } from "@apollo/client";
import React from "react";
import { useParams } from "react-router-dom";
import { GET_BLOG_INFO } from "../../graphql/quries";
import Loader from "../shared/Loader";

const BlogPage = () => {
  const { slug } = useParams();
  const { loading, data, errors } = useQuery(GET_BLOG_INFO, {
    variables: { slug },
  });

  if(loading) return <Loader />
  if(errors) return <h3>Errors...</h3>
  
  return <div></div>;
};

export default BlogPage;
