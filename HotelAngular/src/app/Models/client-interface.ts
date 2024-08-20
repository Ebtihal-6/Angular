export interface ClientsRoot {
    totalPages: number;
    countPerPage: number;
    currentPageCount: number;
    currentPage: number;
    result:ClientInterface [];
  }
export interface ClientInterface {
        Id: string;
        client_no: any;
        client_name: string;
        client_phone: string;
        client_email: string;
        client_address: string;
        client_resident: string;
        trade_no: string;
        description: string;
        Is_InstallmentClient: boolean;
        CategoryId: number;
        ClientType: number;
        NationId: string;
        IsBlocked: boolean;
}
