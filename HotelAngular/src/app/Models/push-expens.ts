// export interface PushExpens {
//     Name: string;
//     No: number;
//     Value: number;
//     Date_Time: string;
//     SideId: string;
//     SideName: string;
//     Casher_Id: string;
//     Session_Id: string;
//     branchId: number;
// }

export interface SRoot {
    SessionId: string;
    UserActualBalance: number;
    TakenAmmount: number;
}
export interface SSRoot {
    BranchId: number;
    UserId: string;
    MachineName: string;
    OpenBalance: number;
  }
  