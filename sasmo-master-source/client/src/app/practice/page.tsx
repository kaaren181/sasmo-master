"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import type { Problem, SasmoTopic } from "@/shared/schema";
import { SASMO_TOPICS } from "@/shared/schema";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import {
  Lightbulb,
  ChevronRight,
  Check,
  X,
  Eye,
  RotateCw,
  Zap,
  Timer,
} from "lucide-react";
import { useApp } from "@/context/AppContext";
import { getProblemsByTopic } from "@/data/problems";

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

export default function PracticePageWrapper() {
  return (
    <Suspense fallback={<div className="p-6"><p className="text-sm text-muted-foreground">Loading...</p></div>}>
      <PracticePage />
    </Suspense>
  );
}

function PracticePage() {
  const { toast } = useToast();
  const searchParams = useSearchParams();
  const { session, updateTopicProgress, markProblemCompleted, isProblemCompleted } = useApp();
  const [selectedTopic, setSelectedTopic] = useState<SasmoTopic | null>(null);
  const [currentProblem, setCurrentProblem] = useState<Problem | null>(null);
  const [selectedAnswer, setSelectedAnswer] = useState<string>("");
  const [showResult, setShowResult] = useState(false);
  const [resultData, setResultData] = useState<any>(null);
  const [hintLevel, setHintLevel] = useState(0); // 0=none, 1=keyInsight, 2=firstStep, 3=full
  const [timer, setTimer] = useState(0);
  const [timerRunning, setTimerRunning] = useState(false);
  const [playedIds, setPlayedIds] = useState<Set<string>>(new Set());

  // Check URL for topic param
  useEffect(() => {
    const topic = searchParams.get("topic");
    if (topic && SASMO_TOPICS.includes(topic as any)) {
      setSelectedTopic(topic as SasmoTopic);
      pickProblem(topic as SasmoTopic, new Set());
    }
  }, [searchParams]);

  // Timer
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (timerRunning) {
      interval = setInterval(() => setTimer((t) => t + 1), 1000);
    }
    return () => clearInterval(interval);
  }, [timerRunning]);

  const pickProblem = (topic: SasmoTopic, played: Set<string>) => {
    const problems = getProblemsByTopic(topic);
    let unplayed = problems.filter((p) => !played.has(p.id));
    let resetPlayed = played;
    if (unplayed.length === 0) {
      // All played — reset and pick from full set
      resetPlayed = new Set();
      unplayed = problems;
    }
    const randomIndex = Math.floor(Math.random() * unplayed.length);
    const problem = unplayed[randomIndex];
    const newPlayed = new Set(Array.from(resetPlayed));
    newPlayed.add(problem.id);
    setPlayedIds(newPlayed);
    setCurrentProblem(problem);
    setSelectedAnswer("");
    setShowResult(false);
    setResultData(null);
    setHintLevel(0);
    setTimer(0);
    setTimerRunning(true);
  };

  const handleSelectTopic = (topic: SasmoTopic) => {
    setSelectedTopic(topic);
    setPlayedIds(new Set());
    pickProblem(topic, new Set());
  };

  const handleSubmit = () => {
    if (!currentProblem || !selectedAnswer || !selectedTopic) return;

    const correct = selectedAnswer === currentProblem.answer;
    let xpGained: number;
    if (correct && hintLevel === 0) {
      xpGained = 25;
    } else if (correct && hintLevel > 0) {
      xpGained = 10;
    } else {
      xpGained = -5;
    }

    updateTopicProgress(selectedTopic, correct, hintLevel > 0);
    markProblemCompleted(currentProblem.id);

    setResultData({
      correct,
      correctAnswer: currentProblem.answer,
      xpGained,
      hints: currentProblem.hints,
    });
    setShowResult(true);
    setTimerRunning(false);
  };

  const handleNext = () => {
    if (selectedTopic) {
      pickProblem(selectedTopic, playedIds);
    }
  };

  const formatTime = (s: number) => {
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return `${m}:${sec.toString().padStart(2, "0")}`;
  };

  // Topic selection view
  if (!selectedTopic) {
    return (
      <div className="p-6 max-w-[1000px]">
        <h1 className="text-xl font-bold mb-1">Practice</h1>
        <p className="text-sm text-muted-foreground mb-6">
          Choose a topic to start practicing SASMO problems.
        </p>
        <div className="grid grid-cols-2 gap-3">
          {SASMO_TOPICS.map((topic) => {
            const progress = session?.topicProgress.find((p) => p.topic === topic);
            return (
              <Card
                key={topic}
                className="cursor-pointer hover:scale-[1.01] transition-all border-border/50 hover:border-primary/40"
                onClick={() => handleSelectTopic(topic)}
                data-testid={`card-select-${topic.toLowerCase().replace(/\s/g, "-")}`}
              >
                <CardContent className="p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{TOPIC_ICONS[topic]}</span>
                    <div>
                      <p className="text-sm font-semibold">{topic}</p>
                      <p className="text-[10px] text-muted-foreground">
                        {progress ? `${progress.mastery}% mastery` : "Not started"}
                      </p>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-muted-foreground" />
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    );
  }

  // Problem view
  if (currentProblem) {
    return (
      <div className="p-6 max-w-[800px]">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                setSelectedTopic(null);
                setCurrentProblem(null);
                setTimerRunning(false);
              }}
              data-testid="button-back-topics"
            >
              ← Topics
            </Button>
            <Badge variant="outline" className="text-xs">
              {TOPIC_ICONS[selectedTopic]} {selectedTopic}
            </Badge>
            <Badge variant="outline" className="text-xs border-accent/30 text-accent">
              {currentProblem.difficulty}
            </Badge>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Timer className="w-4 h-4" />
            <span className="font-mono" data-testid="text-timer">{formatTime(timer)}</span>
          </div>
        </div>

        {/* Problem Card */}
        <Card className="mb-4">
          <CardContent className="p-6">
            {/* SVG Diagram */}
            {currentProblem.svgDiagram && (
              <div
                className="mb-4 flex justify-center bg-muted/30 rounded-lg p-4"
                dangerouslySetInnerHTML={{ __html: currentProblem.svgDiagram }}
              />
            )}

            {/* Question */}
            <div className="text-sm leading-relaxed mb-6" data-testid="text-problem-question">
              {currentProblem.question}
            </div>

            {/* Options */}
            {currentProblem.options && currentProblem.options.length > 0 && (
              <div className="space-y-2">
                {currentProblem.options.map((option, i) => {
                  const letter = String.fromCharCode(65 + i);
                  const isSelected = selectedAnswer === letter;
                  const isCorrect = showResult && letter === resultData?.correctAnswer;
                  const isWrong = showResult && isSelected && !resultData?.correct;

                  return (
                    <button
                      key={i}
                      onClick={() => !showResult && setSelectedAnswer(letter)}
                      disabled={showResult}
                      className={`w-full text-left p-3 rounded-lg border text-sm transition-all ${
                        isCorrect
                          ? "border-emerald-500 bg-emerald-500/10 text-emerald-400"
                          : isWrong
                          ? "border-red-500 bg-red-500/10 text-red-400"
                          : isSelected
                          ? "border-primary bg-primary/10 text-primary"
                          : "border-border hover:border-primary/40 hover:bg-muted/30"
                      }`}
                      data-testid={`button-option-${letter}`}
                    >
                      <div className="flex items-center gap-3">
                        <span className={`w-6 h-6 rounded-full border flex items-center justify-center text-xs font-semibold ${
                          isCorrect ? "border-emerald-500 bg-emerald-500/20" :
                          isWrong ? "border-red-500 bg-red-500/20" :
                          isSelected ? "border-primary bg-primary/20" : "border-border"
                        }`}>
                          {isCorrect ? <Check className="w-3.5 h-3.5" /> :
                           isWrong ? <X className="w-3.5 h-3.5" /> :
                           letter}
                        </span>
                        <span>{option}</span>
                      </div>
                    </button>
                  );
                })}
              </div>
            )}

            {/* Free response for Section B style */}
            {(!currentProblem.options || currentProblem.options.length === 0) && !showResult && (
              <div className="mt-4">
                <input
                  type="text"
                  inputMode="numeric"
                  value={selectedAnswer}
                  onChange={(e) => setSelectedAnswer(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      if (selectedAnswer) handleSubmit();
                    }
                  }}
                  placeholder="Enter your answer (4-digit format, e.g. 0023)"
                  className="w-full p-3 rounded-lg border border-border bg-muted/30 text-sm focus:outline-none focus:border-primary"
                  data-testid="input-answer"
                />
              </div>
            )}
          </CardContent>
        </Card>

        {/* Hints */}
        {!showResult && (
          <div className="flex items-center gap-2 mb-4">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setHintLevel(Math.min(hintLevel + 1, 3))}
              disabled={hintLevel >= 3}
              data-testid="button-hint"
            >
              <Lightbulb className="w-3.5 h-3.5 mr-1.5 text-amber-400" />
              {hintLevel === 0 ? "Key Insight" : hintLevel === 1 ? "First Step" : hintLevel === 2 ? "Full Solution" : "All Hints Used"}
            </Button>
            {hintLevel > 0 && (
              <span className="text-[10px] text-muted-foreground">
                Hint {hintLevel}/3 used ({hintLevel === 1 ? "−5 XP" : hintLevel === 2 ? "−10 XP" : "−15 XP"})
              </span>
            )}
          </div>
        )}

        {/* Hint Display */}
        {hintLevel >= 1 && currentProblem.hints && (
          <Card className="mb-4 border-amber-500/20 bg-amber-500/5">
            <CardContent className="p-4 space-y-3">
              {hintLevel >= 1 && (
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-amber-500 font-semibold mb-1">
                    Key Insight
                  </p>
                  <p className="text-sm text-foreground/80">{currentProblem.hints.keyInsight}</p>
                </div>
              )}
              {hintLevel >= 2 && (
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-amber-500 font-semibold mb-1">
                    First Step
                  </p>
                  <p className="text-sm text-foreground/80">{currentProblem.hints.firstStep}</p>
                </div>
              )}
              {hintLevel >= 3 && (
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-amber-500 font-semibold mb-1">
                    Full Solution
                  </p>
                  <p className="text-sm text-foreground/80">{currentProblem.hints.fullSolution}</p>
                </div>
              )}
            </CardContent>
          </Card>
        )}

        {/* Submit / Result */}
        {!showResult ? (
          <Button
            onClick={handleSubmit}
            disabled={!selectedAnswer}
            className="w-full"
            data-testid="button-submit-answer"
          >
            <Check className="w-4 h-4 mr-2" />
            Submit Answer
          </Button>
        ) : (
          <div className="space-y-3">
            {/* Result card */}
            <Card className={resultData?.correct ? "border-emerald-500/30 bg-emerald-500/5" : "border-red-500/30 bg-red-500/5"}>
              <CardContent className="p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {resultData?.correct ? (
                    <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
                      <Check className="w-5 h-5 text-emerald-400" />
                    </div>
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center">
                      <X className="w-5 h-5 text-red-400" />
                    </div>
                  )}
                  <div>
                    <p className={`text-sm font-semibold ${resultData?.correct ? "text-emerald-400" : "text-red-400"}`}>
                      {resultData?.correct ? "Correct!" : "Incorrect"}
                    </p>
                    {!resultData?.correct && (
                      <p className="text-xs text-muted-foreground">
                        Correct answer: {resultData?.correctAnswer}
                      </p>
                    )}
                  </div>
                </div>
                <div className="flex items-center gap-1 text-accent">
                  <Zap className="w-4 h-4" />
                  <span className="text-sm font-semibold">+{resultData?.xpGained} XP</span>
                </div>
              </CardContent>
            </Card>

            {/* Show solution if wrong */}
            {!resultData?.correct && resultData?.hints && (
              <Card className="border-amber-500/20 bg-amber-500/5">
                <CardContent className="p-4">
                  <p className="text-[10px] uppercase tracking-wider text-amber-500 font-semibold mb-1">Solution</p>
                  <p className="text-sm">{resultData.hints.fullSolution}</p>
                </CardContent>
              </Card>
            )}

            <Button onClick={handleNext} className="w-full" data-testid="button-next-problem">
              <RotateCw className="w-4 h-4 mr-2" />
              Next Problem
            </Button>
          </div>
        )}
      </div>
    );
  }

  return null;
}
