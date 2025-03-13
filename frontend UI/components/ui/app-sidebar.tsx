"use client"
import { PieChartIcon, User2Icon, BarChart2, ChevronDown, MapPin, Plus, ScanSearch, UserIcon } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { use, useState } from "react";
import Link from "next/link";

const items = [
  {
    title: "Dashboard",
    url: "/",
    icon: PieChartIcon,
  },
  {
    title: "Election Detail",
    url: "#",
    icon: BarChart2,
  },
];

export function AppSidebar() {
  const [canditateDropDown, setCanditateDropDown] = useState(false);
  const [locationDropDown, setLocationDropDown] = useState(false);
  const [voterDropDown, setVoterDropDown] = useState(false);

  return (
    <Sidebar>
      <SidebarContent className="bg-[#F9FAFB] border-r border-gray-200 shadow-md">
        <SidebarGroup>
          <SidebarGroupLabel className="text-2xl font-semibold text-[#004AAD] mb-4">
            Online Voting System
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    className="text-[#1E293B] hover:bg-[#E0F2FF] transition duration-300 rounded-lg p-3 flex items-center gap-3"
                  >
                    <a href={item.url}>
                      <item.icon className="text-[#004AAD]" />
                      <span className="font-semibold">{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
              <SidebarMenuItem>
                <SidebarMenuButton
                  className="cursor-pointer text-[#1E293B] hover:bg-[#E0F2FF] transition duration-300 rounded-lg p-3 flex items-center gap-3"
                  onClick={() => setCanditateDropDown(!canditateDropDown)}
                >
                  <User2Icon className="text-[#004AAD]" />
                  <div className="w-full flex justify-between">
                    <span className="font-semibold">Candidate</span>
                    <ChevronDown size={18} className={`transition-transform duration-300 ${canditateDropDown ? "rotate-180" : ""}`} />
                  </div>
                </SidebarMenuButton>
                {canditateDropDown && (
                  <div className="ml-6">
                    <Link href="add-candidate" className="flex items-center gap-3">
                      <SidebarMenuButton className="hover:bg-[#00A3FF] transition duration-300 cursor-pointer text-white rounded-lg p-2">
                        <Plus size={18} className="text-[#004AAD]" />
                        <span className="font-semibold text-[#1E293B]">Add Candidate</span>
                      </SidebarMenuButton>
                    </Link>
                    <Link href="view-candidate" className="flex items-center gap-3">
                      <SidebarMenuButton className="hover:bg-[#00A3FF] transition duration-300 cursor-pointer text-white rounded-lg p-2">
                        <ScanSearch size={18} className="text-[#004AAD]" />
                        <span className="font-semibold text-[#1E293B]">View Candidates</span>
                      </SidebarMenuButton>
                    </Link>
                  </div>
                )}
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton
                  className="cursor-pointer text-[#1E293B] hover:bg-[#E0F2FF] transition duration-300 rounded-lg p-3 flex items-center gap-3"
                  onClick={() => setLocationDropDown(!locationDropDown)}
                >
                  <MapPin className="text-[#004AAD]" />
                  <div className="w-full flex justify-between">
                    <span className="font-semibold">Polling Location</span>
                    <ChevronDown size={18} className={`transition-transform duration-300 ${locationDropDown ? "rotate-180" : ""}`} />
                  </div>
                </SidebarMenuButton>
                {locationDropDown && (
                  <div className="ml-6">
                    <Link href="add-location" className="flex items-center gap-3">
                      <SidebarMenuButton className="hover:bg-[#00A3FF] transition duration-300 cursor-pointer text-white rounded-lg p-2">
                        <Plus size={18} className="text-[#004AAD]" />
                        <span className="font-semibold text-[#1E293B]">Add Location</span>
                      </SidebarMenuButton>
                    </Link>
                    <Link href="view-location" className="flex items-center gap-3">
                      <SidebarMenuButton className="hover:bg-[#00A3FF] transition duration-300 cursor-pointer text-white rounded-lg p-2">
                        <ScanSearch size={18} className="text-[#004AAD]" />
                        <span className="font-semibold text-[#1E293B]">View Location</span>
                      </SidebarMenuButton>
                    </Link>
                  </div>
                )}
              </SidebarMenuItem>
            </SidebarMenu>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton
                  className="cursor-pointer text-[#1E293B] hover:bg-[#E0F2FF] transition duration-300 rounded-lg p-3 flex items-center gap-3"
                  onClick={() => setVoterDropDown(!voterDropDown)}
                >
                  <UserIcon className="text-[#004AAD]" />
                  <div className="w-full flex justify-between">
                    <span className="font-semibold">Voter Management</span>
                    <ChevronDown size={18} className={`transition-transform duration-300 ${voterDropDown ? "rotate-180" : ""}`} />
                  </div>
                </SidebarMenuButton>
                {voterDropDown && (
                  <div className="ml-6">
                    <Link href="add-voter" className="flex items-center gap-3">
                      <SidebarMenuButton className="hover:bg-[#00A3FF] transition duration-300 cursor-pointer text-white rounded-lg p-2">
                        <Plus size={18} className="text-[#004AAD]" />
                        <span className="font-semibold text-[#1E293B]">Add Voter</span>
                      </SidebarMenuButton>
                    </Link>
                    <Link href="view-voter" className="flex items-center gap-3">
                      <SidebarMenuButton className="hover:bg-[#00A3FF] transition duration-300 cursor-pointer text-white rounded-lg p-2">
                        <ScanSearch size={18} className="text-[#004AAD]" />
                        <span className="font-semibold text-[#1E293B]">Voter List</span>
                      </SidebarMenuButton>
                    </Link>
                  </div>
                )}
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
