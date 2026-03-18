import type { UserSession, TopicProgress, DifficultyLevel } from "@/shared/schema";

// Karen's Test 4 results - hardcoded initial state
export const DEFAULT_SESSION: UserSession = {
  visitorId: "karen-2026",
  xp: 1250,
  level: 5,
  streak: 3,
  lastActive: new Date().toISOString(),
  topicProgress: [
    { topic: "Number Theory", questionsAttempted: 9, questionsCorrect: 7, currentStreak: 2, bestStreak: 4, mastery: 78, lastPracticed: "2026-03-17" },
    { topic: "Algebra", questionsAttempted: 10, questionsCorrect: 10, currentStreak: 10, bestStreak: 10, mastery: 100, lastPracticed: "2026-03-17" },
    { topic: "Geometry", questionsAttempted: 7, questionsCorrect: 6, currentStreak: 3, bestStreak: 5, mastery: 86, lastPracticed: "2026-03-16" },
    { topic: "Combinatorics", questionsAttempted: 5, questionsCorrect: 3, currentStreak: 0, bestStreak: 2, mastery: 60, lastPracticed: "2026-03-15" },
    { topic: "Logic & Reasoning", questionsAttempted: 3, questionsCorrect: 0, currentStreak: 0, bestStreak: 0, mastery: 0, lastPracticed: "2026-03-14" },
    { topic: "Sequences & Patterns", questionsAttempted: 8, questionsCorrect: 8, currentStreak: 8, bestStreak: 8, mastery: 100, lastPracticed: "2026-03-16" },
    { topic: "Modular Arithmetic", questionsAttempted: 10, questionsCorrect: 10, currentStreak: 10, bestStreak: 10, mastery: 100, lastPracticed: "2026-03-17" },
    { topic: "Probability", questionsAttempted: 6, questionsCorrect: 6, currentStreak: 6, bestStreak: 6, mastery: 100, lastPracticed: "2026-03-16" },
  ],
  completedProblems: [],
  currentDifficulty: "Gold",
};
