import React from 'react';
import { Alert, Badge, ListGroup } from 'react-bootstrap';

import { Issue, Comments, CommentsNode } from '../../../../common/interfaces/issue.interface';
import './issues-item.component.css';

const IssuesItem: React.FC<{ issue: Issue }> = ({ issue }: { issue: Issue }) => {

    const renderComments = (comments: Comments) => {

        return (<ListGroup as="ol" numbered>
            {comments?.nodes.map((comment: CommentsNode) => (
                <ListGroup.Item key={comment.databaseId} as="li">
                    {comment.body}
                    <p>
                        <span><b>Comment Url:</b> <Alert.Link href={comment.url}>{comment.url}</Alert.Link></span>
                        <span><b>Author Url:</b> <Alert.Link href={comment.author.url}>{comment.author.url}</Alert.Link></span>
                        <span><b>Created At:</b> <Alert.Link href={comment.createdAt}>{comment.createdAt}</Alert.Link></span>
                    </p>
                </ListGroup.Item>))
            }
        </ListGroup >)
    }
    const getVariant = (key: string) => {

        let status = '';
        switch (key) {
            case 'CLOSED':
                status = 'success'
                break;

            case 'OPEN':
                status = 'danger'
                break;

            default:
                status = 'light'
                break;
        }
        return status;
    }

    return (
        <div>
            <Alert key={issue.number} variant={getVariant(issue.state)}>
                <Badge pill bg={getVariant(issue.state)}>
                    {issue.state}
                </Badge>{' '}
                <Alert.Link href={'issue/' + issue.number}>{issue.title}</Alert.Link>
                <p>{issue.body.split('.')[0]}</p>
            </Alert>

            {renderComments(issue.comments!)}

        </div >
    );
}

export default IssuesItem;