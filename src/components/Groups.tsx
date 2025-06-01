
import { useState } from "react";
import { Users, Plus, Search, Filter, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FlashcardGenerator } from "./FlashcardGenerator";

export const Groups = () => {
  const [selectedGroup, setSelectedGroup] = useState<any>(null);
  const [showFlashcards, setShowFlashcards] = useState(false);

  const groups = [
    {
      name: "CS 101 - Introduction to Programming",
      description: "Learn the fundamentals of programming with Python",
      members: 24,
      files: 18,
      isPrivate: false,
      course: "Computer Science",
      university: "Tech University"
    },
    {
      name: "Math 201 - Calculus II",
      description: "Advanced calculus concepts and applications",
      members: 18,
      files: 32,
      isPrivate: true,
      course: "Mathematics",
      university: "Tech University"
    },
    {
      name: "English 150 - Academic Writing",
      description: "Improve your academic writing skills",
      members: 32,
      files: 24,
      isPrivate: false,
      course: "English",
      university: "Tech University"
    },
    {
      name: "Study Group Alpha",
      description: "Cross-course collaboration group",
      members: 12,
      files: 8,
      isPrivate: true,
      course: "General",
      university: "Various"
    }
  ];

  const handleGroupClick = (group: any) => {
    setSelectedGroup(group);
    setShowFlashcards(true);
  };

  const handleBackToGroups = () => {
    setShowFlashcards(false);
    setSelectedGroup(null);
  };

  if (showFlashcards && selectedGroup) {
    return (
      <FlashcardGenerator
        groupName={selectedGroup.name}
        topic={selectedGroup.course}
        onBack={handleBackToGroups}
      />
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Groups</h1>
          <p className="text-gray-600 mt-1">
            Join course groups and collaborate with classmates
          </p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Create Group
        </Button>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            placeholder="Search groups..."
            className="pl-10"
          />
        </div>
        <Button variant="outline">
          <Filter className="h-4 w-4 mr-2" />
          Filter
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {groups.map((group, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <CardTitle className="text-lg">{group.name}</CardTitle>
                  <p className="text-sm text-gray-600 mt-1">{group.description}</p>
                </div>
                <Badge variant={group.isPrivate ? "secondary" : "default"}>
                  {group.isPrivate ? "Private" : "Public"}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <span>{group.course}</span>
                  <span>{group.university}</span>
                </div>
                
                <div className="flex items-center space-x-4 text-sm">
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-1 text-gray-400" />
                    <span>{group.members} members</span>
                  </div>
                  <div className="flex items-center">
                    <FileText className="h-4 w-4 mr-1 text-gray-400" />
                    <span>{group.files} files</span>
                  </div>
                </div>

                <div className="flex space-x-2">
                  <Button className="flex-1" size="sm">
                    Join Group
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => handleGroupClick(group)}
                  >
                    Generate Flashcards
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
