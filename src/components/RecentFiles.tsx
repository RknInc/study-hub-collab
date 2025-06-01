
import { FileText, Download, Share, MoreHorizontal } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const RecentFiles = () => {
  const files = [
    {
      name: "Research Paper - AI Ethics.pdf",
      size: "2.4 MB",
      modified: "2 hours ago",
      course: "CS 301",
      type: "pdf"
    },
    {
      name: "Math Assignment 5.docx",
      size: "156 KB",
      modified: "1 day ago",
      course: "MATH 201",
      type: "docx"
    },
    {
      name: "English Essay Draft.docx",
      size: "89 KB",
      modified: "3 days ago",
      course: "ENG 150",
      type: "docx"
    },
    {
      name: "Lab Report - Chemistry.pdf",
      size: "1.8 MB",
      modified: "1 week ago",
      course: "CHEM 101",
      type: "pdf"
    }
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <FileText className="h-5 w-5 mr-2" />
          Recent Files
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {files.map((file, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-3 rounded-lg border hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <FileText className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <p className="font-medium text-sm">{file.name}</p>
                  <p className="text-xs text-gray-500">
                    {file.course} • {file.size} • {file.modified}
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-1">
                <Button variant="ghost" size="sm">
                  <Download className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm">
                  <Share className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
