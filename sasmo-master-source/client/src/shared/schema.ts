import { z } from "zod";

// Topic types for SASMO Grade 8
export const SASMO_TOPICS = [
  "Number Theory",
  "Algebra",
  "Geometry",
  "Combinatorics",
  "Logic & Reasoning",
  "Sequences & Patterns",
  "Modular Arithmetic",
  "Probability",
] as const;

export type SasmoTopic = (typeof SASMO_TOPICS)[number];

export const DIFFICULTY_LEVELS = ["Bronze", "Silver", "Gold", "Platinum"] as const;
export type DifficultyLevel = (typeof DIFFICULTY_LEVELS)[number];

// Problem schema
export interface Problem {
  id: string;
  topic: SasmoTopic;
  difficulty: DifficultyLevel;
  question: string;
  options?: string[];
  answer: string;
  hints: {
    keyInsight: string;
    firstStep: string;
    fullSolution: string;
  };
  svgDiagram?: string;
  tags: string[];
}

// User progress per topic
export interface TopicProgress {
  topic: SasmoTopic;
  questionsAttempted: number;
  questionsCorrect: number;
  currentStreak: number;
  bestStreak: number;
  mastery: number; // 0-100
  lastPracticed?: string;
}

// Session data (stored in React state, no backend)
export interface UserSession {
  visitorId: string;
  xp: number;
  level: number;
  streak: number;
  lastActive: string;
  topicProgress: TopicProgress[];
  completedProblems: string[];
  currentDifficulty: DifficultyLevel;
}
