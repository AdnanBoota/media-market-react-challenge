import React, { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';
import { useQuery, gql } from "@apollo/client";

import { Issue } from '../../../common/interfaces/issue.interface';
import IssuesItem from './issues-item/issues-item.component';
interface IssueSearchProps {

}

const SEARCH_ISSUES = gql`
query searchIssues($issueSearch: String!) {
  search(
    first: 10
    type: ISSUE
    query: $issueSearch
  ) {
    issueCount
    pageInfo {
      hasNextPage
      endCursor
    }
    edges {
      node {
        ... on Issue {
          createdAt
          url
          state
          number
          title
          body
        }
      }
    }
  }
}
`;

const IssueSearchGrid: React.FC<IssueSearchProps> = (IssueSearchProps: IssueSearchProps) => {
  const [searchText, setSearchText] = useState("");
  const { data, loading, error, refetch } = useQuery(SEARCH_ISSUES, {
    variables: { issueSearch: '' },
  });

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      refetch({
        "issueSearch": "repo:facebook/react is:open is:closed type:issue in:title in:body " + searchText.toString(),
      })
    }, 1000)

    return () => clearTimeout(delayDebounceFn)
  }, [searchText])

  if (loading) return <div>Loading</div>;
  if (error) return <div>error</div>;

  return (
    <div className='posts-grid'>

      <Form.Label htmlFor="search">Search</Form.Label>
      <Form.Control
        type="text"
        id="search"
        value={searchText}
        onChange={(e: any) => setSearchText(e.target.value)}
      />
      <div className="mt-4">
        {data?.search?.edges.length !== 0 ? data?.search?.edges.map((k: any) => k.node).map((issue: Issue) => (
          <IssuesItem key={issue.number} issue={issue} />
        )) : 'No Results Found'}
      </div>

    </div>
  );
}

export default IssueSearchGrid; 