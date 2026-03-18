"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { getLessonByTopic } from "@/data/lessons";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  ArrowLeft,
  BookOpen,
  Lightbulb,
  AlertTriangle,
  Target,
  Play,
  ChevronRight,
  Sparkles,
  Zap,
} from "lucide-react";
import { useApp } from "@/context/AppContext";

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

export default function LessonDetailPage() {
  const params = useParams<{ topic: string }>();
  const lesson = getLessonByTopic(params.topic || "");
  const { session } = useApp();

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

  const progress = session.topicProgress.find((p) => p.topic === lesson.topic);

  return (
    <div className="p-6 max-w-[900px]">
      {/* Back nav */}
      <Link href="/lessons">
        <Button variant="ghost" size="sm" className="mb-4">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Lessons
        </Button>
      </Link>

      {/* Header */}
      <div className={`rounded-xl bg-gradient-to-r ${lesson.color} p-6 mb-6 border`}>
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

      {/* Key Formulas */}
      {lesson.keyFormulas.length > 0 && (
        <Card className="mb-6 border-primary/20 bg-primary/5">
          <CardContent className="p-4">
            <h3 className="text-sm font-semibold text-primary mb-3 flex items-center gap-2">
              <Zap className="w-4 h-4" />
              Key Formulas
            </h3>
            <div className="grid grid-cols-1 gap-2">
              {lesson.keyFormulas.map((formula, i) => (
                <div key={i} className="text-sm text-foreground/80 bg-primary/5 rounded-lg px-3 py-2 font-mono text-[13px]">
                  {formula}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Lesson Sections */}
      <div className="space-y-4 mb-8">
        {lesson.sections.map((section, i) => (
          <Card key={i} className={`${sectionBorderColor(section.type)} ${sectionBgColor(section.type)}`}>
            <CardContent className="p-5">
              <div className="flex items-center gap-2 mb-3">
                <SectionIcon type={section.type} />
                <h3 className="text-sm font-semibold">{section.title}</h3>
                <Badge variant="outline" className="text-[9px] ml-auto capitalize">
                  {section.type}
                </Badge>
              </div>
              <div
                className="text-sm leading-relaxed text-foreground/85 lesson-content"
                dangerouslySetInnerHTML={{ __html: section.content }}
              />
              {section.svgDiagram && (
                <div
                  className="mt-4 flex justify-center bg-muted/20 rounded-lg p-4"
                  dangerouslySetInnerHTML={{ __html: section.svgDiagram }}
                />
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Worked Examples */}
      {lesson.workedExamples.length > 0 && (
        <div className="mb-8">
          <h2 className="text-sm font-semibold mb-3 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-emerald-400" />
            Worked Examples
          </h2>
          <Accordion type="multiple" className="space-y-2">
            {lesson.workedExamples.map((example, i) => (
              <AccordionItem key={i} value={`example-${i}`} className="border rounded-lg overflow-hidden">
                <AccordionTrigger className="px-4 py-3 text-sm font-medium hover:no-underline">
                  <div className="flex items-center gap-2 text-left">
                    <span className="text-emerald-400 font-bold">#{i + 1}</span>
                    {example.title}
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4">
                  <div className="mb-3 p-3 bg-muted/30 rounded-lg">
                    <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold mb-1">Problem</p>
                    <p className="text-sm">{example.problem}</p>
                  </div>
                  <div className="p-3 bg-emerald-500/5 rounded-lg border border-emerald-500/20">
                    <p className="text-[10px] uppercase tracking-wider text-emerald-500 font-semibold mb-1">Solution</p>
                    <div className="text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: example.solution }} />
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      )}

      {/* SASMO Tips */}
      {lesson.sasmoTips.length > 0 && (
        <Card className="mb-6 border-amber-500/20 bg-amber-500/5">
          <CardContent className="p-4">
            <h3 className="text-sm font-semibold text-amber-400 mb-3 flex items-center gap-2">
              <Lightbulb className="w-4 h-4" />
              SASMO Tips
            </h3>
            <ul className="space-y-2">
              {lesson.sasmoTips.map((tip, i) => (
                <li key={i} className="text-sm text-foreground/80 flex gap-2">
                  <span className="text-amber-400 shrink-0">•</span>
                  {tip}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}

      {/* Common Mistakes */}
      {lesson.commonMistakes.length > 0 && (
        <Card className="mb-6 border-red-500/20 bg-red-500/5">
          <CardContent className="p-4">
            <h3 className="text-sm font-semibold text-red-400 mb-3 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4" />
              Common Mistakes
            </h3>
            <ul className="space-y-2">
              {lesson.commonMistakes.map((mistake, i) => (
                <li key={i} className="text-sm text-foreground/80 flex gap-2">
                  <span className="text-red-400 shrink-0">•</span>
                  {mistake}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}

      {/* Video Recommendations */}
      {lesson.videos.length > 0 && (
        <div className="mb-8">
          <h2 className="text-sm font-semibold mb-3 flex items-center gap-2">
            <Play className="w-4 h-4 text-red-400" />
            Recommended Videos
          </h2>
          <div className="grid grid-cols-1 gap-3">
            {lesson.videos.map((video, i) => (
              <a
                key={i}
                href={video.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Card className="cursor-pointer hover:scale-[1.005] transition-all border-border/50 hover:border-red-500/30">
                  <CardContent className="p-4 flex items-center gap-4">
                    <div className="w-16 h-12 rounded-lg bg-gradient-to-br from-red-500/30 to-red-600/20 flex items-center justify-center shrink-0">
                      <Play className="w-6 h-6 text-red-400" fill="currentColor" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold truncate">{video.title}</p>
                      <p className="text-[11px] text-muted-foreground">{video.channel} • {video.views} views</p>
                      <p className="text-[11px] text-muted-foreground mt-0.5 truncate">{video.description}</p>
                    </div>
                    <ChevronRight className="w-4 h-4 text-muted-foreground shrink-0" />
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Practice CTA */}
      <Link href={`/practice?topic=${encodeURIComponent(lesson.topic)}`}>
        <Card className="cursor-pointer hover:scale-[1.005] transition-all border-primary/30 bg-primary/5">
          <CardContent className="p-5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                <Target className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm font-semibold">Practice {lesson.topic}</p>
                <p className="text-[11px] text-muted-foreground">10 SASMO-level problems with hints</p>
              </div>
            </div>
            <ArrowLeft className="w-4 h-4 text-primary rotate-180" />
          </CardContent>
        </Card>
      </Link>
    </div>
  );
}
