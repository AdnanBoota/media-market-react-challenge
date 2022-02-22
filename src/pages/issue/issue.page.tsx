import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

import IssuesItem from '../../components/issues/issues-search-grid/issues-item/issues-item.component';
import { useGetIssue } from '../../hooks/issues/useGetIssue';


const IssuePage: React.FC = () => {

    let { id } = useParams();
    const issue = useGetIssue(parseInt(id!));

    return (
        <Container>
            <Row>
                <Col lg={{ span: 8, offset: 2 }}>{issue ? <IssuesItem key={issue.number} issue={issue} /> : ''}</Col>
            </Row>
        </Container>
    );
}

export default IssuePage;