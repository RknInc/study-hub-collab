
import { Upload, FileText, Users, Star, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileUploadZone } from "@/components/FileUploadZone";
import { RecentFiles } from "@/components/RecentFiles";
import { QuickStats } from "@/components/QuickStats";

export const Dashboard = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600 mt-1">
            Organize your coursework and collaborate with classmates
          </p>
        </div>
        <Button>
          <Upload className="h-4 w-4 mr-2" />
          Upload Files
        </Button>
      </div>

      <QuickStats />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <FileUploadZone />
          <RecentFiles />
        </div>
        
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Star className="h-5 w-5 mr-2 text-yellow-500" />
                Pinned Groups
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {[
                { name: "CS 101 - Intro to Programming", members: 24 },
                { name: "Math 201 - Calculus II", members: 18 },
                { name: "English 150 - Academic Writing", members: 32 },
              ].map((group, index) => (
                <div key={index} className="p-3 bg-gray-50 rounded-lg">
                  <div className="font-medium text-sm">{group.name}</div>
                  <div className="text-xs text-gray-500 mt-1">
                    {group.members} members
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Clock className="h-5 w-5 mr-2 text-blue-500" />
                Recent Activity
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {[
                "Sarah uploaded 'Essay Draft 1.docx'",
                "New comment on 'Project Proposal'",
                "Mike joined 'Study Group A'",
                "Deadline reminder: Assignment due tomorrow",
              ].map((activity, index) => (
                <div key={index} className="text-sm text-gray-600 p-2 bg-gray-50 rounded">
                  {activity}
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
