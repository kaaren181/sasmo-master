"use client";

import { useApp } from "@/context/AppContext";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import {
  Trophy,
  Target,
  Flame,
  Zap,
  TrendingUp,
  AlertTriangle,
  CheckCircle2,
  ArrowRight,
  Brain,
  BookOpen,
} from "lucide-react";

const TOPIC_COLORS: Record<string, string> = {
  "Number Theory": "from-blue-500/20 to-blue-600/10 border-blue-500/30",
  Algebra: "from-purple-500/20 to-purple-600/10 border-purple-500/30",
  Geometry: "from-emerald-500/20 to-emerald-600/10 border-emerald-500/30",
  Combinatorics: "from-orange-500/20 to-orange-600/10 border-orange-500/30",
  "Logic & Reasoning": "from-red-500/20 to-red-600/10 border-red-500/30",
  "Sequences & Patterns": "from-cyan-500/20 to-cyan-600/10 border-cyan-500/30",
  "Modular Arithmetic": "from-indigo-500/20 to-indigo-600/10 border-indigo-500/30",
  Probability: "from-pink-500/20 to-pink-600/10 border-pink-500/30",
};

const TOPIC_ICONS: Record<string, string> = {
  "Number Theory": "🔢",
  Algebra: "📐",
  Geometry: "📏",
  Combinatorics: "🎲",
  "Logic & Reasoning": "🧠",
  "Sequences & Patterns": "🔗",
  "Modular Arithmetic": "⏰",
  Probability: "🎯",
};

function getMasteryLabel(mastery: number): { label: string; color: string } {
  if (mastery >= 90) return { label: "Mastered", color: "text-emerald-400" };
  if (mastery >= 70) return { label: "Strong", color: "text-cyan-400" };
  if (mastery >= 40) return { label: "Learning", color: "text-amber-400" };
  if (mastery > 0) return { label: "Weak", color: "text-red-400" };
  return { label: "Not Started", color: "text-muted-foreground" };
}

function getMasteryBarColor(mastery: number): string {
  if (mastery >= 90) return "bg-emerald-500";
  if (mastery >= 70) return "bg-cyan-500";
  if (mastery >= 40) return "bg-amber-500";
  return "bg-red-500";
}

