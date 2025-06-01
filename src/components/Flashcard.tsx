
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RotateCcw, ChevronLeft, ChevronRight } from "lucide-react";

interface FlashcardProps {
  question: string;
  answer: string;
}

export const Flashcard = ({ question, answer }: FlashcardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <Card className="w-full h-80 cursor-pointer" onClick={() => setIsFlipped(!isFlipped)}>
      <CardContent className="flex items-center justify-center h-full p-6">
        <div className="text-center space-y-4">
          <div className="text-lg font-medium">
            {isFlipped ? answer : question}
          </div>
          <div className="text-sm text-gray-500">
            {isFlipped ? "Answer" : "Question"}
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={(e) => {
              e.stopPropagation();
              setIsFlipped(!isFlipped);
            }}
          >
            <RotateCcw className="h-4 w-4 mr-2" />
            Flip Card
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
