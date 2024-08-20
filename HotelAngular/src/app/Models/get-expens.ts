
export interface Root {
    totalPages: number;
    countPerPage: number;
    currentPageCount: number;
    currentPage: number;
    result: GetExpens[];
}

export interface GetExpens {
    Id: string;
    No: number;
    Name: string;
    Value: number;
    Date_Time: string;
    SideName?: string;
    branchName: string;
    userName: string;
}
