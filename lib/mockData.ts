export const MOCK_BUDGETS: any[] = [
  {
    id: 1,
    name: "Food",
    amount: "500",
    totalSpend: 200,
    totalItem: 5,
    icon: "🍔",
    createdBy: "user_1",
  },
  {
    id: 2,
    name: "Transport",
    amount: "200",
    totalSpend: 100,
    totalItem: 3,
    icon: "🚗",
    createdBy: "user_1",
  },
  {
    id: 3,
    name: "Entertainment",
    amount: "300",
    totalSpend: 150,
    totalItem: 4,
    icon: "🎬",
    createdBy: "user_1",
  },
];

export const MOCK_EXPENSES: any[] = [
  {
    id: 1,
    name: "Grocery",
    amount: "50",
    createdAt: new Date().toISOString(),
  },
  {
    id: 2,
    name: "Dinner",
    amount: "30",
    createdAt: new Date().toISOString(),
  },
  {
    id: 3,
    name: "Uber",
    amount: "20",
    createdAt: new Date().toISOString(),
  },
];

export const MOCK_INCOMES: any[] = [
  {
    id: 1,
    name: "Salary",
    totalAmount: "5000",
    icon: "💰",
    createdBy: "user_1",
  },
  {
    id: 2,
    name: "Freelance",
    totalAmount: "1200",
    icon: "💻",
    createdBy: "user_1",
  },
];
