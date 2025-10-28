import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Plus } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const contacts = [
  { id: 1, name: "Mike", initials: "M", color: "bg-[#F59E0B]" },
  { id: 2, name: "Steve", initials: "S", color: "bg-[#8B5CF6]" },
  { id: 3, name: "Clark", initials: "C", color: "bg-[#EC4899]" },
];

export const QuickTransfer = () => {
  return (
    <Card className="p-6 bg-foreground text-background">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold">Quick Transfer</h3>
        <div className="flex gap-1">
          <Button variant="ghost" size="icon" className="h-6 w-6 text-background hover:bg-background/10">
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-6 w-6 text-background hover:bg-background/10">
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <Button
          variant="outline"
          size="icon"
          className="h-12 w-12 rounded-full bg-background/10 border-dashed border-background/30 text-background hover:bg-background/20"
        >
          <Plus className="h-5 w-5" />
        </Button>
        <span className="text-sm">Add New</span>
        {contacts.map((contact) => (
          <div key={contact.id} className="flex flex-col items-center gap-2">
            <Avatar className={`h-12 w-12 ${contact.color}`}>
              <AvatarFallback className="text-white">{contact.initials}</AvatarFallback>
            </Avatar>
            <span className="text-xs">{contact.name}</span>
          </div>
        ))}
      </div>
    </Card>
  );
};
