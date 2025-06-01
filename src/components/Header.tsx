
import { Menu, Search, Bell, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useIsMobile } from "@/hooks/use-mobile";

interface HeaderProps {
  onMenuClick: () => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const Header = ({ onMenuClick, activeTab, setActiveTab }: HeaderProps) => {
  const isMobile = useIsMobile();

  return (
    <header className="bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <Button
          variant="ghost"
          size="sm"
          onClick={onMenuClick}
          className="lg:hidden"
        >
          <Menu className="h-5 w-5" />
        </Button>
        
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">S</span>
          </div>
          <span className="font-bold text-xl text-gray-900">StudyHub</span>
        </div>

        {!isMobile && (
          <nav className="hidden lg:flex space-x-6 ml-8">
            <button
              onClick={() => setActiveTab("dashboard")}
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                activeTab === "dashboard"
                  ? "bg-blue-100 text-blue-700"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Dashboard
            </button>
            <button
              onClick={() => setActiveTab("groups")}
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                activeTab === "groups"
                  ? "bg-blue-100 text-blue-700"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Groups
            </button>
            <button
              onClick={() => setActiveTab("documents")}
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                activeTab === "documents"
                  ? "bg-blue-100 text-blue-700"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Documents
            </button>
          </nav>
        )}
      </div>

      <div className="flex items-center space-x-4">
        {!isMobile && (
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Search files, groups..."
              className="pl-10 w-64"
            />
          </div>
        )}
        
        <Button variant="ghost" size="sm">
          <Bell className="h-5 w-5" />
        </Button>
        
        <Button variant="ghost" size="sm">
          <User className="h-5 w-5" />
        </Button>
      </div>
    </header>
  );
};
