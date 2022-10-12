import React from 'react';
import {graphql} from 'gatsby';
import Layout from '../components/layout';
import Seo from '../components/seo';

const BlogPage = ({data}) => {
    return (
        <Layout pageTitle="My Blog Post">
            <ul>
                {data.allFile.nodes.map((blog,index)=>{
                    return <li key={index}>{blog.name}</li>
                })}
            </ul>
        </Layout>
    )
}

export const query = graphql`
    query BlogQuerry{
        allFile{
            nodes{
                name
            }
        }
    }
`

export const Head = () => <Seo title="My Blog Posts"/>

export default BlogPage;