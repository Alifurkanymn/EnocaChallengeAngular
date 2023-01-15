export interface Source {
    id: string;
    name: string;
}

export interface Article {
    source: Source;
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: Date;
    content: string;
}

export interface NewsResponse {
    sources: any;
    status: string;
    totalResults: number;
    articles: Article[];
}

