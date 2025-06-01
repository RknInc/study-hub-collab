
import { X, Home, Users, FileText, Settings, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const Sidebar = ({ isOpen, onClose, activeTab, setActiveTab }: SidebarProps) => {
  const isMobile = useIsMobile();

  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: Home },
    { id: "groups", label: "Groups", icon: Users },
    { id: "documents", label: "Documents", icon: FileText },
  ];

  const sidebarClasses = `
    fixed lg:relative top-0 left-0 h-full w-64 bg-white border-r border-gray-200 
    transform transition-transform duration-300 ease-in-out z-30
    ${isMobile 
      ? (isOpen ? "translate-x-0" : "-translate-x-full") 
      : "translate-x-0"
    }
  `;

  return (
    <>
      {isMobile && isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20"
          onClick={onClose}
        />
      )}
      
      <aside className={sidebarClasses}>
        <div className="p-4 border-b border-gray-200 flex items-center justify-between">
          <h2 className="font-semibold text-gray-900">Navigation</h2>
          {isMobile && (
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="h-4 w-4" />
            </Button>
          )}
        </div>

        <nav className="p-4 space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  if (isMobile) onClose();
                }}
                className={`w-full flex items-center space-x-3 px-3 py-2 text-left rounded-lg transition-colors ${
                  activeTab === item.id
                    ? "bg-blue-100 text-blue-700"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                <Icon className="h-5 w-5" />
                <span className="font-medium">{item.label}</span>
              </button>
            );
          })}
        </nav>

        <div className="p-4 border-t border-gray-200 mt-auto">
          <Button className="w-full" size="sm">
            <Plus className="h-4 w-4 mr-2" />
            Create Group
          </Button>
        </div>
      </aside>
    </>
  );
};
