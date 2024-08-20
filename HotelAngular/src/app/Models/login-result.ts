import { Session } from "./session"

export interface LoginResult {
    token: string;
    Id: string;
    StoreId: string;
    No: number;
    user_name: string;
    user_email: string;
    branch_id: number;
    isAdmin: boolean;
    session: Session;
}
