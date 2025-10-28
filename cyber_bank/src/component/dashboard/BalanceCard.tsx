import { TrendingUp, TrendingDown } from "lucide-react";
import { Card } from "@/components/ui/card";

interface BalanceCardProps {
  title: string;
  amount: string;
  trend: number;
  isPositive: boolean;
  chartData?: number[];
}

export const BalanceCard = ({ title, amount, trend, isPositive, chartData }: BalanceCardProps) => {
  return (
    <Card className="p-6 space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-medium text-muted-foreground">{title}</h3>
        <div className={`flex items-center gap-1 text-sm font-medium ${isPositive ? 'text-success' : 'text-destructive'}`}>
          {isPositive ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
          {trend}%
        </div>
      </div>
      <div className="text-3xl font-bold">{amount}</div>
      {chartData && (
        <div className="flex items-end gap-1 h-12">
          {chartData.map((value, index) => (
            <div
              key={index}
              className="flex-1 bg-accent rounded-t"
              style={{ height: `${value}%` }}
            />
          ))}
        </div>
      )}
      <div className="flex items-center justify-between text-sm pt-2 border-t">
        <div className="flex items-center gap-2">
          <TrendingUp className="w-4 h-4 text-success" />
          <span className="text-muted-foreground">Income</span>
          <span className="font-semibold">USD 30,000.00</span>
        </div>
        <div className="flex items-center gap-2">
          <TrendingDown className="w-4 h-4 text-destructive" />
          <span className="text-muted-foreground">Expense</span>
          <span className="font-semibold">USD 20,000.00</span>
        </div>
      </div>
    </Card>
  );
};
