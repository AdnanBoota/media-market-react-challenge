import { gql, useQuery } from "@apollo/client";
import { Issue } from "../../common/interfaces/issue.interface";

const GET_ISSUE = gql`
query getIssue($n: Int!) {
  repository(owner:"facebook", name:"react") {
    issue (number: $n) {
      
    url
    state
    number
    title
    body
    createdAt
    comments(first:50, orderBy: {field: UPDATED_AT, direction: ASC}){
        nodes {
            author {
                url
            }
            body
            url
            createdAt
            databaseId
        }
      }
    }
  }
}
`;
 

export const useGetIssue = (id:number): Issue | undefined => {
    const { data, loading, error } = useQuery(GET_ISSUE, {
        variables: { n:id }
    });

//     const { data, loading, error, refetch } = useQuery(SEARCH_ISSUES, {
//     variables: { issueSearch: '' },
//   });

//    if (loading) return <div>Loading</div>;
//    if (error) return <div>error</div>;

    return data?.repository?.issue;
}