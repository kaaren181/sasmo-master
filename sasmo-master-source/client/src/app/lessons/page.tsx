"use client";

import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useApp } from "@/context/AppContext";
import { BookOpen, ChevronRight } from "lucide-react";

const TOPIC_CARDS = [
  { id: "modular-arithmetic", topic: "Modular Arithmetic", icon: "⏰", color: "from-indigo-500/20 to-indigo-600/10 border-indigo-500/30", accent: "text-indigo-400", desc: "Remainders, last digits, day-of-week calculations" },
  { id: "algebra", topic: "Algebra", icon: "📐", color: "from-purple-500/20 to-purple-600/10 border-purple-500/30", accent: "text-purple-400", desc: "Vieta's formulas, equations, sum & product of roots" },
  { id: "number-theory", topic: "Number Theory", icon: "🔢", color: "from-blue-500/20 to-blue-600/10 border-blue-500/30", accent: "text-blue-400", desc: "Trailing zeros, divisibility, primes, GCD/LCM" },
  { id: "geometry", topic: "Geometry", icon: "📏", color: "from-emerald-500/20 to-emerald-600/10 border-emerald-500/30", accent: "text-emerald-400", desc: "Areas, inscribed circles, similar triangles, angles" },
  { id: "combinatorics", topic: "Combinatorics", icon: "🎲", color: "from-orange-500/20 to-orange-600/10 border-orange-500/30", accent: "text-orange-400", desc: "Counting, permutations, combinations, stars & bars" },
  { id: "logic", topic: "Logic & Reasoning", icon: "🧠", color: "from-red-500/20 to-red-600/10 border-red-500/30", accent: "text-red-400", desc: "Truth/liar puzzles, cryptarithmetic, custom operators" },
  { id: "sequences", topic: "Sequences & Patterns", icon: "🔗", color: "from-cyan-500/20 to-cyan-600/10 border-cyan-500/30", accent: "text-cyan-400", desc: "Arithmetic, geometric, difference tables, sum formulas" },
  { id: "probability", topic: "Probability", icon: "🎯", color: "from-pink-500/20 to-pink-600/10 border-pink-500/30", accent: "text-pink-400", desc: "Basic probability, inclusion-exclusion, expected value" },
];

export default function LessonsPage() {
  const { session } = useApp();

  return (
    <div className="p-6 max-w-[1000px]">
      <div className="flex items-center gap-3 mb-1">
        <BookOpen className="w-5 h-5 text-primary" />
        <h1 className="text-xl font-bold">Lessons</h1>
      </div>
      <p className="text-sm text-muted-foreground mb-6">
        Master every SASMO Grade 8 topic with visual lessons, worked examples, and video recommendations.
      </p>

      <div className="grid grid-cols-2 gap-4">
        {TOPIC_CARDS.map((card) => {
          const progress = session.topicProgress.find((p) => p.topic === card.topic);
          const mastery = progress?.mastery ?? 0;

          return (
            <Link key={card.id} href={`/lessons/${card.id}`}>
              <Card className={`bg-gradient-to-br ${card.color} cursor-pointer hover:scale-[1.01] transition-all duration-200 group`}>
                <CardContent className="p-5">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">{card.icon}</span>
                      <div>
                        <h3 className="text-sm font-bold">{card.topic}</h3>
                        <p className="text-[11px] text-muted-foreground mt-0.5">{card.desc}</p>
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:translate-x-0.5 transition-transform" />
                  </div>

                  <div className="flex items-center gap-3 mt-3">
                    <div className="flex-1 h-1.5 bg-muted/40 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all duration-700 ${
                          mastery >= 90 ? "bg-emerald-500" :
                          mastery >= 70 ? "bg-cyan-500" :
                          mastery >= 40 ? "bg-amber-500" : "bg-red-500"
                        }`}
                        style={{ width: `${Math.max(mastery, 2)}%` }}
                      />
                    </div>
                    <Badge variant="outline" className={`text-[10px] ${card.accent} border-current/30`}>
                      {mastery}%
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
