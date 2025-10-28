import { Card } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Plane } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

export const GoalsCard = () => {
  return (
    <Card className="p-6 bg-gradient-to-br from-[#FFB4A2] to-[#FFB4A2]/80">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-foreground">Goals</h3>
        <div className="flex gap-1">
          <Button variant="ghost" size="icon" className="h-6 w-6">
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-6 w-6">
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <p className="text-foreground/80 mb-6">Summer Vacations</p>
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
          <Plane className="w-6 h-6 text-foreground" />
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-foreground">50% Reached</span>
          </div>
          <Progress value={50} className="h-2" />
        </div>
      </div>
    </Card>
  );
};
