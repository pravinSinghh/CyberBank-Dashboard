import { BalanceCard } from "@/components/dashboard/BalanceCard";
import { StatisticsChart } from "@/components/dashboard/StatisticsChart";
import { GoalsCard } from "@/components/dashboard/GoalsCard";
import { SpendingOverview } from "@/components/dashboard/SpendingOverview";
import { TransactionsList } from "@/components/dashboard/TransactionsList";
import { QuickTransfer } from "@/components/dashboard/QuickTransfer";
import { Bell, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { toast } from "@/hooks/use-toast";

const Dashboard = () => {
  const handleNotifications = () => {
    toast({
      title: "Notifications",
      description: "You have 3 new notifications",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b px-8 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={handleNotifications}>
            <Bell className="h-5 w-5" />
          </Button>
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarFallback className="bg-primary text-primary-foreground">C</AvatarFallback>
            </Avatar>
            <span className="font-medium">Clara</span>
            <ChevronDown className="h-4 w-4 text-muted-foreground" />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="p-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          {/* Balance Cards - 2 columns */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            <BalanceCard
              title="Total Balance"
              amount="USD 10,000.00"
              trend={2.35}
              isPositive={true}
              chartData={[40, 50, 55, 60, 75, 85, 100]}
            />
            <BalanceCard
              title="Total Savings"
              amount="USD 5,000.00"
              trend={1.50}
              isPositive={true}
              chartData={[50, 60, 55, 70, 80, 90, 95]}
            />
          </div>

          {/* Transactions - 1 column */}
          <div className="lg:row-span-2">
            <TransactionsList />
          </div>

          {/* Statistics Chart - 2 columns */}
          <div className="lg:col-span-2">
            <StatisticsChart />
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <GoalsCard />
          <SpendingOverview />
          <QuickTransfer />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
