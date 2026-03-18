"use client";

import React, { createContext, useContext, useState, useCallback, type ReactNode } from "react";
import type { UserSession, TopicProgress, SasmoTopic, DifficultyLevel } from "@/shared/schema";
import { DEFAULT_SESSION } from "@/data/session";

interface AppContextType {
  session: UserSession;
  // Update session functions
  addXP: (amount: number) => void;
  updateTopicProgress: (topic: SasmoTopic, correct: boolean, withHints: boolean) => void;
  markProblemCompleted: (problemId: string) => void;
  isProblemCompleted: (problemId: string) => boolean;
  resetSession: () => void;
}

const AppContext = createContext<AppContextType | null>(null);

export function AppProvider({ children }: { children: ReactNode }) {
  const [session, setSession] = useState<UserSession>({ ...DEFAULT_SESSION });

  const addXP = useCallback((amount: number) => {
    setSession(prev => {
      const newXP = prev.xp + amount;
      const newLevel = Math.floor(newXP / 250) + 1;
      return { ...prev, xp: newXP, level: newLevel };
    });
  }, []);

  const updateTopicProgress = useCallback((topic: SasmoTopic, correct: boolean, withHints: boolean) => {
    setSession(prev => {
      const progress = prev.topicProgress.map(p => {
        if (p.topic !== topic) return p;
        const newAttempted = p.questionsAttempted + 1;
        const newCorrect = p.questionsCorrect + (correct ? 1 : 0);
        const newStreak = correct ? p.currentStreak + 1 : 0;
        const newBestStreak = Math.max(p.bestStreak, newStreak);
        // Recalculate mastery based on correct/attempted ratio
        const newMastery = Math.round((newCorrect / newAttempted) * 100);
        return {
          ...p,
          questionsAttempted: newAttempted,
          questionsCorrect: newCorrect,
          currentStreak: newStreak,
          bestStreak: newBestStreak,
          mastery: newMastery,
          lastPracticed: new Date().toISOString().split('T')[0],
        };
      });

      // Calculate XP
      let xpGain = 0;
      if (correct && !withHints) xpGain = 25;
      else if (correct && withHints) xpGain = 10;
      else xpGain = -5;

      const newXP = Math.max(0, prev.xp + xpGain);
      const newLevel = Math.floor(newXP / 250) + 1;

      return { ...prev, topicProgress: progress, xp: newXP, level: newLevel };
    });
  }, []);

  const markProblemCompleted = useCallback((problemId: string) => {
    setSession(prev => ({
      ...prev,
      completedProblems: [...prev.completedProblems, problemId],
    }));
  }, []);

  const isProblemCompleted = useCallback((problemId: string) => {
    return session.completedProblems.includes(problemId);
  }, [session.completedProblems]);

  const resetSession = useCallback(() => {
    setSession({ ...DEFAULT_SESSION });
  }, []);

  return (
    <AppContext.Provider value={{ session, addXP, updateTopicProgress, markProblemCompleted, isProblemCompleted, resetSession }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp(): AppContextType {
  const context = useContext(AppContext);
  if (!context) throw new Error("useApp must be used within AppProvider");
  return context;
}
