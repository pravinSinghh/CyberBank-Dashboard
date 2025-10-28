import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CreditCard, Plus } from "lucide-react";
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

const cards = [
  { id: 1, name: "Primary Account", number: "**** 4589", balance: "USD 10,000.00", color: "from-primary to-primary/80" },
  { id: 2, name: "Savings Account", number: "**** 7821", balance: "USD 5,000.00", color: "from-success to-success/80" },
  { id: 3, name: "Investment Account", number: "**** 3492", balance: "USD 15,000.00", color: "from-info to-info/80" },
];

const Accounts = () => {
  const [open, setOpen] = useState(false);
  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");

  const handleAddCard = () => {
    if (!cardName || !cardNumber) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Card Added Successfully",
      description: `${cardName} has been added to your account`,
    });
    
    setOpen(false);
    setCardName("");
    setCardNumber("");
  };

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Accounts & Cards</h1>
        <p className="text-muted-foreground">Manage your accounts and payment cards</p>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button className="mb-6">
            <Plus className="mr-2 h-4 w-4" />
            Add New Card
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add New Card</DialogTitle>
            <DialogDescription>
              Enter your card details to add a new payment method
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div>
              <Label htmlFor="card-name">Card Name</Label>
              <Input
                id="card-name"
                placeholder="e.g., Business Account"
                value={cardName}
                onChange={(e) => setCardName(e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="card-number">Card Number</Label>
              <Input
                id="card-number"
                placeholder="**** **** **** 1234"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
              />
            </div>
            <Button onClick={handleAddCard} className="w-full">
              Add Card
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card) => (
          <Card
            key={card.id}
            className={`p-6 bg-gradient-to-br ${card.color} text-white border-0 relative overflow-hidden`}
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12" />
            
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-8">
                <CreditCard className="h-8 w-8" />
                <span className="text-sm opacity-90">CyberBank</span>
              </div>
              
              <div className="space-y-4">
                <div>
                  <p className="text-sm opacity-90 mb-1">Card Number</p>
                  <p className="text-xl font-semibold tracking-wider">{card.number}</p>
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm opacity-90 mb-1">Balance</p>
                    <p className="text-2xl font-bold">{card.balance}</p>
                  </div>
                  <div>
                    <p className="text-sm opacity-90 mb-1">Account</p>
                    <p className="font-medium">{card.name}</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Accounts;
