// types/index.ts
export interface Budget {
  id: number;
  name: string;
  amount: string | number;
  totalSpend: number;
  totalItem: number;
  icon: string | null;
  createdBy: string;
}

export interface Expense {
  id: number;
  name: string;
  amount: string | number;
  createdAt: string;
}

export interface Income {
  id: number;
  name: string;
  totalAmount: string | number;
  icon: string | null;
  createdBy: string;
}
