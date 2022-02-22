export interface Issue {
    number: number;
    state: string;
    title: string;
    body: string;
    createdAt: string;
    comments?: Comments;
}

export interface Comments {
    nodes: CommentsNode[];
}

export interface CommentsNode {
    author: Author;
    databaseId: number;
    body: string;
    createdAt: string;
    url: string;
}

interface Author {
    url: string;
}