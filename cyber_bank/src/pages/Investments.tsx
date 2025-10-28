import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, TrendingDown, DollarSign } from "lucide-react";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";

const investments = [
  { id: 1, name: "Tech Stocks Portfolio", value: "USD 12,500.00", change: 5.2, isPositive: true },
  { id: 2, name: "Real Estate Fund", value: "USD 8,000.00", change: 3.8, isPositive: true },
  { id: 3, name: "Cryptocurrency", value: "USD 4,200.00", change: -2.1, isPositive: false },
  { id: 4, name: "Mutual Funds", value: "USD 15,800.00", change: 4.5, isPositive: true },
];

const Investments = () => {
  const [open, setOpen] = useState(false);
  const [investmentName, setInvestmentName] = useState("");
  const [investmentAmount, setInvestmentAmount] = useState("");

  const handleAddInvestment = () => {
    if (!investmentName || !investmentAmount) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Investment Added",
      description: `${investmentName} portfolio created with $${parseFloat(investmentAmount).toFixed(2)}`,
    });
    
    setOpen(false);
    setInvestmentName("");
    setInvestmentAmount("");
  };

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Investments</h1>
        <p className="text-muted-foreground">Track and manage your investment portfolio</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-muted-foreground">Total Invested</h3>
            <DollarSign className="h-5 w-5 text-primary" />
          </div>
          <p className="text-3xl font-bold">USD 40,500.00</p>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-muted-foreground">Total Returns</h3>
            <TrendingUp className="h-5 w-5 text-success" />
          </div>
          <p className="text-3xl font-bold text-success">+USD 4,250.00</p>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-muted-foreground">Growth Rate</h3>
            <TrendingUp className="h-5 w-5 text-success" />
          </div>
          <p className="text-3xl font-bold">+10.5%</p>
        </Card>
      </div>

      <Card className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold">Your Portfolio</h2>
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button>Add Investment</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add New Investment</DialogTitle>
                <DialogDescription>
                  Create a new investment portfolio
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <div>
                  <Label htmlFor="investment-name">Portfolio Name</Label>
                  <Input
                    id="investment-name"
                    placeholder="e.g., Tech Stocks"
                    value={investmentName}
                    onChange={(e) => setInvestmentName(e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="investment-amount">Initial Amount</Label>
                  <Input
                    id="investment-amount"
                    type="number"
                    placeholder="0.00"
                    value={investmentAmount}
                    onChange={(e) => setInvestmentAmount(e.target.value)}
                    min="0"
                    step="0.01"
                  />
                </div>
                <Button onClick={handleAddInvestment} className="w-full">
                  Create Investment
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
        <div className="space-y-4">
          {investments.map((investment) => (
            <div
              key={investment.id}
              className="flex items-center justify-between p-4 hover:bg-muted rounded-lg transition-colors"
            >
              <div>
                <p className="font-medium">{investment.name}</p>
                <p className="text-2xl font-bold mt-1">{investment.value}</p>
              </div>
              <div className="text-right">
                <div className={`flex items-center gap-2 ${investment.isPositive ? 'text-success' : 'text-destructive'}`}>
                  {investment.isPositive ? <TrendingUp className="h-5 w-5" /> : <TrendingDown className="h-5 w-5" />}
                  <span className="text-lg font-semibold">
                    {investment.isPositive ? '+' : ''}{investment.change}%
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default Investments;
