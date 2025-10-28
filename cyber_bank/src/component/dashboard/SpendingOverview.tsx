import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const spendingCategories = [
  { category: "Groceries", percentage: 68, color: "bg-foreground" },
  { category: "Withdrawal", percentage: 20, color: "bg-foreground/70" },
  { category: "Retail", percentage: 10, color: "bg-foreground/50" },
  { category: "Petrol", percentage: 2, color: "bg-foreground/30" },
];

export const SpendingOverview = () => {
  return (
    <Card className="p-6 bg-[#B8E5EC]">
      <h3 className="text-lg font-semibold text-foreground mb-6">Spending Overview</h3>
      <div className="space-y-4">
        {spendingCategories.map((item) => (
          <div key={item.category}>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-foreground">{item.percentage}% {item.category}</span>
            </div>
            <Progress value={item.percentage} className="h-2" />
          </div>
        ))}
      </div>
    </Card>
  );
};
