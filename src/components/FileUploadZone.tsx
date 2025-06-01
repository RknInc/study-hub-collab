
import { Upload, FileText } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";

export const FileUploadZone = () => {
  const [isDragging, setIsDragging] = useState(false);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    // Handle file drop logic here
    console.log("Files dropped:", e.dataTransfer.files);
  };

  return (
    <Card>
      <CardContent className="p-6">
        <div
          className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
            isDragging
              ? "border-blue-400 bg-blue-50"
              : "border-gray-300 hover:border-gray-400"
          }`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <div className="flex flex-col items-center space-y-4">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
              <Upload className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <p className="text-lg font-medium text-gray-900">
                Drop files here or click to upload
              </p>
              <p className="text-sm text-gray-500 mt-1">
                Support for PDF, DOC, DOCX, TXT files up to 10MB
              </p>
            </div>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              Select Files
            </button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
