"use client";

import { useState, useEffect } from "react";
import { useApp } from "@/context/AppContext";
import { getProblemsByTopic } from "@/data/problems";
import type { Problem } from "@/shared/schema";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import {
  Brain,
  Lightbulb,
  Check,
  X,
  RotateCw,
  Zap,
  Timer,
  ChevronRight,
  Siren,
} from "lucide-react";

const LOGIC_SUBTOPICS = [
  { id: "cryptarithms", label: "Cryptarithms", icon: "🔐", desc: "Letter-to-digit substitution puzzles" },
  { id: "truth-liar", label: "Truth/Liar Puzzles", icon: "🎭", desc: "Deduction with truth-tellers and liars" },
  { id: "custom-operators", label: "Custom Operators", icon: "⊕", desc: "Pattern recognition with new operations" },
  { id: "proof-errors", label: "Proof Error Finding", icon: "🔍", desc: "Find the flaw in a mathematical argument" },
  { id: "logic-grids", label: "Logic Grids", icon: "🧩", desc: "Multi-constraint deduction puzzles" },
  { id: "self-referential", label: "Self-Referential", icon: "🪞", desc: "Paradox and self-reference problems" },
];

export default function LogicER() {
  const { toast } = useToast();
  const { updateTopicProgress, markProblemCompleted } = useApp();
  const [selectedSubtopic, setSelectedSubtopic] = useState<string | null>(null);
  const [currentProblem, setCurrentProblem] = useState<Problem | null>(null);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [resultData, setResultData] = useState<any>(null);
  const [hintLevel, setHintLevel] = useState(0);
  const [timer, setTimer] = useState(0);
  const [timerRunning, setTimerRunning] = useState(false);
  const [solvedCount, setSolvedCount] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (timerRunning) {
      interval = setInterval(() => setTimer((t) => t + 1), 1000);
    }
    return () => clearInterval(interval);
  }, [timerRunning]);

  const generateProblem = (_subtopic: string) => {
    const problems = getProblemsByTopic("Logic & Reasoning");
    const randomProblem = problems[Math.floor(Math.random() * problems.length)];
    setCurrentProblem(randomProblem);
    setSelectedAnswer("");
    setShowResult(false);
    setResultData(null);
    setHintLevel(0);
    setTimer(0);
    setTimerRunning(true);
  };

  const handleSubmit = () => {
    if (!currentProblem || !selectedAnswer) return;

    const correct = selectedAnswer === currentProblem.answer;
    const usedHints = hintLevel > 0;
    const xpGained = correct ? (usedHints ? 10 : 25) : -5;

    updateTopicProgress("Logic & Reasoning", correct, usedHints);
    markProblemCompleted(currentProblem.id);

    const data = {
      correct,
      correctAnswer: currentProblem.answer,
      xpGained,
      hints: currentProblem.hints,
    };

    setResultData(data);
    setShowResult(true);
    setTimerRunning(false);
    if (correct) setSolvedCount((c) => c + 1);
  };

  const formatTime = (s: number) => `${Math.floor(s / 60)}:${(s % 60).toString().padStart(2, "0")}`;

  // Subtopic selection
  if (!selectedSubtopic) {
    return (
      <div className="p-6 max-w-[900px]">
        {/* Header */}
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-xl bg-red-500/20 flex items-center justify-center">
            <Siren className="w-5 h-5 text-red-400" />
          </div>
          <div>
            <h1 className="text-xl font-bold">Logic Emergency Room</h1>
            <p className="text-sm text-muted-foreground">
              Your logic score is 0%. Time for intensive training.
            </p>
          </div>
        </div>

        {/* Alert banner */}
        <Card className="border-red-500/30 bg-red-500/5 mb-6 mt-4">
          <CardContent className="p-4 flex items-center gap-3">
            <Brain className="w-5 h-5 text-red-400 shrink-0" />
            <div className="text-sm">
              <span className="font-semibold text-red-400">Critical Weakness Detected.</span>{" "}
              <span className="text-muted-foreground">
                Logic & Reasoning problems appear in Q11-Q14 (Section A) and Q24-Q25 (Section B) — worth up to 12 points.
                Master these to push beyond Gold.
              </span>
            </div>
          </CardContent>
        </Card>

        {/* Subtopic grid */}
        <div className="grid grid-cols-2 gap-3">
          {LOGIC_SUBTOPICS.map((sub) => (
            <Card
              key={sub.id}
              className="cursor-pointer hover:scale-[1.01] transition-all border-border/50 hover:border-red-500/40 hover:bg-red-500/5"
              onClick={() => {
                setSelectedSubtopic(sub.id);
                generateProblem(sub.id);
              }}
              data-testid={`card-logic-${sub.id}`}
            >
              <CardContent className="p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{sub.icon}</span>
                  <div>
                    <p className="text-sm font-semibold">{sub.label}</p>
                    <p className="text-[10px] text-muted-foreground">{sub.desc}</p>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-muted-foreground" />
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Strategy tips */}
        <Card className="mt-6 border-primary/20 bg-primary/5">
          <CardContent className="p-4">
            <h3 className="text-sm font-semibold text-primary mb-2 flex items-center gap-2">
              <Lightbulb className="w-4 h-4" />
              SASMO Logic Strategy
            </h3>
            <ul className="text-xs text-muted-foreground space-y-1.5">
              <li>• Cryptarithms: Fix carry values first, work column-by-column from right to left</li>
              <li>• Truth/Liar: Test each scenario systematically — if Person A is truth-teller, check all statements</li>
              <li>• Custom Operators: Look for concatenation and positional patterns, not just arithmetic</li>
              <li>• Logic Grids: Eliminate impossibilities first, mark definites, then re-scan</li>
              <li>• Self-Referential: Count total statements, test each option for internal consistency</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Problem view
  if (currentProblem) {
    const subtopicInfo = LOGIC_SUBTOPICS.find((s) => s.id === selectedSubtopic);
    return (
      <div className="p-6 max-w-[800px]">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                setSelectedSubtopic(null);
                setCurrentProblem(null);
                setTimerRunning(false);
              }}
              data-testid="button-back-logic"
            >
              ← Back
            </Button>
            <Badge variant="outline" className="border-red-500/30 text-red-400">
              🧠 Logic ER
            </Badge>
            {subtopicInfo && (
              <Badge variant="outline" className="text-xs">
                {subtopicInfo.icon} {subtopicInfo.label}
              </Badge>
            )}
          </div>
          <div className="flex items-center gap-4">
            <span className="text-xs text-muted-foreground">
              Solved: <span className="text-emerald-400 font-semibold">{solvedCount}</span>
            </span>
            <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <Timer className="w-4 h-4" />
              <span className="font-mono">{formatTime(timer)}</span>
            </div>
          </div>
        </div>

        {/* Problem */}
        <Card className="mb-4 border-red-500/10">
          <CardContent className="p-6">
            {currentProblem.svgDiagram && (
              <div
                className="mb-4 flex justify-center bg-muted/30 rounded-lg p-4"
                dangerouslySetInnerHTML={{ __html: currentProblem.svgDiagram }}
              />
            )}

            <div className="text-sm leading-relaxed mb-6 whitespace-pre-wrap" data-testid="text-logic-question">
              {currentProblem.question}
            </div>

            {currentProblem.options && currentProblem.options.length > 0 ? (
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
                          ? "border-emerald-500 bg-emerald-500/10"
                          : isWrong
                          ? "border-red-500 bg-red-500/10"
                          : isSelected
                          ? "border-primary bg-primary/10"
                          : "border-border hover:border-primary/40"
                      }`}
                      data-testid={`button-logic-option-${letter}`}
                    >
                      <div className="flex items-center gap-3">
                        <span className={`w-6 h-6 rounded-full border flex items-center justify-center text-xs font-semibold ${
                          isCorrect ? "border-emerald-500 bg-emerald-500/20" :
                          isWrong ? "border-red-500 bg-red-500/20" :
                          isSelected ? "border-primary bg-primary/20" : "border-border"
                        }`}>
                          {isCorrect ? <Check className="w-3.5 h-3.5 text-emerald-400" /> :
                           isWrong ? <X className="w-3.5 h-3.5 text-red-400" /> :
                           letter}
                        </span>
                        <span>{option}</span>
                      </div>
                    </button>
                  );
                })}
              </div>
            ) : (
              !showResult && (
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
                  placeholder="Enter your answer"
                  className="w-full p-3 rounded-lg border border-border bg-muted/30 text-sm focus:outline-none focus:border-primary"
                  data-testid="input-logic-answer"
                />
              )
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
              data-testid="button-logic-hint"
            >
              <Lightbulb className="w-3.5 h-3.5 mr-1.5 text-amber-400" />
              {hintLevel === 0 ? "Key Insight" : hintLevel === 1 ? "First Step" : hintLevel === 2 ? "Full Solution" : "All Hints Used"}
            </Button>
          </div>
        )}

        {hintLevel >= 1 && currentProblem.hints && (
          <Card className="mb-4 border-amber-500/20 bg-amber-500/5">
            <CardContent className="p-4 space-y-3">
              {hintLevel >= 1 && (
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-amber-500 font-semibold mb-1">Key Insight</p>
                  <p className="text-sm text-foreground/80">{currentProblem.hints.keyInsight}</p>
                </div>
              )}
              {hintLevel >= 2 && (
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-amber-500 font-semibold mb-1">First Step</p>
                  <p className="text-sm text-foreground/80">{currentProblem.hints.firstStep}</p>
                </div>
              )}
              {hintLevel >= 3 && (
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-amber-500 font-semibold mb-1">Full Solution</p>
                  <p className="text-sm text-foreground/80">{currentProblem.hints.fullSolution}</p>
                </div>
              )}
            </CardContent>
          </Card>
        )}

        {/* Actions */}
        {!showResult ? (
          <Button
            onClick={handleSubmit}
            disabled={!selectedAnswer}
            className="w-full"
            data-testid="button-submit-logic"
          >
            <Check className="w-4 h-4 mr-2" />
            Submit
          </Button>
        ) : (
          <div className="space-y-3">
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
                      {resultData?.correct ? "Correct!" : "Not quite right"}
                    </p>
                    {!resultData?.correct && (
                      <p className="text-xs text-muted-foreground">Answer: {resultData?.correctAnswer}</p>
                    )}
                  </div>
                </div>
                <div className="flex items-center gap-1 text-accent">
                  <Zap className="w-4 h-4" />
                  <span className="text-sm font-semibold">+{resultData?.xpGained} XP</span>
                </div>
              </CardContent>
            </Card>

            {!resultData?.correct && resultData?.hints && (
              <Card className="border-amber-500/20 bg-amber-500/5">
                <CardContent className="p-4">
                  <p className="text-[10px] uppercase tracking-wider text-amber-500 font-semibold mb-1">Full Solution</p>
                  <p className="text-sm">{resultData.hints.fullSolution}</p>
                </CardContent>
              </Card>
            )}

            <Button onClick={() => generateProblem(selectedSubtopic!)} className="w-full" data-testid="button-next-logic">
              <RotateCw className="w-4 h-4 mr-2" />
              Next Challenge
            </Button>
          </div>
        )}
      </div>
    );
  }

  return null;
}
