import { useQuery } from "@apollo/client";
import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import Loader from "../shared/Loader";
import { GET_AUTHORS_INFO } from '../../graphql/quries';
import CardAuthors from "../shared/CardAuthors";


const AuthorsPage = () => {
  const { loading, data, errors } = useQuery(GET_AUTHORS_INFO);

  if (loading) return <Loader />;
  if (errors) return <h3>Error...</h3>;
  return (
    <Container maxWidth="lg">
      <Grid container spacing={2} padding={3}>
        <Grid item xs={12} mt={4}>
          <Typography variant="h5" component="h3" mb={3} fontWeight={700}>
            مقالات
          </Typography>
        </Grid>
        {data.authors.map(author=> (
            <Grid item xs={12} sm={6} md={4} key={author.id}>
                <CardAuthors {...author} />
            </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default AuthorsPage;
