'use client';

import React from 'react';
import { Content, StyledLayout } from './styles';
import Header from './header';
import Footer from './footer';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <StyledLayout>
            <Header/>
            <Content>{children}</Content>
            <Footer/>
        </StyledLayout>
    )
};
export default Layout;