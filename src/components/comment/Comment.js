import { useQuery } from "@apollo/client";
import React from "react";
import { GET_POST_COMMENTS } from "../../graphql/quries";

const Comment = ({ slug }) => {
  const { loading, data, errors } = useQuery(GET_POST_COMMENTS, {
    variables: { slug },
  });

  return <div></div>;
};

export default Comment;
