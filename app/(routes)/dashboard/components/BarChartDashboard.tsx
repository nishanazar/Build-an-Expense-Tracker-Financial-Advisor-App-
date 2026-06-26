import React from "react";
import {
  Bar,
  BarChart,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

interface Budget {
  name: string;
  totalSpend: number;
  amount: string | number;
}

interface BarChartDashboardProps {
  budgetList: Budget[];
}

function BarChartDashboard({ budgetList }: BarChartDashboardProps) {
  return (
    <div className="border rounded-2xl p-5 w-full">
      <h2 className="font-bold text-lg">Activity</h2>
      <ResponsiveContainer width={"100%"} height={300}>
        <BarChart
          data={budgetList}
          margin={{
            top: 7,
          }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="totalSpend" stackId="a" fill="#4845d2" />
          <Bar dataKey="amount" stackId="a" fill="#C3C2FF" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default BarChartDashboard;