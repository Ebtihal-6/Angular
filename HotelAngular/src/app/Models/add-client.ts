export interface AddClient {
    client_no: number
    client_name: string
    client_phone: string
    client_email: string
    client_address: string
    client_resident: string
    Is_customer: boolean
    Is_vendor: boolean
    trade_no: string
    description: string
    branch_id: number
    OpenedCreditor: number
    OpenedDepitor: number
    DiscountPercentPerItem: number
    DiscountPercentPerBill: number
    Is_InstallmentClient: boolean
    CategoryId: number
    ClientType: number
    GuarantorName: string
    GuarantorNationId: string
    GuarantorAddress: string
    NationId: string
    IsBlocked: boolean
    branches: Branch[]
    cars: Car[]
  }
  
  export interface Branch {
    Id: string
    branch_no: number
    branch_name: string
    branch_phone: string
    branch_mobile: string
    branch_manager: string
  }
  
  export interface Car {
    Id: string
    No: number
    CarName: string
    ChassisNo: string
    PlateNo: string
    Kilometres: number
  }