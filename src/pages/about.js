import React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';

const AboutPage = () =>{
    return (
        <Layout pageTitle="About">
            Hello About
        </Layout>
    )
}

export const Head = () => <Seo title="About Page"></Seo>

export default AboutPage;