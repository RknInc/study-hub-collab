
import { FileText, Users, MessageSquare, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const QuickStats = () => {
  const stats = [
    {
      title: "Total Files",
      value: "24",
      icon: FileText,
      color: "bg-blue-500",
      change: "+3 this week"
    },
    {
      title: "Active Groups",
      value: "6",
      icon: Users,
      color: "bg-green-500",
      change: "+1 this month"
    },
    {
      title: "Comments",
      value: "18",
      icon: MessageSquare,
      color: "bg-purple-500",
      change: "+5 today"
    },
    {
      title: "Starred Items",
      value: "12",
      icon: Star,
      color: "bg-yellow-500",
      change: "2 new"
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <Card key={index}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  <p className="text-xs text-gray-500 mt-1">{stat.change}</p>
                </div>
                <div className={`w-12 h-12 ${stat.color} rounded-lg flex items-center justify-center`}>
                  <Icon className="h-6 w-6 text-white" />
                </div>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};
