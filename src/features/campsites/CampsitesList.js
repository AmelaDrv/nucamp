import React, { Component } from 'react';
import { selectAllCampsites } from './campsitesSlice';
import { Col, Row } from 'reactstrap';
import CampsiteCard from "./CampsiteCard";

class CampsitesList extends Component{
    render(){
    const campsites = selectAllCampsites();
    return (
        <Row className='ms-auto'>
            {campsites.map((campsite) => {
                return (
                    <Col md='5' className='m-4' key={campsite.id}>
                        <CampsiteCard campsite={campsite} />
                    </Col>
                );
            })}
        </Row>
    );
};
}

export default CampsitesList;