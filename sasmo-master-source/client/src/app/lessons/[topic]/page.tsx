"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { useState, useCallback } from "react";
import { getLessonByTopic } from "@/data/lessons";
import type { LessonSection, WorkedExample } from "@/data/lessons";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  BookOpen,
  Lightbulb,
  AlertTriangle,
  Target,
  Play,
  ChevronRight,
  ChevronLeft,
  Sparkles,
  Zap,
  CheckCircle2,
} from "lucide-react";
import { useApp } from "@/context/AppContext";

// ---- helpers ----

function SectionIcon({ type }: { type: string }) {
  switch (type) {
    case "concept": return <BookOpen className="w-4 h-4 text-blue-400" />;
    case "rule": return <Zap className="w-4 h-4 text-purple-400" />;
    case "example": return <Sparkles className="w-4 h-4 text-emerald-400" />;
    case "interactive": return <Play className="w-4 h-4 text-cyan-400" />;
    case "tip": return <Lightbulb className="w-4 h-4 text-amber-400" />;
    case "common-mistake": return <AlertTriangle className="w-4 h-4 text-red-400" />;
    default: return <BookOpen className="w-4 h-4" />;
  }
}

function sectionBorderColor(type: string): string {
  switch (type) {
    case "concept": return "border-blue-500/20";
    case "rule": return "border-purple-500/20";
    case "example": return "border-emerald-500/20";
    case "interactive": return "border-cyan-500/20";
    case "tip": return "border-amber-500/20";
    case "common-mistake": return "border-red-500/20";
    default: return "border-border";
  }
}

function sectionBgColor(type: string): string {
  switch (type) {
    case "concept": return "bg-blue-500/5";
    case "rule": return "bg-purple-500/5";
    case "example": return "bg-emerald-500/5";
    case "interactive": return "bg-cyan-500/5";
    case "tip": return "bg-amber-500/5";
    case "common-mistake": return "bg-red-500/5";
    default: return "";
  }
}

// ---- page types ----

interface LessonPage {
  kind: "section";
  section: LessonSection;
  pageLabel: string;
}

interface WorkedExamplePage {
  kind: "worked-example";
  example: WorkedExample;
  exampleIndex: number;
  pageLabel: string;
}

interface TipsPage {
  kind: "tips";
  sasmoTips: string[];
  commonMistakes: string[];
  pageLabel: string;
}

interface FormulasPage {
  kind: "formulas";
  keyFormulas: string[];
  pageLabel: string;
}

interface PracticeCTAPage {
  kind: "practice-cta";
  topic: string;
  pageLabel: string;
}

type Page = LessonPage | WorkedExamplePage | TipsPage | FormulasPage | PracticeCTAPage;

// ---- worked example with step reveal ----

