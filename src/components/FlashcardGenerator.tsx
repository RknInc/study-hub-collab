
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Flashcard } from "./Flashcard";
import { ChevronLeft, ChevronRight, Shuffle, ArrowLeft } from "lucide-react";

interface FlashcardData {
  question: string;
  answer: string;
}

interface FlashcardGeneratorProps {
  groupName: string;
  topic: string;
  onBack: () => void;
}

export const FlashcardGenerator = ({ groupName, topic, onBack }: FlashcardGeneratorProps) => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [flashcards, setFlashcards] = useState<FlashcardData[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);

  // Mock flashcard generation based on topic
  const generateFlashcards = () => {
    setIsGenerating(true);
    
    // Simulate API call delay
    setTimeout(() => {
      const mockFlashcards = generateMockFlashcards(topic);
      setFlashcards(mockFlashcards);
      setCurrentCardIndex(0);
      setIsGenerating(false);
    }, 1500);
  };

  const generateMockFlashcards = (subject: string): FlashcardData[] => {
    const flashcardSets: { [key: string]: FlashcardData[] } = {
      "Computer Science": [
        { question: "What is a variable?", answer: "A storage location with an associated name that contains data" },
        { question: "What is a function?", answer: "A reusable block of code that performs a specific task" },
        { question: "What is an algorithm?", answer: "A step-by-step procedure for solving a problem" },
        { question: "What is recursion?", answer: "A programming technique where a function calls itself" },
        { question: "What is a data structure?", answer: "A way of organizing and storing data for efficient access" }
      ],
      "Mathematics": [
        { question: "What is the derivative of x²?", answer: "2x" },
        { question: "What is the integral of sin(x)?", answer: "-cos(x) + C" },
        { question: "What is the quadratic formula?", answer: "x = (-b ± √(b²-4ac)) / 2a" },
        { question: "What is a limit?", answer: "The value a function approaches as the input approaches a certain value" },
        { question: "What is the chain rule?", answer: "d/dx[f(g(x))] = f'(g(x)) × g'(x)" }
      ],
      "English": [
        { question: "What is a metaphor?", answer: "A figure of speech that compares two things without using 'like' or 'as'" },
        { question: "What is alliteration?", answer: "The repetition of initial consonant sounds in successive words" },
        { question: "What is irony?", answer: "The use of words to convey a meaning opposite to their literal meaning" },
        { question: "What is a thesis statement?", answer: "A sentence that expresses the main idea of an essay" },
        { question: "What is personification?", answer: "Giving human characteristics to non-human things" }
      ]
    };

    return flashcardSets[subject] || [
      { question: `What is the main concept in ${subject}?`, answer: "A fundamental principle or idea in this subject area" },
      { question: `How do you study ${subject} effectively?`, answer: "Through consistent practice and understanding key concepts" },
      { question: `What are the key skills needed for ${subject}?`, answer: "Critical thinking, analysis, and application of knowledge" }
    ];
  };

  const nextCard = () => {
    setCurrentCardIndex((prev) => (prev + 1) % flashcards.length);
  };

  const prevCard = () => {
    setCurrentCardIndex((prev) => (prev - 1 + flashcards.length) % flashcards.length);
  };

  const shuffleCards = () => {
    const shuffled = [...flashcards].sort(() => Math.random() - 0.5);
    setFlashcards(shuffled);
    setCurrentCardIndex(0);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Button variant="outline" onClick={onBack}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Groups
          </Button>
          <div>
            <h1 className="text-2xl font-bold">{groupName}</h1>
            <p className="text-gray-600">Auto-generated flashcards for {topic}</p>
          </div>
        </div>
        
        {flashcards.length === 0 && (
          <Button onClick={generateFlashcards} disabled={isGenerating}>
            {isGenerating ? "Generating..." : "Generate Flashcards"}
          </Button>
        )}
        
        {flashcards.length > 0 && (
          <Button variant="outline" onClick={shuffleCards}>
            <Shuffle className="h-4 w-4 mr-2" />
            Shuffle
          </Button>
        )}
      </div>

      {isGenerating && (
        <Card>
          <CardContent className="flex items-center justify-center h-40">
            <div className="text-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
              <p>Generating flashcards based on {topic}...</p>
            </div>
          </CardContent>
        </Card>
      )}

      {flashcards.length > 0 && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-600">
              Card {currentCardIndex + 1} of {flashcards.length}
            </p>
            <div className="flex space-x-2">
              <Button variant="outline" size="sm" onClick={prevCard}>
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm" onClick={nextCard}>
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <Flashcard
            question={flashcards[currentCardIndex].question}
            answer={flashcards[currentCardIndex].answer}
          />
        </div>
      )}
    </div>
  );
};
