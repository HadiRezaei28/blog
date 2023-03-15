import { useQuery } from '@apollo/client';
import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import { GET_BLOGS_INFO } from '../../graphql/quries';
import CardBlogs from '../shared/CardBlogs';
import Loader from '../shared/Loader';

const BlogsPage = () => {
    const {loading, data, errors} = useQuery(GET_BLOGS_INFO);

    if (loading) return <Loader />
    if (errors) return <h3>Error...</h3>
    return (
        <Container maxWidth="lg">
        <Grid container spacing={2} padding={3}>
            <Grid item xs={12} mt={4}>
                <Typography variant="h5" component="h3" mb={3} fontWeight={700}>
                    مقالات
                </Typography>
            </Grid>
            {data.posts.map(post => (
                <Grid item xs={12} sm={6} key={post.id}>
                    <CardBlogs {...post} />
                </Grid>
            ))}
        </Grid>
        </Container>
    );
};

export default BlogsPage;