function WorkedExampleCard({ example, exampleIndex }: { example: WorkedExample; exampleIndex: number }) {
  // Split the solution HTML into steps by looking for <p><strong>Step markers
  const solutionHtml = example.solution;
  
  // We split by step markers — each <p><strong>Step is a boundary
  const stepParts = solutionHtml.split(/(?=<p><strong>Step\s)/);
  
  // If we couldn't split into steps, show everything at once
  const hasSteps = stepParts.length > 1;
  
  // The first part is everything before Step 1 (like intro text), rest are steps
  const introPart = hasSteps ? stepParts[0] : "";
  const steps = hasSteps ? stepParts.slice(1) : [solutionHtml];
  
  const [revealedSteps, setRevealedSteps] = useState(1);
  const totalSteps = steps.length;
  
  const revealNext = useCallback(() => {
    setRevealedSteps(prev => Math.min(prev + 1, totalSteps));
  }, [totalSteps]);

  return (
    <Card className="border-emerald-500/20 bg-emerald-500/5">
      <CardContent className="p-5">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-emerald-400 font-bold text-lg">#{exampleIndex + 1}</span>
          <h3 className="text-sm font-semibold">{example.title}</h3>
        </div>

        {/* Problem */}
        <div className="mb-4 p-3 bg-muted/30 rounded-lg">
          <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold mb-1">Problem</p>
          <p className="text-sm">{example.problem}</p>
        </div>

        {/* Solution — step by step */}
        <div className="p-3 bg-emerald-500/5 rounded-lg border border-emerald-500/20">
          <p className="text-[10px] uppercase tracking-wider text-emerald-500 font-semibold mb-2">Solution</p>
          
          {/* Intro part (if any) */}
          {introPart.trim() && (
            <div className="text-sm leading-relaxed mb-2" dangerouslySetInnerHTML={{ __html: introPart }} />
          )}
          
          {/* Revealed steps */}
          {steps.slice(0, revealedSteps).map((step, i) => (
            <div
              key={i}
              className="text-sm leading-relaxed animate-in fade-in slide-in-from-bottom-2 duration-300"
              dangerouslySetInnerHTML={{ __html: step }}
            />
          ))}

          {/* Reveal next step button */}
          {hasSteps && revealedSteps < totalSteps && (
            <button
              onClick={revealNext}
              className="mt-3 flex items-center gap-2 px-4 py-2 bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-400 rounded-lg text-sm font-medium transition-colors"
            >
              <ChevronRight className="w-4 h-4" />
              Show Next Step ({revealedSteps}/{totalSteps})
            </button>
          )}

          {hasSteps && revealedSteps >= totalSteps && (
            <div className="mt-3 flex items-center gap-2 text-emerald-400 text-xs">
              <CheckCircle2 className="w-4 h-4" />
              All steps revealed
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

// ---- progress bar ----

function ProgressBar({ current, total }: { current: number; total: number }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <div className="flex-1 h-1.5 bg-muted/50 rounded-full overflow-hidden">
        <div
          className="h-full bg-primary rounded-full transition-all duration-500"
          style={{ width: `${((current + 1) / total) * 100}%` }}
        />
      </div>
      <span className="text-xs text-muted-foreground font-medium whitespace-nowrap">
        {current + 1} / {total}
      </span>
    </div>
  );
}

// ---- main page component ----

export default function LessonDetailPage() {
  const params = useParams<{ topic: string }>();
  const lesson = getLessonByTopic(params.topic || "");
  const { session } = useApp();
  const [currentPage, setCurrentPage] = useState(0);

  if (!lesson) {
    return (
      <div className="p-6">
        <Link href="/lessons">
          <Button variant="ghost" size="sm"><ArrowLeft className="w-4 h-4 mr-2" /> Back to Lessons</Button>
        </Link>
        <p className="text-muted-foreground mt-4">Lesson not found.</p>
      </div>
    );
  }

  // Build pages array
  const pages: Page[] = [];

  // 1) Each section is its own page
  lesson.sections.forEach((section, i) => {
    pages.push({
      kind: "section",
      section,
      pageLabel: `Section ${i + 1}`,
    });
  });

  // 2) Key formulas page (if any)
  if (lesson.keyFormulas.length > 0) {
    pages.push({
      kind: "formulas",
      keyFormulas: lesson.keyFormulas,
      pageLabel: "Key Formulas",
    });
  }

  // 3) Each worked example is its own page
  lesson.workedExamples.forEach((example, i) => {
    pages.push({
      kind: "worked-example",
      example,
      exampleIndex: i,
      pageLabel: `Example ${i + 1}`,
    });
  });

  // 4) SASMO Tips + Common Mistakes combined page
  if (lesson.sasmoTips.length > 0 || lesson.commonMistakes.length > 0) {
    pages.push({
      kind: "tips",
      sasmoTips: lesson.sasmoTips,
      commonMistakes: lesson.commonMistakes,
      pageLabel: "Tips & Mistakes",
    });
  }

  // 5) Practice CTA
  pages.push({
    kind: "practice-cta",
    topic: lesson.topic,
    pageLabel: "Practice",
  });

  const totalPages = pages.length;
  const page = pages[currentPage];
  const progress = session.topicProgress.find((p) => p.topic === lesson.topic);

  const goNext = () => setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1));
  const goPrev = () => setCurrentPage((prev) => Math.max(prev - 1, 0));

  return (
    <div className="p-6 max-w-[900px]">
      {/* Back nav */}
      <Link href="/lessons">
        <Button variant="ghost" size="sm" className="mb-4">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Lessons
        </Button>
      </Link>

      {/* Header */}
      <div className={`rounded-xl bg-gradient-to-r ${lesson.color} p-6 mb-4 border`}>
        <div className="flex items-center gap-4">
          <span className="text-4xl">{lesson.iconEmoji}</span>
          <div className="flex-1">
            <h1 className="text-xl font-bold">{lesson.title}</h1>
            <p className="text-sm text-muted-foreground mt-1">{lesson.description}</p>
            <div className="flex items-center gap-3 mt-3">
              <Badge variant="outline" className="text-xs">
                {lesson.examFrequency}
              </Badge>
              {progress && (
                <Badge variant="outline" className="text-xs">
                  {progress.mastery}% mastery
                </Badge>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Progress bar */}
      <ProgressBar current={currentPage} total={totalPages} />

      {/* Page content */}
      <div className="min-h-[300px]">
        {page.kind === "section" && (
          <Card className={`${sectionBorderColor(page.section.type)} ${sectionBgColor(page.section.type)}`}>
            <CardContent className="p-5">
              <div className="flex items-center gap-2 mb-3">
                <SectionIcon type={page.section.type} />
                <h3 className="text-sm font-semibold">{page.section.title}</h3>
                <Badge variant="outline" className="text-[9px] ml-auto capitalize">
                  {page.section.type}
                </Badge>
              </div>
              <div
                className="text-sm leading-relaxed text-foreground/85 lesson-content"
                dangerouslySetInnerHTML={{ __html: page.section.content }}
              />
              {page.section.svgDiagram && (
                <div
                  className="mt-4 flex justify-center bg-muted/20 rounded-lg p-4"
                  dangerouslySetInnerHTML={{ __html: page.section.svgDiagram }}
                />
              )}
            </CardContent>
          </Card>
        )}

        {page.kind === "formulas" && (
          <Card className="border-primary/20 bg-primary/5">
            <CardContent className="p-5">
              <h3 className="text-sm font-semibold text-primary mb-3 flex items-center gap-2">
                <Zap className="w-4 h-4" />
                Key Formulas
              </h3>
              <div className="grid grid-cols-1 gap-2">
                {page.keyFormulas.map((formula, i) => (
                  <div key={i} className="text-sm text-foreground/80 bg-primary/5 rounded-lg px-3 py-2 font-mono text-[13px]">
                    {formula}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {page.kind === "worked-example" && (
          <WorkedExampleCard example={page.example} exampleIndex={page.exampleIndex} />
        )}

        {page.kind === "tips" && (
          <div className="space-y-4">
            {page.sasmoTips.length > 0 && (
              <Card className="border-amber-500/20 bg-amber-500/5">
                <CardContent className="p-4">
                  <h3 className="text-sm font-semibold text-amber-400 mb-3 flex items-center gap-2">
                    <Lightbulb className="w-4 h-4" />
                    SASMO Tips
                  </h3>
                  <ul className="space-y-2">
                    {page.sasmoTips.map((tip, i) => (
                      <li key={i} className="text-sm text-foreground/80 flex gap-2">
                        <span className="text-amber-400 shrink-0">•</span>
                        {tip}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}

            {page.commonMistakes.length > 0 && (
              <Card className="border-red-500/20 bg-red-500/5">
                <CardContent className="p-4">
                  <h3 className="text-sm font-semibold text-red-400 mb-3 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4" />
                    Common Mistakes
                  </h3>
                  <ul className="space-y-2">
                    {page.commonMistakes.map((mistake, i) => (
                      <li key={i} className="text-sm text-foreground/80 flex gap-2">
                        <span className="text-red-400 shrink-0">•</span>
                        {mistake}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}
          </div>
        )}

        {page.kind === "practice-cta" && (
          <div className="flex flex-col items-center justify-center py-12">
            <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center mb-4">
              <Target className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-lg font-bold mb-2">Ready to Practice?</h2>
            <p className="text-sm text-muted-foreground mb-6 text-center max-w-md">
              You've completed the lesson for {page.topic}. Time to test your skills with SASMO-level problems.
            </p>
            <Link href={`/practice?topic=${encodeURIComponent(page.topic)}`}>
              <Button className="px-6">
                <Target className="w-4 h-4 mr-2" />
                Start Practice — 10 Problems
              </Button>
            </Link>
          </div>
        )}
      </div>

      {/* Navigation buttons */}
      <div className="flex items-center justify-between mt-6 pt-4 border-t border-border/50">
        <Button
          variant="outline"
          size="sm"
          onClick={goPrev}
          disabled={currentPage === 0}
          className="gap-2"
        >
          <ChevronLeft className="w-4 h-4" />
          Previous
        </Button>

        <span className="text-xs text-muted-foreground">
          {page.pageLabel}
        </span>

        <Button
          size="sm"
          onClick={goNext}
          disabled={currentPage === totalPages - 1}
          className="gap-2"
        >
          Next
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}
