
import { FileText, Search, Filter, Grid, List, Download, Share } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

export const Documents = () => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const documents = [
    {
      name: "Research Paper - AI Ethics.pdf",
      size: "2.4 MB",
      modified: "2 hours ago",
      course: "CS 301",
      tags: ["Research", "AI", "Ethics"],
      author: "You"
    },
    {
      name: "Math Assignment 5.docx",
      size: "156 KB",
      modified: "1 day ago",
      course: "MATH 201",
      tags: ["Assignment", "Calculus"],
      author: "Sarah Chen"
    },
    {
      name: "Project Proposal.pdf",
      size: "890 KB",
      modified: "3 days ago",
      course: "CS 301",
      tags: ["Project", "Proposal"],
      author: "Mike Johnson"
    },
    {
      name: "Lab Report - Chemistry.pdf",
      size: "1.8 MB",
      modified: "1 week ago",
      course: "CHEM 101",
      tags: ["Lab", "Report", "Chemistry"],
      author: "You"
    },
    {
      name: "Essay Draft - Literature.docx",
      size: "234 KB",
      modified: "1 week ago",
      course: "ENG 150",
      tags: ["Essay", "Literature"],
      author: "Emma Wilson"
    },
    {
      name: "Study Notes - Biology.pdf",
      size: "1.2 MB",
      modified: "2 weeks ago",
      course: "BIO 101",
      tags: ["Notes", "Biology"],
      author: "Alex Rodriguez"
    }
  ];

  const DocumentCard = ({ doc, index }: { doc: any; index: number }) => (
    <Card key={index} className="hover:shadow-lg transition-shadow">
      <CardContent className="p-4">
        <div className="space-y-3">
          <div className="flex items-start justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <FileText className="h-5 w-5 text-blue-600" />
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-sm">{doc.name}</h3>
                <p className="text-xs text-gray-500">{doc.author} • {doc.modified}</p>
              </div>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-1">
            {doc.tags.map((tag: string, tagIndex: number) => (
              <Badge key={tagIndex} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
          
          <div className="flex items-center justify-between">
            <div className="text-xs text-gray-500">
              {doc.course} • {doc.size}
            </div>
            <div className="flex space-x-1">
              <Button variant="ghost" size="sm">
                <Download className="h-3 w-3" />
              </Button>
              <Button variant="ghost" size="sm">
                <Share className="h-3 w-3" />
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  const DocumentRow = ({ doc, index }: { doc: any; index: number }) => (
    <div key={index} className="flex items-center justify-between p-4 border-b hover:bg-gray-50">
      <div className="flex items-center space-x-3 flex-1">
        <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center">
          <FileText className="h-4 w-4 text-blue-600" />
        </div>
        <div className="flex-1">
          <p className="font-medium text-sm">{doc.name}</p>
          <p className="text-xs text-gray-500">{doc.course} • {doc.author} • {doc.modified}</p>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <div className="flex flex-wrap gap-1">
          {doc.tags.slice(0, 2).map((tag: string, tagIndex: number) => (
            <Badge key={tagIndex} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
          {doc.tags.length > 2 && (
            <Badge variant="secondary" className="text-xs">
              +{doc.tags.length - 2}
            </Badge>
          )}
        </div>
        <span className="text-xs text-gray-500 w-16">{doc.size}</span>
        <div className="flex space-x-1">
          <Button variant="ghost" size="sm">
            <Download className="h-3 w-3" />
          </Button>
          <Button variant="ghost" size="sm">
            <Share className="h-3 w-3" />
          </Button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Documents</h1>
          <p className="text-gray-600 mt-1">
            Browse and manage all your shared documents
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Button
            variant={viewMode === "grid" ? "default" : "outline"}
            size="sm"
            onClick={() => setViewMode("grid")}
          >
            <Grid className="h-4 w-4" />
          </Button>
          <Button
            variant={viewMode === "list" ? "default" : "outline"}
            size="sm"
            onClick={() => setViewMode("list")}
          >
            <List className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            placeholder="Search documents..."
            className="pl-10"
          />
        </div>
        <Button variant="outline">
          <Filter className="h-4 w-4 mr-2" />
          Filter
        </Button>
      </div>

      {viewMode === "grid" ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {documents.map((doc, index) => (
            <DocumentCard key={index} doc={doc} index={index} />
          ))}
        </div>
      ) : (
        <Card>
          <CardContent className="p-0">
            {documents.map((doc, index) => (
              <DocumentRow key={index} doc={doc} index={index} />
            ))}
          </CardContent>
        </Card>
      )}
    </div>
  );
};
