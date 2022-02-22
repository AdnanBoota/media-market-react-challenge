import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import IssueSearchGrid from '../../components/issues/issues-search-grid/issues-search-grid.component';

const HomePage: React.FC = () => {
 
    return (
        <Container>
            <Row>
                <Col lg={{ span: 8, offset: 2 }}><IssueSearchGrid /></Col>
            </Row>
        </Container>
    );
}

export default HomePage;