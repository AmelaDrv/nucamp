import { Container, Row, Col } from 'reactstrap';
import CampsiteDetail from '../features/campsites/CampsiteDetail';
import CampsiteList from '../features/campsites/CampsitesList';
import { useState } from 'react';
import { selectCampsiteById } from '../features/campsites/campsitesSlice';
import React from 'react';

const CampsitesDirectoryPage = () => {
    return (
        <Container>
            <CampsiteList />
        </Container>
    );
};

export default CampsitesDirectoryPage;