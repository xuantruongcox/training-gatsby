// STYLE
import {container,
    heading,
    navLinks,
    navLinkItem,
    navLinkText,
    siteTitle
} from './layout.module.css';
// MODULE
import { useStaticQuery, graphql, Link } from 'gatsby';
import React from 'react';

const Layout = ({pageTitle, children}) => {
    const data = useStaticQuery(graphql`
        query MyQuery{
            site{
                siteMetadata{
                    title
                }
            }
        }
    `)
    return (
        <div className={container}>
            <header className={siteTitle}>{data.site.siteMetadata.title}</header>
            <nav>
                <ul className={navLinks}>
                    <li className={navLinkItem}>
                        <Link className={navLinkText} to="/">Home</Link>
                    </li>
                    <li className={navLinkItem}>
                        <Link className={navLinkText} to="/about">About</Link>
                    </li>
                    <li className={navLinkItem}>
                        <Link className={navLinkText} to='/blog'>Blog</Link>
                    </li>
                </ul>
            </nav>
            <main>
                <h1 className={heading}>
                    {pageTitle}
                </h1>
                {children}
            </main>
        </div>
    )
}


export default Layout;