export default function Dashboard() {
  const { session } = useApp();

  const overallMastery = Math.round(
    session.topicProgress.reduce((sum, p) => sum + p.mastery, 0) /
      session.topicProgress.length
  );

  const weakTopics = session.topicProgress
    .filter((p) => p.mastery < 60)
    .sort((a, b) => a.mastery - b.mastery);

  const totalQuestions = session.topicProgress.reduce(
    (sum, p) => sum + p.questionsAttempted,
    0
  );
  const totalCorrect = session.topicProgress.reduce(
    (sum, p) => sum + p.questionsCorrect,
    0
  );

  return (
    <div className="p-6 space-y-6 max-w-[1100px]">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold">Dashboard</h1>
          <p className="text-sm text-muted-foreground mt-0.5">
            Your SASMO Grade 8 preparation overview
          </p>
        </div>
        <Link href="/practice">
          <div className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-semibold hover:bg-primary/90 transition-colors cursor-pointer" data-testid="button-start-practice">
            <Target className="w-4 h-4" />
            Start Practice
          </div>
        </Link>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-4 gap-4">
        <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
          <CardContent className="p-4">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                <TrendingUp className="w-4 h-4 text-primary" />
              </div>
              <span className="text-xs text-muted-foreground font-medium">Overall Mastery</span>
            </div>
            <div className="text-2xl font-bold text-primary" data-testid="text-overall-mastery">
              {overallMastery}%
            </div>
            <div className="w-full h-1.5 bg-muted rounded-full mt-2 overflow-hidden">
              <div
                className="h-full mastery-bar rounded-full transition-all duration-700"
                style={{ width: `${overallMastery}%` }}
              />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-accent/10 to-accent/5 border-accent/20">
          <CardContent className="p-4">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center">
                <Zap className="w-4 h-4 text-accent" />
              </div>
              <span className="text-xs text-muted-foreground font-medium">Total XP</span>
            </div>
            <div className="text-2xl font-bold text-accent" data-testid="text-total-xp">
              {session.xp.toLocaleString()}
            </div>
            <p className="text-[10px] text-muted-foreground mt-1">Level {session.level}</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-emerald-500/10 to-emerald-500/5 border-emerald-500/20">
          <CardContent className="p-4">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              </div>
              <span className="text-xs text-muted-foreground font-medium">Accuracy</span>
            </div>
            <div className="text-2xl font-bold text-emerald-400" data-testid="text-accuracy">
              {totalQuestions > 0 ? Math.round((totalCorrect / totalQuestions) * 100) : 0}%
            </div>
            <p className="text-[10px] text-muted-foreground mt-1">
              {totalCorrect}/{totalQuestions} correct
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-orange-500/10 to-orange-500/5 border-orange-500/20">
          <CardContent className="p-4">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-lg bg-orange-500/20 flex items-center justify-center">
                <Flame className="w-4 h-4 text-orange-400" />
              </div>
              <span className="text-xs text-muted-foreground font-medium">Streak</span>
            </div>
            <div className="text-2xl font-bold text-orange-400" data-testid="text-streak">
              {session.streak}
            </div>
            <p className="text-[10px] text-muted-foreground mt-1">consecutive days</p>
          </CardContent>
        </Card>
      </div>

      {/* Weakness Alert */}
      {weakTopics.length > 0 && (
        <Card className="border-red-500/30 bg-red-500/5">
          <CardContent className="p-4">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-red-500/20 flex items-center justify-center shrink-0 mt-0.5">
                <AlertTriangle className="w-4 h-4 text-red-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-semibold text-red-400 mb-1">
                  Priority Focus Areas
                </h3>
                <p className="text-xs text-muted-foreground mb-3">
                  These topics need the most attention before your exam.
                </p>
                <div className="flex flex-wrap gap-2">
                  {weakTopics.map((t) => (
                    <Link key={t.topic} href={`/practice?topic=${encodeURIComponent(t.topic)}`}>
                      <Badge
                        variant="outline"
                        className="border-red-500/30 text-red-400 hover:bg-red-500/10 cursor-pointer transition-colors"
                        data-testid={`badge-weak-${t.topic.toLowerCase().replace(/\s/g, "-")}`}
                      >
                        {TOPIC_ICONS[t.topic]} {t.topic} — {t.mastery}%
                      </Badge>
                    </Link>
                  ))}
                </div>
              </div>
              <Link href="/logic-er">
                <div className="flex items-center gap-1.5 px-3 py-1.5 bg-red-500/20 text-red-400 rounded-lg text-xs font-semibold hover:bg-red-500/30 transition-colors cursor-pointer whitespace-nowrap" data-testid="button-logic-er">
                  <Brain className="w-3.5 h-3.5" />
                  Logic ER
                  <ArrowRight className="w-3 h-3" />
                </div>
              </Link>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Topic Mastery Grid */}
      <div>
        <h2 className="text-sm font-semibold mb-3 flex items-center gap-2">
          <BookOpen className="w-4 h-4 text-primary" />
          Topic Mastery
        </h2>
        <div className="grid grid-cols-2 gap-3">
          {session.topicProgress.map((topic) => {
            const { label, color } = getMasteryLabel(topic.mastery);
            const barColor = getMasteryBarColor(topic.mastery);
            return (
              <Link
                key={topic.topic}
                href={`/practice?topic=${encodeURIComponent(topic.topic)}`}
              >
                <Card
                  className={`bg-gradient-to-br ${TOPIC_COLORS[topic.topic] || ""} cursor-pointer hover:scale-[1.01] transition-all duration-200`}
                  data-testid={`card-topic-${topic.topic.toLowerCase().replace(/\s/g, "-")}`}
                >
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-lg">{TOPIC_ICONS[topic.topic]}</span>
                        <span className="text-sm font-semibold">{topic.topic}</span>
                      </div>
                      <span className={`text-xs font-medium ${color}`}>{label}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex-1 h-2 bg-muted/50 rounded-full overflow-hidden">
                        <div
                          className={`h-full ${barColor} rounded-full transition-all duration-700`}
                          style={{ width: `${Math.max(topic.mastery, 2)}%` }}
                        />
                      </div>
                      <span className="text-sm font-bold min-w-[36px] text-right">
                        {topic.mastery}%
                      </span>
                    </div>
                    <div className="flex items-center gap-4 mt-2 text-[10px] text-muted-foreground">
                      <span>{topic.questionsCorrect}/{topic.questionsAttempted} correct</span>
                      {topic.currentStreak > 0 && (
                        <span className="flex items-center gap-0.5">
                          <Flame className="w-3 h-3 text-orange-400" />
                          {topic.currentStreak} streak
                        </span>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-3 gap-3">
        <Link href="/logic-er">
          <Card className="cursor-pointer hover:scale-[1.01] transition-all border-primary/20 bg-primary/5">
            <CardContent className="p-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                <Brain className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm font-semibold">Logic Emergency Room</p>
                <p className="text-[10px] text-muted-foreground">Intensive logic training</p>
              </div>
            </CardContent>
          </Card>
        </Link>

        <Link href="/lessons">
          <Card className="cursor-pointer hover:scale-[1.01] transition-all border-accent/20 bg-accent/5">
            <CardContent className="p-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-accent" />
              </div>
              <div>
                <p className="text-sm font-semibold">Lessons</p>
                <p className="text-[10px] text-muted-foreground">Learn all 8 topics</p>
              </div>
            </CardContent>
          </Card>
        </Link>

        <Link href="/practice">
          <Card className="cursor-pointer hover:scale-[1.01] transition-all border-emerald-500/20 bg-emerald-500/5">
            <CardContent className="p-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center">
                <Target className="w-5 h-5 text-emerald-400" />
              </div>
              <div>
                <p className="text-sm font-semibold">Full Practice</p>
                <p className="text-[10px] text-muted-foreground">All topics with hints</p>
              </div>
            </CardContent>
          </Card>
        </Link>
      </div>
    </div>
  );
}
