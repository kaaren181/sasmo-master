"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Brain,
  BookOpen,
  Target,
  Trophy,
  Flame,
  Zap,
} from "lucide-react";
import { useApp } from "@/context/AppContext";
import { useState, useEffect } from "react";
import { PerplexityAttribution } from "@/components/PerplexityAttribution";

function ExamCountdown() {
  const [daysLeft, setDaysLeft] = useState(0);
  useEffect(() => {
    const examDate = new Date("2026-04-11");
    const now = new Date();
    const diff = Math.ceil((examDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
    setDaysLeft(Math.max(0, diff));
  }, []);

  return (
    <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg p-3 border border-primary/20">
      <div className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold mb-1">
        SASMO 2026
      </div>
      <div className="flex items-baseline gap-1">
        <span className="text-2xl font-bold text-primary" data-testid="text-days-left">
          {daysLeft}
        </span>
        <span className="text-xs text-muted-foreground">days left</span>
      </div>
    </div>
  );
}

export function Sidebar() {
  const pathname = usePathname();
  const { session } = useApp();

  const navItems = [
    { path: "/", label: "Dashboard", icon: LayoutDashboard },
    { path: "/lessons", label: "Lessons", icon: BookOpen },
    { path: "/practice", label: "Practice", icon: Target },
    { path: "/logic-er", label: "Logic ER", icon: Brain },
  ];

  return (
    <aside className="fixed left-0 top-0 h-full w-[220px] bg-sidebar border-r border-sidebar-border flex flex-col z-50">
      {/* Logo */}
      <div className="p-4 border-b border-sidebar-border">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-primary-foreground">
              <path d="M12 2L2 7l10 5 10-5-10-5z" />
              <path d="M2 17l10 5 10-5" />
              <path d="M2 12l10 5 10-5" />
            </svg>
          </div>
          <div>
            <h1 className="text-sm font-bold text-sidebar-foreground tracking-tight">SASMO Master</h1>
            <p className="text-[10px] text-muted-foreground">Grade 8 Olympiad</p>
          </div>
        </div>
      </div>

      {/* XP Bar */}
      <div className="px-4 py-3 border-b border-sidebar-border">
        <div className="flex items-center justify-between mb-1.5">
          <div className="flex items-center gap-1.5">
            <Zap className="w-3.5 h-3.5 text-accent" />
            <span className="text-xs font-semibold text-sidebar-foreground">Level {session.level}</span>
          </div>
          <span className="text-[10px] text-muted-foreground">{session.xp} XP</span>
        </div>
        <div className="w-full h-1.5 bg-sidebar-accent rounded-full overflow-hidden">
          <div
            className="h-full mastery-bar rounded-full transition-all duration-500"
            style={{ width: `${(session.xp % 250) / 2.5}%` }}
          />
        </div>
        <div className="flex items-center gap-3 mt-2">
          <div className="flex items-center gap-1">
            <Flame className="w-3.5 h-3.5 text-orange-400" />
            <span className="text-[10px] font-medium text-sidebar-foreground">{session.streak} day</span>
          </div>
          <div className="flex items-center gap-1">
            <Trophy className="w-3.5 h-3.5 text-accent" />
            <span className="text-[10px] font-medium text-sidebar-foreground">Gold</span>
          </div>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 p-2 space-y-0.5">
        {navItems.map((item) => {
          const isActive =
            pathname === item.path ||
            (item.path !== "/" && pathname.startsWith(item.path));
          return (
            <Link key={item.path} href={item.path}>
              <div
                data-testid={`nav-${item.label.toLowerCase().replace(/\s/g, "-")}`}
                className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm font-medium transition-all cursor-pointer ${
                  isActive
                    ? "bg-primary/15 text-primary"
                    : "text-muted-foreground hover:text-sidebar-foreground hover:bg-sidebar-accent/50"
                }`}
              >
                <item.icon className="w-4 h-4" />
                {item.label}
              </div>
            </Link>
          );
        })}
      </nav>

      {/* Exam countdown */}
      <div className="p-4 border-t border-sidebar-border">
        <ExamCountdown />
      </div>

      <div className="px-4 pb-3">
        <PerplexityAttribution />
      </div>
    </aside>
  );
}
