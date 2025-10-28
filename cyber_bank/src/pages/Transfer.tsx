import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Coffee, ShoppingBag, ArrowLeftRight, Fuel, ShoppingCart } from "lucide-react";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

const allTransactions = [
  { id: 1, name: "Starbucks Coffee", category: "Cafe and Restaurant", amount: -45.50, date: "Today, 10:30 AM", icon: Coffee, color: "bg-[#F59E0B]" },
  { id: 2, name: "Whole Foods Market", category: "Groceries", amount: -125.80, date: "Today, 09:15 AM", icon: ShoppingBag, color: "bg-[#EC4899]" },
  { id: 3, name: "Transfer from John", category: "Quick Transfer", amount: 500.00, date: "Yesterday, 03:45 PM", icon: ArrowLeftRight, color: "bg-info" },
  { id: 4, name: "Shell Gas Station", category: "Petrol", amount: -62.30, date: "Yesterday, 08:20 AM", icon: Fuel, color: "bg-[#6366F1]" },
  { id: 5, name: "Amazon Purchase", category: "Retail", amount: -89.99, date: "2 days ago", icon: ShoppingCart, color: "bg-[#10B981]" },
  { id: 6, name: "Coffee Shop", category: "Cafe and Restaurant", amount: -12.50, date: "2 days ago", icon: Coffee, color: "bg-[#F59E0B]" },
  { id: 7, name: "Grocery Store", category: "Groceries", amount: -78.20, date: "3 days ago", icon: ShoppingBag, color: "bg-[#EC4899]" },
  { id: 8, name: "Transfer to Sarah", category: "Quick Transfer", amount: -200.00, date: "3 days ago", icon: ArrowLeftRight, color: "bg-info" },
];

const Transactions = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredTransactions, setFilteredTransactions] = useState(allTransactions);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.trim() === "") {
      setFilteredTransactions(allTransactions);
    } else {
      const filtered = allTransactions.filter(
        (t) =>
          t.name.toLowerCase().includes(query.toLowerCase()) ||
          t.category.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredTransactions(filtered);
    }
  };

  const handleFilter = () => {
    toast({
      title: "Filter Options",
      description: "Filtering by date range and categories",
    });
  };

  const handleExport = () => {
    toast({
      title: "Export Started",
      description: "Your transactions are being exported to CSV",
    });
  };

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Transaction History</h1>
        <p className="text-muted-foreground">View and manage all your transactions</p>
      </div>

      <div className="flex gap-4 mb-6">
        <Input 
          placeholder="Search transactions..." 
          className="max-w-md"
          value={searchQuery}
          onChange={(e) => handleSearch(e.target.value)}
        />
        <Button variant="outline" onClick={handleFilter}>Filter</Button>
        <Button variant="outline" onClick={handleExport}>Export</Button>
      </div>

      <Card className="p-6">
        <div className="space-y-4">
          {filteredTransactions.length === 0 ? (
            <p className="text-center text-muted-foreground py-8">No transactions found</p>
          ) : (
            filteredTransactions.map((transaction) => (
            <div
              key={transaction.id}
              className="flex items-center justify-between p-4 hover:bg-muted rounded-lg transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 ${transaction.color} rounded-full flex items-center justify-center`}>
                  <transaction.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-medium">{transaction.name}</p>
                  <p className="text-sm text-muted-foreground">{transaction.category}</p>
                  <p className="text-xs text-muted-foreground mt-1">{transaction.date}</p>
                </div>
              </div>
              <div className="text-right">
                <span className={`text-lg font-semibold ${transaction.amount > 0 ? 'text-success' : 'text-foreground'}`}>
                  {transaction.amount > 0 ? '+' : ''}{transaction.amount > 0 ? '$' : '-$'}{Math.abs(transaction.amount).toFixed(2)}
                </span>
              </div>
            </div>
            ))
          )}
        </div>
      </Card>
    </div>
  );
};

export default Transactions;
