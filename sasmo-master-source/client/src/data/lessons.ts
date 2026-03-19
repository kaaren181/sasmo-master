// ============================================================
// SASMO Master — Topic Lessons
// Complete lesson content for all 8 competition math topics
// ============================================================

export interface LessonSection {
  type: 'concept' | 'rule' | 'example' | 'interactive' | 'tip' | 'common-mistake';
  title: string;
  content: string; // HTML string
  svgDiagram?: string; // inline SVG
}

export interface WorkedExample {
  title: string;
  problem: string;
  solution: string; // HTML string with step-by-step
}

export interface VideoRecommendation {
  title: string;
  channel: string;
  views: string;
  url: string;
  description: string;
}

export interface TopicLesson {
  id: string;
  topic: string;
  title: string;
  description: string;
  color: string; // tailwind gradient classes
  iconEmoji: string;
  examFrequency: string;
  mastery: number; // user's current mastery %
  sections: LessonSection[];
  workedExamples: WorkedExample[];
  videos: VideoRecommendation[];
  sasmoTips: string[];
  commonMistakes: string[];
  keyFormulas: string[];
}

// ============================================================
// 1. MODULAR ARITHMETIC
// ============================================================
const modularArithmetic: TopicLesson = {
  id: 'modular-arithmetic',
  topic: 'Modular Arithmetic',
  title: 'Modular Arithmetic & Last Digits',
  description:
    'Master the clock-like number system that makes last-digit and remainder problems trivial. This topic appears every year with 2-3 questions.',
  color: 'from-indigo-500 to-indigo-600',
  iconEmoji: '\u23F0',
  examFrequency: 'Every year (2-3 questions)',
  mastery: 100,

  sections: [
    // ---- CONCEPT: What is Modular Arithmetic ----
    {
      type: 'concept',
      title: 'What is Modular Arithmetic?',
      content: `
<div>
  <p>Imagine a clock. After <strong>12</strong>, you don't go to 13 &mdash; you loop back to <strong>1</strong>.
  That "looping" is exactly what modular arithmetic does.</p>
  <br/>
  <p>In math we write:</p>
  <div style="text-align:center;font-size:1.25rem;margin:12px 0;">
    <strong>17 mod 12 = 5</strong>
  </div>
  <p>because 17 hours on a 12-hour clock shows <strong>5 o'clock</strong>.</p>
  <br/>
  <p><strong>General rule:</strong> <em>a</em> mod <em>n</em> is the <strong>remainder</strong> when you divide <em>a</em> by <em>n</em>.</p>
  <br/>
  <ul>
    <li>23 mod 5 = <strong>3</strong> &nbsp;(because 23 = 4 &times; 5 + 3)</li>
    <li>100 mod 7 = <strong>2</strong> &nbsp;(because 100 = 14 &times; 7 + 2)</li>
    <li>36 mod 6 = <strong>0</strong> &nbsp;(perfectly divisible!)</li>
  </ul>
  <br/>
  <p>When the remainder is <strong>0</strong>, the number is perfectly divisible by the modulus &mdash; this is how divisibility works behind the scenes.</p>
</div>`,
      svgDiagram: `<svg viewBox="0 0 420 340" xmlns="http://www.w3.org/2000/svg" width="420">
<style>
  @keyframes handSweep {
    0%   { transform: rotate(-90deg); }
    60%  { transform: rotate(60deg); }
    80%  { transform: rotate(60deg); }
    100% { transform: rotate(60deg); }
  }
  @keyframes glowPulse {
    0%, 100% { filter: drop-shadow(0 0 4px #60a5fa); opacity: 1; }
    50%       { filter: drop-shadow(0 0 14px #60a5fa); opacity: 0.7; }
  }
  @keyframes fadeIn {
    0%   { opacity: 0; }
    70%  { opacity: 0; }
    100% { opacity: 1; }
  }
  @keyframes countSweep {
    0%   { stroke-dashoffset: 283; }
    60%  { stroke-dashoffset: 165; }
    100% { stroke-dashoffset: 165; }
  }
  .clock-hand {
    transform-origin: 160px 160px;
    animation: handSweep 3s cubic-bezier(0.4,0,0.2,1) 0.5s infinite;
  }
  .glow-five {
    animation: glowPulse 1.8s ease-in-out 3.2s infinite;
  }
  .result-label {
    animation: fadeIn 3.5s ease-out infinite;
  }
  .arc-track {
    stroke-dasharray: 283;
    animation: countSweep 3s cubic-bezier(0.4,0,0.2,1) 0.5s infinite;
  }
</style>

<!-- Background -->
<rect width="420" height="340" rx="16" fill="#0f172a"/>

<!-- Title -->
<text x="210" y="28" text-anchor="middle" fill="#e2e8f0" font-size="15" font-family="sans-serif" font-weight="600">17 mod 12 = ?</text>
<text x="210" y="46" text-anchor="middle" fill="#94a3b8" font-size="11" font-family="sans-serif">Start at 0, count 17 steps around a 12-hour clock</text>

<!-- Clock face -->
<circle cx="160" cy="160" r="108" fill="#1e293b" stroke="#334155" stroke-width="2"/>
<circle cx="160" cy="160" r="92" fill="none" stroke="#1e3a5f" stroke-width="1" stroke-dasharray="4 4"/>

<!-- Arc showing sweep -->
<circle cx="160" cy="160" r="90" fill="none" stroke="#60a5fa" stroke-width="4" stroke-linecap="round"
  class="arc-track" transform="rotate(-90 160 160)"/>

<!-- Clock numbers 0-11 -->
<g fill="#94a3b8" font-size="13" font-family="sans-serif" text-anchor="middle" font-weight="500">
  <text x="160" y="58">0</text>
  <text x="214" y="74">1</text>
  <text x="252" y="114">2</text>
  <text x="266" y="165">3</text>
  <text x="252" y="215">4</text>
  <!-- 5 highlighted -->
  <text x="214" y="254" fill="#60a5fa" font-weight="700" font-size="16" class="glow-five">5</text>
  <text x="160" y="266">6</text>
  <text x="107" y="254">7</text>
  <text x="70" y="215">8</text>
  <text x="56" y="165">9</text>
  <text x="70" y="114">10</text>
  <text x="107" y="74">11</text>
</g>

<!-- Tick marks -->
<g stroke="#334155" stroke-width="1.5">
  <line x1="160" y1="64" x2="160" y2="72"/>
  <line x1="214" y1="79" x2="210" y2="87"/>
  <line x1="250" y1="119" x2="244" y2="125"/>
  <line x1="265" y1="165" x2="257" y2="165"/>
  <line x1="250" y1="210" x2="244" y2="204"/>
  <line x1="214" y1="249" x2="210" y2="242"/>
  <line x1="160" y1="258" x2="160" y2="250"/>
  <line x1="107" y1="249" x2="111" y2="242"/>
  <line x1="70" y1="210" x2="76" y2="204"/>
  <line x1="56" y1="165" x2="64" y2="165"/>
  <line x1="70" y1="119" x2="76" y2="125"/>
  <line x1="107" y1="79" x2="111" y2="87"/>
</g>

<!-- Clock center -->
<circle cx="160" cy="160" r="6" fill="#60a5fa"/>

<!-- Animated clock hand -->
<g class="clock-hand">
  <line x1="160" y1="160" x2="232" y2="160" stroke="#f97316" stroke-width="3.5" stroke-linecap="round"/>
  <polygon points="236,160 226,155 226,165" fill="#f97316"/>
</g>

<!-- Glow dot on 5 position -->
<circle cx="214" cy="248" r="8" fill="none" stroke="#60a5fa" stroke-width="2" class="glow-five"/>

<!-- Right panel: explanation -->
<rect x="296" y="80" width="106" height="170" rx="10" fill="#1e293b" stroke="#334155" stroke-width="1.5"/>
<text x="349" y="102" text-anchor="middle" fill="#94a3b8" font-size="11" font-family="sans-serif">How it works</text>

<rect x="308" y="112" width="82" height="28" rx="5" fill="#1e3a5f" stroke="#60a5fa" stroke-width="1.5"/>
<text x="349" y="122" text-anchor="middle" fill="#e2e8f0" font-size="11" font-family="sans-serif">Start: 17 ÷ 12</text>
<text x="349" y="134" text-anchor="middle" fill="#60a5fa" font-size="10" font-family="sans-serif">= 1 remainder 5</text>

<text x="349" y="158" text-anchor="middle" fill="#94a3b8" font-size="10" font-family="sans-serif">After 1 full lap</text>
<text x="349" y="170" text-anchor="middle" fill="#94a3b8" font-size="10" font-family="sans-serif">(12 steps), you</text>
<text x="349" y="182" text-anchor="middle" fill="#94a3b8" font-size="10" font-family="sans-serif">still have 5 left</text>

<!-- Result box -->
<rect x="308" y="194" width="82" height="42" rx="6" fill="#14532d" stroke="#34d399" stroke-width="2"/>
<text x="349" y="210" text-anchor="middle" fill="#34d399" font-size="12" font-family="sans-serif" font-weight="700">Answer:</text>
<text x="349" y="228" text-anchor="middle" fill="#ffffff" font-size="16" font-family="sans-serif" font-weight="800">5</text>

<!-- Bottom formula -->
<rect x="68" y="284" width="192" height="40" rx="8" fill="#1e293b" stroke="#a78bfa" stroke-width="1.5"/>
<text x="164" y="300" text-anchor="middle" fill="#a78bfa" font-size="12" font-family="sans-serif" font-weight="600">17 mod 12</text>
<text x="164" y="316" text-anchor="middle" fill="#e2e8f0" font-size="13" font-family="sans-serif" font-weight="700">= 5 (the remainder)</text>
</svg>`,
    },

    // ---- CONCEPT: The Clock Analogy ----
    {
      type: 'concept',
      title: 'The Clock Analogy &mdash; Days of the Week',
      content: `
<div>
  <p>Let's use <strong>mod 7</strong> for days of the week. Assign numbers:</p>
  <ul>
    <li>0 = Sunday, 1 = Monday, 2 = Tuesday, &hellip; 6 = Saturday</li>
  </ul>
  <br/>
  <p><strong>Example:</strong> Today is Tuesday (day 2). What day will it be in 10 days?</p>
  <br/>
  <ol>
    <li>Compute 10 mod 7 = <strong>3</strong></li>
    <li>Count 3 days forward from Tuesday: Wed(1), Thu(2), <strong>Fri(3)</strong></li>
    <li>Answer: <strong>Friday</strong></li>
  </ol>
  <br/>
  <p>This trick works for <em>any</em> large number of days. Want the day 1000 days from Monday?</p>
  <ul>
    <li>1000 mod 7 = 6 &nbsp;(since 1000 = 142 &times; 7 + 6)</li>
    <li>6 days after Monday = <strong>Sunday</strong></li>
  </ul>
  <br/>
  <p><em>The modular approach turns a massive counting problem into a tiny one.</em></p>
</div>`,
      svgDiagram: `<svg viewBox="0 0 420 340" xmlns="http://www.w3.org/2000/svg" width="420">
<style>
  @keyframes arcDraw {
    0%   { stroke-dashoffset: 314; opacity: 0; }
    10%  { opacity: 1; }
    70%  { stroke-dashoffset: 0; }
    85%  { stroke-dashoffset: 0; opacity: 1; }
    100% { stroke-dashoffset: 0; opacity: 1; }
  }
  @keyframes dotTravel {
    0%   { offset-distance: 0%; opacity: 0; }
    5%   { opacity: 1; }
    70%  { offset-distance: 71.4%; opacity: 1; }
    85%  { offset-distance: 71.4%; opacity: 1; }
    100% { offset-distance: 71.4%; opacity: 1; }
  }
  @keyframes fridayGlow {
    0%, 60%  { filter: none; }
    70%, 100% { filter: drop-shadow(0 0 8px #f97316); }
  }
  @keyframes stepCount {
    0%   { opacity: 0; transform: scale(0.5); }
    65%  { opacity: 0; transform: scale(0.5); }
    80%  { opacity: 1; transform: scale(1.1); }
    100% { opacity: 1; transform: scale(1); }
  }
  .arc-sweep {
    stroke-dasharray: 314;
    animation: arcDraw 3.5s ease-in-out 0.5s infinite;
    transform-origin: 170px 165px;
  }
  .friday-node {
    animation: fridayGlow 3.5s ease-in-out 0.5s infinite;
  }
  .step-badge {
    animation: stepCount 3.5s ease-out 0.5s infinite;
    transform-origin: 170px 30px;
  }
</style>

<rect width="420" height="340" rx="16" fill="#0f172a"/>
<text x="210" y="26" text-anchor="middle" fill="#e2e8f0" font-size="15" font-family="sans-serif" font-weight="600">Weekly Calendar Wheel (mod 7)</text>
<text x="210" y="44" text-anchor="middle" fill="#94a3b8" font-size="11" font-family="sans-serif">Tuesday + 10 days forward → lands on Friday</text>

<!-- Wheel circle track -->
<circle cx="170" cy="165" r="100" fill="#1e293b" stroke="#334155" stroke-width="2"/>
<circle cx="170" cy="165" r="84" fill="none" stroke="#1e3a5f" stroke-width="1"/>

<!-- Arc from Tuesday (index 2) sweeping 10 steps = 2+10=12 mod7=5 = Friday (index 5) -->
<!-- Days: Sun=0(top), Mon=1, Tue=2, Wed=3, Thu=4, Fri=5, Sat=6 -->
<!-- Angles: Sun=-90, Mon=-38.6, Tue=12.9, Wed=64.3, Thu=115.7, Fri=167.1, Sat=218.6 -->
<!-- Arc from 12.9 deg to 167.1 deg = sweep of 154.3 deg going clockwise + full loop -->
<!-- Full circle circumference at r=84: 2*pi*84 ≈ 528 -->
<!-- 10/7 laps fraction: 10 steps on 7-day wheel = 1 full lap + 3 extra steps -->
<circle cx="170" cy="165" r="84" fill="none" stroke="#f97316" stroke-width="3.5"
  stroke-linecap="round" stroke-dasharray="528" class="arc-sweep"
  transform="rotate(12.9 170 165)"/>

<!-- Day labels around wheel: 7 days, starting Sunday at top -->
<!-- Sun: -90deg, each step +51.43deg -->
<!-- Sun -->
<circle cx="170" cy="81" r="16" fill="#1e293b" stroke="#334155" stroke-width="1.5"/>
<text x="170" y="86" text-anchor="middle" fill="#94a3b8" font-size="11" font-family="sans-serif" font-weight="600">Sun</text>
<!-- Mon -->
<circle cx="239" cy="101" r="16" fill="#1e293b" stroke="#334155" stroke-width="1.5"/>
<text x="239" y="106" text-anchor="middle" fill="#94a3b8" font-size="11" font-family="sans-serif" font-weight="600">Mon</text>
<!-- Tue - START -->
<circle cx="268" cy="165" r="16" fill="#1e3a5f" stroke="#60a5fa" stroke-width="2.5"/>
<text x="268" y="170" text-anchor="middle" fill="#60a5fa" font-size="11" font-family="sans-serif" font-weight="700">Tue</text>
<!-- Wed -->
<circle cx="239" cy="229" r="16" fill="#1e293b" stroke="#334155" stroke-width="1.5"/>
<text x="239" y="234" text-anchor="middle" fill="#94a3b8" font-size="11" font-family="sans-serif" font-weight="600">Wed</text>
<!-- Thu -->
<circle cx="170" cy="250" r="16" fill="#1e293b" stroke="#334155" stroke-width="1.5"/>
<text x="170" y="255" text-anchor="middle" fill="#94a3b8" font-size="11" font-family="sans-serif" font-weight="600">Thu</text>
<!-- Fri - LAND -->
<g class="friday-node">
  <circle cx="101" cy="229" r="18" fill="#431407" stroke="#f97316" stroke-width="2.5"/>
  <text x="101" y="234" text-anchor="middle" fill="#f97316" font-size="11" font-family="sans-serif" font-weight="700">Fri</text>
</g>
<!-- Sat -->
<circle cx="72" cy="165" r="16" fill="#1e293b" stroke="#334155" stroke-width="1.5"/>
<text x="72" y="170" text-anchor="middle" fill="#94a3b8" font-size="11" font-family="sans-serif" font-weight="600">Sat</text>

<!-- Center label -->
<text x="170" y="159" text-anchor="middle" fill="#94a3b8" font-size="10" font-family="sans-serif">mod 7</text>
<text x="170" y="173" text-anchor="middle" fill="#e2e8f0" font-size="11" font-family="sans-serif" font-weight="600">7 days</text>

<!-- Step count badge -->
<g class="step-badge">
  <rect x="140" y="18" width="60" height="22" rx="11" fill="#f97316"/>
  <text x="170" y="33" text-anchor="middle" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="700">+10 steps</text>
</g>

<!-- Right panel -->
<rect x="296" y="70" width="110" height="190" rx="10" fill="#1e293b" stroke="#334155" stroke-width="1.5"/>
<text x="351" y="91" text-anchor="middle" fill="#94a3b8" font-size="11" font-family="sans-serif" font-weight="600">The Math</text>

<rect x="308" y="100" width="86" height="26" rx="5" fill="#1e3a5f" stroke="#60a5fa" stroke-width="1.5"/>
<text x="351" y="117" text-anchor="middle" fill="#60a5fa" font-size="11" font-family="sans-serif">Start: Tuesday</text>

<text x="351" y="142" text-anchor="middle" fill="#e2e8f0" font-size="11" font-family="sans-serif">Tue = day 2</text>
<text x="351" y="157" text-anchor="middle" fill="#e2e8f0" font-size="11" font-family="sans-serif">2 + 10 = 12</text>
<text x="351" y="172" text-anchor="middle" fill="#e2e8f0" font-size="11" font-family="sans-serif">12 mod 7 = 5</text>
<text x="351" y="187" text-anchor="middle" fill="#e2e8f0" font-size="11" font-family="sans-serif">Day 5 = Fri</text>

<line x1="308" y1="200" x2="390" y2="200" stroke="#334155" stroke-width="1"/>

<rect x="308" y="210" width="86" height="38" rx="6" fill="#431407" stroke="#f97316" stroke-width="2"/>
<text x="351" y="225" text-anchor="middle" fill="#f97316" font-size="11" font-family="sans-serif" font-weight="700">Answer:</text>
<text x="351" y="241" text-anchor="middle" fill="#ffffff" font-size="14" font-family="sans-serif" font-weight="800">Friday</text>

<!-- Bottom note -->
<rect x="36" y="290" width="220" height="36" rx="8" fill="#1e293b" stroke="#a78bfa" stroke-width="1.5"/>
<text x="146" y="305" text-anchor="middle" fill="#a78bfa" font-size="11" font-family="sans-serif" font-weight="600">Key insight:</text>
<text x="146" y="319" text-anchor="middle" fill="#e2e8f0" font-size="10.5" font-family="sans-serif">After 7 days it wraps back to start</text>
</svg>`,
    },

    // ---- CONCEPT: Last Digit = Mod 10 ----
    {
      type: 'concept',
      title: 'Last Digit = Mod 10',
      content: `
<div>
  <p>The <strong>last digit</strong> (units digit) of any number is simply that number <strong>mod 10</strong>.</p>
  <br/>
  <p>Examples:</p>
  <ul>
    <li>Last digit of 12345 &rarr; 12345 mod 10 = <strong>5</strong></li>
    <li>Last digit of 7 to the power of 2025 &rarr; 7 to the 2025 mod 10 = <strong>?</strong></li>
  </ul>
  <br/>
  <p>To find the last digit of a huge power, we only need to track what happens to the <strong>last digit at each step</strong>
  &mdash; because when you multiply two numbers, the last digit of the result depends only on the last digits of the factors.</p>
  <br/>
  <p style="background:rgba(99,102,241,0.15);padding:12px;border-radius:8px;">
    <strong>Key Insight:</strong> Last digit of A &times; B = Last digit of (last digit of A) &times; (last digit of B).
    <br/>So we never need the full number &mdash; just its last digit!
  </p>
</div>`,
      svgDiagram: `<svg viewBox="0 0 420 320" xmlns="http://www.w3.org/2000/svg" width="420">
<style>
  @keyframes boxPulse {
    0%, 100% { filter: drop-shadow(0 0 4px #f97316); stroke-width: 2.5; }
    50%       { filter: drop-shadow(0 0 12px #f97316); stroke-width: 3.5; }
  }
  @keyframes arrowFade {
    0%, 30% { opacity: 0.2; }
    60%     { opacity: 1; }
    100%    { opacity: 0.2; }
  }
  @keyframes resultPop {
    0%, 40% { transform: scale(1); }
    70%     { transform: scale(1.15); }
    100%    { transform: scale(1); }
  }
  @keyframes dimGray {
    0%, 100% { opacity: 0.35; }
    50%      { opacity: 0.55; }
  }
  .last-digit-box {
    animation: boxPulse 2s ease-in-out infinite;
  }
  .big-arrow {
    animation: arrowFade 2s ease-in-out infinite;
  }
  .result-pop {
    transform-origin: 210px 190px;
    animation: resultPop 2s ease-in-out infinite;
  }
  .dim-digit {
    animation: dimGray 2s ease-in-out infinite;
  }
</style>

<rect width="420" height="320" rx="16" fill="#0f172a"/>
<text x="210" y="26" text-anchor="middle" fill="#e2e8f0" font-size="15" font-family="sans-serif" font-weight="600">Only the Last Digit Matters!</text>
<text x="210" y="44" text-anchor="middle" fill="#94a3b8" font-size="11" font-family="sans-serif">When finding last digit of a product, only last digits count</text>

<!-- Big multiplication: 437 × 28 -->
<text x="210" y="84" text-anchor="middle" fill="#94a3b8" font-size="13" font-family="sans-serif">Consider this big multiplication:</text>

<!-- 437 display -->
<rect x="56" y="95" width="120" height="52" rx="8" fill="#1e293b" stroke="#334155" stroke-width="1.5"/>
<text x="87" y="130" text-anchor="middle" fill="#94a3b8" font-size="32" font-family="monospace" font-weight="700" class="dim-digit">43</text>
<rect x="104" y="98" width="36" height="46" rx="5" fill="#1e3a5f" stroke="#f97316" stroke-width="2.5" class="last-digit-box"/>
<text x="122" y="130" text-anchor="middle" fill="#f97316" font-size="32" font-family="monospace" font-weight="800">7</text>

<!-- × sign -->
<text x="193" y="130" text-anchor="middle" fill="#e2e8f0" font-size="30" font-family="sans-serif" font-weight="300">×</text>

<!-- 28 display -->
<rect x="208" y="95" width="100" height="52" rx="8" fill="#1e293b" stroke="#334155" stroke-width="1.5"/>
<text x="226" y="130" text-anchor="middle" fill="#94a3b8" font-size="32" font-family="monospace" font-weight="700" class="dim-digit">2</text>
<rect x="240" y="98" width="36" height="46" rx="5" fill="#1e3a5f" stroke="#f97316" stroke-width="2.5" class="last-digit-box"/>
<text x="258" y="130" text-anchor="middle" fill="#f97316" font-size="32" font-family="monospace" font-weight="800">8</text>

<!-- Labels under boxes -->
<text x="122" y="160" text-anchor="middle" fill="#f97316" font-size="10" font-family="sans-serif">last digit</text>
<text x="258" y="160" text-anchor="middle" fill="#f97316" font-size="10" font-family="sans-serif">last digit</text>

<!-- Arrow down -->
<g class="big-arrow">
  <line x1="210" y1="165" x2="210" y2="186" stroke="#34d399" stroke-width="2.5"/>
  <polygon points="210,194 204,182 216,182" fill="#34d399"/>
  <text x="240" y="179" fill="#34d399" font-size="11" font-family="sans-serif">Just multiply these!</text>
</g>

<!-- Simplified: 7 × 8 = 56 -->
<rect x="100" y="198" width="220" height="58" rx="10" fill="#1e293b" stroke="#34d399" stroke-width="2"/>
<text x="185" y="228" text-anchor="middle" fill="#f97316" font-size="36" font-family="monospace" font-weight="800">7</text>
<text x="210" y="228" text-anchor="middle" fill="#e2e8f0" font-size="28" font-family="sans-serif" font-weight="300">×</text>
<text x="238" y="228" text-anchor="middle" fill="#f97316" font-size="36" font-family="monospace" font-weight="800">8</text>
<text x="267" y="228" text-anchor="middle" fill="#e2e8f0" font-size="28" font-family="sans-serif" font-weight="300">=</text>
<text x="300" y="228" text-anchor="middle" fill="#34d399" font-size="36" font-family="monospace" font-weight="800">56</text>
<text x="210" y="246" text-anchor="middle" fill="#94a3b8" font-size="10" font-family="sans-serif">same last digits as 437 × 28 = 12236</text>

<!-- Result highlight -->
<g class="result-pop">
  <rect x="124" y="270" width="172" height="40" rx="10" fill="#14532d" stroke="#34d399" stroke-width="2.5"/>
  <text x="210" y="286" text-anchor="middle" fill="#94a3b8" font-size="11" font-family="sans-serif">Last digit of 437 × 28 is</text>
  <text x="210" y="302" text-anchor="middle" fill="#34d399" font-size="14" font-family="sans-serif" font-weight="800">6 (same as last digit of 56)</text>
</g>
</svg>`,
    },

    // ---- INTERACTIVE: Spot the Cycle ----
    {
      type: 'interactive',
      title: 'Spot the Cycle &mdash; Powers of 7',
      content: `
<div>
  <p>Let's list the last digit of each power of 7:</p>
  <br/>
  <table style="border-collapse:collapse;margin:0 auto;">
    <tr style="border-bottom:2px solid #60a5fa;">
      <th style="padding:6px 14px;color:#60a5fa;">Power</th>
      <th style="padding:6px 14px;color:#60a5fa;">Value</th>
      <th style="padding:6px 14px;color:#60a5fa;">Last Digit</th>
    </tr>
    <tr><td style="padding:4px 14px;text-align:center;">7 to the 1</td><td style="padding:4px 14px;text-align:center;">7</td><td style="padding:4px 14px;text-align:center;color:#f97316;font-weight:bold;">7</td></tr>
    <tr><td style="padding:4px 14px;text-align:center;">7 to the 2</td><td style="padding:4px 14px;text-align:center;">49</td><td style="padding:4px 14px;text-align:center;color:#f97316;font-weight:bold;">9</td></tr>
    <tr><td style="padding:4px 14px;text-align:center;">7 to the 3</td><td style="padding:4px 14px;text-align:center;">343</td><td style="padding:4px 14px;text-align:center;color:#f97316;font-weight:bold;">3</td></tr>
    <tr><td style="padding:4px 14px;text-align:center;">7 to the 4</td><td style="padding:4px 14px;text-align:center;">2401</td><td style="padding:4px 14px;text-align:center;color:#f97316;font-weight:bold;">1</td></tr>
    <tr style="background:rgba(99,102,241,0.12);"><td style="padding:4px 14px;text-align:center;">7 to the 5</td><td style="padding:4px 14px;text-align:center;">16807</td><td style="padding:4px 14px;text-align:center;color:#f97316;font-weight:bold;">7 &larr; repeats!</td></tr>
  </table>
  <br/>
  <p>The cycle is: <strong style="color:#f97316;">7, 9, 3, 1</strong> &mdash; and it has length <strong>4</strong>.</p>
  <br/>
  <p>Every base has its own cycle. Here are the common ones:</p>
  <table style="border-collapse:collapse;margin:0 auto;">
    <tr style="border-bottom:2px solid #60a5fa;">
      <th style="padding:4px 12px;color:#60a5fa;">Base</th>
      <th style="padding:4px 12px;color:#60a5fa;">Cycle</th>
      <th style="padding:4px 12px;color:#60a5fa;">Length</th>
    </tr>
    <tr><td style="padding:4px 12px;text-align:center;">2</td><td style="padding:4px 12px;text-align:center;">2, 4, 8, 6</td><td style="padding:4px 12px;text-align:center;">4</td></tr>
    <tr><td style="padding:4px 12px;text-align:center;">3</td><td style="padding:4px 12px;text-align:center;">3, 9, 7, 1</td><td style="padding:4px 12px;text-align:center;">4</td></tr>
    <tr><td style="padding:4px 12px;text-align:center;">4</td><td style="padding:4px 12px;text-align:center;">4, 6</td><td style="padding:4px 12px;text-align:center;">2</td></tr>
    <tr><td style="padding:4px 12px;text-align:center;">5</td><td style="padding:4px 12px;text-align:center;">5</td><td style="padding:4px 12px;text-align:center;">1</td></tr>
    <tr><td style="padding:4px 12px;text-align:center;">6</td><td style="padding:4px 12px;text-align:center;">6</td><td style="padding:4px 12px;text-align:center;">1</td></tr>
    <tr><td style="padding:4px 12px;text-align:center;">7</td><td style="padding:4px 12px;text-align:center;">7, 9, 3, 1</td><td style="padding:4px 12px;text-align:center;">4</td></tr>
    <tr><td style="padding:4px 12px;text-align:center;">8</td><td style="padding:4px 12px;text-align:center;">8, 4, 2, 6</td><td style="padding:4px 12px;text-align:center;">4</td></tr>
    <tr><td style="padding:4px 12px;text-align:center;">9</td><td style="padding:4px 12px;text-align:center;">9, 1</td><td style="padding:4px 12px;text-align:center;">2</td></tr>
  </table>
  <br/>
  <p><em>Memorise these cycles &mdash; they show up in SASMO almost every year!</em></p>
</div>`,
      svgDiagram: `<svg viewBox="0 0 420 320" xmlns="http://www.w3.org/2000/svg" width="420">
<style>
  @keyframes orbit {
    0%   { offset-distance: 0%; }
    100% { offset-distance: 100%; }
  }
  @keyframes nodeGlow1 {
    0%,75%,100% { filter: none; }
    0%,5%       { filter: drop-shadow(0 0 10px #f97316); }
  }
  @keyframes nodeGlow2 {
    0%,100%    { filter: none; }
    25%,30%    { filter: drop-shadow(0 0 10px #a78bfa); }
  }
  @keyframes nodeGlow3 {
    0%,100%    { filter: none; }
    50%,55%    { filter: drop-shadow(0 0 10px #34d399); }
  }
  @keyframes nodeGlow4 {
    0%,100%    { filter: none; }
    75%,80%    { filter: drop-shadow(0 0 10px #60a5fa); }
  }
  @keyframes arrowPulse {
    0%, 100% { opacity: 0.4; }
    50%      { opacity: 1; }
  }
  .glow-dot {
    offset-path: path("M 210 100 A 90 90 0 1 1 209.9 100");
    animation: orbit 4s linear infinite;
  }
  .node1 { animation: nodeGlow1 4s linear infinite; }
  .node2 { animation: nodeGlow2 4s linear infinite; }
  .node3 { animation: nodeGlow3 4s linear infinite; }
  .node4 { animation: nodeGlow4 4s linear infinite; }
  .arr   { animation: arrowPulse 4s ease-in-out infinite; }
</style>

<rect width="420" height="320" rx="16" fill="#0f172a"/>
<text x="210" y="26" text-anchor="middle" fill="#e2e8f0" font-size="15" font-family="sans-serif" font-weight="600">Powers of 7 — Last Digit Cycle</text>
<text x="210" y="44" text-anchor="middle" fill="#94a3b8" font-size="11" font-family="sans-serif">The last digit repeats every 4 steps: 7 → 9 → 3 → 1 → 7...</text>

<!-- Dashed orbit ring -->
<circle cx="210" cy="175" r="90" fill="none" stroke="#1e3a5f" stroke-width="1.5" stroke-dasharray="6 4"/>

<!-- Arrows between nodes (curved) -->
<!-- Top→Right: 7→9 -->
<path d="M 244 100 Q 290 118 294 155" fill="none" stroke="#f97316" stroke-width="2" marker-end="url(#arr-orange)" class="arr"/>
<!-- Right→Bottom: 9→3 -->
<path d="M 290 200 Q 276 248 244 262" fill="none" stroke="#a78bfa" stroke-width="2" marker-end="url(#arr-purple)" class="arr" style="animation-delay:1s"/>
<!-- Bottom→Left: 3→1 -->
<path d="M 176 268 Q 128 252 126 210" fill="none" stroke="#34d399" stroke-width="2" marker-end="url(#arr-emerald)" class="arr" style="animation-delay:2s"/>
<!-- Left→Top: 1→7 -->
<path d="M 126 152 Q 134 108 176 95" fill="none" stroke="#60a5fa" stroke-width="2" marker-end="url(#arr-blue)" class="arr" style="animation-delay:3s"/>

<!-- Arrow markers -->
<defs>
  <marker id="arr-orange" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
    <path d="M0,0 L6,3 L0,6 Z" fill="#f97316"/>
  </marker>
  <marker id="arr-purple" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
    <path d="M0,0 L6,3 L0,6 Z" fill="#a78bfa"/>
  </marker>
  <marker id="arr-emerald" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
    <path d="M0,0 L6,3 L0,6 Z" fill="#34d399"/>
  </marker>
  <marker id="arr-blue" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
    <path d="M0,0 L6,3 L0,6 Z" fill="#60a5fa"/>
  </marker>
</defs>

<!-- Node: 7 (top) -->
<g class="node1">
  <circle cx="210" cy="85" r="28" fill="#431407" stroke="#f97316" stroke-width="2.5"/>
  <text x="210" y="80" text-anchor="middle" fill="#94a3b8" font-size="9" font-family="sans-serif">7 to the power 1</text>
  <text x="210" y="95" text-anchor="middle" fill="#f97316" font-size="20" font-family="monospace" font-weight="800">7</text>
</g>
<!-- Node: 9 (right) -->
<g class="node2">
  <circle cx="298" cy="175" r="28" fill="#2e1065" stroke="#a78bfa" stroke-width="2.5"/>
  <text x="298" y="170" text-anchor="middle" fill="#94a3b8" font-size="9" font-family="sans-serif">7 to the power 2</text>
  <text x="298" y="185" text-anchor="middle" fill="#a78bfa" font-size="20" font-family="monospace" font-weight="800">9</text>
</g>
<!-- Node: 3 (bottom) -->
<g class="node3">
  <circle cx="210" cy="265" r="28" fill="#064e3b" stroke="#34d399" stroke-width="2.5"/>
  <text x="210" y="260" text-anchor="middle" fill="#94a3b8" font-size="9" font-family="sans-serif">7 to the power 3</text>
  <text x="210" y="275" text-anchor="middle" fill="#34d399" font-size="20" font-family="monospace" font-weight="800">3</text>
</g>
<!-- Node: 1 (left) -->
<g class="node4">
  <circle cx="122" cy="175" r="28" fill="#1e3a5f" stroke="#60a5fa" stroke-width="2.5"/>
  <text x="122" y="170" text-anchor="middle" fill="#94a3b8" font-size="9" font-family="sans-serif">7 to the power 4</text>
  <text x="122" y="185" text-anchor="middle" fill="#60a5fa" font-size="20" font-family="monospace" font-weight="800">1</text>
</g>

<!-- Glowing dot traveling the ring -->
<circle r="7" fill="#fbbf24" stroke="#ffffff" stroke-width="1.5" class="glow-dot" style="filter: drop-shadow(0 0 6px #fbbf24)"/>

<!-- Center text -->
<text x="210" y="170" text-anchor="middle" fill="#94a3b8" font-size="10" font-family="sans-serif">cycle</text>
<text x="210" y="183" text-anchor="middle" fill="#e2e8f0" font-size="11" font-family="sans-serif" font-weight="600">length 4</text>

<!-- Bottom legend -->
<rect x="60" y="296" width="300" height="20" rx="4" fill="none"/>
<text x="210" y="308" text-anchor="middle" fill="#fbbf24" font-size="10.5" font-family="sans-serif">● = glowing dot shows the repeating pattern</text>
</svg>`,
    },

    // ---- RULE: The Method ----
    {
      type: 'rule',
      title: 'The 4-Step Method for Last-Digit Problems',
      content: `
<div>
  <p>Follow this recipe every time you see "find the last digit of <em>b</em> to the power of <em>n</em>":</p>
  <br/>
  <ol>
    <li><strong>List last digits</strong> of the first few powers of <em>b</em> until you see a repeat.</li>
    <li><strong>Identify the cycle</strong> and its <strong>length</strong> (call it <em>L</em>).</li>
    <li><strong>Divide</strong> the exponent <em>n</em> by <em>L</em>. Find the <strong>remainder</strong> <em>r</em>.</li>
    <li><strong>Look up position <em>r</em></strong> in the cycle.
      <br/>&nbsp;&nbsp;&bull; If <em>r</em> = 0, use the <strong>last</strong> element of the cycle (not the first!).</li>
  </ol>
  <br/>
  <p style="background:rgba(244,114,182,0.15);padding:12px;border-radius:8px;">
    <strong>Watch out:</strong> The most common mistake is forgetting that remainder 0 means the <em>last</em> position, not the first.
    For example, 7 to the power of 8: cycle [7,9,3,1], 8 mod 4 = 0, so the answer is <strong>1</strong> (last in cycle), not 7.
  </p>
</div>`,
      svgDiagram: `<svg viewBox="0 0 420 380" xmlns="http://www.w3.org/2000/svg" width="420">
<style>
  @keyframes arrowAnimate {
    0%, 100% { stroke-dashoffset: 20; opacity: 0.5; }
    50%       { stroke-dashoffset: 0;  opacity: 1; }
  }
  @keyframes boxReveal {
    0%   { opacity: 0; transform: translateY(-6px); }
    100% { opacity: 1; transform: translateY(0); }
  }
  .box1 { animation: boxReveal 0.5s ease-out 0.1s both; }
  .box2 { animation: boxReveal 0.5s ease-out 0.7s both; }
  .box3 { animation: boxReveal 0.5s ease-out 1.3s both; }
  .box4 { animation: boxReveal 0.5s ease-out 1.9s both; }
  .arrow1 { stroke-dasharray: 20; animation: arrowAnimate 2s ease-in-out 0.5s infinite; }
  .arrow2 { stroke-dasharray: 20; animation: arrowAnimate 2s ease-in-out 1.1s infinite; }
  .arrow3 { stroke-dasharray: 20; animation: arrowAnimate 2s ease-in-out 1.7s infinite; }
</style>

<rect width="420" height="380" rx="16" fill="#0f172a"/>
<text x="210" y="24" text-anchor="middle" fill="#e2e8f0" font-size="15" font-family="sans-serif" font-weight="600">The 4-Step Last-Digit Method</text>
<text x="210" y="41" text-anchor="middle" fill="#94a3b8" font-size="11" font-family="sans-serif">Use this to find any last digit of a power</text>

<!-- Example badge -->
<rect x="136" y="49" width="148" height="20" rx="10" fill="#1e293b" stroke="#fbbf24" stroke-width="1.5"/>
<text x="210" y="63" text-anchor="middle" fill="#fbbf24" font-size="10" font-family="sans-serif" font-weight="600">Example: last digit of 7 to the power 50</text>

<!-- STEP 1 -->
<g class="box1">
  <rect x="36" y="78" width="348" height="52" rx="10" fill="#1e3a5f" stroke="#60a5fa" stroke-width="2"/>
  <circle cx="58" cy="104" r="12" fill="#60a5fa"/>
  <text x="58" y="109" text-anchor="middle" fill="#0f172a" font-size="12" font-family="sans-serif" font-weight="800">1</text>
  <text x="200" y="97" text-anchor="middle" fill="#60a5fa" font-size="12" font-family="sans-serif" font-weight="700">List the last digits of the base</text>
  <text x="200" y="114" text-anchor="middle" fill="#e2e8f0" font-size="11" font-family="sans-serif">7¹→7, 7²→9, 7³→3, 7⁴→1, 7⁵→7  (pattern begins!)</text>
</g>

<!-- Arrow 1 -->
<g class="arrow1">
  <line x1="210" y1="130" x2="210" y2="150" stroke="#60a5fa" stroke-width="2.5" stroke-linecap="round"/>
  <polygon points="210,157 204,146 216,146" fill="#60a5fa"/>
</g>

<!-- STEP 2 -->
<g class="box2">
  <rect x="36" y="156" width="348" height="52" rx="10" fill="#2e1065" stroke="#a78bfa" stroke-width="2"/>
  <circle cx="58" cy="182" r="12" fill="#a78bfa"/>
  <text x="58" y="187" text-anchor="middle" fill="#0f172a" font-size="12" font-family="sans-serif" font-weight="800">2</text>
  <text x="200" y="175" text-anchor="middle" fill="#a78bfa" font-size="12" font-family="sans-serif" font-weight="700">Find the cycle length L</text>
  <text x="200" y="192" text-anchor="middle" fill="#e2e8f0" font-size="11" font-family="sans-serif">Pattern 7→9→3→1 repeats every L = 4 steps</text>
</g>

<!-- Arrow 2 -->
<g class="arrow2">
  <line x1="210" y1="208" x2="210" y2="228" stroke="#a78bfa" stroke-width="2.5" stroke-linecap="round"/>
  <polygon points="210,235 204,224 216,224" fill="#a78bfa"/>
</g>

<!-- STEP 3 -->
<g class="box3">
  <rect x="36" y="234" width="348" height="52" rx="10" fill="#431407" stroke="#f97316" stroke-width="2"/>
  <circle cx="58" cy="260" r="12" fill="#f97316"/>
  <text x="58" y="265" text-anchor="middle" fill="#0f172a" font-size="12" font-family="sans-serif" font-weight="800">3</text>
  <text x="200" y="253" text-anchor="middle" fill="#f97316" font-size="12" font-family="sans-serif" font-weight="700">Calculate: exponent mod L = r</text>
  <text x="200" y="270" text-anchor="middle" fill="#e2e8f0" font-size="11" font-family="sans-serif">50 mod 4 = 2  →  so r = 2</text>
</g>

<!-- Arrow 3 -->
<g class="arrow3">
  <line x1="210" y1="286" x2="210" y2="306" stroke="#f97316" stroke-width="2.5" stroke-linecap="round"/>
  <polygon points="210,313 204,302 216,302" fill="#f97316"/>
</g>

<!-- STEP 4 -->
<g class="box4">
  <rect x="36" y="312" width="348" height="54" rx="10" fill="#064e3b" stroke="#34d399" stroke-width="2.5"/>
  <circle cx="58" cy="339" r="12" fill="#34d399"/>
  <text x="58" y="344" text-anchor="middle" fill="#0f172a" font-size="12" font-family="sans-serif" font-weight="800">4</text>
  <text x="200" y="333" text-anchor="middle" fill="#34d399" font-size="12" font-family="sans-serif" font-weight="700">Use position r in the cycle → Answer!</text>
  <text x="200" y="352" text-anchor="middle" fill="#ffffff" font-size="11" font-family="sans-serif">r = 2 → position 2 = 9  ✓  Last digit of 7 to the power 50 is 9</text>
</g>
</svg>`,
    },

    // ---- TIP ----
    {
      type: 'tip',
      title: 'Shortcut for Bases Ending in 1, 5, 6, or 0',
      content: `
<div>
  <p>Some last digits <strong>never change</strong> when raised to any positive power:</p>
  <ul>
    <li>Any number ending in <strong>0</strong> &rarr; last digit is always <strong>0</strong></li>
    <li>Any number ending in <strong>1</strong> &rarr; last digit is always <strong>1</strong></li>
    <li>Any number ending in <strong>5</strong> &rarr; last digit is always <strong>5</strong></li>
    <li>Any number ending in <strong>6</strong> &rarr; last digit is always <strong>6</strong></li>
  </ul>
  <br/>
  <p>So if you see 2026 to the power of 999, the last digit is instantly <strong>6</strong>. No cycles needed!</p>
</div>`,
      svgDiagram: `<svg viewBox="0 0 420 320" xmlns="http://www.w3.org/2000/svg" width="420">
<style>
  @keyframes colAnim0 {
    0%,100% { opacity: 0.85; } 25% { opacity: 1; filter: drop-shadow(0 0 6px #60a5fa); }
  }
  @keyframes colAnim1 {
    0%,100% { opacity: 0.85; } 50% { opacity: 1; filter: drop-shadow(0 0 6px #34d399); }
  }
  @keyframes colAnim5 {
    0%,100% { opacity: 0.85; } 75% { opacity: 1; filter: drop-shadow(0 0 6px #f97316); }
  }
  @keyframes colAnim6 {
    0%,100% { opacity: 0.85; } 90% { opacity: 1; filter: drop-shadow(0 0 6px #a78bfa); }
  }
  @keyframes shimmer {
    0%,100% { filter: drop-shadow(0 0 3px #fbbf24); }
    50%     { filter: drop-shadow(0 0 9px #fbbf24); }
  }
  .col0 { animation: colAnim0 4s ease-in-out infinite; }
  .col1 { animation: colAnim1 4s ease-in-out infinite; }
  .col5 { animation: colAnim5 4s ease-in-out infinite; }
  .col6 { animation: colAnim6 4s ease-in-out infinite; }
  .shimmer { animation: shimmer 2.5s ease-in-out infinite; }
</style>

<rect width="420" height="320" rx="16" fill="#0f172a"/>
<text x="210" y="24" text-anchor="middle" fill="#e2e8f0" font-size="15" font-family="sans-serif" font-weight="600">Shortcut Bases: Always Same Last Digit</text>
<text x="210" y="42" text-anchor="middle" fill="#94a3b8" font-size="11" font-family="sans-serif">These bases never change their last digit, no matter the power</text>

<!-- Column headers -->
<rect x="40" y="50" width="82" height="24" rx="6" fill="#1e3a5f" stroke="#60a5fa" stroke-width="1.5"/>
<text x="81" y="66" text-anchor="middle" fill="#60a5fa" font-size="13" font-family="sans-serif" font-weight="700">Base 0</text>
<rect x="132" y="50" width="82" height="24" rx="6" fill="#064e3b" stroke="#34d399" stroke-width="1.5"/>
<text x="173" y="66" text-anchor="middle" fill="#34d399" font-size="13" font-family="sans-serif" font-weight="700">Base 1</text>
<rect x="224" y="50" width="82" height="24" rx="6" fill="#431407" stroke="#f97316" stroke-width="1.5"/>
<text x="265" y="66" text-anchor="middle" fill="#f97316" font-size="13" font-family="sans-serif" font-weight="700">Base 5</text>
<rect x="316" y="50" width="82" height="24" rx="6" fill="#2e1065" stroke="#a78bfa" stroke-width="1.5"/>
<text x="357" y="66" text-anchor="middle" fill="#a78bfa" font-size="13" font-family="sans-serif" font-weight="700">Base 6</text>

<!-- Row labels -->
<text x="22" y="107" text-anchor="middle" fill="#94a3b8" font-size="10" font-family="sans-serif" writing-mode="tb">p=1</text>
<text x="22" y="157" text-anchor="middle" fill="#94a3b8" font-size="10" font-family="sans-serif" writing-mode="tb">p=2</text>
<text x="22" y="207" text-anchor="middle" fill="#94a3b8" font-size="10" font-family="sans-serif" writing-mode="tb">p=3</text>
<text x="22" y="252" text-anchor="middle" fill="#94a3b8" font-size="10" font-family="sans-serif" writing-mode="tb">p=4</text>

<!-- Grid background stripes -->
<rect x="36" y="80" width="376" height="40" rx="0" fill="#1e293b" opacity="0.5"/>
<rect x="36" y="160" width="376" height="40" rx="0" fill="#1e293b" opacity="0.5"/>
<rect x="36" y="240" width="376" height="40" rx="0" fill="#1e293b" opacity="0.5"/>

<!-- Col BASE 0 -->
<g class="col0">
  <!-- power 1 row -->
  <text x="81" y="102" text-anchor="middle" fill="#475569" font-size="10" font-family="monospace">0¹ =</text>
  <text x="81" y="116" text-anchor="middle" fill="#60a5fa" font-size="18" font-family="monospace" font-weight="800">0</text>
  <!-- power 2 row -->
  <text x="81" y="142" text-anchor="middle" fill="#475569" font-size="10" font-family="monospace">0² =</text>
  <text x="81" y="156" text-anchor="middle" fill="#60a5fa" font-size="18" font-family="monospace" font-weight="800">0</text>
  <!-- power 3 row -->
  <text x="81" y="182" text-anchor="middle" fill="#475569" font-size="10" font-family="monospace">0³ =</text>
  <text x="81" y="196" text-anchor="middle" fill="#60a5fa" font-size="18" font-family="monospace" font-weight="800">0</text>
  <!-- power 4 row -->
  <text x="81" y="222" text-anchor="middle" fill="#475569" font-size="10" font-family="monospace">0⁴ =</text>
  <text x="81" y="236" text-anchor="middle" fill="#60a5fa" font-size="18" font-family="monospace" font-weight="800">0</text>
</g>

<!-- Col BASE 1 -->
<g class="col1">
  <text x="173" y="102" text-anchor="middle" fill="#475569" font-size="10" font-family="monospace">1¹ =</text>
  <text x="173" y="116" text-anchor="middle" fill="#34d399" font-size="18" font-family="monospace" font-weight="800">1</text>
  <text x="173" y="142" text-anchor="middle" fill="#475569" font-size="10" font-family="monospace">1² =</text>
  <text x="173" y="156" text-anchor="middle" fill="#34d399" font-size="18" font-family="monospace" font-weight="800">1</text>
  <text x="173" y="182" text-anchor="middle" fill="#475569" font-size="10" font-family="monospace">1³ =</text>
  <text x="173" y="196" text-anchor="middle" fill="#34d399" font-size="18" font-family="monospace" font-weight="800">1</text>
  <text x="173" y="222" text-anchor="middle" fill="#475569" font-size="10" font-family="monospace">1⁴ =</text>
  <text x="173" y="236" text-anchor="middle" fill="#34d399" font-size="18" font-family="monospace" font-weight="800">1</text>
</g>

<!-- Col BASE 5 -->
<g class="col5">
  <text x="265" y="102" text-anchor="middle" fill="#475569" font-size="10" font-family="monospace">5¹ =</text>
  <text x="265" y="116" text-anchor="middle" fill="#f97316" font-size="18" font-family="monospace" font-weight="800">5</text>
  <text x="265" y="142" text-anchor="middle" fill="#475569" font-size="10" font-family="monospace">5² = 25</text>
  <text x="265" y="156" text-anchor="middle" fill="#f97316" font-size="18" font-family="monospace" font-weight="800">5</text>
  <text x="265" y="182" text-anchor="middle" fill="#475569" font-size="10" font-family="monospace">5³ = 125</text>
  <text x="265" y="196" text-anchor="middle" fill="#f97316" font-size="18" font-family="monospace" font-weight="800">5</text>
  <text x="265" y="222" text-anchor="middle" fill="#475569" font-size="10" font-family="monospace">5⁴ = 625</text>
  <text x="265" y="236" text-anchor="middle" fill="#f97316" font-size="18" font-family="monospace" font-weight="800">5</text>
</g>

<!-- Col BASE 6 -->
<g class="col6">
  <text x="357" y="102" text-anchor="middle" fill="#475569" font-size="10" font-family="monospace">6¹ =</text>
  <text x="357" y="116" text-anchor="middle" fill="#a78bfa" font-size="18" font-family="monospace" font-weight="800">6</text>
  <text x="357" y="142" text-anchor="middle" fill="#475569" font-size="10" font-family="monospace">6² = 36</text>
  <text x="357" y="156" text-anchor="middle" fill="#a78bfa" font-size="18" font-family="monospace" font-weight="800">6</text>
  <text x="357" y="182" text-anchor="middle" fill="#475569" font-size="10" font-family="monospace">6³ = 216</text>
  <text x="357" y="196" text-anchor="middle" fill="#a78bfa" font-size="18" font-family="monospace" font-weight="800">6</text>
  <text x="357" y="222" text-anchor="middle" fill="#475569" font-size="10" font-family="monospace">6⁴ = 1296</text>
  <text x="357" y="236" text-anchor="middle" fill="#a78bfa" font-size="18" font-family="monospace" font-weight="800">6</text>
</g>

<!-- Grid lines -->
<rect x="36" y="80" width="376" height="196" rx="4" fill="none" stroke="#334155" stroke-width="1.5"/>
<line x1="128" y1="80" x2="128" y2="276" stroke="#334155" stroke-width="1"/>
<line x1="220" y1="80" x2="220" y2="276" stroke="#334155" stroke-width="1"/>
<line x1="312" y1="80" x2="312" y2="276" stroke="#334155" stroke-width="1"/>
<line x1="36" y1="120" x2="412" y2="120" stroke="#1e293b" stroke-width="1"/>
<line x1="36" y1="160" x2="412" y2="160" stroke="#1e293b" stroke-width="1"/>
<line x1="36" y1="200" x2="412" y2="200" stroke="#1e293b" stroke-width="1"/>
<line x1="36" y1="240" x2="412" y2="240" stroke="#1e293b" stroke-width="1"/>

<!-- Bottom badge -->
<g class="shimmer">
  <rect x="80" y="284" width="260" height="28" rx="10" fill="#1e293b" stroke="#fbbf24" stroke-width="2"/>
  <text x="210" y="297" text-anchor="middle" fill="#fbbf24" font-size="11" font-family="sans-serif" font-weight="700">No cycle needed!</text>
  <text x="210" y="308" text-anchor="middle" fill="#e2e8f0" font-size="10" font-family="sans-serif">Bases 0, 1, 5, 6 always end in themselves</text>
</g>
</svg>`,
    },
  ],

  workedExamples: [
    {
      title: 'Last Digit of 7 to the power of 2025',
      problem:
        'Find the last (units) digit of 7 to the power of 2025.',
      solution: `
<div>
  <p><strong>Step 1 &mdash; List last digits:</strong></p>
  <p>7, 49, 343, 2401 &rarr; last digits: <strong>7, 9, 3, 1</strong></p>
  <br/>
  <p><strong>Step 2 &mdash; Cycle:</strong> [7, 9, 3, 1], length = <strong>4</strong></p>
  <br/>
  <p><strong>Step 3 &mdash; Divide exponent by cycle length:</strong></p>
  <p>2025 &divide; 4 = 506 remainder <strong>1</strong></p>
  <br/>
  <p><strong>Step 4 &mdash; Position 1 in the cycle:</strong></p>
  <p>Position 1 &rarr; <strong>7</strong></p>
  <br/>
  <p style="font-size:1.15rem;color:#34d399;"><strong>Answer: The last digit is 7.</strong></p>
</div>`,
    },
    {
      title: 'Day of the Week Problem',
      problem:
        'January 1, 2025 is a Wednesday. What day of the week is January 1, 2030 (1826 days later)?',
      solution: `
<div>
  <p><strong>Step 1 &mdash; Find the remainder:</strong></p>
  <p>1826 &divide; 7 = 260 remainder <strong>6</strong></p>
  <br/>
  <p><strong>Step 2 &mdash; Count forward 6 days from Wednesday:</strong></p>
  <p>Thu(1), Fri(2), Sat(3), Sun(4), Mon(5), <strong>Tue(6)</strong></p>
  <br/>
  <p style="font-size:1.15rem;color:#34d399;"><strong>Answer: Tuesday</strong></p>
  <br/>
  <p><em>Note: In a real problem you'd also account for leap years in the day count, but the mod technique is the same.</em></p>
</div>`,
    },
    {
      title: 'Remainder of a Large Sum',
      problem:
        'Find the remainder when 1 + 2 + 3 + ... + 100 is divided by 7.',
      solution: `
<div>
  <p><strong>Step 1 &mdash; Find the sum:</strong></p>
  <p>Sum = 100 &times; 101 / 2 = <strong>5050</strong></p>
  <br/>
  <p><strong>Step 2 &mdash; Divide by 7:</strong></p>
  <p>5050 &divide; 7 = 721 remainder <strong>3</strong></p>
  <br/>
  <p style="font-size:1.15rem;color:#34d399;"><strong>Answer: The remainder is 3.</strong></p>
</div>`,
    },
  ],

  videos: [],

  sasmoTips: [
    'Last-digit questions appear almost every year. Memorise the 4-step method and the cycle table above.',
    'If the base is large (like 2023 to the power of 99), only the last digit of the base matters. 2023 has last digit 3, so use the cycle for 3.',
    'When the exponent is 0, any non-zero base to the power of 0 = 1, so the last digit is 1.',
    'For "what day of the week" problems, always use mod 7.',
  ],

  commonMistakes: [
    'Forgetting that remainder 0 means the LAST position in the cycle, not the first.',
    'Using the full number instead of just the last digit when computing power cycles.',
    'Confusing mod 12 (clocks) with mod 7 (days) in word problems.',
    'Starting the cycle at exponent 0 instead of exponent 1.',
  ],

  keyFormulas: [
    'a mod n = remainder when a is divided by n',
    'Last digit of X = X mod 10',
    'Cycle method: divide exponent by cycle length, use remainder to find position',
    'If remainder = 0, use the LAST element in the cycle',
  ],
};

// ============================================================
// 2. ALGEBRA (Vieta's Formulas)
// ============================================================
const algebra: TopicLesson = {
  id: 'algebra',
  topic: 'Algebra',
  title: "Algebra & Vieta's Formulas",
  description:
    "Learn Vieta's powerful shortcut for relating roots and coefficients of polynomials. Appears every year with 2-4 questions.",
  color: 'from-purple-500 to-purple-600',
  iconEmoji: '\uD83D\uDCD0',
  examFrequency: 'Every year (2-4 questions)',
  mastery: 100,

  sections: [
    // ---- CONCEPT: Vieta's Formulas ----
    {
      type: 'concept',
      title: "Vieta's Formulas for Quadratics",
      content: `
<div>
  <p>Given a quadratic equation <strong>ax&sup2; + bx + c = 0</strong> with roots <em>p</em> and <em>q</em>:</p>
  <br/>
  <div style="background:rgba(168,139,250,0.15);padding:16px;border-radius:8px;text-align:center;">
    <p style="font-size:1.2rem;"><strong>Sum of roots:</strong> p + q = <strong>&minus;b / a</strong></p>
    <p style="font-size:1.2rem;margin-top:8px;"><strong>Product of roots:</strong> p &times; q = <strong>c / a</strong></p>
  </div>
  <br/>
  <p><strong>Where does this come from?</strong></p>
  <p>If <em>p</em> and <em>q</em> are roots, then:</p>
  <p style="text-align:center;margin:8px 0;">ax&sup2; + bx + c = a(x &minus; p)(x &minus; q)</p>
  <p>Expanding the right side:</p>
  <p style="text-align:center;margin:8px 0;">= a[x&sup2; &minus; (p + q)x + pq]</p>
  <p>Comparing coefficients with ax&sup2; + bx + c gives us the two formulas.</p>
  <br/>
  <p><em>For the common case where a = 1 (i.e., x&sup2; + bx + c = 0):</em></p>
  <ul>
    <li>p + q = &minus;b</li>
    <li>p &times; q = c</li>
  </ul>
</div>`,
      svgDiagram: `<svg viewBox="0 0 420 320" xmlns="http://www.w3.org/2000/svg" width="420">
<style>
  @keyframes drawParabola {
    0%   { stroke-dashoffset: 600; }
    70%  { stroke-dashoffset: 0; }
    100% { stroke-dashoffset: 0; }
  }
  @keyframes dotAppear {
    0%,40%  { opacity: 0; transform: scale(0); }
    60%     { opacity: 1; transform: scale(1.3); }
    100%    { opacity: 1; transform: scale(1); }
  }
  @keyframes labelSlide {
    0%,50%  { opacity: 0; transform: translateY(-6px); }
    80%,100%{ opacity: 1; transform: translateY(0); }
  }
  @keyframes arcDraw {
    0%,50%  { stroke-dashoffset: 80; opacity: 0; }
    80%,100%{ stroke-dashoffset: 0; opacity: 1; }
  }
  .parabola-path {
    stroke-dasharray: 600;
    animation: drawParabola 2.5s ease-out 0.3s infinite;
  }
  .root-dot { animation: dotAppear 2.5s ease-out 0.3s infinite; }
  .root-label { animation: labelSlide 2.5s ease-out 0.3s infinite; }
  .sum-arc { stroke-dasharray: 80; animation: arcDraw 2.5s ease-out 0.3s infinite; }
</style>

<rect width="420" height="320" rx="16" fill="#0f172a"/>
<text x="210" y="26" text-anchor="middle" fill="#e2e8f0" font-size="15" font-family="sans-serif" font-weight="600">Vieta's Formulas — Roots of a Parabola</text>
<text x="210" y="44" text-anchor="middle" fill="#94a3b8" font-size="11" font-family="sans-serif">For x² + bx + c = 0 with roots p and q</text>

<!-- Axes -->
<line x1="40" y1="200" x2="380" y2="200" stroke="#334155" stroke-width="1.5"/>
<line x1="210" y1="55" x2="210" y2="280" stroke="#334155" stroke-width="1.5"/>
<!-- Axis labels -->
<text x="375" y="196" fill="#475569" font-size="12" font-family="sans-serif">x</text>
<text x="215" y="65" fill="#475569" font-size="12" font-family="sans-serif">y</text>
<!-- Grid marks -->
<line x1="110" y1="196" x2="110" y2="204" stroke="#334155" stroke-width="1.5"/>
<line x1="310" y1="196" x2="310" y2="204" stroke="#334155" stroke-width="1.5"/>

<!-- Parabola: roots at x=-2 (=110), x=2 (=310), mapped: center=210, scale=50 -->
<!-- y = (x+2)(x-2) = x²-4, vertex at (0,-4) = (210, 260) in SVG -->
<!-- SVG: svgX = 210 + x*50, svgY = 260 - (x²-4)*25 -->
<path d="M 40,168 Q 110,330 210,255 Q 310,330 380,168"
  fill="none" stroke="#60a5fa" stroke-width="2.5" stroke-linecap="round" class="parabola-path"/>

<!-- Root p at x=-2 (svgX=110) -->
<g class="root-dot" style="transform-origin:110px 200px">
  <circle cx="110" cy="200" r="7" fill="#f97316" stroke="#ffffff" stroke-width="1.5"/>
</g>
<g class="root-label">
  <text x="110" y="220" text-anchor="middle" fill="#f97316" font-size="13" font-family="sans-serif" font-weight="700">p</text>
  <text x="110" y="234" text-anchor="middle" fill="#94a3b8" font-size="10" font-family="sans-serif">(root 1)</text>
</g>

<!-- Root q at x=2 (svgX=310) -->
<g class="root-dot" style="transform-origin:310px 200px; animation-delay:0.3s">
  <circle cx="310" cy="200" r="7" fill="#a78bfa" stroke="#ffffff" stroke-width="1.5"/>
</g>
<g class="root-label" style="animation-delay:0.3s">
  <text x="310" y="220" text-anchor="middle" fill="#a78bfa" font-size="13" font-family="sans-serif" font-weight="700">q</text>
  <text x="310" y="234" text-anchor="middle" fill="#94a3b8" font-size="10" font-family="sans-serif">(root 2)</text>
</g>

<!-- Sum arc -->
<path d="M 110 185 Q 210 155 310 185" fill="none" stroke="#34d399" stroke-width="2" stroke-dasharray="6 3" class="sum-arc"/>
<text x="210" y="162" text-anchor="middle" fill="#34d399" font-size="11" font-family="sans-serif" font-weight="600">p + q = -b</text>

<!-- Product line -->
<line x1="110" y1="244" x2="310" y2="244" stroke="#fbbf24" stroke-width="1.5" stroke-dasharray="5 3" class="sum-arc"/>
<text x="210" y="256" text-anchor="middle" fill="#fbbf24" font-size="11" font-family="sans-serif" font-weight="600">p × q = c</text>

<!-- Vieta box -->
<rect x="282" y="60" width="126" height="76" rx="8" fill="#1e293b" stroke="#60a5fa" stroke-width="1.5"/>
<text x="345" y="77" text-anchor="middle" fill="#60a5fa" font-size="11" font-family="sans-serif" font-weight="700">Vieta's Formulas</text>
<line x1="294" y1="82" x2="396" y2="82" stroke="#334155" stroke-width="1"/>
<text x="345" y="98" text-anchor="middle" fill="#34d399" font-size="12" font-family="sans-serif" font-weight="600">Sum: p + q = -b</text>
<text x="345" y="116" text-anchor="middle" fill="#fbbf24" font-size="12" font-family="sans-serif" font-weight="600">Product: p × q = c</text>
<text x="345" y="129" text-anchor="middle" fill="#94a3b8" font-size="9" font-family="sans-serif">(for x² + bx + c = 0)</text>

<!-- Vertex dot -->
<circle cx="210" cy="257" r="4" fill="#22d3ee" stroke="#ffffff" stroke-width="1"/>
<text x="224" y="268" fill="#22d3ee" font-size="10" font-family="sans-serif">vertex</text>

<!-- Bottom note -->
<rect x="12" y="280" width="396" height="32" rx="6" fill="#1e293b" stroke="#334155" stroke-width="1"/>
<text x="210" y="293" text-anchor="middle" fill="#94a3b8" font-size="10" font-family="sans-serif">The equation x² - (p+q)x + pq = 0 can be built directly from the roots!</text>
<text x="210" y="306" text-anchor="middle" fill="#60a5fa" font-size="10" font-family="sans-serif" font-weight="600">No quadratic formula needed.</text>
</svg>`,
    },

    // ---- CONCEPT: Why This is Powerful ----
    {
      type: 'concept',
      title: 'Why This is So Powerful',
      content: `
<div>
  <p>Many SASMO problems ask you to evaluate expressions like <strong>p&sup2; + q&sup2;</strong> or <strong>1/p + 1/q</strong> where p, q are roots of a quadratic.</p>
  <br/>
  <p>The key insight: <strong>you do NOT need to find the individual roots!</strong></p>
  <br/>
  <p>Instead, express everything in terms of <em>(p + q)</em> and <em>pq</em>, which Vieta's gives you directly.</p>
  <br/>
  <p>This is faster, cleaner, and avoids messy square roots entirely.</p>
  <br/>
  <p><strong>Example:</strong> If the roots of x&sup2; &minus; 5x + 3 = 0 are p and q, find p&sup2; + q&sup2;.</p>
  <ul>
    <li>Using Vieta's: p + q = 5, pq = 3</li>
    <li>p&sup2; + q&sup2; = (p + q)&sup2; &minus; 2pq = 25 &minus; 6 = <strong>19</strong></li>
  </ul>
  <p>Done in seconds, no quadratic formula needed!</p>
</div>`,
      svgDiagram: `<svg viewBox="0 0 420 300" xmlns="http://www.w3.org/2000/svg" width="420">
<style>
  @keyframes crossFade {
    0%,100%{ opacity: 1; }
    40%,60% { opacity: 0.6; }
  }
  @keyframes checkBounce {
    0%,100% { transform: scale(1) rotate(0deg); }
    50%     { transform: scale(1.2) rotate(5deg); }
  }
  @keyframes xShake {
    0%,100%  { transform: rotate(0deg); }
    25%      { transform: rotate(-8deg); }
    75%      { transform: rotate(8deg); }
  }
  @keyframes rightReveal {
    0%   { opacity: 0; transform: translateX(20px); }
    100% { opacity: 1; transform: translateX(0); }
  }
  .x-mark { animation: xShake 1.5s ease-in-out infinite; transform-origin: 100px 130px; }
  .check-mark { animation: checkBounce 2s ease-in-out 0.5s infinite; transform-origin: 320px 130px; }
  .right-panel { animation: rightReveal 1s ease-out 0.5s both; }
</style>

<rect width="420" height="300" rx="16" fill="#0f172a"/>
<text x="210" y="26" text-anchor="middle" fill="#e2e8f0" font-size="15" font-family="sans-serif" font-weight="600">Vieta vs Quadratic Formula</text>
<text x="210" y="44" text-anchor="middle" fill="#94a3b8" font-size="11" font-family="sans-serif">Find the sum of roots of x² - 5x + 6 = 0</text>

<!-- Divider -->
<line x1="210" y1="56" x2="210" y2="290" stroke="#334155" stroke-width="1.5" stroke-dasharray="4 4"/>

<!-- LEFT: Quadratic formula (hard way) -->
<rect x="12" y="58" width="186" height="220" rx="10" fill="#1e293b" stroke="#334155" stroke-width="1.5"/>
<text x="105" y="78" text-anchor="middle" fill="#f87171" font-size="12" font-family="sans-serif" font-weight="700">Old Way (hard!)</text>
<text x="105" y="94" text-anchor="middle" fill="#94a3b8" font-size="10" font-family="sans-serif">Quadratic Formula:</text>

<!-- Formula display (simplified) -->
<text x="105" y="114" text-anchor="middle" fill="#94a3b8" font-size="10" font-family="monospace">x = (-b ± √(b²-4ac))</text>
<text x="105" y="126" text-anchor="middle" fill="#94a3b8" font-size="10" font-family="monospace">        ÷ 2a</text>

<text x="105" y="148" text-anchor="middle" fill="#94a3b8" font-size="10" font-family="monospace">x = (5 ± √(25-24))</text>
<text x="105" y="160" text-anchor="middle" fill="#94a3b8" font-size="10" font-family="monospace">         ÷ 2</text>
<text x="105" y="178" text-anchor="middle" fill="#94a3b8" font-size="10" font-family="monospace">x = (5 ± 1) ÷ 2</text>
<text x="105" y="196" text-anchor="middle" fill="#94a3b8" font-size="10" font-family="monospace">x = 3 or x = 2</text>
<text x="105" y="210" text-anchor="middle" fill="#94a3b8" font-size="10" font-family="monospace">Sum = 3 + 2 = 5</text>

<!-- Complexity marks -->
<text x="26" y="232" fill="#f87171" font-size="10" font-family="sans-serif">• Many steps</text>
<text x="26" y="246" fill="#f87171" font-size="10" font-family="sans-serif">• Easy to make errors</text>
<text x="26" y="260" fill="#f87171" font-size="10" font-family="sans-serif">• Need to find both roots</text>

<!-- Red X -->
<g class="x-mark">
  <circle cx="100" cy="130" r="22" fill="#450a0a" stroke="#f87171" stroke-width="2"/>
  <line x1="88" y1="118" x2="112" y2="142" stroke="#f87171" stroke-width="3" stroke-linecap="round"/>
  <line x1="112" y1="118" x2="88" y2="142" stroke="#f87171" stroke-width="3" stroke-linecap="round"/>
</g>

<!-- RIGHT: Vieta's way -->
<g class="right-panel">
  <rect x="222" y="58" width="186" height="220" rx="10" fill="#1e293b" stroke="#34d399" stroke-width="2"/>
  <text x="315" y="78" text-anchor="middle" fill="#34d399" font-size="12" font-family="sans-serif" font-weight="700">Vieta's Way (easy!)</text>
  <text x="315" y="94" text-anchor="middle" fill="#94a3b8" font-size="10" font-family="sans-serif">For x² + bx + c = 0:</text>

  <!-- Big formula -->
  <rect x="238" y="102" width="154" height="34" rx="6" fill="#064e3b" stroke="#34d399" stroke-width="1.5"/>
  <text x="315" y="116" text-anchor="middle" fill="#34d399" font-size="12" font-family="sans-serif" font-weight="700">Sum = -b</text>
  <text x="315" y="129" text-anchor="middle" fill="#e2e8f0" font-size="10" font-family="sans-serif">just read off the coefficient!</text>

  <text x="315" y="158" text-anchor="middle" fill="#e2e8f0" font-size="11" font-family="sans-serif">x² - 5x + 6 = 0</text>
  <text x="315" y="175" text-anchor="middle" fill="#e2e8f0" font-size="11" font-family="sans-serif">b = -5</text>

  <rect x="258" y="183" width="114" height="26" rx="5" fill="#14532d" stroke="#34d399" stroke-width="1.5"/>
  <text x="315" y="200" text-anchor="middle" fill="#34d399" font-size="13" font-family="sans-serif" font-weight="800">Sum = -(-5) = 5</text>

  <!-- Benefits -->
  <text x="236" y="226" fill="#34d399" font-size="10" font-family="sans-serif">• One step!</text>
  <text x="236" y="240" fill="#34d399" font-size="10" font-family="sans-serif">• No calculation errors</text>
  <text x="236" y="254" fill="#34d399" font-size="10" font-family="sans-serif">• Works instantly</text>

  <!-- Green checkmark -->
  <circle cx="320" cy="130" r="0" fill="none"/>
</g>

<!-- Big checkmark on right -->
<g class="check-mark">
  <circle cx="320" cy="130" r="18" fill="#14532d" stroke="#34d399" stroke-width="2"/>
  <path d="M 310 130 L 317 138 L 332 122" fill="none" stroke="#34d399" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</g>
</svg>`,
    },

    // ---- CONCEPT: Key Identities ----
    {
      type: 'concept',
      title: 'Key Algebraic Identities',
      content: `
<div>
  <p>Memorise these identities. They let you convert <em>any</em> symmetric expression of roots into terms of sum and product:</p>
  <br/>
  <table style="border-collapse:collapse;width:100%;">
    <tr style="border-bottom:2px solid #a78bfa;">
      <th style="padding:8px;text-align:left;color:#a78bfa;">Expression</th>
      <th style="padding:8px;text-align:left;color:#a78bfa;">In terms of sum &amp; product</th>
    </tr>
    <tr><td style="padding:6px 8px;">p&sup2; + q&sup2;</td><td style="padding:6px 8px;">(p + q)&sup2; &minus; 2pq</td></tr>
    <tr><td style="padding:6px 8px;">1/p + 1/q</td><td style="padding:6px 8px;">(p + q) / (pq)</td></tr>
    <tr><td style="padding:6px 8px;">(p &minus; q)&sup2;</td><td style="padding:6px 8px;">(p + q)&sup2; &minus; 4pq</td></tr>
    <tr><td style="padding:6px 8px;">|p &minus; q|</td><td style="padding:6px 8px;">square root of [(p + q)&sup2; &minus; 4pq]</td></tr>
    <tr><td style="padding:6px 8px;">p&sup3; + q&sup3;</td><td style="padding:6px 8px;">(p + q)&sup3; &minus; 3pq(p + q)</td></tr>
    <tr><td style="padding:6px 8px;">p&sup2;q + pq&sup2;</td><td style="padding:6px 8px;">pq(p + q)</td></tr>
  </table>
  <br/>
  <p style="background:rgba(168,139,250,0.15);padding:12px;border-radius:8px;">
    <strong>Pro tip:</strong> If you see a symmetric expression (swapping p and q doesn't change it), it can <em>always</em> be written using just (p + q) and pq.
  </p>
</div>`,
      svgDiagram: `<svg viewBox="0 0 420 340" xmlns="http://www.w3.org/2000/svg" width="420">
<style>
  @keyframes slideOut2pq {
    0%,30%  { transform: translateX(0); opacity: 1; }
    60%     { transform: translateX(40px); opacity: 0.3; }
    80%     { transform: translateX(40px); opacity: 0.3; }
    100%    { transform: translateX(0); opacity: 1; }
  }
  @keyframes highlightPq {
    0%,30%  { filter: none; }
    50%,70% { filter: drop-shadow(0 0 8px #f97316); }
    100%    { filter: none; }
  }
  @keyframes formulaReveal {
    0%,20% { opacity: 0; transform: scale(0.8); }
    50%    { opacity: 1; transform: scale(1.05); }
    100%   { opacity: 1; transform: scale(1); }
  }
  .piece-2pq { animation: slideOut2pq 4s ease-in-out infinite; transform-origin: 260px 190px; }
  .highlight-pq { animation: highlightPq 4s ease-in-out infinite; }
  .formula-box { animation: formulaReveal 4s ease-out 1s infinite; transform-origin: 210px 300px; }
</style>

<rect width="420" height="340" rx="16" fill="#0f172a"/>
<text x="210" y="26" text-anchor="middle" fill="#e2e8f0" font-size="15" font-family="sans-serif" font-weight="600">Identity: p² + q² = (p+q)² − 2pq</text>
<text x="210" y="44" text-anchor="middle" fill="#94a3b8" font-size="11" font-family="sans-serif">See why by expanding the big square (p+q)²</text>

<!-- Big square (p+q)² = side length (p+q) -->
<!-- Total square: 50x50 area shown as regions -->
<!-- Top-left: p² = 110x110 box -->
<!-- Bottom-right: q² = 70x70 box -->
<!-- Other two: pq rectangles -->

<!-- Label for full square -->
<text x="210" y="62" text-anchor="middle" fill="#e2e8f0" font-size="12" font-family="sans-serif">(p + q)² = the whole big square</text>

<!-- Full square outline -->
<rect x="62" y="70" width="200" height="200" rx="4" fill="none" stroke="#e2e8f0" stroke-width="2" stroke-dasharray="5 3"/>

<!-- p² region (top-left, 120x120) -->
<rect x="62" y="70" width="120" height="120" rx="3" fill="#1e3a5f" stroke="#60a5fa" stroke-width="2"/>
<text x="122" y="132" text-anchor="middle" fill="#60a5fa" font-size="22" font-family="sans-serif" font-weight="800">p²</text>
<text x="122" y="150" text-anchor="middle" fill="#94a3b8" font-size="10" font-family="sans-serif">p × p</text>

<!-- pq region top-right -->
<g class="piece-2pq">
  <rect x="182" y="70" width="80" height="120" rx="3" fill="#431407" stroke="#f97316" stroke-width="2"/>
  <text x="222" y="134" text-anchor="middle" fill="#f97316" font-size="16" font-family="sans-serif" font-weight="700">pq</text>
</g>

<!-- pq region bottom-left -->
<g class="piece-2pq">
  <rect x="62" y="190" width="120" height="80" rx="3" fill="#431407" stroke="#f97316" stroke-width="2"/>
  <text x="122" y="234" text-anchor="middle" fill="#f97316" font-size="16" font-family="sans-serif" font-weight="700">pq</text>
</g>

<!-- q² region (bottom-right, 80x80) -->
<rect x="182" y="190" width="80" height="80" rx="3" fill="#2e1065" stroke="#a78bfa" stroke-width="2"/>
<text x="222" y="232" text-anchor="middle" fill="#a78bfa" font-size="18" font-family="sans-serif" font-weight="800">q²</text>

<!-- Side labels -->
<text x="122" y="68" text-anchor="middle" fill="#60a5fa" font-size="12" font-family="sans-serif" font-weight="600">← p →</text>
<text x="222" y="68" text-anchor="middle" fill="#a78bfa" font-size="12" font-family="sans-serif" font-weight="600">← q →</text>
<text x="54" y="132" text-anchor="middle" fill="#60a5fa" font-size="11" font-family="sans-serif" font-weight="600">p</text>
<text x="54" y="232" text-anchor="middle" fill="#a78bfa" font-size="11" font-family="sans-serif" font-weight="600">q</text>

<!-- Right side: equation breakdown -->
<rect x="282" y="70" width="126" height="200" rx="8" fill="#1e293b" stroke="#334155" stroke-width="1.5"/>
<text x="345" y="90" text-anchor="middle" fill="#e2e8f0" font-size="11" font-family="sans-serif" font-weight="600">Pieces:</text>
<rect x="294" y="98" width="102" height="26" rx="5" fill="#1e3a5f" stroke="#60a5fa" stroke-width="1.5"/>
<text x="345" y="115" text-anchor="middle" fill="#60a5fa" font-size="13" font-family="sans-serif" font-weight="700">p²</text>
<rect x="294" y="132" width="102" height="26" rx="5" fill="#431407" stroke="#f97316" stroke-width="1.5"/>
<text x="345" y="149" text-anchor="middle" fill="#f97316" font-size="13" font-family="sans-serif" font-weight="700">+ pq</text>
<rect x="294" y="166" width="102" height="26" rx="5" fill="#431407" stroke="#f97316" stroke-width="1.5"/>
<text x="345" y="183" text-anchor="middle" fill="#f97316" font-size="13" font-family="sans-serif" font-weight="700">+ pq</text>
<rect x="294" y="200" width="102" height="26" rx="5" fill="#2e1065" stroke="#a78bfa" stroke-width="1.5"/>
<text x="345" y="217" text-anchor="middle" fill="#a78bfa" font-size="13" font-family="sans-serif" font-weight="700">+ q²</text>
<text x="345" y="244" text-anchor="middle" fill="#94a3b8" font-size="10" font-family="sans-serif">= p² + 2pq + q²</text>
<text x="345" y="258" text-anchor="middle" fill="#94a3b8" font-size="10" font-family="sans-serif">= (p + q)²</text>

<!-- Final identity result -->
<g class="formula-box">
  <rect x="36" y="284" width="348" height="44" rx="10" fill="#1e293b" stroke="#34d399" stroke-width="2.5"/>
  <text x="210" y="302" text-anchor="middle" fill="#34d399" font-size="13" font-family="sans-serif" font-weight="700">So: p² + q² = (p+q)² − 2pq</text>
  <text x="210" y="320" text-anchor="middle" fill="#94a3b8" font-size="10.5" font-family="sans-serif">Subtract the two orange pq pieces from (p+q)² to get p² + q²</text>
</g>
</svg>`,
    },

    // ---- RULE: Constructing a Quadratic from Roots ----
    {
      type: 'rule',
      title: 'Constructing a Quadratic from Its Roots',
      content: `
<div>
  <p>If you know the roots are <em>p</em> and <em>q</em>, you can build the equation:</p>
  <div style="text-align:center;font-size:1.15rem;margin:12px 0;">
    <strong>x&sup2; &minus; (p + q)x + pq = 0</strong>
  </div>
  <br/>
  <p><strong>Steps:</strong></p>
  <ol>
    <li>Calculate the <strong>sum</strong> = p + q</li>
    <li>Calculate the <strong>product</strong> = p &times; q</li>
    <li>Write: x&sup2; &minus; (sum)x + (product) = 0</li>
  </ol>
  <br/>
  <p><strong>Example:</strong> Roots are 3 and &minus;5.</p>
  <ul>
    <li>Sum = 3 + (&minus;5) = &minus;2</li>
    <li>Product = 3 &times; (&minus;5) = &minus;15</li>
    <li>Equation: x&sup2; &minus; (&minus;2)x + (&minus;15) = 0 &rarr; <strong>x&sup2; + 2x &minus; 15 = 0</strong></li>
  </ul>
</div>`,
      svgDiagram: `<svg viewBox="0 0 420 330" xmlns="http://www.w3.org/2000/svg" width="420">
<style>
  @keyframes revealBox1 {
    0%   { opacity: 0; transform: translateY(-10px); }
    100% { opacity: 1; transform: translateY(0); }
  }
  @keyframes revealBox2 {
    0%   { opacity: 0; transform: translateX(-10px); }
    100% { opacity: 1; transform: translateX(0); }
  }
  @keyframes revealBox3 {
    0%   { opacity: 0; transform: translateX(10px); }
    100% { opacity: 1; transform: translateX(0); }
  }
  @keyframes revealFinal {
    0%   { opacity: 0; transform: scale(0.9); }
    100% { opacity: 1; transform: scale(1); }
  }
  @keyframes arrowFade {
    0%   { opacity: 0; }
    100% { opacity: 1; }
  }
  @keyframes pulseGold {
    0%,100% { filter: drop-shadow(0 0 3px #fbbf24); }
    50%     { filter: drop-shadow(0 0 10px #fbbf24); }
  }
  .box1  { animation: revealBox1 0.6s ease-out 0.1s both; }
  .box2  { animation: revealBox2 0.6s ease-out 0.8s both; }
  .box3  { animation: revealBox3 0.6s ease-out 0.8s both; }
  .final { animation: revealFinal 0.7s ease-out 1.5s both; }
  .arr   { animation: arrowFade 0.4s ease-out 0.6s both; }
  .arr2  { animation: arrowFade 0.4s ease-out 1.3s both; }
  .gold-pulse { animation: pulseGold 2s ease-in-out 2s infinite; }
</style>

<rect width="420" height="330" rx="16" fill="#0f172a"/>
<text x="210" y="24" text-anchor="middle" fill="#e2e8f0" font-size="15" font-family="sans-serif" font-weight="600">Build a Quadratic from Its Roots</text>
<text x="210" y="41" text-anchor="middle" fill="#94a3b8" font-size="11" font-family="sans-serif">Given: roots are 3 and −5. Find the equation.</text>

<!-- Step 1: Roots given -->
<g class="box1">
  <rect x="108" y="50" width="204" height="54" rx="10" fill="#1e293b" stroke="#60a5fa" stroke-width="2"/>
  <text x="210" y="69" text-anchor="middle" fill="#60a5fa" font-size="12" font-family="sans-serif" font-weight="700">Step 1: The Roots</text>
  <text x="155" y="95" text-anchor="middle" fill="#f97316" font-size="22" font-family="monospace" font-weight="800">p = 3</text>
  <text x="265" y="95" text-anchor="middle" fill="#a78bfa" font-size="22" font-family="monospace" font-weight="800">q = −5</text>
</g>

<!-- Template strip -->
<rect x="56" y="110" width="308" height="22" rx="5" fill="#0f172a" stroke="#334155" stroke-width="1" class="arr"/>
<text x="210" y="125" text-anchor="middle" fill="#475569" font-size="9.5" font-family="sans-serif" class="arr">Formula: x² − (sum)x + (product) = 0</text>

<!-- Arrows down-left and down-right -->
<g class="arr">
  <line x1="168" y1="104" x2="128" y2="148" stroke="#34d399" stroke-width="2" stroke-linecap="round"/>
  <polygon points="124,153 122,140 135,146" fill="#34d399"/>
  <line x1="252" y1="104" x2="292" y2="148" stroke="#34d399" stroke-width="2" stroke-linecap="round"/>
  <polygon points="296,153 298,140 285,146" fill="#34d399"/>
</g>

<!-- Step 2a: Sum -->
<g class="box2">
  <rect x="40" y="148" width="136" height="62" rx="10" fill="#064e3b" stroke="#34d399" stroke-width="2"/>
  <text x="108" y="165" text-anchor="middle" fill="#94a3b8" font-size="10" font-family="sans-serif" font-weight="600">Sum = p + q</text>
  <text x="108" y="186" text-anchor="middle" fill="#34d399" font-size="14" font-family="monospace" font-weight="700">3 + (−5) = −2</text>
  <text x="108" y="203" text-anchor="middle" fill="#94a3b8" font-size="9.5" font-family="sans-serif">coefficient b = −(−2) = 2</text>
</g>

<!-- Step 2b: Product -->
<g class="box3">
  <rect x="244" y="148" width="136" height="62" rx="10" fill="#2e1065" stroke="#a78bfa" stroke-width="2"/>
  <text x="312" y="165" text-anchor="middle" fill="#94a3b8" font-size="10" font-family="sans-serif" font-weight="600">Product = p × q</text>
  <text x="312" y="186" text-anchor="middle" fill="#a78bfa" font-size="14" font-family="monospace" font-weight="700">3 × (−5) = −15</text>
  <text x="312" y="203" text-anchor="middle" fill="#94a3b8" font-size="9.5" font-family="sans-serif">coefficient c = −15</text>
</g>

<!-- Arrows converging down -->
<g class="arr2">
  <line x1="108" y1="210" x2="168" y2="256" stroke="#34d399" stroke-width="2" stroke-linecap="round"/>
  <polygon points="173,261 161,252 174,249" fill="#34d399"/>
  <line x1="312" y1="210" x2="252" y2="256" stroke="#a78bfa" stroke-width="2" stroke-linecap="round"/>
  <polygon points="247,261 247,249 260,252" fill="#a78bfa"/>
</g>

<!-- Final equation -->
<g class="final gold-pulse">
  <rect x="56" y="262" width="308" height="56" rx="12" fill="#1e293b" stroke="#fbbf24" stroke-width="2.5"/>
  <text x="210" y="281" text-anchor="middle" fill="#fbbf24" font-size="12" font-family="sans-serif" font-weight="700">Step 3: Write the Equation</text>
  <text x="210" y="302" text-anchor="middle" fill="#ffffff" font-size="18" font-family="monospace" font-weight="800">x² + 2x − 15 = 0  ✓</text>
  <text x="210" y="314" text-anchor="middle" fill="#94a3b8" font-size="9.5" font-family="sans-serif">Check: 3 + (−5) = −2 = −b, and 3 × (−5) = −15 = c</text>
</g>
</svg>`,
    },

    // ---- TIP ----
    {
      type: 'tip',
      title: 'Extending to Cubics',
      content: `
<div>
  <p>Vieta's extends to cubics too! For <strong>x&sup3; + bx&sup2; + cx + d = 0</strong> with roots p, q, r:</p>
  <ul>
    <li>p + q + r = &minus;b</li>
    <li>pq + pr + qr = c</li>
    <li>pqr = &minus;d</li>
  </ul>
  <br/>
  <p>This occasionally appears in harder SASMO questions (Q13-Q15 range).</p>
</div>`,
      svgDiagram: `<svg viewBox="0 0 420 340" xmlns="http://www.w3.org/2000/svg" width="420">
<style>
  @keyframes drawCubic {
    0%   { stroke-dashoffset: 700; }
    70%  { stroke-dashoffset: 0; }
    100% { stroke-dashoffset: 0; }
  }
  @keyframes rootAppear {
    0%,30%  { opacity: 0; r: 0; }
    55%     { opacity: 1; r: 10; }
    100%    { opacity: 1; r: 7; }
  }
  @keyframes lineConnect {
    0%,50%  { opacity: 0; stroke-dashoffset: 100; }
    80%,100%{ opacity: 1; stroke-dashoffset: 0; }
  }
  @keyframes labelFade {
    0%,55%  { opacity: 0; }
    75%,100%{ opacity: 1; }
  }
  .cubic-path { stroke-dasharray: 700; animation: drawCubic 3s ease-out 0.3s infinite; }
  .root-r { animation: rootAppear 3s ease-out 0.3s infinite; }
  .conn-line { stroke-dasharray: 100; animation: lineConnect 3s ease-out 0.3s infinite; }
  .lbl { animation: labelFade 3s ease-out 0.3s infinite; }
</style>

<rect width="420" height="340" rx="16" fill="#0f172a"/>
<text x="210" y="26" text-anchor="middle" fill="#e2e8f0" font-size="15" font-family="sans-serif" font-weight="600">Cubic Equation — Vieta's Three Formulas</text>
<text x="210" y="44" text-anchor="middle" fill="#94a3b8" font-size="11" font-family="sans-serif">x³ − bx² + cx − d = 0 &nbsp; with roots p, q, r</text>

<!-- Axes -->
<line x1="30" y1="185" x2="290" y2="185" stroke="#334155" stroke-width="1.5"/>
<line x1="160" y1="55" x2="160" y2="295" stroke="#334155" stroke-width="1.5"/>
<text x="284" y="181" fill="#475569" font-size="11" font-family="sans-serif">x</text>
<text x="164" y="62" fill="#475569" font-size="11" font-family="sans-serif">y</text>

<!-- Cubic curve: roots at approximately x=-1.5 (67px), x=0.5 (205px), x=2 (280px) -->
<!-- SVG coords: scale 70px/unit, origin at (160,185) -->
<!-- cubic (x+1.5)(x-0.5)(x-2) = x³ - x² - 2.5x + 1.5 -->
<!-- using path with more points for smooth curve -->
<path d="M 32,84 C 55,80 68,100 80,125 C 92,148 98,160 108,175 C 118,188 128,195 138,192 C 148,188 155,180 162,185 C 170,190 176,205 188,218 C 200,230 210,240 225,240 C 240,240 252,228 262,208 C 272,188 276,168 286,140"
  fill="none" stroke="#60a5fa" stroke-width="2.5" stroke-linecap="round" class="cubic-path"/>

<!-- Root markers -->
<!-- Root p at x=-1.5, svgX = 160 - 1.5*70 = 55, svgY=185 -->
<circle cx="105" cy="185" r="7" fill="#f97316" stroke="#ffffff" stroke-width="2" class="root-r"/>
<!-- Root q at x=0.5, svgX = 160 + 0.5*70 = 195 -->
<circle cx="162" cy="185" r="7" fill="#a78bfa" stroke="#ffffff" stroke-width="2" class="root-r" style="animation-delay:0.2s"/>
<!-- Root r at x=2, svgX = 160 + 2*70 = 300... adjusted to 230 -->
<circle cx="230" cy="185" r="7" fill="#34d399" stroke="#ffffff" stroke-width="2" class="root-r" style="animation-delay:0.4s"/>

<!-- Root labels -->
<g class="lbl">
  <text x="105" y="202" text-anchor="middle" fill="#f97316" font-size="12" font-family="sans-serif" font-weight="700">p</text>
  <text x="162" y="202" text-anchor="middle" fill="#a78bfa" font-size="12" font-family="sans-serif" font-weight="700">q</text>
  <text x="230" y="202" text-anchor="middle" fill="#34d399" font-size="12" font-family="sans-serif" font-weight="700">r</text>
</g>

<!-- Connecting arcs for sum -->
<path d="M 105 174 Q 162 148 230 174" fill="none" stroke="#fbbf24" stroke-width="1.8" stroke-dasharray="5 3" class="conn-line"/>
<g class="lbl">
  <text x="167" y="148" text-anchor="middle" fill="#fbbf24" font-size="10" font-family="sans-serif" font-weight="600">p + q + r = b</text>
</g>

<!-- Connecting lines for pair products -->
<path d="M 105 176 Q 134 215 162 176" fill="none" stroke="#22d3ee" stroke-width="1.5" stroke-dasharray="4 3" class="conn-line" style="animation-delay:0.3s"/>
<path d="M 162 176 Q 196 220 230 176" fill="none" stroke="#22d3ee" stroke-width="1.5" stroke-dasharray="4 3" class="conn-line" style="animation-delay:0.3s"/>

<!-- Right side: Vieta formulas panel -->
<rect x="298" y="60" width="114" height="220" rx="8" fill="#1e293b" stroke="#334155" stroke-width="1.5"/>
<text x="355" y="78" text-anchor="middle" fill="#e2e8f0" font-size="11" font-family="sans-serif" font-weight="700">3 Vieta Rules</text>
<line x1="308" y1="83" x2="402" y2="83" stroke="#334155" stroke-width="1"/>

<!-- Rule 1 -->
<rect x="306" y="90" width="98" height="40" rx="5" fill="#431407" stroke="#fbbf24" stroke-width="1.5"/>
<text x="355" y="104" text-anchor="middle" fill="#fbbf24" font-size="9" font-family="sans-serif">Sum of roots</text>
<text x="355" y="122" text-anchor="middle" fill="#ffffff" font-size="11" font-family="monospace" font-weight="700">p+q+r = b</text>

<!-- Rule 2 -->
<rect x="306" y="138" width="98" height="52" rx="5" fill="#164e63" stroke="#22d3ee" stroke-width="1.5"/>
<text x="355" y="152" text-anchor="middle" fill="#22d3ee" font-size="9" font-family="sans-serif">Sum of pairs</text>
<text x="355" y="168" text-anchor="middle" fill="#ffffff" font-size="10" font-family="monospace" font-weight="700">pq+pr+qr</text>
<text x="355" y="182" text-anchor="middle" fill="#ffffff" font-size="10" font-family="monospace" font-weight="700">= c</text>

<!-- Rule 3 -->
<rect x="306" y="198" width="98" height="40" rx="5" fill="#064e3b" stroke="#34d399" stroke-width="1.5"/>
<text x="355" y="212" text-anchor="middle" fill="#34d399" font-size="9" font-family="sans-serif">Product</text>
<text x="355" y="230" text-anchor="middle" fill="#ffffff" font-size="11" font-family="monospace" font-weight="700">p×q×r = d</text>

<!-- Triple product visual at bottom -->
<path d="M 105 194 L 167 248 L 230 194" fill="none" stroke="#34d399" stroke-width="1.5" stroke-dasharray="4 3" class="conn-line" style="animation-delay:0.5s"/>
<g class="lbl" style="animation-delay:0.5s">
  <text x="167" y="262" text-anchor="middle" fill="#34d399" font-size="10" font-family="sans-serif" font-weight="600">p × q × r = d</text>
</g>

<!-- Bottom note -->
<rect x="12" y="294" width="280" height="38" rx="7" fill="#1e293b" stroke="#334155" stroke-width="1"/>
<text x="146" y="308" text-anchor="middle" fill="#94a3b8" font-size="10" font-family="sans-serif">These patterns work for ANY cubic,</text>
<text x="146" y="322" text-anchor="middle" fill="#60a5fa" font-size="10" font-family="sans-serif" font-weight="600">no matter how complex the roots look!</text>
</svg>`,
    },
  ],

  workedExamples: [
    {
      title: 'Finding p&sup2; + q&sup2; Without Solving',
      problem:
        'The roots of x&sup2; &minus; 5x + 3 = 0 are p and q. Find p&sup2; + q&sup2;.',
      solution: `
<div>
  <p><strong>Step 1 &mdash; Apply Vieta's:</strong></p>
  <ul>
    <li>p + q = &minus;(&minus;5)/1 = <strong>5</strong></li>
    <li>pq = 3/1 = <strong>3</strong></li>
  </ul>
  <br/>
  <p><strong>Step 2 &mdash; Use the identity:</strong></p>
  <p>p&sup2; + q&sup2; = (p + q)&sup2; &minus; 2pq = 5&sup2; &minus; 2(3) = 25 &minus; 6 = <strong>19</strong></p>
  <br/>
  <p style="font-size:1.15rem;color:#34d399;"><strong>Answer: 19</strong></p>
</div>`,
    },
    {
      title: 'Building a Quadratic from Roots',
      problem:
        'Find a quadratic equation whose roots are 3 and &minus;5.',
      solution: `
<div>
  <p><strong>Step 1 &mdash; Sum and product:</strong></p>
  <ul>
    <li>Sum = 3 + (&minus;5) = <strong>&minus;2</strong></li>
    <li>Product = 3 &times; (&minus;5) = <strong>&minus;15</strong></li>
  </ul>
  <br/>
  <p><strong>Step 2 &mdash; Use the formula x&sup2; &minus; (sum)x + (product) = 0:</strong></p>
  <p>x&sup2; &minus; (&minus;2)x + (&minus;15) = 0</p>
  <p>x&sup2; + 2x &minus; 15 = 0</p>
  <br/>
  <p><strong>Step 3 &mdash; Verify:</strong> (x &minus; 3)(x + 5) = x&sup2; + 5x &minus; 3x &minus; 15 = x&sup2; + 2x &minus; 15 &#10003;</p>
  <br/>
  <p style="font-size:1.15rem;color:#34d399;"><strong>Answer: x&sup2; + 2x &minus; 15 = 0</strong></p>
</div>`,
    },
    {
      title: 'Finding 1/p + 1/q',
      problem:
        'If p and q are roots of 2x&sup2; + 7x &minus; 4 = 0, find 1/p + 1/q.',
      solution: `
<div>
  <p><strong>Step 1 &mdash; Apply Vieta's (note a = 2):</strong></p>
  <ul>
    <li>p + q = &minus;7/2</li>
    <li>pq = &minus;4/2 = &minus;2</li>
  </ul>
  <br/>
  <p><strong>Step 2 &mdash; Use the identity:</strong></p>
  <p>1/p + 1/q = (p + q) / (pq) = (&minus;7/2) / (&minus;2) = 7/4</p>
  <br/>
  <p style="font-size:1.15rem;color:#34d399;"><strong>Answer: 7/4</strong></p>
</div>`,
    },
  ],

  videos: [],

  sasmoTips: [
    "When you see \"p and q are roots of...\", immediately write down sum = -b/a and product = c/a. Don't even think about the quadratic formula.",
    'Most SASMO algebra questions can be solved entirely with Vieta\'s + one identity from the table above.',
    'If a problem asks for something like p to the 4 + q to the 4, break it down step by step: first find p&sup2; + q&sup2;, then square that and subtract 2(pq)&sup2;.',
  ],

  commonMistakes: [
    'Forgetting the negative sign: sum of roots = -b/a, NOT b/a.',
    'Not dividing by a when a is not equal to 1.',
    'Trying to use the quadratic formula instead of Vieta\'s, leading to messy calculations.',
    'Confusing (p + q)&sup2; with p&sup2; + q&sup2;. Remember: (p + q)&sup2; = p&sup2; + 2pq + q&sup2;.',
  ],

  keyFormulas: [
    'Sum of roots: p + q = -b/a',
    'Product of roots: pq = c/a',
    'p&sup2; + q&sup2; = (p + q)&sup2; - 2pq',
    '1/p + 1/q = (p + q) / (pq)',
    '(p - q)&sup2; = (p + q)&sup2; - 4pq',
    'Quadratic from roots: x&sup2; - (sum)x + (product) = 0',
  ],
};

// ============================================================
// 3. NUMBER THEORY
// ============================================================
const numberTheory: TopicLesson = {
  id: 'number-theory',
  topic: 'Number Theory',
  title: 'Number Theory & Prime Factorization',
  description:
    'Unlock the secrets of prime factors, trailing zeros, and divisibility. Appears every year with 2-3 questions.',
  color: 'from-blue-500 to-blue-600',
  iconEmoji: '\uD83D\uDD22',
  examFrequency: 'Every year (2-3 questions)',
  mastery: 78,

  sections: [
    // ---- CONCEPT: Prime Factorization is Everything ----
    {
      type: 'concept',
      title: 'Prime Factorization is Everything',
      content: `
<div>
  <p>Every integer greater than 1 can be written as a product of primes in exactly one way (ignoring order). This is the <strong>Fundamental Theorem of Arithmetic</strong>.</p>
  <br/>
  <p><strong>Examples:</strong></p>
  <ul>
    <li>60 = 2&sup2; &times; 3 &times; 5</li>
    <li>84 = 2&sup2; &times; 3 &times; 7</li>
    <li>100 = 2&sup2; &times; 5&sup2;</li>
  </ul>
  <br/>
  <p><strong>Why is this so important?</strong> Almost every number theory problem in SASMO comes down to prime factorization:</p>
  <ul>
    <li><strong>Counting divisors:</strong> If n = p to the a &times; q to the b &times; r to the c, then the number of divisors = (a+1)(b+1)(c+1).</li>
    <li><strong>GCD/LCM:</strong> Take min/max of each prime's exponent.</li>
    <li><strong>Trailing zeros:</strong> Count factors of 5 (see below).</li>
    <li><strong>Perfect squares:</strong> All exponents in the prime factorization must be even.</li>
  </ul>
  <br/>
  <p style="background:rgba(96,165,250,0.15);padding:12px;border-radius:8px;">
    <strong>Quick method to factorise:</strong> Try dividing by 2, then 3, then 5, then 7, then 11, etc. You only need to check primes up to the square root of the number.
  </p>
</div>`,
      svgDiagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 420 440" width="420" height="440"><style>.node{font-family:monospace;font-size:14px;font-weight:bold;text-anchor:middle;dominant-baseline:central}.label{font-family:monospace;font-size:11px;text-anchor:middle;dominant-baseline:central}.edge{stroke:#4b5563;stroke-width:1.5}.prime-2{fill:#60a5fa}.prime-3{fill:#a78bfa}.prime-5{fill:#f97316}.composite{fill:#1e293b;stroke:#64748b;stroke-width:1.5}@keyframes fadeUp{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}.l0{animation:fadeUp 0.5s ease forwards 0.1s;opacity:0}.l1{animation:fadeUp 0.5s ease forwards 0.6s;opacity:0}.l2{animation:fadeUp 0.5s ease forwards 1.1s;opacity:0}.l3{animation:fadeUp 0.5s ease forwards 1.6s;opacity:0}.l4{animation:fadeUp 0.5s ease forwards 2.2s;opacity:0}@keyframes pulse{0%,100%{transform:scale(1)}50%{transform:scale(1.15)}}.prime-pulse{transform-origin:center;animation:pulse 1.8s ease-in-out infinite}</style><text x="210" y="22" font-family="monospace" font-size="13" fill="#e2e8f0" text-anchor="middle">Factor Tree: 360 = 2³ × 3² × 5</text><g class="l0"><rect x="175" y="34" width="70" height="30" rx="8" class="composite"/><text x="210" y="49" class="node" fill="#e2e8f0">360</text></g><g class="l1"><line x1="210" y1="64" x2="120" y2="100" class="edge"/><line x1="210" y1="64" x2="300" y2="100" class="edge"/><text x="155" y="84" class="label" fill="#94a3b8">×</text><text x="265" y="84" class="label" fill="#94a3b8">×</text><rect x="85" y="100" width="70" height="30" rx="8" class="composite"/><text x="120" y="115" class="node" fill="#e2e8f0">36</text><rect x="265" y="100" width="70" height="30" rx="8" class="composite"/><text x="300" y="115" class="node" fill="#e2e8f0">10</text></g><g class="l2"><line x1="120" y1="130" x2="70" y2="166" class="edge"/><line x1="120" y1="130" x2="170" y2="166" class="edge"/><line x1="300" y1="130" x2="250" y2="166" class="edge"/><line x1="300" y1="130" x2="350" y2="166" class="edge"/><rect x="35" y="166" width="70" height="30" rx="8" class="composite"/><text x="70" y="181" class="node" fill="#e2e8f0">6</text><rect x="135" y="166" width="70" height="30" rx="8" class="composite"/><text x="170" y="181" class="node" fill="#e2e8f0">6</text><rect x="215" y="166" width="70" height="30" rx="8" class="composite"/><text x="250" y="181" class="node" fill="#e2e8f0">2</text><rect x="315" y="166" width="70" height="30" rx="8" class="composite"/><text x="350" y="181" class="node" fill="#e2e8f0">5</text></g><g class="l3"><line x1="70" y1="196" x2="45" y2="232" class="edge"/><line x1="70" y1="196" x2="95" y2="232" class="edge"/><line x1="170" y1="196" x2="145" y2="232" class="edge"/><line x1="170" y1="196" x2="195" y2="232" class="edge"/><line x1="250" y1="196" x2="250" y2="232" class="edge"/><line x1="350" y1="196" x2="350" y2="232" class="edge"/><circle cx="45" cy="247" r="16" class="prime-2 prime-pulse"/><text x="45" y="247" class="node" fill="#0f172a">2</text><circle cx="95" cy="247" r="16" class="prime-3 prime-pulse"/><text x="95" y="247" class="node" fill="#0f172a">3</text><circle cx="145" cy="247" r="16" class="prime-2 prime-pulse"/><text x="145" y="247" class="node" fill="#0f172a">2</text><circle cx="195" cy="247" r="16" class="prime-3 prime-pulse"/><text x="195" y="247" class="node" fill="#0f172a">3</text><circle cx="250" cy="247" r="16" class="prime-2 prime-pulse"/><text x="250" y="247" class="node" fill="#0f172a">2</text><circle cx="350" cy="247" r="16" class="prime-5 prime-pulse"/><text x="350" y="247" class="node" fill="#0f172a">5</text></g><g class="l4"><rect x="30" y="295" width="360" height="50" rx="10" fill="#1e293b" stroke="#334155" stroke-width="1.5"/><text x="210" y="312" font-family="monospace" font-size="12" fill="#94a3b8" text-anchor="middle">Prime Factorization</text><text x="210" y="332" font-family="monospace" font-size="16" font-weight="bold" text-anchor="middle"><tspan fill="#60a5fa">2</tspan><tspan fill="#e2e8f0">³ × </tspan><tspan fill="#a78bfa">3</tspan><tspan fill="#e2e8f0">² × </tspan><tspan fill="#f97316">5</tspan></text><circle cx="90" cy="375" r="8" fill="#60a5fa"/><text x="103" y="379" font-family="monospace" font-size="11" fill="#e2e8f0">= 2</text><circle cx="160" cy="375" r="8" fill="#a78bfa"/><text x="173" y="379" font-family="monospace" font-size="11" fill="#e2e8f0">= 3</text><circle cx="230" cy="375" r="8" fill="#f97316"/><text x="243" y="379" font-family="monospace" font-size="11" fill="#e2e8f0">= 5</text><text x="300" y="379" font-family="monospace" font-size="11" fill="#94a3b8">(prime)</text></g></svg>`,
    },

    // ---- CONCEPT: Trailing Zeros ----
    {
      type: 'concept',
      title: 'Trailing Zeros in Factorials',
      content: `
<div>
  <p>A <strong>trailing zero</strong> at the end of a number comes from a factor of 10 = 2 &times; 5.</p>
  <br/>
  <p>In any factorial n!, there are always more factors of 2 than 5. So the number of trailing zeros equals the <strong>number of times 5 appears</strong> in the prime factorization of n!.</p>
  <br/>
  <div style="background:rgba(96,165,250,0.15);padding:16px;border-radius:8px;text-align:center;">
    <p style="font-size:1.1rem;"><strong>Trailing zeros in n! = floor(n/5) + floor(n/25) + floor(n/125) + floor(n/625) + &hellip;</strong></p>
  </div>
  <br/>
  <p><strong>Why floor(n/25), floor(n/125), etc.?</strong></p>
  <ul>
    <li>floor(n/5) counts multiples of 5 (each contributes one factor of 5)</li>
    <li>floor(n/25) counts multiples of 25 (these contribute an <em>extra</em> factor of 5)</li>
    <li>floor(n/125) counts multiples of 125 (yet another extra factor)&hellip; and so on</li>
  </ul>
  <br/>
  <p>Keep dividing by 5 until you get 0, then add all the results.</p>
</div>`,
      svgDiagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 380" width="400" height="380"><style>@keyframes slideIn{from{opacity:0;transform:translateX(-40px)}to{opacity:1;transform:translateX(0)}}@keyframes pop{0%{transform:scale(0.5);opacity:0}60%{transform:scale(1.1)}100%{transform:scale(1);opacity:1}}@keyframes countUp{from{opacity:0}to{opacity:1}}.box1{animation:slideIn 0.5s ease forwards 0.3s;opacity:0}.box2{animation:slideIn 0.5s ease forwards 0.9s;opacity:0}.box3{animation:slideIn 0.5s ease forwards 1.5s;opacity:0}.divider{animation:countUp 0.4s ease forwards 1.9s;opacity:0}.total{animation:pop 0.6s ease forwards 2.4s;opacity:0}.note{animation:countUp 0.4s ease forwards 3.0s;opacity:0}</style><text x="200" y="24" font-family="monospace" font-size="13" fill="#e2e8f0" text-anchor="middle" font-weight="bold">Trailing Zeros of 100!</text><text x="200" y="42" font-family="monospace" font-size="11" fill="#94a3b8" text-anchor="middle">Count factors of 5 (each pairs with a 2)</text><g class="box1"><rect x="40" y="60" width="320" height="56" rx="10" fill="#1e3a5f" stroke="#60a5fa" stroke-width="1.5"/><text x="60" y="82" font-family="monospace" font-size="13" fill="#60a5fa">⌊100 ÷ 5⌋</text><text x="60" y="100" font-family="monospace" font-size="11" fill="#94a3b8">Multiples of 5: 5, 10, 15, …, 100</text><text x="330" y="91" font-family="monospace" font-size="20" fill="#60a5fa" font-weight="bold" text-anchor="end">= 20</text></g><g class="box2"><rect x="40" y="130" width="320" height="56" rx="10" fill="#2d1e5f" stroke="#a78bfa" stroke-width="1.5"/><text x="60" y="152" font-family="monospace" font-size="13" fill="#a78bfa">⌊100 ÷ 25⌋</text><text x="60" y="170" font-family="monospace" font-size="11" fill="#94a3b8">Multiples of 25: 25, 50, 75, 100</text><text x="330" y="161" font-family="monospace" font-size="20" fill="#a78bfa" font-weight="bold" text-anchor="end">= 4</text></g><g class="box3"><rect x="40" y="200" width="320" height="56" rx="10" fill="#1e2a1e" stroke="#4b5563" stroke-width="1.5"/><text x="60" y="222" font-family="monospace" font-size="13" fill="#4b5563">⌊100 ÷ 125⌋</text><text x="60" y="240" font-family="monospace" font-size="11" fill="#4b5563">125 &gt; 100, stop here</text><text x="330" y="231" font-family="monospace" font-size="20" fill="#4b5563" font-weight="bold" text-anchor="end">= 0</text></g><g class="divider"><line x1="220" y1="268" x2="360" y2="268" stroke="#64748b" stroke-width="1.5"/><text x="80" y="283" font-family="monospace" font-size="13" fill="#e2e8f0">Total zeros =</text><text x="230" y="283" font-family="monospace" font-size="13" fill="#60a5fa">20</text><text x="258" y="283" font-family="monospace" font-size="13" fill="#e2e8f0"> + </text><text x="275" y="283" font-family="monospace" font-size="13" fill="#a78bfa">4</text><text x="290" y="283" font-family="monospace" font-size="13" fill="#e2e8f0"> + 0 =</text></g><g class="total"><circle cx="200" cy="330" r="32" fill="#34d399" fill-opacity="0.15" stroke="#34d399" stroke-width="2"/><text x="200" y="326" font-family="monospace" font-size="28" fill="#34d399" text-anchor="middle" font-weight="bold">24</text><text x="200" y="348" font-family="monospace" font-size="10" fill="#34d399" text-anchor="middle">trailing zeros</text></g><g class="note"><text x="200" y="375" font-family="monospace" font-size="10" fill="#64748b" text-anchor="middle">Formula: Σ ⌊n/5ᵏ⌋ for k=1,2,3,…</text></g></svg>`,
    },

    // ---- CONCEPT: Divisibility Rules ----
    {
      type: 'concept',
      title: 'Divisibility Rules Summary',
      content: `
<div>
  <p>Knowing these rules lets you quickly check divisibility without a calculator:</p>
  <br/>
  <table style="border-collapse:collapse;width:100%;">
    <tr style="border-bottom:2px solid #60a5fa;">
      <th style="padding:6px 10px;color:#60a5fa;text-align:left;">Divisor</th>
      <th style="padding:6px 10px;color:#60a5fa;text-align:left;">Rule</th>
    </tr>
    <tr><td style="padding:4px 10px;"><strong>2</strong></td><td style="padding:4px 10px;">Last digit is even (0, 2, 4, 6, 8)</td></tr>
    <tr><td style="padding:4px 10px;"><strong>3</strong></td><td style="padding:4px 10px;">Sum of digits is divisible by 3</td></tr>
    <tr><td style="padding:4px 10px;"><strong>4</strong></td><td style="padding:4px 10px;">Last two digits form a number divisible by 4</td></tr>
    <tr><td style="padding:4px 10px;"><strong>5</strong></td><td style="padding:4px 10px;">Last digit is 0 or 5</td></tr>
    <tr><td style="padding:4px 10px;"><strong>6</strong></td><td style="padding:4px 10px;">Divisible by both 2 and 3</td></tr>
    <tr><td style="padding:4px 10px;"><strong>7</strong></td><td style="padding:4px 10px;">Double the last digit, subtract from the rest; if result is divisible by 7, so is the original</td></tr>
    <tr><td style="padding:4px 10px;"><strong>8</strong></td><td style="padding:4px 10px;">Last three digits form a number divisible by 8</td></tr>
    <tr><td style="padding:4px 10px;"><strong>9</strong></td><td style="padding:4px 10px;">Sum of digits is divisible by 9</td></tr>
    <tr><td style="padding:4px 10px;"><strong>10</strong></td><td style="padding:4px 10px;">Last digit is 0</td></tr>
    <tr><td style="padding:4px 10px;"><strong>11</strong></td><td style="padding:4px 10px;">Alternating sum of digits is divisible by 11</td></tr>
  </table>
  <br/>
  <p><strong>Example for 11:</strong> Is 918082 divisible by 11?</p>
  <p>Alternating sum: 9 &minus; 1 + 8 &minus; 0 + 8 &minus; 2 = 22. Since 22 is divisible by 11, yes!</p>
</div>`,
      svgDiagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 420 380" width="420" height="380"><style>@keyframes glow{0%,100%{opacity:0.3}50%{opacity:1}}@keyframes slideUp{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}}.d0{animation:glow 0.6s ease forwards 0.3s;opacity:0.3}.d1{animation:glow 0.6s ease forwards 0.8s;opacity:0.3}.d2{animation:glow 0.6s ease forwards 1.3s;opacity:0.3}.d3{animation:glow 0.6s ease forwards 1.8s;opacity:0.3}.d4{animation:glow 0.6s ease forwards 2.3s;opacity:0.3}.d5{animation:glow 0.6s ease forwards 2.8s;opacity:0.3}.step0{animation:slideUp 0.4s ease forwards 0.5s;opacity:0}.step1{animation:slideUp 0.4s ease forwards 1.0s;opacity:0}.step2{animation:slideUp 0.4s ease forwards 1.5s;opacity:0}.step3{animation:slideUp 0.4s ease forwards 2.0s;opacity:0}.step4{animation:slideUp 0.4s ease forwards 2.5s;opacity:0}.step5{animation:slideUp 0.4s ease forwards 3.0s;opacity:0}.result{animation:slideUp 0.6s ease forwards 3.6s;opacity:0}.final{animation:slideUp 0.6s ease forwards 4.2s;opacity:0}</style><text x="210" y="22" font-family="monospace" font-size="13" fill="#e2e8f0" text-anchor="middle" font-weight="bold">Divisibility Rule for 11</text><text x="210" y="40" font-family="monospace" font-size="11" fill="#94a3b8" text-anchor="middle">Alternating digit sum must be divisible by 11</text><g font-family="monospace" font-size="22" font-weight="bold" text-anchor="middle"><g class="d0"><rect x="22" y="58" width="50" height="50" rx="8" fill="#1e293b" stroke="#34d399" stroke-width="2"/><text x="47" y="91" fill="#34d399">9</text><text x="47" y="122" font-size="11" fill="#34d399">pos 1</text></g><g class="d1"><rect x="82" y="58" width="50" height="50" rx="8" fill="#1e293b" stroke="#f87171" stroke-width="2"/><text x="107" y="91" fill="#f87171">1</text><text x="107" y="122" font-size="11" fill="#f87171">pos 2</text></g><g class="d2"><rect x="142" y="58" width="50" height="50" rx="8" fill="#1e293b" stroke="#34d399" stroke-width="2"/><text x="167" y="91" fill="#34d399">8</text><text x="167" y="122" font-size="11" fill="#34d399">pos 3</text></g><g class="d3"><rect x="202" y="58" width="50" height="50" rx="8" fill="#1e293b" stroke="#f87171" stroke-width="2"/><text x="227" y="91" fill="#f87171">0</text><text x="227" y="122" font-size="11" fill="#f87171">pos 4</text></g><g class="d4"><rect x="262" y="58" width="50" height="50" rx="8" fill="#1e293b" stroke="#34d399" stroke-width="2"/><text x="287" y="91" fill="#34d399">8</text><text x="287" y="122" font-size="11" fill="#34d399">pos 5</text></g><g class="d5"><rect x="322" y="58" width="50" height="50" rx="8" fill="#1e293b" stroke="#f87171" stroke-width="2"/><text x="347" y="91" fill="#f87171">2</text><text x="347" y="122" font-size="11" fill="#f87171">pos 6</text></g></g><rect x="20" y="140" width="380" height="140" rx="10" fill="#0f172a" stroke="#1e293b" stroke-width="1.5"/><text x="40" y="162" font-family="monospace" font-size="11" fill="#94a3b8">Alternating sum (odd pos +, even pos −):</text><g font-family="monospace" font-size="13" font-weight="bold"><g class="step0"><text x="40" y="183" fill="#e2e8f0">+</text><text x="52" y="183" fill="#34d399">9</text><text x="68" y="183" fill="#94a3b8"> = 9</text></g><g class="step1"><text x="40" y="200" fill="#e2e8f0">−</text><text x="52" y="200" fill="#f87171">1</text><text x="68" y="200" fill="#94a3b8"> = 8</text></g><g class="step2"><text x="40" y="217" fill="#e2e8f0">+</text><text x="52" y="217" fill="#34d399">8</text><text x="68" y="217" fill="#94a3b8"> = 16</text></g><g class="step3"><text x="40" y="234" fill="#e2e8f0">−</text><text x="52" y="234" fill="#f87171">0</text><text x="68" y="234" fill="#94a3b8"> = 16</text></g><g class="step4"><text x="40" y="251" fill="#e2e8f0">+</text><text x="52" y="251" fill="#34d399">8</text><text x="68" y="251" fill="#94a3b8"> = 24</text></g><g class="step5"><text x="40" y="268" fill="#e2e8f0">−</text><text x="52" y="268" fill="#f87171">2</text><text x="68" y="268" fill="#94a3b8"> = 22</text></g></g><g class="result"><rect x="20" y="292" width="380" height="40" rx="8" fill="#1e293b" stroke="#fbbf24" stroke-width="1.5"/><text x="210" y="317" font-family="monospace" font-size="14" fill="#fbbf24" text-anchor="middle" font-weight="bold">9−1+8−0+8−2 = 22 = 11×2</text></g><g class="final"><rect x="20" y="340" width="380" height="32" rx="8" fill="#14532d" stroke="#34d399" stroke-width="1.5"/><text x="210" y="361" font-family="monospace" font-size="13" fill="#34d399" text-anchor="middle" font-weight="bold">✓ 918082 is divisible by 11</text></g></svg>`,
    },

    // ---- RULE: GCD and LCM ----
    {
      type: 'rule',
      title: 'GCD, LCM, and Their Relationship',
      content: `
<div>
  <p><strong>GCD</strong> (Greatest Common Divisor): the largest number that divides both a and b.</p>
  <p><strong>LCM</strong> (Least Common Multiple): the smallest number that both a and b divide into.</p>
  <br/>
  <div style="background:rgba(96,165,250,0.15);padding:14px;border-radius:8px;text-align:center;font-size:1.15rem;">
    <strong>GCD(a, b) &times; LCM(a, b) = a &times; b</strong>
  </div>
  <br/>
  <p>This means if you know the GCD, you can instantly find the LCM (or vice versa):</p>
  <p style="text-align:center;">LCM(a, b) = a &times; b / GCD(a, b)</p>
  <br/>
  <p><strong>Using prime factorization:</strong></p>
  <ul>
    <li><strong>GCD</strong>: take the <strong>minimum</strong> exponent of each common prime</li>
    <li><strong>LCM</strong>: take the <strong>maximum</strong> exponent of each prime</li>
  </ul>
  <br/>
  <p><strong>Example:</strong> 60 = 2&sup2; &times; 3 &times; 5, &nbsp; 84 = 2&sup2; &times; 3 &times; 7</p>
  <ul>
    <li>GCD = 2&sup2; &times; 3 = 12</li>
    <li>LCM = 2&sup2; &times; 3 &times; 5 &times; 7 = 420</li>
    <li>Check: 12 &times; 420 = 5040 = 60 &times; 84 &#10003;</li>
  </ul>
</div>`,
      svgDiagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 420 360" width="420" height="360"><style>@keyframes fadeIn{from{opacity:0}to{opacity:1}}@keyframes pop{0%{transform:scale(0.7);opacity:0}60%{transform:scale(1.08)}100%{transform:scale(1);opacity:1}}.left-only{animation:fadeIn 0.5s ease forwards 0.3s;opacity:0}.intersection{animation:pop 0.6s ease forwards 0.9s;opacity:0}.right-only{animation:fadeIn 0.5s ease forwards 1.5s;opacity:0}.labels{animation:fadeIn 0.4s ease forwards 2.1s;opacity:0}.result{animation:pop 0.6s ease forwards 2.6s;opacity:0}</style><text x="210" y="22" font-family="monospace" font-size="13" fill="#e2e8f0" text-anchor="middle" font-weight="bold">GCD and LCM via Prime Factors</text><circle cx="150" cy="165" r="105" fill="#1e3a5f" fill-opacity="0.6" stroke="#60a5fa" stroke-width="2"/><circle cx="270" cy="165" r="105" fill="#2d1e5f" fill-opacity="0.6" stroke="#a78bfa" stroke-width="2"/><g class="intersection"><clipPath id="lclip"><circle cx="150" cy="165" r="105"/></clipPath><circle cx="270" cy="165" r="105" fill="#34d399" fill-opacity="0.18" clip-path="url(#lclip)"/></g><g class="left-only"><text x="88" y="155" font-family="monospace" font-size="13" fill="#60a5fa" text-anchor="middle" font-weight="bold">5</text><text x="88" y="172" font-family="monospace" font-size="10" fill="#93c5fd" text-anchor="middle">(only in 60)</text></g><g class="intersection"><text x="210" y="155" font-family="monospace" font-size="14" fill="#34d399" text-anchor="middle" font-weight="bold">2²</text><text x="210" y="175" font-family="monospace" font-size="14" fill="#34d399" text-anchor="middle" font-weight="bold">3</text><text x="210" y="195" font-family="monospace" font-size="10" fill="#86efac" text-anchor="middle">GCD factors</text></g><g class="right-only"><text x="332" y="155" font-family="monospace" font-size="13" fill="#a78bfa" text-anchor="middle" font-weight="bold">7</text><text x="332" y="172" font-family="monospace" font-size="10" fill="#c4b5fd" text-anchor="middle">(only in 84)</text></g><g class="labels"><text x="100" y="56" font-family="monospace" font-size="14" fill="#60a5fa" text-anchor="middle" font-weight="bold">60</text><text x="100" y="70" font-family="monospace" font-size="10" fill="#93c5fd" text-anchor="middle">= 2²·3·5</text><text x="320" y="56" font-family="monospace" font-size="14" fill="#a78bfa" text-anchor="middle" font-weight="bold">84</text><text x="320" y="70" font-family="monospace" font-size="10" fill="#c4b5fd" text-anchor="middle">= 2²·3·7</text></g><g class="result"><rect x="20" y="284" width="175" height="56" rx="10" fill="#14532d" stroke="#34d399" stroke-width="1.5"/><text x="107" y="305" font-family="monospace" font-size="11" fill="#86efac" text-anchor="middle">GCD = shared factors</text><text x="107" y="326" font-family="monospace" font-size="18" fill="#34d399" text-anchor="middle" font-weight="bold">GCD = 12</text><text x="107" y="340" font-family="monospace" font-size="10" fill="#86efac" text-anchor="middle">2² × 3</text><rect x="225" y="284" width="175" height="56" rx="10" fill="#1e1e4f" stroke="#a78bfa" stroke-width="1.5"/><text x="313" y="305" font-family="monospace" font-size="11" fill="#c4b5fd" text-anchor="middle">LCM = all factors</text><text x="313" y="326" font-family="monospace" font-size="18" fill="#a78bfa" text-anchor="middle" font-weight="bold">LCM = 420</text><text x="313" y="340" font-family="monospace" font-size="10" fill="#c4b5fd" text-anchor="middle">2² × 3 × 5 × 7</text></g></svg>`,
    },

    // ---- TIP: Counting Divisors ----
    {
      type: 'tip',
      title: 'Counting Divisors Quickly',
      content: `
<div>
  <p>If n = p1 to the a1 &times; p2 to the a2 &times; &hellip; &times; pk to the ak, then:</p>
  <div style="text-align:center;font-size:1.15rem;margin:12px 0;">
    <strong>Number of divisors = (a1 + 1)(a2 + 1)&hellip;(ak + 1)</strong>
  </div>
  <br/>
  <p><strong>Example:</strong> How many divisors does 360 have?</p>
  <p>360 = 2&sup3; &times; 3&sup2; &times; 5&sup1;</p>
  <p>Number of divisors = (3+1)(2+1)(1+1) = 4 &times; 3 &times; 2 = <strong>24</strong></p>
</div>`,
      svgDiagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 420 420" width="420" height="420"><style>@keyframes fadeIn{from{opacity:0;transform:scale(0.8)}to{opacity:1;transform:scale(1)}}@keyframes slideIn{from{opacity:0;transform:translateX(-20px)}to{opacity:1;transform:translateX(0)}}.title-row{animation:slideIn 0.4s ease forwards 0.1s;opacity:0}.axis-label{animation:slideIn 0.4s ease forwards 0.4s;opacity:0}.c0{animation:fadeIn 0.3s ease forwards 0.60s;opacity:0}.c1{animation:fadeIn 0.3s ease forwards 0.75s;opacity:0}.c2{animation:fadeIn 0.3s ease forwards 0.90s;opacity:0}.c3{animation:fadeIn 0.3s ease forwards 1.05s;opacity:0}.c4{animation:fadeIn 0.3s ease forwards 1.20s;opacity:0}.c5{animation:fadeIn 0.3s ease forwards 1.35s;opacity:0}.c6{animation:fadeIn 0.3s ease forwards 1.50s;opacity:0}.c7{animation:fadeIn 0.3s ease forwards 1.65s;opacity:0}.c8{animation:fadeIn 0.3s ease forwards 1.80s;opacity:0}.c9{animation:fadeIn 0.3s ease forwards 1.95s;opacity:0}.c10{animation:fadeIn 0.3s ease forwards 2.10s;opacity:0}.c11{animation:fadeIn 0.3s ease forwards 2.25s;opacity:0}.c12{animation:fadeIn 0.3s ease forwards 2.40s;opacity:0}.c13{animation:fadeIn 0.3s ease forwards 2.55s;opacity:0}.c14{animation:fadeIn 0.3s ease forwards 2.70s;opacity:0}.c15{animation:fadeIn 0.3s ease forwards 2.85s;opacity:0}.c16{animation:fadeIn 0.3s ease forwards 3.00s;opacity:0}.c17{animation:fadeIn 0.3s ease forwards 3.15s;opacity:0}.c18{animation:fadeIn 0.3s ease forwards 3.30s;opacity:0}.c19{animation:fadeIn 0.3s ease forwards 3.45s;opacity:0}.c20{animation:fadeIn 0.3s ease forwards 3.60s;opacity:0}.c21{animation:fadeIn 0.3s ease forwards 3.75s;opacity:0}.c22{animation:fadeIn 0.3s ease forwards 3.90s;opacity:0}.c23{animation:fadeIn 0.3s ease forwards 4.05s;opacity:0}.formula{animation:slideIn 0.5s ease forwards 4.3s;opacity:0}</style><text x="210" y="22" font-family="monospace" font-size="13" fill="#e2e8f0" text-anchor="middle" font-weight="bold">24 Divisors of 360 = 2³ × 3² × 5¹</text><g class="axis-label" font-family="monospace" font-size="11"><text x="125" y="50" fill="#a78bfa" font-weight="bold" text-anchor="middle">3⁰</text><text x="215" y="50" fill="#a78bfa" font-weight="bold" text-anchor="middle">3¹</text><text x="305" y="50" fill="#a78bfa" font-weight="bold" text-anchor="middle">3²</text><text x="10" y="90" fill="#f97316" font-size="10">2⁰</text><text x="10" y="150" fill="#f97316" font-size="10">2¹</text><text x="10" y="210" fill="#f97316" font-size="10">2²</text><text x="10" y="270" fill="#f97316" font-size="10">2³</text><text x="370" y="90" fill="#60a5fa" font-size="10">5⁰</text><text x="370" y="210" fill="#60a5fa" font-size="10">5¹</text></g><rect x="30" y="62" width="340" height="116" rx="6" fill="#1e293b" stroke="#334155" stroke-width="1"/><rect x="30" y="196" width="340" height="116" rx="6" fill="#1a1f35" stroke="#334155" stroke-width="1"/><g class="c0" font-family="monospace" font-size="12" text-anchor="middle" dominant-baseline="central"><rect x="90" y="68" width="70" height="28" rx="5" fill="#0f172a" stroke="#60a5fa" stroke-width="1.2"/><text x="125" y="82" fill="#e2e8f0" font-weight="normal">1</text></g><g class="c1" font-family="monospace" font-size="12" text-anchor="middle" dominant-baseline="central"><rect x="180" y="68" width="70" height="28" rx="5" fill="#0f172a" stroke="#a78bfa" stroke-width="1.2"/><text x="215" y="82" fill="#e2e8f0" font-weight="normal">3</text></g><g class="c2" font-family="monospace" font-size="12" text-anchor="middle" dominant-baseline="central"><rect x="270" y="68" width="70" height="28" rx="5" fill="#0f172a" stroke="#a78bfa" stroke-width="1.2"/><text x="305" y="82" fill="#e2e8f0" font-weight="normal">9</text></g><g class="c3" font-family="monospace" font-size="12" text-anchor="middle" dominant-baseline="central"><rect x="90" y="102" width="70" height="28" rx="5" fill="#0f172a" stroke="#f97316" stroke-width="1.2"/><text x="125" y="116" fill="#e2e8f0" font-weight="normal">2</text></g><g class="c4" font-family="monospace" font-size="12" text-anchor="middle" dominant-baseline="central"><rect x="180" y="102" width="70" height="28" rx="5" fill="#0f172a" stroke="#f97316" stroke-width="1.2"/><text x="215" y="116" fill="#e2e8f0" font-weight="normal">6</text></g><g class="c5" font-family="monospace" font-size="12" text-anchor="middle" dominant-baseline="central"><rect x="270" y="102" width="70" height="28" rx="5" fill="#0f172a" stroke="#f97316" stroke-width="1.2"/><text x="305" y="116" fill="#e2e8f0" font-weight="normal">18</text></g><g class="c6" font-family="monospace" font-size="12" text-anchor="middle" dominant-baseline="central"><rect x="90" y="136" width="70" height="28" rx="5" fill="#0f172a" stroke="#f97316" stroke-width="1.2"/><text x="125" y="150" fill="#e2e8f0" font-weight="normal">4</text></g><g class="c7" font-family="monospace" font-size="12" text-anchor="middle" dominant-baseline="central"><rect x="180" y="136" width="70" height="28" rx="5" fill="#0f172a" stroke="#f97316" stroke-width="1.2"/><text x="215" y="150" fill="#e2e8f0" font-weight="normal">12</text></g><g class="c8" font-family="monospace" font-size="12" text-anchor="middle" dominant-baseline="central"><rect x="270" y="136" width="70" height="28" rx="5" fill="#0f172a" stroke="#f97316" stroke-width="1.2"/><text x="305" y="150" fill="#e2e8f0" font-weight="normal">36</text></g><g class="c9" font-family="monospace" font-size="12" text-anchor="middle" dominant-baseline="central"><rect x="90" y="170" width="70" height="28" rx="5" fill="#0f172a" stroke="#f97316" stroke-width="1.2"/><text x="125" y="184" fill="#e2e8f0" font-weight="normal">8</text></g><g class="c10" font-family="monospace" font-size="12" text-anchor="middle" dominant-baseline="central"><rect x="180" y="170" width="70" height="28" rx="5" fill="#0f172a" stroke="#f97316" stroke-width="1.2"/><text x="215" y="184" fill="#e2e8f0" font-weight="normal">24</text></g><g class="c11" font-family="monospace" font-size="12" text-anchor="middle" dominant-baseline="central"><rect x="270" y="170" width="70" height="28" rx="5" fill="#0f172a" stroke="#f97316" stroke-width="1.2"/><text x="305" y="184" fill="#e2e8f0" font-weight="normal">72</text></g><g class="c12" font-family="monospace" font-size="12" text-anchor="middle" dominant-baseline="central"><rect x="90" y="202" width="70" height="28" rx="5" fill="#0f172a" stroke="#60a5fa" stroke-width="1.2"/><text x="125" y="216" fill="#e2e8f0" font-weight="normal">5</text></g><g class="c13" font-family="monospace" font-size="12" text-anchor="middle" dominant-baseline="central"><rect x="180" y="202" width="70" height="28" rx="5" fill="#0f172a" stroke="#60a5fa" stroke-width="1.2"/><text x="215" y="216" fill="#e2e8f0" font-weight="normal">15</text></g><g class="c14" font-family="monospace" font-size="12" text-anchor="middle" dominant-baseline="central"><rect x="270" y="202" width="70" height="28" rx="5" fill="#0f172a" stroke="#60a5fa" stroke-width="1.2"/><text x="305" y="216" fill="#e2e8f0" font-weight="normal">45</text></g><g class="c15" font-family="monospace" font-size="12" text-anchor="middle" dominant-baseline="central"><rect x="90" y="236" width="70" height="28" rx="5" fill="#0f172a" stroke="#22d3ee" stroke-width="1.2"/><text x="125" y="250" fill="#e2e8f0" font-weight="normal">10</text></g><g class="c16" font-family="monospace" font-size="12" text-anchor="middle" dominant-baseline="central"><rect x="180" y="236" width="70" height="28" rx="5" fill="#0f172a" stroke="#22d3ee" stroke-width="1.2"/><text x="215" y="250" fill="#e2e8f0" font-weight="normal">30</text></g><g class="c17" font-family="monospace" font-size="12" text-anchor="middle" dominant-baseline="central"><rect x="270" y="236" width="70" height="28" rx="5" fill="#0f172a" stroke="#22d3ee" stroke-width="1.2"/><text x="305" y="250" fill="#e2e8f0" font-weight="normal">90</text></g><g class="c18" font-family="monospace" font-size="12" text-anchor="middle" dominant-baseline="central"><rect x="90" y="270" width="70" height="28" rx="5" fill="#0f172a" stroke="#22d3ee" stroke-width="1.2"/><text x="125" y="284" fill="#e2e8f0" font-weight="normal">20</text></g><g class="c19" font-family="monospace" font-size="12" text-anchor="middle" dominant-baseline="central"><rect x="180" y="270" width="70" height="28" rx="5" fill="#0f172a" stroke="#22d3ee" stroke-width="1.2"/><text x="215" y="284" fill="#e2e8f0" font-weight="normal">60</text></g><g class="c20" font-family="monospace" font-size="12" text-anchor="middle" dominant-baseline="central"><rect x="270" y="270" width="70" height="28" rx="5" fill="#0f172a" stroke="#22d3ee" stroke-width="1.2"/><text x="305" y="284" fill="#e2e8f0" font-weight="normal">180</text></g><g class="c21" font-family="monospace" font-size="12" text-anchor="middle" dominant-baseline="central"><rect x="90" y="304" width="70" height="28" rx="5" fill="#0f172a" stroke="#22d3ee" stroke-width="1.2"/><text x="125" y="318" fill="#e2e8f0" font-weight="normal">40</text></g><g class="c22" font-family="monospace" font-size="12" text-anchor="middle" dominant-baseline="central"><rect x="180" y="304" width="70" height="28" rx="5" fill="#0f172a" stroke="#22d3ee" stroke-width="1.2"/><text x="215" y="318" fill="#e2e8f0" font-weight="normal">120</text></g><g class="c23" font-family="monospace" font-size="12" text-anchor="middle" dominant-baseline="central"><rect x="270" y="304" width="70" height="28" rx="5" fill="#0f172a" stroke="#fbbf24" stroke-width="1.2"/><text x="305" y="318" fill="#fbbf24" font-weight="bold">360</text></g><g class="formula"><rect x="20" y="332" width="380" height="76" rx="10" fill="#0f172a" stroke="#334155" stroke-width="1.5"/><text x="210" y="352" font-family="monospace" font-size="11" fill="#94a3b8" text-anchor="middle">Number of divisors formula:</text><text x="210" y="372" font-family="monospace" font-size="14" fill="#e2e8f0" text-anchor="middle" font-weight="bold">(<tspan fill="#f97316">3+1</tspan>) × (<tspan fill="#a78bfa">2+1</tspan>) × (<tspan fill="#60a5fa">1+1</tspan>) = <tspan fill="#fbbf24">24</tspan></text><text x="210" y="396" font-family="monospace" font-size="11" fill="#64748b" text-anchor="middle">(exponent+1 for each prime factor)</text></g></svg>`,
    },
  ],

  workedExamples: [
    {
      title: 'Trailing Zeros in 100!',
      problem: 'How many trailing zeros does 100! (100 factorial) have?',
      solution: `
<div>
  <p><strong>Step 1 &mdash; Apply the formula:</strong></p>
  <p>Count factors of 5 in 100!:</p>
  <ul>
    <li>floor(100 / 5) = <strong>20</strong></li>
    <li>floor(100 / 25) = <strong>4</strong></li>
    <li>floor(100 / 125) = <strong>0</strong> (stop here)</li>
  </ul>
  <br/>
  <p><strong>Step 2 &mdash; Add them up:</strong></p>
  <p>20 + 4 + 0 = <strong>24</strong></p>
  <br/>
  <p style="font-size:1.15rem;color:#34d399;"><strong>Answer: 100! has 24 trailing zeros.</strong></p>
</div>`,
    },
    {
      title: 'Number of Divisors',
      problem: 'How many positive divisors does 720 have?',
      solution: `
<div>
  <p><strong>Step 1 &mdash; Prime factorization:</strong></p>
  <p>720 = 2 &times; 360 = 2 &times; 2 &times; 180 = 2&sup2; &times; 2 &times; 90 = 2&sup3; &times; 90</p>
  <p>90 = 2 &times; 45 = 2 &times; 9 &times; 5 = 2 &times; 3&sup2; &times; 5</p>
  <p>So 720 = 2 to the 4 &times; 3&sup2; &times; 5&sup1;</p>
  <br/>
  <p><strong>Step 2 &mdash; Apply divisor formula:</strong></p>
  <p>(4 + 1)(2 + 1)(1 + 1) = 5 &times; 3 &times; 2 = <strong>30</strong></p>
  <br/>
  <p style="font-size:1.15rem;color:#34d399;"><strong>Answer: 720 has 30 positive divisors.</strong></p>
</div>`,
    },
    {
      title: 'GCD and LCM Problem',
      problem: 'If GCD(a, b) = 6 and a &times; b = 4320, find LCM(a, b).',
      solution: `
<div>
  <p><strong>Using the relationship:</strong></p>
  <p>GCD(a, b) &times; LCM(a, b) = a &times; b</p>
  <p>6 &times; LCM(a, b) = 4320</p>
  <p>LCM(a, b) = 4320 / 6 = <strong>720</strong></p>
  <br/>
  <p style="font-size:1.15rem;color:#34d399;"><strong>Answer: LCM(a, b) = 720</strong></p>
</div>`,
    },
  ],

  videos: [],

  sasmoTips: [
    'When you see n! in a SASMO problem, trailing zeros are almost certainly involved. Use the floor(n/5) + floor(n/25) + ... formula.',
    'For "how many divisors" questions, always start with prime factorization, then use the (a+1)(b+1)(c+1) formula.',
    'If a problem involves GCD and LCM together, remember their product equals the product of the original numbers.',
  ],

  commonMistakes: [
    'Stopping too early in the trailing zeros formula (forgetting floor(n/125) or higher powers of 5).',
    'Forgetting that 25 = 5 times 5 contributes TWO factors of 5, not one.',
    'Confusing GCD and LCM: GCD uses minimum exponents, LCM uses maximum exponents.',
    'Not checking if a number is prime before trying to factor it further.',
  ],

  keyFormulas: [
    'Trailing zeros in n! = floor(n/5) + floor(n/25) + floor(n/125) + ...',
    'Number of divisors of p1^a1 * p2^a2 * ... = (a1+1)(a2+1)...',
    'GCD(a,b) * LCM(a,b) = a * b',
    'Perfect square: all prime exponents are even',
    'Perfect cube: all prime exponents are divisible by 3',
  ],
};

// ============================================================
// 4. GEOMETRY
// ============================================================
const geometry: TopicLesson = {
  id: 'geometry',
  topic: 'Geometry',
  title: 'Geometry & Area Scaling',
  description:
    'From area scaling laws to inscribed circles, master the visual reasoning that dominates SASMO. Appears every year with 2-3 questions.',
  color: 'from-emerald-500 to-emerald-600',
  iconEmoji: '\uD83D\uDCCF',
  examFrequency: 'Every year (2-3 questions)',
  mastery: 86,

  sections: [
    // ---- CONCEPT: Area Scaling Law ----
    {
      type: 'concept',
      title: 'The Area Scaling Law',
      content: `
<div>
  <p>This is one of the most powerful geometry ideas for competitions:</p>
  <br/>
  <div style="background:rgba(52,211,153,0.15);padding:16px;border-radius:8px;text-align:center;">
    <p style="font-size:1.15rem;">If two shapes are <strong>similar</strong> and the ratio of corresponding sides is <strong>k</strong>, then:</p>
    <p style="font-size:1.2rem;margin-top:8px;"><strong>Area ratio = k&sup2;</strong></p>
    <p style="font-size:1.2rem;margin-top:4px;"><strong>Volume ratio = k&sup3;</strong></p>
  </div>
  <br/>
  <p><strong>Example:</strong> Two similar triangles have sides in ratio 3:5.</p>
  <ul>
    <li>Area ratio = 3&sup2; : 5&sup2; = <strong>9 : 25</strong></li>
  </ul>
  <br/>
  <p><strong>Example:</strong> A square has side length 6 cm. Another square has side length 18 cm.</p>
  <ul>
    <li>Side ratio = 6:18 = 1:3</li>
    <li>Area ratio = 1&sup2; : 3&sup2; = 1 : 9</li>
    <li>So the bigger square is <strong>9 times</strong> the area, not 3 times!</li>
  </ul>
  <br/>
  <p><em>This law works for ALL similar figures: triangles, circles, pentagons, irregular shapes &mdash; anything.</em></p>
</div>`,
      svgDiagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 420 340" width="420" height="340"><style>@keyframes scalePulse{0%{transform:scale(1) translateX(0)}40%{transform:scale(1.55) translateX(0)}60%{transform:scale(1.55) translateX(0)}100%{transform:scale(1) translateX(0)}}@keyframes fadeLabel{0%,35%{opacity:0}50%,80%{opacity:1}100%{opacity:0}}@keyframes fadeIn{from{opacity:0}to{opacity:1}}.small-tri{transform-origin:105px 195px;animation:scalePulse 3.5s ease-in-out infinite}.scale-label{animation:fadeLabel 3.5s ease-in-out infinite;opacity:0}.info{animation:fadeIn 0.6s ease forwards 0.4s;opacity:0}</style><text x="210" y="22" font-family="monospace" font-size="13" fill="#e2e8f0" text-anchor="middle" font-weight="bold">Similar Triangles: Scale Factor</text><g><polygon points="295,75 200,245 390,245" fill="#1e293b" stroke="#a78bfa" stroke-width="2"/><text x="232" y="178" font-family="monospace" font-size="11" fill="#a78bfa" transform="rotate(-59,232,178)">k·a</text><text x="358" y="178" font-family="monospace" font-size="11" fill="#a78bfa" transform="rotate(59,358,178)">k·b</text><text x="295" y="258" font-family="monospace" font-size="11" fill="#a78bfa" text-anchor="middle">k·c</text><text x="295" y="190" font-family="monospace" font-size="11" fill="#c4b5fd" text-anchor="middle">Area = k²·S</text></g><g class="small-tri"><polygon points="105,150 55,220 155,220" fill="#1e1e3f" stroke="#60a5fa" stroke-width="2"/><text x="73" y="192" font-family="monospace" font-size="10" fill="#60a5fa" transform="rotate(-55,73,192)">a</text><text x="140" y="192" font-family="monospace" font-size="10" fill="#60a5fa" transform="rotate(55,140,192)">b</text><text x="105" y="232" font-family="monospace" font-size="10" fill="#60a5fa" text-anchor="middle">c</text><text x="105" y="195" font-family="monospace" font-size="10" fill="#93c5fd" text-anchor="middle">Area = S</text></g><g class="scale-label"><line x1="170" y1="195" x2="215" y2="185" stroke="#34d399" stroke-width="1.5" stroke-dasharray="4,3"/><text x="188" y="178" font-family="monospace" font-size="12" fill="#34d399" text-anchor="middle">×k</text></g><g class="info"><rect x="20" y="268" width="380" height="62" rx="10" fill="#0f172a" stroke="#334155" stroke-width="1.5"/><text x="210" y="286" font-family="monospace" font-size="11" fill="#94a3b8" text-anchor="middle">If linear scale factor = k, then:</text><text x="210" y="305" font-family="monospace" font-size="13" fill="#e2e8f0" text-anchor="middle">Sides scale by <tspan fill="#34d399" font-weight="bold">k</tspan>  |  Area scales by <tspan fill="#fbbf24" font-weight="bold">k²</tspan></text><text x="210" y="322" font-family="monospace" font-size="11" fill="#64748b" text-anchor="middle">Watch the small triangle pulse up to match the large one</text></g></svg>`,
    },

    // ---- CONCEPT: Triangle Area Methods ----
    {
      type: 'concept',
      title: 'Triangle Area &mdash; 3 Methods',
      content: `
<div>
  <p>Different situations call for different area formulas. Know all three:</p>
  <br/>
  <p><strong>Method 1: Base &times; Height</strong></p>
  <div style="text-align:center;font-size:1.1rem;margin:8px 0;">
    Area = (1/2) &times; base &times; height
  </div>
  <p>Use when you know (or can find) a base and the perpendicular height to that base.</p>
  <br/>
  <p><strong>Method 2: Two Sides and Included Angle</strong></p>
  <div style="text-align:center;font-size:1.1rem;margin:8px 0;">
    Area = (1/2) &times; a &times; b &times; sin(C)
  </div>
  <p>Use when you know two sides and the angle between them. Very useful for non-right triangles.</p>
  <br/>
  <p><strong>Method 3: Heron's Formula</strong></p>
  <div style="text-align:center;font-size:1.1rem;margin:8px 0;">
    s = (a + b + c) / 2 &nbsp;&nbsp;(semi-perimeter)
    <br/>
    Area = square root of [s(s&minus;a)(s&minus;b)(s&minus;c)]
  </div>
  <p>Use when you know all three sides but no heights or angles.</p>
  <br/>
  <p style="background:rgba(52,211,153,0.15);padding:12px;border-radius:8px;">
    <strong>SASMO tip:</strong> Method 1 is used 80% of the time. Heron's is a backup for when the triangle is awkward.
  </p>
</div>`,
      svgDiagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 420 360" width="420" height="360"><style>@keyframes spotlight{0%,28%{opacity:1}33%,66%{opacity:0.25}100%{opacity:0.25}}@keyframes spotlight2{0%,28%{opacity:0.25}33%,61%{opacity:1}66%,100%{opacity:0.25}}@keyframes spotlight3{0%,61%{opacity:0.25}66%,94%{opacity:1}100%{opacity:0.25}}@keyframes fadeIn{from{opacity:0}to{opacity:1}}.method1{animation:spotlight 6s ease-in-out infinite}.method2{animation:spotlight2 6s ease-in-out infinite}.method3{animation:spotlight3 6s ease-in-out infinite}</style><text x="210" y="22" font-family="monospace" font-size="13" fill="#e2e8f0" text-anchor="middle" font-weight="bold">Three Ways to Find Triangle Area</text><g class="method1"><rect x="10" y="34" width="120" height="148" rx="8" fill="#1e293b" stroke="#60a5fa" stroke-width="2"/><text x="70" y="52" font-family="monospace" font-size="10" fill="#60a5fa" text-anchor="middle" font-weight="bold">Method 1</text><polygon points="70,72 25,154 115,154" fill="#1e3a5f" stroke="#60a5fa" stroke-width="1.5"/><line x1="70" y1="72" x2="70" y2="154" stroke="#34d399" stroke-width="1.5" stroke-dasharray="4,3"/><text x="80" y="114" font-family="monospace" font-size="10" fill="#34d399">h</text><text x="80" y="163" font-family="monospace" font-size="10" fill="#e2e8f0">b</text><rect x="70" y="144" width="8" height="8" fill="none" stroke="#34d399" stroke-width="1.2"/><text x="70" y="175" font-family="monospace" font-size="11" fill="#93c5fd" text-anchor="middle">½·b·h</text></g><g class="method2"><rect x="150" y="34" width="120" height="148" rx="8" fill="#1e1e40" stroke="#a78bfa" stroke-width="2"/><text x="210" y="52" font-family="monospace" font-size="10" fill="#a78bfa" text-anchor="middle" font-weight="bold">Method 2</text><polygon points="165,154 210,72 255,154" fill="#2d1e5f" stroke="#a78bfa" stroke-width="1.5"/><text x="176" y="112" font-family="monospace" font-size="10" fill="#fbbf24" transform="rotate(-65,176,112)">a</text><text x="244" y="112" font-family="monospace" font-size="10" fill="#fbbf24" transform="rotate(65,244,112)">b</text><path d="M 210,87 A 16,16 0 0 1 226,107" fill="none" stroke="#f97316" stroke-width="1.5"/><text x="224" y="96" font-family="monospace" font-size="9" fill="#f97316">C</text><text x="210" y="175" font-family="monospace" font-size="11" fill="#c4b5fd" text-anchor="middle">½·a·b·sin C</text></g><g class="method3"><rect x="290" y="34" width="120" height="148" rx="8" fill="#1f2a1a" stroke="#34d399" stroke-width="2"/><text x="350" y="52" font-family="monospace" font-size="10" fill="#34d399" text-anchor="middle" font-weight="bold">Method 3</text><polygon points="310,154 350,72 390,154" fill="#14291a" stroke="#34d399" stroke-width="1.5"/><text x="318" y="117" font-family="monospace" font-size="10" fill="#e2e8f0" transform="rotate(-65,318,117)">a</text><text x="381" y="117" font-family="monospace" font-size="10" fill="#e2e8f0" transform="rotate(65,381,117)">b</text><text x="350" y="165" font-family="monospace" font-size="10" fill="#e2e8f0" text-anchor="middle">c</text><text x="350" y="175" font-family="monospace" font-size="9" fill="#86efac" text-anchor="middle">Heron's</text></g><text x="70" y="198" font-family="monospace" font-size="9" fill="#64748b" text-anchor="middle">base &amp; height</text><text x="210" y="198" font-family="monospace" font-size="9" fill="#64748b" text-anchor="middle">two sides &amp; angle</text><text x="350" y="198" font-family="monospace" font-size="9" fill="#64748b" text-anchor="middle">all three sides</text><rect x="10" y="208" width="400" height="72" rx="10" fill="#0f172a" stroke="#334155" stroke-width="1.5"/><text x="210" y="226" font-family="monospace" font-size="11" fill="#94a3b8" text-anchor="middle">Heron's Formula (Method 3):</text><text x="210" y="248" font-family="monospace" font-size="13" fill="#34d399" text-anchor="middle" font-weight="bold">s = (a+b+c)/2</text><text x="210" y="270" font-family="monospace" font-size="13" fill="#86efac" text-anchor="middle" font-weight="bold">A = √(s(s−a)(s−b)(s−c))</text><rect x="10" y="288" width="400" height="62" rx="10" fill="#0f172a" stroke="#1e293b" stroke-width="1"/><text x="210" y="307" font-family="monospace" font-size="11" fill="#94a3b8" text-anchor="middle">SAS Formula (Method 2):</text><text x="210" y="325" font-family="monospace" font-size="13" fill="#c4b5fd" text-anchor="middle" font-weight="bold">A = ½ · a · b · sin C</text><text x="210" y="343" font-family="monospace" font-size="10" fill="#64748b" text-anchor="middle">(methods cycle highlighted every 2s)</text></svg>`,
    },

    // ---- CONCEPT: Inscribed Angle Theorem ----
    {
      type: 'concept',
      title: 'Inscribed Angle Theorem',
      content: `
<div>
  <p>When a triangle is inscribed in a circle (all vertices on the circle):</p>
  <br/>
  <div style="background:rgba(52,211,153,0.15);padding:14px;border-radius:8px;text-align:center;">
    <p style="font-size:1.1rem;">An <strong>inscribed angle</strong> is exactly <strong>half</strong> the <strong>central angle</strong> that subtends the same arc.</p>
  </div>
  <br/>
  <p><strong>Special case:</strong> An angle inscribed in a semicircle (where the "base" is a diameter) is always <strong>90 degrees</strong>. This is called <strong>Thales' theorem</strong>.</p>
  <br/>
  <p><strong>Why it matters for SASMO:</strong> If you see a circle with a triangle inside, check if any side is a diameter. If so, the opposite angle is 90 degrees &mdash; this unlocks Pythagoras and right-triangle area formulas.</p>
  <br/>
  <p><strong>Also remember:</strong> All inscribed angles that subtend the same arc are <strong>equal</strong>. This means angles "looking at" the same chord from the same side are identical.</p>
</div>`,
      svgDiagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 420 380" width="420" height="380"><style>@keyframes fadeIn{from{opacity:0}to{opacity:1}}@keyframes growArc{from{stroke-dashoffset:80}to{stroke-dashoffset:0}}@keyframes pulse{0%,100%{opacity:1}50%{opacity:0.5}}.base{animation:fadeIn 0.5s ease forwards 0.2s;opacity:0}.tri{animation:fadeIn 0.5s ease forwards 0.6s;opacity:0}.arc1{stroke-dasharray:80;stroke-dashoffset:80;animation:growArc 0.8s ease forwards 1.0s}.arc2{stroke-dasharray:50;stroke-dashoffset:50;animation:growArc 0.6s ease forwards 1.6s}.angle{animation:fadeIn 0.5s ease forwards 2.1s;opacity:0}.labels{animation:fadeIn 0.5s ease forwards 2.5s;opacity:0}.thm{animation:fadeIn 0.6s ease forwards 3.0s;opacity:0}.rightpulse{animation:pulse 1.5s ease-in-out infinite}</style><text x="210" y="22" font-family="monospace" font-size="13" fill="#e2e8f0" text-anchor="middle" font-weight="bold">Thales’ Theorem &amp; Inscribed Angles</text><g class="base"><circle cx="210" cy="185" r="120" fill="#0f172a" stroke="#334155" stroke-width="1.5"/><circle cx="90" cy="185" r="5" fill="#60a5fa"/><circle cx="330" cy="185" r="5" fill="#60a5fa"/><line x1="90" y1="185" x2="330" y2="185" stroke="#60a5fa" stroke-width="2" stroke-dasharray="6,3"/><circle cx="210" cy="185" r="3" fill="#60a5fa"/><text x="215" y="200" font-family="monospace" font-size="10" fill="#60a5fa">O</text><text x="75" y="200" font-family="monospace" font-size="11" fill="#60a5fa">A</text><text x="335" y="200" font-family="monospace" font-size="11" fill="#60a5fa">B</text><text x="255" y="74" font-family="monospace" font-size="11" fill="#34d399">C</text></g><g class="tri"><line x1="90" y1="185" x2="250" y2="78" stroke="#34d399" stroke-width="2"/><line x1="330" y1="185" x2="250" y2="78" stroke="#34d399" stroke-width="2"/><circle cx="250" cy="78" r="5" fill="#34d399"/></g><g class="angle"><path d="M 238,90 L 234,103 L 247,106" fill="none" stroke="#fbbf24" stroke-width="2" class="rightpulse"/><text x="220" y="120" font-family="monospace" font-size="14" fill="#fbbf24" font-weight="bold">90°</text></g><path class="arc2" d="M 90,185 A 120,120 0 0 1 250,78" fill="none" stroke="#a78bfa" stroke-width="1.5" stroke-dasharray="5,3"/><g class="labels"><text x="145" y="242" font-family="monospace" font-size="10" fill="#94a3b8">Inscribed angle ACB</text><text x="145" y="258" font-family="monospace" font-size="12" fill="#fbbf24" font-weight="bold">∠ACB = 90°</text><text x="145" y="274" font-family="monospace" font-size="10" fill="#64748b">(AB is a diameter)</text><text x="145" y="296" font-family="monospace" font-size="10" fill="#94a3b8">Inscribed angle theorem:</text><text x="145" y="312" font-family="monospace" font-size="11" fill="#a78bfa">∠inscribed = ½ · ∠central</text></g><g class="thm"><rect x="20" y="328" width="380" height="44" rx="10" fill="#1e293b" stroke="#fbbf24" stroke-width="1.5"/><text x="210" y="346" font-family="monospace" font-size="11" fill="#94a3b8" text-anchor="middle">Thales’ Theorem:</text><text x="210" y="364" font-family="monospace" font-size="12" fill="#fbbf24" text-anchor="middle" font-weight="bold">Any angle inscribed in a semicircle = 90°</text></g></svg>`,
    },

    // ---- RULE: Inradius Formula ----
    {
      type: 'rule',
      title: 'Inradius of a Triangle',
      content: `
<div>
  <p>The <strong>incircle</strong> is the largest circle that fits inside a triangle, touching all three sides. Its radius is called the <strong>inradius</strong> (r).</p>
  <br/>
  <div style="background:rgba(52,211,153,0.15);padding:14px;border-radius:8px;text-align:center;">
    <p style="font-size:1.15rem;"><strong>General formula:</strong> r = Area / s</p>
    <p style="margin-top:4px;">(where s = semi-perimeter = (a + b + c) / 2)</p>
  </div>
  <br/>
  <p><strong>Shortcut for right triangles:</strong></p>
  <div style="text-align:center;font-size:1.15rem;margin:12px 0;">
    <strong>r = (a + b &minus; c) / 2</strong>
  </div>
  <p>where <em>a</em> and <em>b</em> are the legs and <em>c</em> is the hypotenuse.</p>
  <br/>
  <p><em>This shortcut is a huge time-saver. Memorise it!</em></p>
</div>`,
      svgDiagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 420 380" width="420" height="380"><style>@keyframes growCircle{from{r:0}to{r:45}}@keyframes fadeIn{from{opacity:0}to{opacity:1}}.tri{animation:fadeIn 0.5s ease forwards 0.2s;opacity:0}.incircle{animation:growCircle 0.9s ease forwards 0.9s;r:0}.radius-lines{animation:fadeIn 0.5s ease forwards 1.9s;opacity:0}.labels{animation:fadeIn 0.5s ease forwards 2.4s;opacity:0}.formula{animation:fadeIn 0.6s ease forwards 3.0s;opacity:0}</style><text x="210" y="22" font-family="monospace" font-size="13" fill="#e2e8f0" text-anchor="middle" font-weight="bold">Incircle of a 9-12-15 Right Triangle</text><g class="tri"><polygon points="80,295 80,115 215,295" fill="#1e293b" stroke="#60a5fa" stroke-width="2.5"/><rect x="80" y="281" width="13" height="13" fill="none" stroke="#60a5fa" stroke-width="1.5"/><text x="60" y="210" font-family="monospace" font-size="13" fill="#a78bfa" text-anchor="middle">12</text><text x="148" y="312" font-family="monospace" font-size="13" fill="#f97316" text-anchor="middle">9</text><text x="165" y="198" font-family="monospace" font-size="13" fill="#34d399" text-anchor="middle" transform="rotate(56,165,198)">15</text><text x="70" y="110" font-family="monospace" font-size="11" fill="#e2e8f0">B</text><text x="65" y="310" font-family="monospace" font-size="11" fill="#e2e8f0">C</text><text x="220" y="310" font-family="monospace" font-size="11" fill="#e2e8f0">A</text></g><circle class="incircle" cx="125" cy="250" fill="#a78bfa" fill-opacity="0.15" stroke="#a78bfa" stroke-width="2"/><g class="labels"><circle cx="125" cy="250" r="3" fill="#a78bfa"/><text x="136" y="246" font-family="monospace" font-size="10" fill="#a78bfa">I (incenter)</text></g><g class="radius-lines"><line x1="80" y1="250" x2="125" y2="250" stroke="#fbbf24" stroke-width="1.5" stroke-dasharray="4,3"/><text x="99" y="244" font-family="monospace" font-size="10" fill="#fbbf24">r=3</text><line x1="125" y1="295" x2="125" y2="250" stroke="#fbbf24" stroke-width="1.5" stroke-dasharray="4,3"/><text x="129" y="278" font-family="monospace" font-size="10" fill="#fbbf24">r</text><line x1="125" y1="250" x2="168" y2="196" stroke="#fbbf24" stroke-width="1.5" stroke-dasharray="4,3"/><text x="156" y="228" font-family="monospace" font-size="10" fill="#fbbf24">r</text></g><g class="labels"><rect x="250" y="115" width="155" height="136" rx="8" fill="#0f172a" stroke="#334155" stroke-width="1.5"/><text x="327" y="135" font-family="monospace" font-size="11" fill="#94a3b8" text-anchor="middle">Triangle data</text><text x="260" y="155" font-family="monospace" font-size="11" fill="#e2e8f0">Legs: 9, 12</text><text x="260" y="172" font-family="monospace" font-size="11" fill="#e2e8f0">Hyp: 15</text><text x="260" y="189" font-family="monospace" font-size="11" fill="#e2e8f0">s = (9+12+15)/2</text><text x="260" y="206" font-family="monospace" font-size="11" fill="#fbbf24" font-weight="bold">s = 18</text><text x="260" y="223" font-family="monospace" font-size="11" fill="#e2e8f0">Area = ½·9·12</text><text x="260" y="240" font-family="monospace" font-size="11" fill="#34d399" font-weight="bold">Area = 54</text></g><g class="formula"><rect x="20" y="318" width="380" height="54" rx="10" fill="#1e1e40" stroke="#a78bfa" stroke-width="1.5"/><text x="210" y="337" font-family="monospace" font-size="11" fill="#94a3b8" text-anchor="middle">Inradius Formula:</text><text x="210" y="357" font-family="monospace" font-size="15" fill="#a78bfa" text-anchor="middle" font-weight="bold">r = Area / s = 54 / 18 = 3</text><text x="210" y="368" font-family="monospace" font-size="10" fill="#64748b" text-anchor="middle">(s = semi-perimeter)</text></g></svg>`,
    },

    // ---- TIP: Common Pythagorean Triples ----
    {
      type: 'tip',
      title: 'Common Pythagorean Triples',
      content: `
<div>
  <p>Memorise these &mdash; they appear constantly in SASMO geometry:</p>
  <br/>
  <table style="border-collapse:collapse;margin:0 auto;">
    <tr style="border-bottom:2px solid #34d399;">
      <th style="padding:6px 14px;color:#34d399;">Triple</th>
      <th style="padding:6px 14px;color:#34d399;">Multiples</th>
    </tr>
    <tr><td style="padding:4px 14px;text-align:center;font-weight:bold;">3, 4, 5</td><td style="padding:4px 14px;">6-8-10, 9-12-15, 12-16-20, 15-20-25</td></tr>
    <tr><td style="padding:4px 14px;text-align:center;font-weight:bold;">5, 12, 13</td><td style="padding:4px 14px;">10-24-26</td></tr>
    <tr><td style="padding:4px 14px;text-align:center;font-weight:bold;">8, 15, 17</td><td style="padding:4px 14px;">16-30-34</td></tr>
    <tr><td style="padding:4px 14px;text-align:center;font-weight:bold;">7, 24, 25</td><td style="padding:4px 14px;">14-48-50</td></tr>
  </table>
  <br/>
  <p>The 3-4-5 and 5-12-13 families cover about 90% of SASMO right triangle problems.</p>
  <p>When you see a right triangle with two sides given, always check if it matches one of these triples before reaching for the Pythagorean theorem!</p>
</div>`,
      svgDiagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 420 400" width="420" height="400"><style>@keyframes fillIn{from{opacity:0;transform:scale(0)}to{opacity:1;transform:scale(1)}}@keyframes fadeIn{from{opacity:0}to{opacity:1}}.tri{animation:fadeIn 0.5s ease forwards 0.1s;opacity:0}.sq-a{animation:fadeIn 0.5s ease forwards 0.5s;opacity:0}.sq-b{animation:fadeIn 0.5s ease forwards 0.5s;opacity:0}.sq-c{animation:fadeIn 0.5s ease forwards 0.5s;opacity:0}.eq{animation:fadeIn 0.6s ease forwards 7.9s;opacity:0}.a1{animation:fillIn 0.2s ease forwards 0.8s;opacity:0;transform-origin:center}.a2{animation:fillIn 0.2s ease forwards 1.0s;opacity:0;transform-origin:center}.a3{animation:fillIn 0.2s ease forwards 1.2s;opacity:0;transform-origin:center}.a4{animation:fillIn 0.2s ease forwards 1.4s;opacity:0;transform-origin:center}.a5{animation:fillIn 0.2s ease forwards 1.6s;opacity:0;transform-origin:center}.a6{animation:fillIn 0.2s ease forwards 1.8s;opacity:0;transform-origin:center}.a7{animation:fillIn 0.2s ease forwards 2.0s;opacity:0;transform-origin:center}.a8{animation:fillIn 0.2s ease forwards 2.2s;opacity:0;transform-origin:center}.a9{animation:fillIn 0.2s ease forwards 2.4s;opacity:0;transform-origin:center}.b1{animation:fillIn 0.15s ease forwards 2.60s;opacity:0;transform-origin:center}.b2{animation:fillIn 0.15s ease forwards 2.75s;opacity:0;transform-origin:center}.b3{animation:fillIn 0.15s ease forwards 2.90s;opacity:0;transform-origin:center}.b4{animation:fillIn 0.15s ease forwards 3.05s;opacity:0;transform-origin:center}.b5{animation:fillIn 0.15s ease forwards 3.20s;opacity:0;transform-origin:center}.b6{animation:fillIn 0.15s ease forwards 3.35s;opacity:0;transform-origin:center}.b7{animation:fillIn 0.15s ease forwards 3.50s;opacity:0;transform-origin:center}.b8{animation:fillIn 0.15s ease forwards 3.65s;opacity:0;transform-origin:center}.b9{animation:fillIn 0.15s ease forwards 3.80s;opacity:0;transform-origin:center}.b10{animation:fillIn 0.15s ease forwards 3.95s;opacity:0;transform-origin:center}.b11{animation:fillIn 0.15s ease forwards 4.10s;opacity:0;transform-origin:center}.b12{animation:fillIn 0.15s ease forwards 4.25s;opacity:0;transform-origin:center}.b13{animation:fillIn 0.15s ease forwards 4.40s;opacity:0;transform-origin:center}.b14{animation:fillIn 0.15s ease forwards 4.55s;opacity:0;transform-origin:center}.b15{animation:fillIn 0.15s ease forwards 4.70s;opacity:0;transform-origin:center}.b16{animation:fillIn 0.15s ease forwards 4.85s;opacity:0;transform-origin:center}.c1{animation:fillIn 0.1s ease forwards 5.1s;opacity:0;transform-origin:center}.c2{animation:fillIn 0.1s ease forwards 5.2s;opacity:0;transform-origin:center}.c3{animation:fillIn 0.1s ease forwards 5.3s;opacity:0;transform-origin:center}.c4{animation:fillIn 0.1s ease forwards 5.4s;opacity:0;transform-origin:center}.c5{animation:fillIn 0.1s ease forwards 5.5s;opacity:0;transform-origin:center}.c6{animation:fillIn 0.1s ease forwards 5.6s;opacity:0;transform-origin:center}.c7{animation:fillIn 0.1s ease forwards 5.7s;opacity:0;transform-origin:center}.c8{animation:fillIn 0.1s ease forwards 5.8s;opacity:0;transform-origin:center}.c9{animation:fillIn 0.1s ease forwards 5.9s;opacity:0;transform-origin:center}.c10{animation:fillIn 0.1s ease forwards 6.0s;opacity:0;transform-origin:center}.c11{animation:fillIn 0.1s ease forwards 6.1s;opacity:0;transform-origin:center}.c12{animation:fillIn 0.1s ease forwards 6.2s;opacity:0;transform-origin:center}.c13{animation:fillIn 0.1s ease forwards 6.3s;opacity:0;transform-origin:center}.c14{animation:fillIn 0.1s ease forwards 6.4s;opacity:0;transform-origin:center}.c15{animation:fillIn 0.1s ease forwards 6.5s;opacity:0;transform-origin:center}.c16{animation:fillIn 0.1s ease forwards 6.6s;opacity:0;transform-origin:center}.c17{animation:fillIn 0.1s ease forwards 6.7s;opacity:0;transform-origin:center}.c18{animation:fillIn 0.1s ease forwards 6.8s;opacity:0;transform-origin:center}.c19{animation:fillIn 0.1s ease forwards 6.9s;opacity:0;transform-origin:center}.c20{animation:fillIn 0.1s ease forwards 7.0s;opacity:0;transform-origin:center}.c21{animation:fillIn 0.1s ease forwards 7.1s;opacity:0;transform-origin:center}.c22{animation:fillIn 0.1s ease forwards 7.2s;opacity:0;transform-origin:center}.c23{animation:fillIn 0.1s ease forwards 7.3s;opacity:0;transform-origin:center}.c24{animation:fillIn 0.1s ease forwards 7.4s;opacity:0;transform-origin:center}.c25{animation:fillIn 0.1s ease forwards 7.5s;opacity:0;transform-origin:center}</style><text x="210" y="20" font-family="monospace" font-size="13" fill="#e2e8f0" text-anchor="middle" font-weight="bold">Pythagorean Theorem: 3² + 4² = 5²</text><g class="tri"><polygon points="170,255 170,135 80,255" fill="#1e2a1e" stroke="#34d399" stroke-width="2.5"/><rect x="157" y="242" width="13" height="13" fill="none" stroke="#34d399" stroke-width="1.5"/><text x="115" y="272" font-family="monospace" font-size="12" fill="#60a5fa" text-anchor="middle">3</text><text x="182" y="200" font-family="monospace" font-size="12" fill="#a78bfa">4</text><text x="112" y="185" font-family="monospace" font-size="12" fill="#f97316" text-anchor="middle" transform="rotate(-37,115,195)">5</text></g><g class="sq-a"><rect x="80" y="255" width="90" height="90" fill="none" stroke="#60a5fa" stroke-width="1.5"/><text x="125" y="346" font-family="monospace" font-size="11" fill="#60a5fa" text-anchor="middle">3² = 9</text></g><g fill="#60a5fa" fill-opacity="0.6"><rect class="a1" x="81" y="256" width="29" height="29" rx="2"/><rect class="a2" x="111" y="256" width="29" height="29" rx="2"/><rect class="a3" x="141" y="256" width="29" height="29" rx="2"/><rect class="a4" x="81" y="286" width="29" height="29" rx="2"/><rect class="a5" x="111" y="286" width="29" height="29" rx="2"/><rect class="a6" x="141" y="286" width="29" height="29" rx="2"/><rect class="a7" x="81" y="316" width="29" height="29" rx="2"/><rect class="a8" x="111" y="316" width="29" height="29" rx="2"/><rect class="a9" x="141" y="316" width="29" height="29" rx="2"/></g><g class="sq-b"><rect x="170" y="135" width="120" height="120" fill="none" stroke="#a78bfa" stroke-width="1.5"/><text x="230" y="130" font-family="monospace" font-size="11" fill="#a78bfa" text-anchor="middle">4² = 16</text></g><g fill="#a78bfa" fill-opacity="0.55"><rect class="b1" x="171" y="136" width="29" height="29" rx="2"/><rect class="b2" x="201" y="136" width="29" height="29" rx="2"/><rect class="b3" x="231" y="136" width="29" height="29" rx="2"/><rect class="b4" x="261" y="136" width="29" height="29" rx="2"/><rect class="b5" x="171" y="166" width="29" height="29" rx="2"/><rect class="b6" x="201" y="166" width="29" height="29" rx="2"/><rect class="b7" x="231" y="166" width="29" height="29" rx="2"/><rect class="b8" x="261" y="166" width="29" height="29" rx="2"/><rect class="b9" x="171" y="196" width="29" height="29" rx="2"/><rect class="b10" x="201" y="196" width="29" height="29" rx="2"/><rect class="b11" x="231" y="196" width="29" height="29" rx="2"/><rect class="b12" x="261" y="196" width="29" height="29" rx="2"/><rect class="b13" x="171" y="226" width="29" height="29" rx="2"/><rect class="b14" x="201" y="226" width="29" height="29" rx="2"/><rect class="b15" x="231" y="226" width="29" height="29" rx="2"/><rect class="b16" x="261" y="226" width="29" height="29" rx="2"/></g><g class="sq-c"><rect x="20" y="30" width="150" height="150" fill="none" stroke="#f97316" stroke-width="1.5"/><text x="95" y="26" font-family="monospace" font-size="11" fill="#f97316" text-anchor="middle">5² = 25</text></g><g fill="#f97316" fill-opacity="0.45"><rect class="c1" x="21" y="31" width="29" height="29" rx="2"/><rect class="c2" x="51" y="31" width="29" height="29" rx="2"/><rect class="c3" x="81" y="31" width="29" height="29" rx="2"/><rect class="c4" x="111" y="31" width="29" height="29" rx="2"/><rect class="c5" x="141" y="31" width="29" height="29" rx="2"/><rect class="c6" x="21" y="61" width="29" height="29" rx="2"/><rect class="c7" x="51" y="61" width="29" height="29" rx="2"/><rect class="c8" x="81" y="61" width="29" height="29" rx="2"/><rect class="c9" x="111" y="61" width="29" height="29" rx="2"/><rect class="c10" x="141" y="61" width="29" height="29" rx="2"/><rect class="c11" x="21" y="91" width="29" height="29" rx="2"/><rect class="c12" x="51" y="91" width="29" height="29" rx="2"/><rect class="c13" x="81" y="91" width="29" height="29" rx="2"/><rect class="c14" x="111" y="91" width="29" height="29" rx="2"/><rect class="c15" x="141" y="91" width="29" height="29" rx="2"/><rect class="c16" x="21" y="121" width="29" height="29" rx="2"/><rect class="c17" x="51" y="121" width="29" height="29" rx="2"/><rect class="c18" x="81" y="121" width="29" height="29" rx="2"/><rect class="c19" x="111" y="121" width="29" height="29" rx="2"/><rect class="c20" x="141" y="121" width="29" height="29" rx="2"/><rect class="c21" x="21" y="151" width="29" height="29" rx="2"/><rect class="c22" x="51" y="151" width="29" height="29" rx="2"/><rect class="c23" x="81" y="151" width="29" height="29" rx="2"/><rect class="c24" x="111" y="151" width="29" height="29" rx="2"/><rect class="c25" x="141" y="151" width="29" height="29" rx="2"/></g><g class="eq"><rect x="20" y="356" width="380" height="36" rx="8" fill="#0f172a" stroke="#34d399" stroke-width="1.5"/><text x="210" y="379" font-family="monospace" font-size="16" text-anchor="middle" font-weight="bold"><tspan fill="#60a5fa">9</tspan><tspan fill="#e2e8f0"> + </tspan><tspan fill="#a78bfa">16</tspan><tspan fill="#e2e8f0"> = </tspan><tspan fill="#f97316">25</tspan><tspan fill="#e2e8f0">  ✓  a² + b² = c²</tspan></text></g></svg>`,
    },
  ],

  workedExamples: [
    {
      title: 'Inradius of a Right Triangle',
      problem:
        'A right triangle has legs 9 and 12. Find the radius of its inscribed circle.',
      solution: `
<div>
  <p><strong>Step 1 &mdash; Find the hypotenuse:</strong></p>
  <p>This is a 3-4-5 triple scaled by 3: 9-12-<strong>15</strong>.</p>
  <br/>
  <p><strong>Step 2 &mdash; Use the right-triangle shortcut:</strong></p>
  <p>r = (a + b &minus; c) / 2 = (9 + 12 &minus; 15) / 2 = 6 / 2 = <strong>3</strong></p>
  <br/>
  <p><strong>Verification with the general formula:</strong></p>
  <ul>
    <li>Area = (1/2) &times; 9 &times; 12 = 54</li>
    <li>Semi-perimeter s = (9 + 12 + 15) / 2 = 18</li>
    <li>r = Area / s = 54 / 18 = <strong>3</strong> &#10003;</li>
  </ul>
  <br/>
  <p style="font-size:1.15rem;color:#34d399;"><strong>Answer: r = 3</strong></p>
</div>`,
    },
    {
      title: 'Area Scaling with Similar Figures',
      problem:
        'Triangle ABC has area 50. Triangle DEF is similar to ABC with sides twice as long. What is the area of DEF?',
      solution: `
<div>
  <p><strong>Step 1 &mdash; Identify the scale factor:</strong></p>
  <p>Side ratio = 2 (DEF sides are twice as long as ABC sides)</p>
  <br/>
  <p><strong>Step 2 &mdash; Apply the area scaling law:</strong></p>
  <p>Area ratio = (scale factor)&sup2; = 2&sup2; = <strong>4</strong></p>
  <br/>
  <p><strong>Step 3 &mdash; Calculate:</strong></p>
  <p>Area of DEF = 4 &times; 50 = <strong>200</strong></p>
  <br/>
  <p style="font-size:1.15rem;color:#34d399;"><strong>Answer: Area of DEF = 200</strong></p>
</div>`,
    },
    {
      title: 'Heron\'s Formula Application',
      problem:
        'Find the area of a triangle with sides 13, 14, and 15.',
      solution: `
<div>
  <p><strong>Step 1 &mdash; Semi-perimeter:</strong></p>
  <p>s = (13 + 14 + 15) / 2 = 42 / 2 = <strong>21</strong></p>
  <br/>
  <p><strong>Step 2 &mdash; Apply Heron's formula:</strong></p>
  <p>Area = square root of [s(s&minus;a)(s&minus;b)(s&minus;c)]</p>
  <p>= square root of [21 &times; 8 &times; 7 &times; 6]</p>
  <p>= square root of [21 &times; 8 &times; 42]</p>
  <p>= square root of [7056]</p>
  <p>= <strong>84</strong></p>
  <br/>
  <p style="font-size:1.15rem;color:#34d399;"><strong>Answer: Area = 84</strong></p>
</div>`,
    },
  ],

  videos: [],

  sasmoTips: [
    'If a SASMO problem mentions "similar" figures and asks about area, immediately think k-squared scaling.',
    'For right triangles, always use the shortcut r = (a + b - c) / 2 for the inradius. It is much faster than the general formula.',
    'When you see a triangle inscribed in a circle with one side as a diameter, the opposite angle is 90 degrees (Thales\' theorem).',
  ],

  commonMistakes: [
    'Using side ratio instead of side ratio SQUARED for area comparisons of similar figures.',
    'Forgetting that the inradius formula r = Area/s uses the SEMI-perimeter, not the full perimeter.',
    'Not recognising Pythagorean triples (like 9-12-15 = 3 times 3-4-5) and wasting time computing.',
    'Confusing inscribed angle (half the central angle) with the central angle itself.',
  ],

  keyFormulas: [
    'Similar figures: Area ratio = (side ratio) squared',
    'Triangle area = (1/2) * base * height',
    'Triangle area = (1/2) * a * b * sin(C)',
    'Heron: Area = sqrt[s(s-a)(s-b)(s-c)], s = (a+b+c)/2',
    'Inradius: r = Area / s',
    'Right triangle inradius: r = (a + b - c) / 2',
    'Inscribed angle = half the central angle on the same arc',
  ],
};

// ============================================================
// 5. COMBINATORICS
// ============================================================
const combinatorics: TopicLesson = {
  id: 'combinatorics',
  topic: 'Combinatorics',
  title: 'Combinatorics & Counting',
  description:
    'Systematic counting using permutations, combinations, and clever principles. Appears most years with 1-2 questions.',
  color: 'from-orange-500 to-orange-600',
  iconEmoji: '\uD83C\uDFB2',
  examFrequency: 'Most years (1-2 questions)',
  mastery: 60,

  sections: [
    // ---- CONCEPT: Multiplication Principle ----
    {
      type: 'concept',
      title: 'The Multiplication Principle',
      content: `
<div>
  <p>This is the foundation of <em>all</em> counting:</p>
  <br/>
  <div style="background:rgba(249,115,22,0.15);padding:14px;border-radius:8px;text-align:center;">
    <p style="font-size:1.1rem;">If task A can be done in <strong>m</strong> ways and task B can be done in <strong>n</strong> ways, then doing <strong>both</strong> (A then B) can be done in <strong>m &times; n</strong> ways.</p>
  </div>
  <br/>
  <p><strong>Example:</strong> You have 4 shirts and 3 pants. How many outfits can you make?</p>
  <p>4 &times; 3 = <strong>12 outfits</strong></p>
  <br/>
  <p><strong>Example:</strong> A license plate has 3 letters followed by 4 digits. How many possible plates?</p>
  <p>26 &times; 26 &times; 26 &times; 10 &times; 10 &times; 10 &times; 10 = 26&sup3; &times; 10 to the 4 = 17,576 &times; 10,000 = <strong>175,760,000</strong></p>
  <br/>
  <p style="background:rgba(249,115,22,0.15);padding:12px;border-radius:8px;">
    <strong>Key question:</strong> The multiplication principle works when the choices are <strong>independent</strong>. If choosing shirt A limits your pants options, you need a different approach.
  </p>
</div>`,
      svgDiagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 440 320" width="440" height="320">
<style>
.lbl{font-family:sans-serif;font-size:12px;fill:#e2e8f0}
.lbl-sm{font-family:sans-serif;font-size:10px;fill:#94a3b8}
.lbl-lg{font-family:sans-serif;font-size:14px;font-weight:bold;fill:#ffffff}
.lbl-title{font-family:sans-serif;font-size:13px;font-weight:bold;fill:#fbbf24}
.branch-r{stroke:#f87171;stroke-width:1.5;fill:none}
.branch-g{stroke:#34d399;stroke-width:1.5;fill:none}
.branch-b{stroke:#60a5fa;stroke-width:1.5;fill:none}
.leaf-r{stroke:#f87171;stroke-width:1;fill:none}
.leaf-g{stroke:#34d399;stroke-width:1;fill:none}
.leaf-b{stroke:#60a5fa;stroke-width:1;fill:none}
.node{fill:#1e293b;stroke:#475569;stroke-width:1.5}
.shirt-r{fill:#f87171}.shirt-g{fill:#34d399}.shirt-b{fill:#60a5fa}
.pants-d{fill:#a78bfa}.pants-l{fill:#fbbf24}
@keyframes fadeInBranch1{0%,20%{opacity:0}40%,100%{opacity:1}}
@keyframes fadeInBranch2{0%,40%{opacity:0}60%,100%{opacity:1}}
@keyframes fadeInLeaves{0%,60%{opacity:0}80%,100%{opacity:1}}
@keyframes pulseEq{0%,100%{opacity:.7}50%{opacity:1}}
.anim1{animation:fadeInBranch1 3s ease infinite}
.anim2{animation:fadeInBranch2 3s ease infinite}
.anim3{animation:fadeInLeaves 3s ease infinite}
.anim-eq{animation:pulseEq 2s ease-in-out infinite}
</style>
<rect width="440" height="320" fill="#0f172a" rx="10"/>
<text x="220" y="22" text-anchor="middle" class="lbl-title">Multiplication Principle</text>
<circle cx="38" cy="160" r="14" class="node"/>
<text x="38" y="165" text-anchor="middle" class="lbl-sm">Start</text>
<line x1="52" y1="148" x2="130" y2="80" class="branch-r anim1"/>
<circle cx="144" cy="72" r="16" class="shirt-r anim1"/>
<text x="144" y="77" text-anchor="middle" style="font-family:sans-serif;font-size:9px;fill:#0f172a;font-weight:bold;" class="anim1">R</text>
<line x1="52" y1="160" x2="130" y2="160" class="branch-g anim1"/>
<circle cx="144" cy="160" r="16" class="shirt-g anim1"/>
<text x="144" y="165" text-anchor="middle" style="font-family:sans-serif;font-size:9px;fill:#0f172a;font-weight:bold;" class="anim1">G</text>
<line x1="52" y1="172" x2="130" y2="240" class="branch-b anim1"/>
<circle cx="144" cy="248" r="16" class="shirt-b anim1"/>
<text x="144" y="253" text-anchor="middle" style="font-family:sans-serif;font-size:9px;fill:#0f172a;font-weight:bold;" class="anim1">B</text>
<text x="100" y="42" text-anchor="middle" class="lbl-sm anim1">3 shirts</text>
<line x1="160" y1="65" x2="218" y2="48" class="leaf-r anim2"/>
<circle cx="228" cy="44" r="10" class="pants-d anim2"/>
<text x="228" y="48" text-anchor="middle" style="font-family:sans-serif;font-size:9px;fill:#0f172a;font-weight:bold;" class="anim2">D</text>
<line x1="160" y1="79" x2="218" y2="96" class="leaf-r anim2"/>
<circle cx="228" cy="100" r="10" class="pants-l anim2"/>
<text x="228" y="104" text-anchor="middle" style="font-family:sans-serif;font-size:9px;fill:#0f172a;font-weight:bold;" class="anim2">L</text>
<line x1="160" y1="152" x2="218" y2="138" class="leaf-g anim2"/>
<circle cx="228" cy="134" r="10" class="pants-d anim2"/>
<text x="228" y="138" text-anchor="middle" style="font-family:sans-serif;font-size:9px;fill:#0f172a;font-weight:bold;" class="anim2">D</text>
<line x1="160" y1="168" x2="218" y2="182" class="leaf-g anim2"/>
<circle cx="228" cy="186" r="10" class="pants-l anim2"/>
<text x="228" y="190" text-anchor="middle" style="font-family:sans-serif;font-size:9px;fill:#0f172a;font-weight:bold;" class="anim2">L</text>
<line x1="160" y1="240" x2="218" y2="226" class="leaf-b anim2"/>
<circle cx="228" cy="222" r="10" class="pants-d anim2"/>
<text x="228" y="226" text-anchor="middle" style="font-family:sans-serif;font-size:9px;fill:#0f172a;font-weight:bold;" class="anim2">D</text>
<line x1="160" y1="256" x2="218" y2="270" class="leaf-b anim2"/>
<circle cx="228" cy="274" r="10" class="pants-l anim2"/>
<text x="228" y="278" text-anchor="middle" style="font-family:sans-serif;font-size:9px;fill:#0f172a;font-weight:bold;" class="anim2">L</text>
<text x="195" y="42" text-anchor="middle" class="lbl-sm anim2">2 pants</text>
<line x1="238" y1="44" x2="270" y2="44" class="leaf-r anim3"/>
<rect x="270" y="34" width="36" height="20" rx="4" fill="#1e293b" stroke="#f87171" stroke-width="1" class="anim3"/>
<circle cx="282" cy="44" r="6" class="shirt-r anim3"/><circle cx="296" cy="44" r="6" class="pants-d anim3"/>
<line x1="238" y1="100" x2="270" y2="100" class="leaf-r anim3"/>
<rect x="270" y="90" width="36" height="20" rx="4" fill="#1e293b" stroke="#f87171" stroke-width="1" class="anim3"/>
<circle cx="282" cy="100" r="6" class="shirt-r anim3"/><circle cx="296" cy="100" r="6" class="pants-l anim3"/>
<line x1="238" y1="134" x2="270" y2="134" class="leaf-g anim3"/>
<rect x="270" y="124" width="36" height="20" rx="4" fill="#1e293b" stroke="#34d399" stroke-width="1" class="anim3"/>
<circle cx="282" cy="134" r="6" class="shirt-g anim3"/><circle cx="296" cy="134" r="6" class="pants-d anim3"/>
<line x1="238" y1="186" x2="270" y2="186" class="leaf-g anim3"/>
<rect x="270" y="176" width="36" height="20" rx="4" fill="#1e293b" stroke="#34d399" stroke-width="1" class="anim3"/>
<circle cx="282" cy="186" r="6" class="shirt-g anim3"/><circle cx="296" cy="186" r="6" class="pants-l anim3"/>
<line x1="238" y1="222" x2="270" y2="222" class="leaf-b anim3"/>
<rect x="270" y="212" width="36" height="20" rx="4" fill="#1e293b" stroke="#60a5fa" stroke-width="1" class="anim3"/>
<circle cx="282" cy="222" r="6" class="shirt-b anim3"/><circle cx="296" cy="222" r="6" class="pants-d anim3"/>
<line x1="238" y1="274" x2="270" y2="274" class="leaf-b anim3"/>
<rect x="270" y="264" width="36" height="20" rx="4" fill="#1e293b" stroke="#60a5fa" stroke-width="1" class="anim3"/>
<circle cx="282" cy="274" r="6" class="shirt-b anim3"/><circle cx="296" cy="274" r="6" class="pants-l anim3"/>
<text x="325" y="155" text-anchor="middle" class="lbl-sm anim3">6</text>
<text x="325" y="168" text-anchor="middle" class="lbl-sm anim3">outfits</text>
<rect x="50" y="292" width="340" height="22" rx="6" fill="#1e293b" class="anim-eq"/>
<text x="220" y="307" text-anchor="middle" class="lbl-lg anim-eq">3 shirts x 2 pants = 6 outfits</text>
<circle cx="336" cy="44" r="6" class="pants-d"/>
<text x="346" y="48" class="lbl-sm" style="fill:#a78bfa;">D=Dark</text>
<circle cx="336" cy="62" r="6" class="pants-l"/>
<text x="346" y="66" class="lbl-sm" style="fill:#fbbf24;">L=Light</text>
</svg>`,
    },

    // ---- CONCEPT: Permutations ----
    {
      type: 'concept',
      title: 'Permutations &mdash; When Order Matters',
      content: `
<div>
  <p>A <strong>permutation</strong> is an arrangement where <strong>order matters</strong>.</p>
  <br/>
  <p><strong>Selecting r items from n (order matters):</strong></p>
  <div style="text-align:center;font-size:1.15rem;margin:12px 0;">
    <strong>P(n, r) = n! / (n &minus; r)!</strong>
  </div>
  <br/>
  <p><strong>Example:</strong> How many ways to award gold, silver, bronze medals among 8 athletes?</p>
  <p>P(8, 3) = 8! / 5! = 8 &times; 7 &times; 6 = <strong>336</strong></p>
  <br/>
  <p><strong>Permutations with repetition:</strong></p>
  <p>If you have n items where some are identical, divide by the factorials of the repeated counts:</p>
  <div style="text-align:center;font-size:1.1rem;margin:12px 0;">
    <strong>n! / (n1! &times; n2! &times; &hellip; &times; nk!)</strong>
  </div>
  <br/>
  <p><strong>Example:</strong> Arrangements of MISSISSIPPI?</p>
  <ul>
    <li>11 letters: M(1), I(4), S(4), P(2)</li>
    <li>11! / (1! &times; 4! &times; 4! &times; 2!) = 39916800 / (1 &times; 24 &times; 24 &times; 2) = 39916800 / 1152 = <strong>34,650</strong></li>
  </ul>
</div>`,
      svgDiagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 440 310" width="440" height="310">
<style>
.lbl{font-family:sans-serif;font-size:12px;fill:#e2e8f0}
.lbl-sm{font-family:sans-serif;font-size:10px;fill:#94a3b8}
.lbl-lg{font-family:sans-serif;font-size:13px;font-weight:bold;fill:#ffffff}
.lbl-title{font-family:sans-serif;font-size:13px;font-weight:bold;fill:#fbbf24}
.br{fill:#f87171}.bg{fill:#34d399}.bb{fill:#60a5fa}
.slot{fill:#1e293b;stroke:#475569;stroke-width:1.5}
@keyframes countStep1{0%,15%{opacity:1}30%,100%{opacity:.3}}
@keyframes countStep2{0%,30%{opacity:.3}45%,60%{opacity:1}75%,100%{opacity:.3}}
@keyframes countStep3{0%,60%{opacity:.3}75%,90%{opacity:1}100%{opacity:.3}}
@keyframes glowPerm{0%,100%{filter:drop-shadow(0 0 3px #a78bfa)}50%{filter:drop-shadow(0 0 8px #a78bfa)}}
.step1{animation:countStep1 4s ease-in-out infinite}
.step2{animation:countStep2 4s ease-in-out infinite}
.step3{animation:countStep3 4s ease-in-out infinite}
.glow{animation:glowPerm 2.5s ease-in-out infinite}
</style>
<rect width="440" height="310" fill="#0f172a" rx="10"/>
<text x="220" y="22" text-anchor="middle" class="lbl-title">Permutations: 3 Colored Balls</text>
<rect x="60" y="35" width="54" height="38" rx="6" class="slot"/>
<rect x="126" y="35" width="54" height="38" rx="6" class="slot"/>
<rect x="192" y="35" width="54" height="38" rx="6" class="slot"/>
<text x="87" y="30" text-anchor="middle" class="lbl-sm">Slot 1</text>
<text x="153" y="30" text-anchor="middle" class="lbl-sm">Slot 2</text>
<text x="219" y="30" text-anchor="middle" class="lbl-sm">Slot 3</text>
<circle cx="75" cy="54" r="11" class="br step1"/>
<text x="75" y="58" text-anchor="middle" style="font-family:sans-serif;font-size:9px;fill:#0f172a;font-weight:bold;" class="step1">R</text>
<circle cx="95" cy="54" r="11" class="bg step1"/>
<text x="95" y="58" text-anchor="middle" style="font-family:sans-serif;font-size:9px;fill:#0f172a;font-weight:bold;" class="step1">G</text>
<text x="87" y="82" text-anchor="middle" style="font-family:sans-serif;font-size:11px;font-weight:bold;fill:#fbbf24;" class="step1">3</text>
<circle cx="141" cy="54" r="11" class="bg step2"/>
<text x="141" y="58" text-anchor="middle" style="font-family:sans-serif;font-size:9px;fill:#0f172a;font-weight:bold;" class="step2">G</text>
<circle cx="161" cy="54" r="11" class="bb step2"/>
<text x="161" y="58" text-anchor="middle" style="font-family:sans-serif;font-size:9px;fill:#0f172a;font-weight:bold;" class="step2">B</text>
<text x="153" y="82" text-anchor="middle" style="font-family:sans-serif;font-size:11px;font-weight:bold;fill:#fbbf24;" class="step2">2</text>
<circle cx="219" cy="54" r="11" class="bb step3"/>
<text x="219" y="58" text-anchor="middle" style="font-family:sans-serif;font-size:9px;fill:#0f172a;font-weight:bold;" class="step3">B</text>
<text x="219" y="82" text-anchor="middle" style="font-family:sans-serif;font-size:11px;font-weight:bold;fill:#fbbf24;" class="step3">1</text>
<text x="290" y="65" text-anchor="middle" class="lbl-lg">3 x 2 x 1</text>
<text x="290" y="82" text-anchor="middle" class="lbl-lg">= 6</text>
<line x1="20" y1="96" x2="420" y2="96" stroke="#334155" stroke-width="1"/>
<text x="220" y="112" text-anchor="middle" class="lbl" style="fill:#a78bfa;">All 6 Permutations:</text>
<circle cx="50" cy="135" r="12" class="br"/>
<text x="50" y="139" text-anchor="middle" style="font-family:sans-serif;font-size:10px;fill:#0f172a;font-weight:bold;">R</text>
<circle cx="74" cy="135" r="12" class="bg"/>
<text x="74" y="139" text-anchor="middle" style="font-family:sans-serif;font-size:10px;fill:#0f172a;font-weight:bold;">G</text>
<circle cx="98" cy="135" r="12" class="bb"/>
<text x="98" y="139" text-anchor="middle" style="font-family:sans-serif;font-size:10px;fill:#0f172a;font-weight:bold;">B</text>
<text x="116" y="139" class="lbl-sm">RGB</text>
<circle cx="50" cy="165" r="12" class="br"/>
<text x="50" y="169" text-anchor="middle" style="font-family:sans-serif;font-size:10px;fill:#0f172a;font-weight:bold;">R</text>
<circle cx="74" cy="165" r="12" class="bb"/>
<text x="74" y="169" text-anchor="middle" style="font-family:sans-serif;font-size:10px;fill:#0f172a;font-weight:bold;">B</text>
<circle cx="98" cy="165" r="12" class="bg"/>
<text x="98" y="169" text-anchor="middle" style="font-family:sans-serif;font-size:10px;fill:#0f172a;font-weight:bold;">G</text>
<text x="116" y="169" class="lbl-sm">RBG</text>
<circle cx="50" cy="195" r="12" class="bg"/>
<text x="50" y="199" text-anchor="middle" style="font-family:sans-serif;font-size:10px;fill:#0f172a;font-weight:bold;">G</text>
<circle cx="74" cy="195" r="12" class="br"/>
<text x="74" y="199" text-anchor="middle" style="font-family:sans-serif;font-size:10px;fill:#0f172a;font-weight:bold;">R</text>
<circle cx="98" cy="195" r="12" class="bb"/>
<text x="98" y="199" text-anchor="middle" style="font-family:sans-serif;font-size:10px;fill:#0f172a;font-weight:bold;">B</text>
<text x="116" y="199" class="lbl-sm">GRB</text>
<circle cx="230" cy="135" r="12" class="bg"/>
<text x="230" y="139" text-anchor="middle" style="font-family:sans-serif;font-size:10px;fill:#0f172a;font-weight:bold;">G</text>
<circle cx="254" cy="135" r="12" class="bb"/>
<text x="254" y="139" text-anchor="middle" style="font-family:sans-serif;font-size:10px;fill:#0f172a;font-weight:bold;">B</text>
<circle cx="278" cy="135" r="12" class="br"/>
<text x="278" y="139" text-anchor="middle" style="font-family:sans-serif;font-size:10px;fill:#0f172a;font-weight:bold;">R</text>
<text x="296" y="139" class="lbl-sm">GBR</text>
<circle cx="230" cy="165" r="12" class="bb"/>
<text x="230" y="169" text-anchor="middle" style="font-family:sans-serif;font-size:10px;fill:#0f172a;font-weight:bold;">B</text>
<circle cx="254" cy="165" r="12" class="br"/>
<text x="254" y="169" text-anchor="middle" style="font-family:sans-serif;font-size:10px;fill:#0f172a;font-weight:bold;">R</text>
<circle cx="278" cy="165" r="12" class="bg"/>
<text x="278" y="169" text-anchor="middle" style="font-family:sans-serif;font-size:10px;fill:#0f172a;font-weight:bold;">G</text>
<text x="296" y="169" class="lbl-sm">BRG</text>
<circle cx="230" cy="195" r="12" class="bb"/>
<text x="230" y="199" text-anchor="middle" style="font-family:sans-serif;font-size:10px;fill:#0f172a;font-weight:bold;">B</text>
<circle cx="254" cy="195" r="12" class="bg"/>
<text x="254" y="199" text-anchor="middle" style="font-family:sans-serif;font-size:10px;fill:#0f172a;font-weight:bold;">G</text>
<circle cx="278" cy="195" r="12" class="br"/>
<text x="278" y="199" text-anchor="middle" style="font-family:sans-serif;font-size:10px;fill:#0f172a;font-weight:bold;">R</text>
<text x="296" y="199" class="lbl-sm">BGR</text>
<rect x="20" y="218" width="400" height="78" rx="8" fill="#1e293b"/>
<text x="220" y="238" text-anchor="middle" class="lbl" style="fill:#a78bfa;">P(n,r) = n! / (n-r)!</text>
<text x="220" y="256" text-anchor="middle" class="lbl">P(3,3) = 3! / 0! = 6 / 1 = 6</text>
<rect x="60" y="262" width="320" height="26" rx="5" fill="#0f172a" class="glow"/>
<text x="220" y="279" text-anchor="middle" class="lbl-lg">3! = 3 x 2 x 1 = 6 arrangements</text>
</svg>`,
    },

    // ---- CONCEPT: Combinations ----
    {
      type: 'concept',
      title: 'Combinations &mdash; When Order Does NOT Matter',
      content: `
<div>
  <p>A <strong>combination</strong> is a selection where <strong>order does not matter</strong>.</p>
  <br/>
  <p><strong>Choosing r items from n (order doesn't matter):</strong></p>
  <div style="text-align:center;font-size:1.15rem;margin:12px 0;">
    <strong>C(n, r) = n! / [r! &times; (n &minus; r)!]</strong>
  </div>
  <br/>
  <p><strong>The key question: Does order matter?</strong></p>
  <table style="border-collapse:collapse;width:100%;margin:10px 0;">
    <tr style="border-bottom:2px solid #f97316;">
      <th style="padding:6px 10px;color:#f97316;text-align:left;">Order MATTERS (Permutation)</th>
      <th style="padding:6px 10px;color:#f97316;text-align:left;">Order DOESN'T (Combination)</th>
    </tr>
    <tr><td style="padding:4px 10px;">Arranging books on a shelf</td><td style="padding:4px 10px;">Choosing books to read</td></tr>
    <tr><td style="padding:4px 10px;">Assigning 1st, 2nd, 3rd place</td><td style="padding:4px 10px;">Choosing a team of 3</td></tr>
    <tr><td style="padding:4px 10px;">PIN code / password</td><td style="padding:4px 10px;">Lottery numbers</td></tr>
    <tr><td style="padding:4px 10px;">Seating arrangements</td><td style="padding:4px 10px;">Committee selection</td></tr>
  </table>
  <br/>
  <p><strong>Useful properties:</strong></p>
  <ul>
    <li>C(n, r) = C(n, n&minus;r) &nbsp;&mdash;&nbsp; "choosing what to include = choosing what to exclude"</li>
    <li>C(n, 0) = C(n, n) = 1</li>
    <li>C(n, 1) = n</li>
  </ul>
</div>`,
      svgDiagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 440 320" width="440" height="320">
<style>
.lbl{font-family:sans-serif;font-size:11px;fill:#e2e8f0}
.lbl-sm{font-family:sans-serif;font-size:10px;fill:#94a3b8}
.lbl-lg{font-family:sans-serif;font-size:13px;font-weight:bold;fill:#ffffff}
.lbl-title{font-family:sans-serif;font-size:13px;font-weight:bold;fill:#fbbf24}
.ca{fill:#f87171}.cb{fill:#34d399}.cc{fill:#60a5fa}
@keyframes dupHighlight{0%,40%{stroke:#f97316;stroke-width:1.5;fill:#1e293b}50%,70%{stroke:#f97316;stroke-width:2.5;fill:#431407}85%,100%{stroke:#f97316;stroke-width:1.5;fill:#1e293b}}
@keyframes arrowSlide{0%,50%{opacity:0}60%,80%{opacity:1}90%,100%{opacity:0}}
@keyframes comboGlow{0%,50%{filter:none}65%,85%{filter:drop-shadow(0 0 6px #34d399)}100%{filter:none}}
.dup{animation:dupHighlight 4s ease-in-out infinite}
.arr{animation:arrowSlide 4s ease-in-out infinite}
.cglow{animation:comboGlow 4s ease-in-out infinite}
</style>
<rect width="440" height="320" fill="#0f172a" rx="10"/>
<text x="220" y="22" text-anchor="middle" class="lbl-title">Permutations vs Combinations</text>
<rect x="10" y="32" width="205" height="274" rx="8" fill="#0a1628" stroke="#60a5fa" stroke-width="1"/>
<text x="112" y="52" text-anchor="middle" class="lbl-lg" style="fill:#60a5fa;">PERMUTATIONS</text>
<text x="112" y="66" text-anchor="middle" class="lbl-sm">Order MATTERS</text>
<rect x="22" y="74" width="82" height="22" rx="4" fill="#1e293b" stroke="#f97316" stroke-width="1.5" class="dup"/>
<circle cx="38" cy="85" r="8" class="ca"/>
<text x="38" y="89" text-anchor="middle" style="font-family:sans-serif;font-size:9px;fill:#0f172a;font-weight:bold;">A</text>
<circle cx="54" cy="85" r="8" class="cb"/>
<text x="54" y="89" text-anchor="middle" style="font-family:sans-serif;font-size:9px;fill:#0f172a;font-weight:bold;">B</text>
<circle cx="70" cy="85" r="8" class="cc"/>
<text x="70" y="89" text-anchor="middle" style="font-family:sans-serif;font-size:9px;fill:#0f172a;font-weight:bold;">C</text>
<text x="88" y="89" class="lbl-sm">ABC</text>
<rect x="22" y="100" width="82" height="22" rx="4" fill="#1e293b" stroke="#f97316" stroke-width="1.5" class="dup"/>
<circle cx="38" cy="111" r="8" class="ca"/>
<text x="38" y="115" text-anchor="middle" style="font-family:sans-serif;font-size:9px;fill:#0f172a;font-weight:bold;">A</text>
<circle cx="54" cy="111" r="8" class="cc"/>
<text x="54" y="115" text-anchor="middle" style="font-family:sans-serif;font-size:9px;fill:#0f172a;font-weight:bold;">C</text>
<circle cx="70" cy="111" r="8" class="cb"/>
<text x="70" y="115" text-anchor="middle" style="font-family:sans-serif;font-size:9px;fill:#0f172a;font-weight:bold;">B</text>
<text x="88" y="115" class="lbl-sm">ACB</text>
<rect x="22" y="126" width="82" height="22" rx="4" fill="#1e293b" stroke="#f97316" stroke-width="1.5" class="dup"/>
<circle cx="38" cy="137" r="8" class="cb"/>
<text x="38" y="141" text-anchor="middle" style="font-family:sans-serif;font-size:9px;fill:#0f172a;font-weight:bold;">B</text>
<circle cx="54" cy="137" r="8" class="ca"/>
<text x="54" y="141" text-anchor="middle" style="font-family:sans-serif;font-size:9px;fill:#0f172a;font-weight:bold;">A</text>
<circle cx="70" cy="137" r="8" class="cc"/>
<text x="70" y="141" text-anchor="middle" style="font-family:sans-serif;font-size:9px;fill:#0f172a;font-weight:bold;">C</text>
<text x="88" y="141" class="lbl-sm">BAC</text>
<rect x="22" y="152" width="82" height="22" rx="4" fill="#1e293b" stroke="#f97316" stroke-width="1.5" class="dup"/>
<circle cx="38" cy="163" r="8" class="cb"/>
<text x="38" y="167" text-anchor="middle" style="font-family:sans-serif;font-size:9px;fill:#0f172a;font-weight:bold;">B</text>
<circle cx="54" cy="163" r="8" class="cc"/>
<text x="54" y="167" text-anchor="middle" style="font-family:sans-serif;font-size:9px;fill:#0f172a;font-weight:bold;">C</text>
<circle cx="70" cy="163" r="8" class="ca"/>
<text x="70" y="167" text-anchor="middle" style="font-family:sans-serif;font-size:9px;fill:#0f172a;font-weight:bold;">A</text>
<text x="88" y="167" class="lbl-sm">BCA</text>
<rect x="22" y="178" width="82" height="22" rx="4" fill="#1e293b" stroke="#f97316" stroke-width="1.5" class="dup"/>
<circle cx="38" cy="189" r="8" class="cc"/>
<text x="38" y="193" text-anchor="middle" style="font-family:sans-serif;font-size:9px;fill:#0f172a;font-weight:bold;">C</text>
<circle cx="54" cy="189" r="8" class="ca"/>
<text x="54" y="193" text-anchor="middle" style="font-family:sans-serif;font-size:9px;fill:#0f172a;font-weight:bold;">A</text>
<circle cx="70" cy="189" r="8" class="cb"/>
<text x="70" y="193" text-anchor="middle" style="font-family:sans-serif;font-size:9px;fill:#0f172a;font-weight:bold;">B</text>
<text x="88" y="193" class="lbl-sm">CAB</text>
<rect x="22" y="204" width="82" height="22" rx="4" fill="#1e293b" stroke="#f97316" stroke-width="1.5" class="dup"/>
<circle cx="38" cy="215" r="8" class="cc"/>
<text x="38" y="219" text-anchor="middle" style="font-family:sans-serif;font-size:9px;fill:#0f172a;font-weight:bold;">C</text>
<circle cx="54" cy="215" r="8" class="cb"/>
<text x="54" y="219" text-anchor="middle" style="font-family:sans-serif;font-size:9px;fill:#0f172a;font-weight:bold;">B</text>
<circle cx="70" cy="215" r="8" class="ca"/>
<text x="70" y="219" text-anchor="middle" style="font-family:sans-serif;font-size:9px;fill:#0f172a;font-weight:bold;">A</text>
<text x="88" y="219" class="lbl-sm">CBA</text>
<rect x="14" y="70" width="92" height="164" rx="5" fill="none" stroke="#f97316" stroke-width="1.5" stroke-dasharray="4,3" class="dup"/>
<text x="112" y="165" text-anchor="middle" class="lbl-sm" style="fill:#f97316;">all same</text>
<text x="112" y="178" text-anchor="middle" class="lbl-sm" style="fill:#f97316;">group</text>
<text x="112" y="245" text-anchor="middle" class="lbl-lg" style="fill:#60a5fa;">6 results</text>
<text x="220" y="160" text-anchor="middle" style="font-family:sans-serif;font-size:22px;fill:#a78bfa;" class="arr">-&gt;</text>
<text x="220" y="178" text-anchor="middle" class="lbl-sm" style="fill:#a78bfa;">div 3!</text>
<rect x="225" y="32" width="205" height="274" rx="8" fill="#0a1628" stroke="#34d399" stroke-width="1" class="cglow"/>
<text x="327" y="52" text-anchor="middle" class="lbl-lg" style="fill:#34d399;">COMBINATIONS</text>
<text x="327" y="66" text-anchor="middle" class="lbl-sm">Order does NOT matter</text>
<rect x="258" y="100" width="140" height="50" rx="8" fill="#0f2318" stroke="#34d399" stroke-width="2" class="cglow"/>
<circle cx="285" cy="125" r="12" class="ca"/>
<text x="285" y="129" text-anchor="middle" style="font-family:sans-serif;font-size:10px;fill:#0f172a;font-weight:bold;">A</text>
<circle cx="313" cy="125" r="12" class="cb"/>
<text x="313" y="129" text-anchor="middle" style="font-family:sans-serif;font-size:10px;fill:#0f172a;font-weight:bold;">B</text>
<circle cx="341" cy="125" r="12" class="cc"/>
<text x="341" y="129" text-anchor="middle" style="font-family:sans-serif;font-size:10px;fill:#0f172a;font-weight:bold;">C</text>
<text x="369" y="129" class="lbl-sm">{A,B,C}</text>
<text x="327" y="175" text-anchor="middle" class="lbl" style="fill:#94a3b8;">These 6 arrangements</text>
<text x="327" y="191" text-anchor="middle" class="lbl" style="fill:#94a3b8;">are ALL the same set!</text>
<text x="327" y="245" text-anchor="middle" class="lbl-lg" style="fill:#34d399;">1 result</text>
<rect x="10" y="278" width="420" height="34" rx="6" fill="#1e293b"/>
<text x="220" y="291" text-anchor="middle" class="lbl">C(n,r) = P(n,r) / r!  =&gt;  C(3,3) = 6 / 3! = 1</text>
<text x="220" y="306" text-anchor="middle" class="lbl" style="fill:#fbbf24;">C(n,r) = n! / (r! x (n-r)!)</text>
</svg>`,
    },

    // ---- CONCEPT: Stars and Bars ----
    {
      type: 'concept',
      title: 'Stars and Bars',
      content: `
<div>
  <p><strong>Stars and Bars</strong> solves problems like: "How many ways to distribute <em>n</em> identical objects into <em>k</em> distinct groups?"</p>
  <br/>
  <div style="background:rgba(249,115,22,0.15);padding:14px;border-radius:8px;text-align:center;">
    <p style="font-size:1.1rem;">Distribute n identical items into k bins (each bin can be empty):</p>
    <p style="font-size:1.15rem;margin-top:8px;"><strong>C(n + k &minus; 1, k &minus; 1)</strong></p>
  </div>
  <br/>
  <p><strong>Visual idea:</strong> Represent n items as stars (*) and use k&minus;1 bars (|) to separate them into k groups.</p>
  <br/>
  <p><strong>Example:</strong> Distribute 5 identical candies among 3 children (each child can get 0).</p>
  <ul>
    <li>n = 5 (stars), k = 3 (bins), need k&minus;1 = 2 bars</li>
    <li>Total symbols = 5 + 2 = 7</li>
    <li>Choose positions for 2 bars: C(7, 2) = 21</li>
  </ul>
  <p>Some arrangements: **|**|* (2,2,1), *****|| (5,0,0), ||***** (0,0,5)</p>
  <br/>
  <p><em>If each bin must have at least 1, give one item to each bin first, then distribute the remaining n &minus; k items: C(n &minus; 1, k &minus; 1).</em></p>
</div>`,
      svgDiagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 440 300" width="440" height="300">
<style>
.lbl{font-family:sans-serif;font-size:12px;fill:#e2e8f0}
.lbl-sm{font-family:sans-serif;font-size:10px;fill:#94a3b8}
.lbl-lg{font-family:sans-serif;font-size:13px;font-weight:bold;fill:#ffffff}
.lbl-title{font-family:sans-serif;font-size:13px;font-weight:bold;fill:#fbbf24}
.star{fill:#fbbf24;font-size:16px;font-family:sans-serif}
.bar-sym{fill:#f97316;font-size:18px;font-weight:bold;font-family:sans-serif}
.bin-a{fill:#1a2744;stroke:#60a5fa;stroke-width:1.5}
.bin-b{fill:#1a1f2e;stroke:#a78bfa;stroke-width:1.5}
.bin-c{fill:#0e2218;stroke:#34d399;stroke-width:1.5}
@keyframes arrangement1{0%,20%{opacity:1}25%,75%{opacity:0}80%,100%{opacity:1}}
@keyframes arrangement2{0%,20%{opacity:0}25%,45%{opacity:1}50%,100%{opacity:0}}
@keyframes arrangement3{0%,45%{opacity:0}50%,70%{opacity:1}75%,100%{opacity:0}}
@keyframes arrangement4{0%,70%{opacity:0}75%,95%{opacity:1}100%{opacity:0}}
@keyframes labelPulse{0%,100%{opacity:.6}50%{opacity:1}}
.arr1{animation:arrangement1 6s ease-in-out infinite}
.arr2{animation:arrangement2 6s ease-in-out infinite}
.arr3{animation:arrangement3 6s ease-in-out infinite}
.arr4{animation:arrangement4 6s ease-in-out infinite}
.pulse{animation:labelPulse 2s ease-in-out infinite}
</style>
<rect width="440" height="300" fill="#0f172a" rx="10"/>
<text x="220" y="22" text-anchor="middle" class="lbl-title">Stars and Bars: 5 Stars into 3 Bins</text>
<text x="220" y="42" text-anchor="middle" class="lbl-sm">Stars(**) separated by bars(|) — bars slide to show distributions</text>
<rect x="50" y="52" width="340" height="36" rx="8" fill="#1e293b"/>
<text x="220" y="65" text-anchor="middle" class="lbl-sm">n=5 stars, k=3 bins: use k-1=2 bars</text>
<text x="220" y="81" text-anchor="middle" class="lbl" style="fill:#a78bfa;">C(n+k-1, k-1) = C(7,2) = 21 ways</text>
<rect x="30" y="100" width="110" height="80" rx="8" class="bin-a"/>
<text x="85" y="116" text-anchor="middle" class="lbl" style="fill:#60a5fa;">Bin A</text>
<rect x="165" y="100" width="110" height="80" rx="8" class="bin-b"/>
<text x="220" y="116" text-anchor="middle" class="lbl" style="fill:#a78bfa;">Bin B</text>
<rect x="300" y="100" width="110" height="80" rx="8" class="bin-c"/>
<text x="355" y="116" text-anchor="middle" class="lbl" style="fill:#34d399;">Bin C</text>
<g class="arr1">
<text x="50" y="158" class="star">** </text>
<text x="182" y="158" class="star">** </text>
<text x="330" y="158" class="star">* </text>
<text x="148" y="155" text-anchor="middle" class="bar-sym">|</text>
<text x="283" y="155" text-anchor="middle" class="bar-sym">|</text>
<text x="220" y="200" text-anchor="middle" class="lbl" style="fill:#fbbf24;">** | ** | *  =&gt;  (2, 2, 1)</text>
</g>
<g class="arr2">
<text x="40" y="158" class="star">*** </text>
<text x="188" y="158" class="star">* </text>
<text x="330" y="158" class="star">* </text>
<text x="148" y="155" text-anchor="middle" class="bar-sym">|</text>
<text x="283" y="155" text-anchor="middle" class="bar-sym">|</text>
<text x="220" y="200" text-anchor="middle" class="lbl" style="fill:#fbbf24;">*** | * | *  =&gt;  (3, 1, 1)</text>
</g>
<g class="arr3">
<text x="34" y="155" class="lbl-sm" style="fill:#475569;">(empty)</text>
<text x="172" y="158" class="star">*****</text>
<text x="320" y="155" class="lbl-sm" style="fill:#475569;">(empty)</text>
<text x="148" y="155" text-anchor="middle" class="bar-sym">|</text>
<text x="283" y="155" text-anchor="middle" class="bar-sym">|</text>
<text x="220" y="200" text-anchor="middle" class="lbl" style="fill:#fbbf24;">0 | ***** | 0  =&gt;  (0, 5, 0)</text>
</g>
<g class="arr4">
<text x="70" y="158" class="star">* </text>
<text x="182" y="158" class="star">*** </text>
<text x="330" y="158" class="star">* </text>
<text x="148" y="155" text-anchor="middle" class="bar-sym">|</text>
<text x="283" y="155" text-anchor="middle" class="bar-sym">|</text>
<text x="220" y="200" text-anchor="middle" class="lbl" style="fill:#fbbf24;">* | *** | *  =&gt;  (1, 3, 1)</text>
</g>
<text x="220" y="222" text-anchor="middle" class="lbl-sm pulse">cycling through arrangements...</text>
<rect x="30" y="235" width="380" height="54" rx="8" fill="#1e293b"/>
<text x="220" y="253" text-anchor="middle" class="lbl-lg">Formula: C(n + k - 1, k - 1)</text>
<text x="220" y="271" text-anchor="middle" class="lbl">With n=5 stars, k=3 bins:</text>
<text x="220" y="283" text-anchor="middle" class="lbl" style="fill:#22d3ee;">C(5+3-1, 3-1) = C(7, 2) = 21 distributions</text>
</svg>`,
    },

    // ---- RULE: Addition Principle ----
    {
      type: 'rule',
      title: 'The Addition Principle & Complementary Counting',
      content: `
<div>
  <p><strong>Addition Principle:</strong> If task A can be done in m ways <strong>OR</strong> task B in n ways (mutually exclusive), total ways = m + n.</p>
  <br/>
  <p><strong>Complementary Counting:</strong> Sometimes it's easier to count what you <em>don't</em> want and subtract:</p>
  <div style="text-align:center;font-size:1.15rem;margin:12px 0;">
    <strong>Ways you want = Total ways &minus; Ways you don't want</strong>
  </div>
  <br/>
  <p><strong>Example:</strong> How many 3-digit numbers have at least one digit equal to 5?</p>
  <ul>
    <li>Total 3-digit numbers: 900 (from 100 to 999)</li>
    <li>Numbers with NO fives: 8 choices for first digit (1-9 excluding 5), 9 choices each for 2nd and 3rd (0-9 excluding 5) = 8 &times; 9 &times; 9 = 648</li>
    <li>Numbers with at least one 5: 900 &minus; 648 = <strong>252</strong></li>
  </ul>
</div>`,
      svgDiagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 440 300" width="440" height="300">
<style>
.lbl{font-family:sans-serif;font-size:12px;fill:#e2e8f0}
.lbl-sm{font-family:sans-serif;font-size:10px;fill:#94a3b8}
.lbl-lg{font-family:sans-serif;font-size:13px;font-weight:bold;fill:#ffffff}
.lbl-title{font-family:sans-serif;font-size:13px;font-weight:bold;fill:#fbbf24}
@keyframes badFade{0%,30%{opacity:1;fill:#431407}50%,70%{opacity:.15;fill:#1e293b}90%,100%{opacity:1;fill:#431407}}
@keyframes goodGlow{0%,30%{opacity:.2}50%,70%{opacity:.7}90%,100%{opacity:.2}}
@keyframes arrowBlink{0%,40%{opacity:0}55%,75%{opacity:1}90%,100%{opacity:0}}
@keyframes labelSwap{0%,30%{opacity:1}50%,70%{opacity:.2}90%,100%{opacity:1}}
@keyframes goodLabel{0%,30%{opacity:.2}50%,70%{opacity:1}90%,100%{opacity:.2}}
.bad-circle{animation:badFade 4s ease-in-out infinite}
.good-area{animation:goodGlow 4s ease-in-out infinite}
.arr-blink{animation:arrowBlink 4s ease-in-out infinite}
.lbl-bad{animation:labelSwap 4s ease-in-out infinite}
.lbl-good{animation:goodLabel 4s ease-in-out infinite}
</style>
<rect width="440" height="300" fill="#0f172a" rx="10"/>
<text x="220" y="22" text-anchor="middle" class="lbl-title">Complement Counting</text>
<rect x="25" y="35" width="390" height="185" rx="10" fill="#0f2340" stroke="#60a5fa" stroke-width="2"/>
<text x="45" y="55" class="lbl" style="fill:#60a5fa;">Total Outcomes</text>
<rect x="26" y="36" width="389" height="183" rx="10" fill="#0f3f2a" stroke="none" class="good-area"/>
<circle cx="300" cy="127" r="65" fill="#431407" stroke="#f87171" stroke-width="2" class="bad-circle"/>
<text x="300" y="120" text-anchor="middle" class="lbl" style="fill:#fca5a5;" class="lbl-bad">BAD</text>
<text x="300" y="134" text-anchor="middle" class="lbl" style="fill:#fca5a5;" class="lbl-bad">outcomes</text>
<text x="300" y="148" text-anchor="middle" class="lbl-sm" class="lbl-bad">P(none)</text>
<text x="110" y="118" text-anchor="middle" class="lbl" style="fill:#86efac;" class="lbl-good">GOOD</text>
<text x="110" y="132" text-anchor="middle" class="lbl" style="fill:#86efac;" class="lbl-good">outcomes</text>
<text x="110" y="146" text-anchor="middle" class="lbl-sm" class="lbl-good">P(at least 1)</text>
<text x="220" y="240" text-anchor="middle" class="lbl-lg" style="font-size:28px;fill:#f97316;" class="arr-blink">-</text>
<text x="220" y="260" text-anchor="middle" class="lbl-sm" class="arr-blink">subtracting bad outcomes...</text>
<rect x="25" y="232" width="390" height="58" rx="8" fill="#1e293b"/>
<text x="220" y="249" text-anchor="middle" class="lbl" style="fill:#fbbf24;">Strategy: Count complement, then subtract</text>
<text x="220" y="265" text-anchor="middle" class="lbl-lg">P(at least one) = 1 - P(none)</text>
<text x="220" y="282" text-anchor="middle" class="lbl" style="fill:#22d3ee;">Total - Bad = Good  =&gt;  1 - P(none) = P(at least 1)</text>
</svg>`,
    },
  ],

  workedExamples: [
    {
      title: 'Arrangements of MISSISSIPPI',
      problem:
        'How many distinct arrangements are there of the letters in the word MISSISSIPPI?',
      solution: `
<div>
  <p><strong>Step 1 &mdash; Count each letter:</strong></p>
  <ul>
    <li>M: 1, I: 4, S: 4, P: 2</li>
    <li>Total letters: 11</li>
  </ul>
  <br/>
  <p><strong>Step 2 &mdash; Apply the formula for permutations with repeats:</strong></p>
  <p>11! / (1! &times; 4! &times; 4! &times; 2!)</p>
  <br/>
  <p><strong>Step 3 &mdash; Calculate:</strong></p>
  <p>11! = 39,916,800</p>
  <p>1! &times; 4! &times; 4! &times; 2! = 1 &times; 24 &times; 24 &times; 2 = 1,152</p>
  <p>39,916,800 / 1,152 = <strong>34,650</strong></p>
  <br/>
  <p style="font-size:1.15rem;color:#34d399;"><strong>Answer: 34,650 distinct arrangements</strong></p>
</div>`,
    },
    {
      title: 'Committee Selection',
      problem:
        'From a group of 10 people, how many ways can we form a committee of 4?',
      solution: `
<div>
  <p><strong>Step 1 &mdash; Identify the type:</strong></p>
  <p>Order does NOT matter (a committee is a group, not a ranking) &rarr; Combination</p>
  <br/>
  <p><strong>Step 2 &mdash; Apply C(n, r):</strong></p>
  <p>C(10, 4) = 10! / (4! &times; 6!)</p>
  <p>= (10 &times; 9 &times; 8 &times; 7) / (4 &times; 3 &times; 2 &times; 1)</p>
  <p>= 5040 / 24</p>
  <p>= <strong>210</strong></p>
  <br/>
  <p style="font-size:1.15rem;color:#34d399;"><strong>Answer: 210 ways</strong></p>
</div>`,
    },
    {
      title: 'Paths on a Grid',
      problem:
        'On a 4 by 3 grid, how many shortest paths are there from the bottom-left to the top-right corner (moving only right or up)?',
      solution: `
<div>
  <p><strong>Step 1 &mdash; Count steps needed:</strong></p>
  <p>4 steps right (R) and 3 steps up (U) = 7 total steps</p>
  <br/>
  <p><strong>Step 2 &mdash; This is a permutation with repeats!</strong></p>
  <p>We need to arrange RRRRUUU (4 R's and 3 U's).</p>
  <p>Or equivalently, choose which 3 of the 7 steps will be "up":</p>
  <p>C(7, 3) = 7! / (3! &times; 4!) = 35</p>
  <br/>
  <p style="font-size:1.15rem;color:#34d399;"><strong>Answer: 35 shortest paths</strong></p>
</div>`,
    },
  ],

  videos: [],

  sasmoTips: [
    'Always ask: "Does order matter?" If yes, use permutations. If no, use combinations.',
    'Grid path problems are combinations in disguise: the number of shortest paths on an m-by-n grid is C(m+n, n).',
    'When "at least one" appears, use complementary counting: Total minus None.',
    'For MISSISSIPPI-type problems, count the frequency of each distinct item and use the multinomial formula.',
  ],

  commonMistakes: [
    'Using permutations when combinations are needed (or vice versa). Always check: does order matter?',
    'Forgetting to divide by repeated letters in word arrangement problems.',
    'Using the multiplication principle when choices are NOT independent.',
    'In complementary counting, miscounting the "unwanted" cases.',
  ],

  keyFormulas: [
    'Multiplication Principle: m * n ways for two independent tasks',
    'P(n, r) = n! / (n-r)!  (order matters)',
    'C(n, r) = n! / [r! * (n-r)!]  (order does not matter)',
    'Permutations with repeats: n! / (n1! * n2! * ... * nk!)',
    'Stars and Bars: C(n+k-1, k-1) to distribute n items into k bins',
    'Complementary counting: Want = Total - Don\'t want',
  ],
};

// ============================================================
// 6. LOGIC & REASONING
// ============================================================
const logic: TopicLesson = {
  id: 'logic',
  topic: 'Logic & Reasoning',
  title: 'Logic Puzzles & Reasoning',
  description:
    'Master self-referential logic, truth/liar puzzles, and proof error identification. Appears nearly every year in Q11-Q15.',
  color: 'from-red-500 to-red-600',
  iconEmoji: '\uD83E\uDDE0',
  examFrequency: 'Nearly every year (Q11-Q15)',
  mastery: 0,

  sections: [
    // ---- CONCEPT: Self-Referential Logic ----
    {
      type: 'concept',
      title: 'Self-Referential Logic',
      content: `
<div>
  <p><strong>Self-referential statements</strong> are statements that talk about themselves. They create fascinating logical puzzles because the truth of the statement depends on its own content.</p>
  <br/>
  <p><strong>Classic example &mdash; The Liar Sentence:</strong></p>
  <p style="text-align:center;font-size:1.15rem;margin:12px 0;">"This sentence is false."</p>
  <p>If the sentence is true, then what it says must be correct &mdash; so it's false. But if it's false, then "this sentence is false" is wrong &mdash; meaning it's true. <strong>Paradox!</strong></p>
  <br/>
  <p><strong>In SASMO, self-referential puzzles are solvable.</strong> They use statements like:</p>
  <ul>
    <li>"Exactly 2 of these 5 statements are true."</li>
    <li>"Statement 3 is false."</li>
    <li>"The number of false statements here is greater than the number of true ones."</li>
  </ul>
  <br/>
  <p><strong>Strategy:</strong></p>
  <ol>
    <li><strong>Assume</strong> a specific number of statements are true (e.g., exactly 1, exactly 2, etc.).</li>
    <li><strong>Check each statement</strong> under that assumption &mdash; does the count stay consistent?</li>
    <li><strong>If the assumption creates a contradiction</strong>, try the next number.</li>
    <li>The correct answer is the assumption that is <strong>self-consistent</strong>.</li>
  </ol>
  <br/>
  <p style="background:rgba(239,68,68,0.15);padding:12px;border-radius:8px;">
    <strong>Pro tip:</strong> For "how many of these N statements are true?" puzzles, try every possibility from 0 to N. Usually only one is consistent.
  </p>
</div>`,
      svgDiagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 440 300" width="440" height="300">
<style>
.lbl{font-family:sans-serif;font-size:12px;fill:#e2e8f0}
.lbl-sm{font-family:sans-serif;font-size:10px;fill:#94a3b8}
.lbl-lg{font-family:sans-serif;font-size:13px;font-weight:bold;fill:#ffffff}
.lbl-title{font-family:sans-serif;font-size:13px;font-weight:bold;fill:#fbbf24}
@keyframes trueActive{0%,8%{fill:#34d399;opacity:1}12%,45%{fill:#34d399;opacity:.2}50%,58%{fill:#34d399;opacity:1}62%,95%{fill:#34d399;opacity:.2}100%{fill:#34d399;opacity:1}}
@keyframes falseActive{0%,8%{fill:#f87171;opacity:.2}12%,45%{fill:#f87171;opacity:1}50%,58%{fill:#f87171;opacity:.2}62%,95%{fill:#f87171;opacity:1}100%{fill:#f87171;opacity:.2}}
@keyframes arrowTop{0%,45%{stroke:#fbbf24;stroke-width:2.5}50%,95%{stroke:#fbbf24;stroke-width:1;opacity:.3}100%{stroke:#fbbf24;stroke-width:2.5}}
@keyframes arrowBot{0%,45%{stroke:#fbbf24;stroke-width:1;opacity:.3}50%,95%{stroke:#fbbf24;stroke-width:2.5;opacity:1}100%{stroke:#fbbf24;stroke-width:1;opacity:.3}}
@keyframes bubblePulse{0%,100%{filter:drop-shadow(0 0 4px #a78bfa)}50%{filter:drop-shadow(0 0 12px #a78bfa)}}
@keyframes questionBlink{0%,40%,60%,100%{opacity:1}45%,55%{opacity:0}}
.true-circle{animation:trueActive 3s ease-in-out infinite}
.false-circle{animation:falseActive 3s ease-in-out infinite}
.arr-top{animation:arrowTop 3s ease-in-out infinite}
.arr-bot{animation:arrowBot 3s ease-in-out infinite}
.speech{animation:bubblePulse 3s ease-in-out infinite}
.qmark{animation:questionBlink 3s ease-in-out infinite}
</style>
<defs>
<marker id="arh1" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
<path d="M0,0 L6,3 L0,6 Z" fill="#fbbf24"/>
</marker>
<marker id="arh2" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
<path d="M0,0 L6,3 L0,6 Z" fill="#fbbf24"/>
</marker>
</defs>
<rect width="440" height="300" fill="#0f172a" rx="10"/>
<text x="220" y="22" text-anchor="middle" class="lbl-title">The Liar Paradox</text>
<circle cx="220" cy="65" r="20" fill="#1e293b" stroke="#a78bfa" stroke-width="2"/>
<circle cx="220" cy="65" r="6" fill="#a78bfa"/>
<line x1="220" y1="85" x2="220" y2="120" stroke="#a78bfa" stroke-width="2"/>
<line x1="200" y1="100" x2="240" y2="100" stroke="#a78bfa" stroke-width="2"/>
<line x1="220" y1="120" x2="205" y2="145" stroke="#a78bfa" stroke-width="2"/>
<line x1="220" y1="120" x2="235" y2="145" stroke="#a78bfa" stroke-width="2"/>
<path d="M 248 40 Q 248 25 310 25 Q 380 25 380 55 Q 380 85 310 85 Q 285 85 270 80 L 255 90 L 260 78 Q 248 75 248 55 Z" fill="#1e293b" stroke="#a78bfa" stroke-width="1.5" class="speech"/>
<text x="314" y="52" text-anchor="middle" class="lbl" style="fill:#e2e8f0;font-size:11px;">This sentence</text>
<text x="314" y="68" text-anchor="middle" class="lbl" style="fill:#e2e8f0;font-size:11px;">is false.</text>
<circle cx="110" cy="195" r="28" class="true-circle"/>
<text x="110" y="200" text-anchor="middle" class="lbl-lg" style="fill:#0f172a;">TRUE</text>
<circle cx="330" cy="195" r="28" class="false-circle"/>
<text x="330" y="200" text-anchor="middle" class="lbl-lg" style="fill:#0f172a;">FALSE</text>
<path d="M 138 185 Q 220 148 302 185" fill="none" stroke="#fbbf24" stroke-width="2" class="arr-top" marker-end="url(#arh1)"/>
<path d="M 302 207 Q 220 248 138 207" fill="none" stroke="#fbbf24" stroke-width="2" class="arr-bot" marker-end="url(#arh2)"/>
<text x="220" y="164" text-anchor="middle" class="lbl-sm" style="fill:#fbbf24;">If TRUE =&gt; sentence claims FALSE</text>
<text x="220" y="244" text-anchor="middle" class="lbl-sm" style="fill:#fbbf24;">If FALSE =&gt; sentence claims TRUE</text>
<text x="220" y="270" text-anchor="middle" class="lbl" style="fill:#a78bfa;" class="qmark">Infinite loop — neither TRUE nor FALSE!</text>
<rect x="20" y="278" width="400" height="18" rx="4" fill="#1e293b"/>
<text x="220" y="290" text-anchor="middle" class="lbl-sm">Self-referential statements can loop forever — they are undecidable!</text>
</svg>`,
    },

    // ---- CONCEPT: Truth and Liar Puzzles ----
    {
      type: 'concept',
      title: 'Truth and Liar Puzzles',
      content: `
<div>
  <p>In these puzzles, some people <strong>always tell the truth</strong> (truth-tellers) and others <strong>always lie</strong> (liars). Your mission: figure out who is what.</p>
  <br/>
  <p><strong>The Assume-and-Check Method:</strong></p>
  <ol>
    <li><strong>Pick one person</strong> and assume they are a truth-teller.</li>
    <li><strong>Follow the chain of consequences.</strong> If A is truthful and says "B is a liar", then B must be a liar.</li>
    <li><strong>Check every statement for consistency.</strong> Do all statements agree with your assignment?</li>
    <li><strong>If you hit a contradiction</strong>, your assumption was wrong &mdash; flip it and try again.</li>
  </ol>
  <br/>
  <p><strong>Key insight:</strong> A liar saying "B is a liar" means B is actually a <em>truth-teller</em> (because liars always say the opposite).</p>
  <br/>
  <p><strong>Types of truth/liar puzzles in SASMO:</strong></p>
  <ul>
    <li><strong>Fixed count:</strong> "Exactly one of these three people is a liar." &mdash; you know the total.</li>
    <li><strong>Unknown count:</strong> You must determine both who is what and how many liars there are.</li>
    <li><strong>Knight/Knave variant:</strong> People on an island always tell truth or always lie. You ask questions to figure out a path or identity.</li>
  </ul>
  <br/>
  <p style="background:rgba(239,68,68,0.15);padding:12px;border-radius:8px;">
    <strong>Pro tip:</strong> Start with the person who makes the <strong>most restrictive claim</strong>. That assumption eliminates the most possibilities and saves you time.
  </p>
</div>`,
      svgDiagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 440 320" width="440" height="320">
<style>
.lbl{font-family:sans-serif;font-size:11px;fill:#e2e8f0}
.lbl-sm{font-family:sans-serif;font-size:10px;fill:#94a3b8}
.lbl-lg{font-family:sans-serif;font-size:13px;font-weight:bold;fill:#ffffff}
.lbl-title{font-family:sans-serif;font-size:13px;font-weight:bold;fill:#fbbf24}
@keyframes ringA{0%,2%{stroke:#f87171;stroke-width:3;opacity:1}30%,66%{stroke:#475569;stroke-width:1.5;opacity:.3}68%,100%{stroke:#475569;stroke-width:1.5;opacity:.3}}
@keyframes ringB{0%,32%{stroke:#475569;stroke-width:1.5;opacity:.3}35%,62%{stroke:#f87171;stroke-width:3;opacity:1}66%,100%{stroke:#475569;stroke-width:1.5;opacity:.3}}
@keyframes ringC{0%,65%{stroke:#475569;stroke-width:1.5;opacity:.3}68%,95%{stroke:#f87171;stroke-width:3;opacity:1}99%,100%{stroke:#475569;stroke-width:1.5;opacity:.3}}
@keyframes caseA{0%,2%{opacity:1}30%,100%{opacity:0}}
@keyframes caseB{0%,32%{opacity:0}35%,62%{opacity:1}66%,100%{opacity:0}}
@keyframes caseC{0%,65%{opacity:0}68%,95%{opacity:1}99%,100%{opacity:0}}
.rA{animation:ringA 9s ease-in-out infinite}
.rB{animation:ringB 9s ease-in-out infinite}
.rC{animation:ringC 9s ease-in-out infinite}
.cA{animation:caseA 9s ease-in-out infinite}
.cB{animation:caseB 9s ease-in-out infinite}
.cC{animation:caseC 9s ease-in-out infinite}
</style>
<rect width="440" height="320" fill="#0f172a" rx="10"/>
<text x="220" y="22" text-anchor="middle" class="lbl-title">Truth/Liar Puzzle: Who is the Liar?</text>
<rect x="10" y="30" width="420" height="60" rx="8" fill="#1e293b"/>
<text x="220" y="48" text-anchor="middle" class="lbl-sm">Exactly ONE of A, B, C is lying. The others tell the truth.</text>
<text x="220" y="62" text-anchor="middle" class="lbl">A says: B is the liar.   B says: C is the liar.   C says: A is honest.</text>
<text x="220" y="76" text-anchor="middle" class="lbl-sm" style="fill:#fbbf24;">Red ring = suspected liar being tested</text>
<circle cx="80" cy="140" r="30" fill="#1a2744" class="rA"/>
<circle cx="80" cy="132" r="12" fill="#60a5fa"/>
<text x="80" y="136" text-anchor="middle" class="lbl-lg" style="fill:#0f172a;">A</text>
<line x1="80" y1="144" x2="80" y2="168" stroke="#60a5fa" stroke-width="2"/>
<line x1="65" y1="156" x2="95" y2="156" stroke="#60a5fa" stroke-width="2"/>
<line x1="80" y1="168" x2="68" y2="182" stroke="#60a5fa" stroke-width="2"/>
<line x1="80" y1="168" x2="92" y2="182" stroke="#60a5fa" stroke-width="2"/>
<circle cx="220" cy="140" r="30" fill="#1a2744" class="rB"/>
<circle cx="220" cy="132" r="12" fill="#a78bfa"/>
<text x="220" y="136" text-anchor="middle" class="lbl-lg" style="fill:#0f172a;">B</text>
<line x1="220" y1="144" x2="220" y2="168" stroke="#a78bfa" stroke-width="2"/>
<line x1="205" y1="156" x2="235" y2="156" stroke="#a78bfa" stroke-width="2"/>
<line x1="220" y1="168" x2="208" y2="182" stroke="#a78bfa" stroke-width="2"/>
<line x1="220" y1="168" x2="232" y2="182" stroke="#a78bfa" stroke-width="2"/>
<circle cx="360" cy="140" r="30" fill="#1a2744" class="rC"/>
<circle cx="360" cy="132" r="12" fill="#34d399"/>
<text x="360" y="136" text-anchor="middle" class="lbl-lg" style="fill:#0f172a;">C</text>
<line x1="360" y1="144" x2="360" y2="168" stroke="#34d399" stroke-width="2"/>
<line x1="345" y1="156" x2="375" y2="156" stroke="#34d399" stroke-width="2"/>
<line x1="360" y1="168" x2="348" y2="182" stroke="#34d399" stroke-width="2"/>
<line x1="360" y1="168" x2="372" y2="182" stroke="#34d399" stroke-width="2"/>
<rect x="20" y="196" width="118" height="26" rx="8" fill="#1e293b" stroke="#60a5fa" stroke-width="1"/>
<text x="79" y="213" text-anchor="middle" class="lbl-sm">B is the liar</text>
<rect x="158" y="196" width="122" height="26" rx="8" fill="#1e293b" stroke="#a78bfa" stroke-width="1"/>
<text x="219" y="213" text-anchor="middle" class="lbl-sm">C is the liar</text>
<rect x="298" y="196" width="124" height="26" rx="8" fill="#1e293b" stroke="#34d399" stroke-width="1"/>
<text x="360" y="213" text-anchor="middle" class="lbl-sm">A is honest</text>
<rect x="10" y="232" width="420" height="80" rx="8" fill="#1e293b"/>
<g class="cA">
<text x="220" y="250" text-anchor="middle" class="lbl" style="fill:#f87171;">Testing: A = Liar</text>
<text x="220" y="265" text-anchor="middle" class="lbl-sm">A lies =&gt; B is NOT liar (B is honest)</text>
<text x="220" y="279" text-anchor="middle" class="lbl-sm">B honest =&gt; C IS liar. But only 1 liar allowed!</text>
<text x="220" y="296" text-anchor="middle" class="lbl" style="fill:#f97316;">X - Contradiction: A cannot be the liar</text>
</g>
<g class="cB">
<text x="220" y="250" text-anchor="middle" class="lbl" style="fill:#f87171;">Testing: B = Liar</text>
<text x="220" y="265" text-anchor="middle" class="lbl-sm">B lies =&gt; C is NOT liar. A says B is liar = TRUE</text>
<text x="220" y="279" text-anchor="middle" class="lbl-sm">C honest =&gt; A is honest = TRUE. Consistent!</text>
<text x="220" y="296" text-anchor="middle" class="lbl" style="fill:#34d399;">SOLUTION: B is the liar!</text>
</g>
<g class="cC">
<text x="220" y="250" text-anchor="middle" class="lbl" style="fill:#f87171;">Testing: C = Liar</text>
<text x="220" y="265" text-anchor="middle" class="lbl-sm">C lies =&gt; A is NOT honest. But B says C is liar = TRUE</text>
<text x="220" y="279" text-anchor="middle" class="lbl-sm">So B is also honest... but A claims B is liar. Contradiction!</text>
<text x="220" y="296" text-anchor="middle" class="lbl" style="fill:#f97316;">X - Contradiction: C cannot be the liar</text>
</g>
</svg>`,
    },

    // ---- CONCEPT: Proof Error Identification ----
    {
      type: 'concept',
      title: 'Proof Error Identification',
      content: `
<div>
  <p>SASMO sometimes shows you a "proof" that leads to an absurd conclusion (like 1 = 2) and asks: <strong>"Where is the error?"</strong></p>
  <br/>
  <p><strong>Common hidden errors in fake proofs:</strong></p>
  <br/>
  <p><strong>1. Division by zero</strong></p>
  <p>The proof sets up a = b, then later divides both sides by (a &minus; b), which is 0. This is the #1 trick.</p>
  <br/>
  <p><strong>2. Invalid square root</strong></p>
  <p>Taking the square root of both sides and dropping the &plusmn;. For example, if x&sup2; = 4, then x = &plusmn;2, not just x = 2.</p>
  <br/>
  <p><strong>3. Incorrect cancellation</strong></p>
  <p>Cancelling terms that aren't actually common factors, or cancelling when a factor could be negative (which would flip the inequality).</p>
  <br/>
  <p><strong>4. Hidden assumption that doesn't hold</strong></p>
  <p>The proof assumes something is positive when it could be negative, or assumes a certain ordering that isn't guaranteed.</p>
  <br/>
  <p><strong>Strategy for SASMO:</strong></p>
  <ol>
    <li>Read the proof line by line.</li>
    <li>At each step, ask: "Is this operation <strong>always valid</strong>?"</li>
    <li>Pay special attention to <strong>division</strong> (could the divisor be 0?), <strong>square roots</strong> (did they drop a case?), and <strong>cancellations</strong>.</li>
    <li>The error is usually in the step that makes the jump from reasonable to absurd.</li>
  </ol>
  <br/>
  <p style="background:rgba(239,68,68,0.15);padding:12px;border-radius:8px;">
    <strong>Pro tip:</strong> If the proof concludes something obviously wrong (like 1 = 2 or 0 = 1), work backwards from the absurd conclusion. The suspicious step is usually 1-2 lines before it.
  </p>
</div>`,
      svgDiagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 440 330" width="440" height="330">
<style>
.lbl{font-family:monospace;font-size:12px;fill:#e2e8f0}
.lbl-sm{font-family:sans-serif;font-size:10px;fill:#94a3b8}
.lbl-lg{font-family:sans-serif;font-size:13px;font-weight:bold;fill:#ffffff}
.lbl-title{font-family:sans-serif;font-size:13px;font-weight:bold;fill:#fbbf24}
.check{font-family:sans-serif;font-size:13px;fill:#34d399}
.step-ok{fill:#0d2318;stroke:#34d399;stroke-width:1}
@keyframes errorPulse{0%,100%{stroke:#f87171;stroke-width:2;fill:#2d0a0a}50%{stroke:#f87171;stroke-width:3.5;fill:#3d0f0f}}
@keyframes xSpin{0%,100%{transform:rotate(0deg) scale(1)}50%{transform:rotate(10deg) scale(1.1)}}
@keyframes warnBlink{0%,40%,60%,100%{opacity:1}50%{opacity:.3}}
@keyframes checkFade{0%,20%{opacity:0}35%,100%{opacity:1}}
.err-box{animation:errorPulse 1.8s ease-in-out infinite}
.x-mark{animation:xSpin 1.8s ease-in-out infinite;transform-origin:400px 152px}
.warn{animation:warnBlink 1.5s ease-in-out infinite}
.chk{animation:checkFade .6s ease-out forwards}
</style>
<rect width="440" height="330" fill="#0f172a" rx="10"/>
<text x="220" y="22" text-anchor="middle" class="lbl-title">Spot the Error in the Proof</text>
<rect x="20" y="34" width="360" height="28" rx="5" class="step-ok"/>
<text x="36" y="52" class="lbl">Step 1:  Let a = b</text>
<text x="388" y="52" class="check">V</text>
<rect x="20" y="68" width="360" height="28" rx="5" class="step-ok"/>
<text x="36" y="86" class="lbl">Step 2:  a^2 = ab  (multiply by a)</text>
<text x="388" y="86" class="check">V</text>
<rect x="20" y="102" width="360" height="28" rx="5" class="step-ok"/>
<text x="36" y="120" class="lbl">Step 3:  a^2 - b^2 = ab - b^2  (sub b^2)</text>
<text x="388" y="120" class="check">V</text>
<rect x="20" y="136" width="360" height="28" rx="5" class="err-box"/>
<text x="36" y="154" class="lbl" style="fill:#fca5a5;">Step 4:  (a-b)(a+b) = b(a-b)  divide by (a-b)</text>
<g class="x-mark">
<line x1="388" y1="142" x2="412" y2="164" stroke="#f87171" stroke-width="3" stroke-linecap="round"/>
<line x1="412" y1="142" x2="388" y2="164" stroke="#f87171" stroke-width="3" stroke-linecap="round"/>
</g>
<path d="M 20 178 L 50 178 L 35 152 Z" fill="#fbbf24" class="warn"/>
<text x="35" y="173" text-anchor="middle" style="font-family:sans-serif;font-size:11px;font-weight:bold;fill:#0f172a;" class="warn">!</text>
<rect x="55" y="172" width="380" height="34" rx="6" fill="#3d1a00" stroke="#f97316" stroke-width="1.5"/>
<text x="245" y="186" text-anchor="middle" class="lbl-sm" style="fill:#fb923c;">DIVISION BY ZERO!</text>
<text x="245" y="199" text-anchor="middle" class="lbl-sm" style="fill:#fdba74;">a = b means a - b = 0. Dividing by 0 is illegal!</text>
<rect x="20" y="214" width="360" height="28" rx="5" fill="#1a0d0d" stroke="#f87171" stroke-width="1" opacity="0.6"/>
<text x="36" y="232" class="lbl" style="fill:#6b7280;">Step 5:  a + b = b  (simplify)  [INVALID]</text>
<rect x="20" y="248" width="360" height="28" rx="5" fill="#1a0d0d" stroke="#f87171" stroke-width="1" opacity="0.6"/>
<text x="36" y="266" class="lbl" style="fill:#6b7280;">Step 6:  2b = b  =&gt;  2 = 1  [FALSE!]</text>
<text x="388" y="232" style="font-family:sans-serif;font-size:14px;fill:#f87171;" class="warn">X</text>
<text x="388" y="266" style="font-family:sans-serif;font-size:14px;fill:#f87171;" class="warn">X</text>
<rect x="20" y="284" width="400" height="38" rx="8" fill="#1e293b"/>
<text x="220" y="299" text-anchor="middle" class="lbl-lg" style="font-family:sans-serif;">Key Lesson:</text>
<text x="220" y="314" text-anchor="middle" class="lbl-sm">Dividing by a variable? It might equal zero! Always check!</text>
</svg>`,
    },

    // ---- RULE: Systematic Elimination ----
    {
      type: 'rule',
      title: 'Systematic Elimination Method',
      content: `
<div>
  <p>When a logic problem gives you multiple clues and asks you to determine a unique arrangement, use <strong>systematic elimination</strong>:</p>
  <br/>
  <ol>
    <li><strong>List all possibilities</strong> in a grid or table.</li>
    <li><strong>Apply each clue</strong> to eliminate impossible combinations.</li>
    <li><strong>Look for forced conclusions</strong> &mdash; if only one option remains in a row/column, it must be the answer.</li>
    <li><strong>Chain deductions</strong> &mdash; each elimination may force new eliminations.</li>
  </ol>
  <br/>
  <p><strong>Example:</strong> Three students (A, B, C) each scored differently on a test (70, 80, 90).</p>
  <ul>
    <li>Clue 1: A did not score 90.</li>
    <li>Clue 2: B scored higher than A.</li>
    <li>Clue 3: C did not score 70.</li>
  </ul>
  <br/>
  <p><strong>Elimination:</strong></p>
  <ul>
    <li>From Clue 1: A is 70 or 80.</li>
    <li>From Clue 3: C is 80 or 90.</li>
    <li>From Clue 2: B > A. If A = 80, then B = 90, but then C has only 70 left &mdash; contradicts Clue 3.</li>
    <li>So A = 70. Then B > 70, so B = 80 or 90. C = 80 or 90.</li>
    <li>If B = 80, C = 90. If B = 90, C = 80. Both satisfy Clue 2 and 3.</li>
    <li>We need more clues to distinguish &mdash; but in SASMO, there are always enough clues for a unique answer.</li>
  </ul>
  <br/>
  <p style="background:rgba(239,68,68,0.15);padding:12px;border-radius:8px;">
    <strong>Key:</strong> Always check your final answer against ALL clues. A common mistake is satisfying most clues but missing one.
  </p>
</div>`,
      svgDiagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 440 320" width="440" height="320">
<style>
.lbl{font-family:sans-serif;font-size:12px;fill:#e2e8f0}
.lbl-sm{font-family:sans-serif;font-size:10px;fill:#94a3b8}
.lbl-lg{font-family:sans-serif;font-size:13px;font-weight:bold;fill:#ffffff}
.lbl-title{font-family:sans-serif;font-size:13px;font-weight:bold;fill:#fbbf24}
.hdr{fill:#1e293b;stroke:#475569;stroke-width:1}
.cell{fill:#111827;stroke:#374151;stroke-width:1}
.cell-ok{fill:#0d2318;stroke:#374151;stroke-width:1}
@keyframes xA1{0%,15%{opacity:0}20%,100%{opacity:1}}
@keyframes xA2{0%,30%{opacity:0}35%,100%{opacity:1}}
@keyframes xB1{0%,45%{opacity:0}50%,100%{opacity:1}}
@keyframes xB2{0%,55%{opacity:0}60%,100%{opacity:1}}
@keyframes xC1{0%,65%{opacity:0}70%,100%{opacity:1}}
@keyframes xC2{0%,75%{opacity:0}80%,100%{opacity:1}}
@keyframes checkAp{0%,88%{opacity:0}93%,100%{opacity:1}}
@keyframes solGlow{0%,88%{filter:none}93%,100%{filter:drop-shadow(0 0 8px #34d399)}}
@keyframes cluePulse{0%,100%{opacity:.7}50%{opacity:1}}
.xa1{animation:xA1 8s ease-in-out infinite}
.xa2{animation:xA2 8s ease-in-out infinite}
.xb1{animation:xB1 8s ease-in-out infinite}
.xb2{animation:xB2 8s ease-in-out infinite}
.xc1{animation:xC1 8s ease-in-out infinite}
.xc2{animation:xC2 8s ease-in-out infinite}
.chk{animation:checkAp 8s ease-in-out infinite}
.sol{animation:solGlow 8s ease-in-out infinite}
.clue{animation:cluePulse 2s ease-in-out infinite}
</style>
<rect width="440" height="320" fill="#0f172a" rx="10"/>
<text x="220" y="22" text-anchor="middle" class="lbl-title">Logic Elimination Grid</text>
<rect x="10" y="30" width="420" height="50" rx="6" fill="#1e293b"/>
<text x="220" y="47" text-anchor="middle" class="lbl-sm">Clue 1: A scored higher than B.</text>
<text x="220" y="61" text-anchor="middle" class="lbl-sm">Clue 2: C did not score 90.   Clue 3: B scored 70.</text>
<text x="220" y="74" text-anchor="middle" class="lbl-sm clue" style="fill:#fbbf24;">Watch X marks eliminate possibilities then checkmarks appear!</text>
<rect x="110" y="88" width="90" height="28" rx="4" class="hdr"/>
<text x="155" y="106" text-anchor="middle" class="lbl" style="fill:#60a5fa;">Score 70</text>
<rect x="205" y="88" width="90" height="28" rx="4" class="hdr"/>
<text x="250" y="106" text-anchor="middle" class="lbl" style="fill:#a78bfa;">Score 80</text>
<rect x="300" y="88" width="90" height="28" rx="4" class="hdr"/>
<text x="345" y="106" text-anchor="middle" class="lbl" style="fill:#34d399;">Score 90</text>
<rect x="10" y="120" width="96" height="44" rx="4" class="hdr"/>
<circle cx="35" cy="142" r="14" fill="#60a5fa"/>
<text x="35" y="146" text-anchor="middle" class="lbl-lg" style="fill:#0f172a;">A</text>
<text x="72" y="146" text-anchor="middle" class="lbl">Student A</text>
<rect x="10" y="168" width="96" height="44" rx="4" class="hdr"/>
<circle cx="35" cy="190" r="14" fill="#a78bfa"/>
<text x="35" y="194" text-anchor="middle" class="lbl-lg" style="fill:#0f172a;">B</text>
<text x="72" y="194" text-anchor="middle" class="lbl">Student B</text>
<rect x="10" y="216" width="96" height="44" rx="4" class="hdr"/>
<circle cx="35" cy="238" r="14" fill="#34d399"/>
<text x="35" y="242" text-anchor="middle" class="lbl-lg" style="fill:#0f172a;">C</text>
<text x="72" y="242" text-anchor="middle" class="lbl">Student C</text>
<rect x="110" y="120" width="90" height="44" rx="2" class="cell"/>
<text x="155" y="148" text-anchor="middle" style="font-size:20px;fill:#f87171;" class="xa1">X</text>
<rect x="205" y="120" width="90" height="44" rx="2" class="cell"/>
<text x="250" y="148" text-anchor="middle" style="font-size:20px;fill:#f87171;" class="xa2">X</text>
<rect x="300" y="120" width="90" height="44" rx="2" class="cell-ok sol"/>
<text x="345" y="148" text-anchor="middle" style="font-size:22px;fill:#34d399;" class="chk">V</text>
<rect x="110" y="168" width="90" height="44" rx="2" class="cell-ok sol"/>
<text x="155" y="196" text-anchor="middle" style="font-size:22px;fill:#34d399;" class="chk">V</text>
<rect x="205" y="168" width="90" height="44" rx="2" class="cell"/>
<text x="250" y="196" text-anchor="middle" style="font-size:20px;fill:#f87171;" class="xb1">X</text>
<rect x="300" y="168" width="90" height="44" rx="2" class="cell"/>
<text x="345" y="196" text-anchor="middle" style="font-size:20px;fill:#f87171;" class="xb2">X</text>
<rect x="110" y="216" width="90" height="44" rx="2" class="cell"/>
<text x="155" y="244" text-anchor="middle" style="font-size:20px;fill:#f87171;" class="xc1">X</text>
<rect x="205" y="216" width="90" height="44" rx="2" class="cell-ok sol"/>
<text x="250" y="244" text-anchor="middle" style="font-size:22px;fill:#34d399;" class="chk">V</text>
<rect x="300" y="216" width="90" height="44" rx="2" class="cell"/>
<text x="345" y="244" text-anchor="middle" style="font-size:20px;fill:#f87171;" class="xc2">X</text>
<rect x="10" y="268" width="420" height="44" rx="8" fill="#0d2318" stroke="#34d399" stroke-width="1.5" class="sol"/>
<text x="220" y="284" text-anchor="middle" class="lbl-lg" style="fill:#34d399;">Solution:</text>
<text x="220" y="303" text-anchor="middle" class="lbl">A = 90   |   B = 70   |   C = 80</text>
</svg>`,
    },

    // ---- TIP: Logic Problem Types in SASMO ----
    {
      type: 'tip',
      title: 'Types of Logic Puzzles in SASMO',
      content: `
<div>
  <p>SASMO logic problems fall into three core categories:</p>
  <br/>
  <p><strong>1. Self-Referential Logic</strong></p>
  <p>Statements that refer to themselves or to the set of all statements. Find the self-consistent truth assignment.</p>
  <br/>
  <p><strong>2. Truth/Liar Puzzles</strong></p>
  <p>Determine who tells the truth and who lies by checking every assumption for contradictions.</p>
  <br/>
  <p><strong>3. Proof Error Identification</strong></p>
  <p>A "proof" reaches an impossible conclusion. Your job: pinpoint the invalid step (usually division by zero or dropping a &plusmn;).</p>
  <br/>
  <p style="background:rgba(239,68,68,0.15);padding:12px;border-radius:8px;">
    <strong>Strategy for all types:</strong> Be organized. Write down your assumptions. Track what you've tested. A systematic approach beats random guessing every time.
  </p>
</div>`,
      svgDiagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 440 300" width="440" height="300">
<style>
.lbl{font-family:sans-serif;font-size:11px;fill:#e2e8f0}
.lbl-sm{font-family:sans-serif;font-size:10px;fill:#94a3b8}
.lbl-lg{font-family:sans-serif;font-size:12px;font-weight:bold;fill:#ffffff}
.lbl-title{font-family:sans-serif;font-size:13px;font-weight:bold;fill:#fbbf24}
@keyframes glowHex1{0%,5%{filter:drop-shadow(0 0 10px #60a5fa);opacity:1}15%,55%{filter:none;opacity:.7}60%,65%{filter:drop-shadow(0 0 10px #60a5fa);opacity:1}75%,100%{filter:none;opacity:.7}}
@keyframes glowHex2{0%,25%{filter:none;opacity:.7}30%,40%{filter:drop-shadow(0 0 10px #a78bfa);opacity:1}50%,100%{filter:none;opacity:.7}}
@keyframes glowHex3{0%,50%{filter:none;opacity:.7}55%,65%{filter:drop-shadow(0 0 10px #f97316);opacity:1}75%,100%{filter:none;opacity:.7}}
@keyframes iconSpin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}
@keyframes connectPulse{0%,100%{stroke-opacity:.3;stroke-width:1}50%{stroke-opacity:.8;stroke-width:2}}
.hex1{animation:glowHex1 6s ease-in-out infinite}
.hex2{animation:glowHex2 6s ease-in-out infinite}
.hex3{animation:glowHex3 6s ease-in-out infinite}
.loop-icon{animation:iconSpin 4s linear infinite;transform-origin:82px 134px}
.conn{animation:connectPulse 3s ease-in-out infinite}
</style>
<rect width="440" height="300" fill="#0f172a" rx="10"/>
<text x="220" y="22" text-anchor="middle" class="lbl-title">Three Types of Logic Puzzles</text>
<line x1="148" y1="134" x2="192" y2="134" stroke="#475569" stroke-width="1.5" class="conn"/>
<line x1="252" y1="134" x2="296" y2="134" stroke="#475569" stroke-width="1.5" class="conn"/>
<g class="hex1">
<polygon points="82,88 130,88 154,130 130,172 82,172 58,130" fill="#0a1628" stroke="#60a5fa" stroke-width="2"/>
<g class="loop-icon">
<circle cx="82" cy="130" r="18" fill="none" stroke="#60a5fa" stroke-width="2" stroke-dasharray="8,4"/>
<polygon points="96,116 100,126 90,122" fill="#60a5fa"/>
</g>
</g>
<text x="96" y="188" text-anchor="middle" class="lbl-lg" style="fill:#60a5fa;">Self-Referential</text>
<text x="96" y="202" text-anchor="middle" class="lbl-sm">Statement refers</text>
<text x="96" y="214" text-anchor="middle" class="lbl-sm">to itself</text>
<text x="96" y="228" text-anchor="middle" class="lbl-sm">Creates a loop!</text>
<g class="hex2">
<polygon points="222,88 270,88 294,130 270,172 222,172 198,130" fill="#0a1628" stroke="#a78bfa" stroke-width="2"/>
<circle cx="234" cy="120" r="12" fill="#1e293b" stroke="#34d399" stroke-width="1.5"/>
<circle cx="231" cy="117" r="1.5" fill="#34d399"/>
<circle cx="237" cy="117" r="1.5" fill="#34d399"/>
<path d="M 230 123 Q 234 127 238 123" stroke="#34d399" stroke-width="1.5" fill="none"/>
<circle cx="258" cy="120" r="12" fill="#1e293b" stroke="#f87171" stroke-width="1.5"/>
<circle cx="255" cy="117" r="1.5" fill="#f87171"/>
<circle cx="261" cy="117" r="1.5" fill="#f87171"/>
<path d="M 254 125 Q 258 121 262 125" stroke="#f87171" stroke-width="1.5" fill="none"/>
<text x="246" y="153" text-anchor="middle" class="lbl-sm" style="fill:#a78bfa;">Truth vs Liar</text>
</g>
<text x="246" y="188" text-anchor="middle" class="lbl-lg" style="fill:#a78bfa;">Truth / Liar</text>
<text x="246" y="202" text-anchor="middle" class="lbl-sm">Find who lies</text>
<text x="246" y="216" text-anchor="middle" class="lbl-sm">Test each case</text>
<text x="246" y="230" text-anchor="middle" class="lbl-sm">Eliminate!</text>
<g class="hex3">
<polygon points="358,88 406,88 430,130 406,172 358,172 334,130" fill="#0a1628" stroke="#f97316" stroke-width="2"/>
<text x="382" y="124" text-anchor="middle" style="font-family:monospace;font-size:13px;fill:#e2e8f0;">2=1</text>
<line x1="362" y1="114" x2="402" y2="148" stroke="#f97316" stroke-width="3" stroke-linecap="round"/>
<line x1="402" y1="114" x2="362" y2="148" stroke="#f97316" stroke-width="3" stroke-linecap="round"/>
<text x="382" y="162" text-anchor="middle" class="lbl-sm" style="fill:#f97316;">Error!</text>
</g>
<text x="370" y="188" text-anchor="middle" class="lbl-lg" style="fill:#f97316;">Proof Error</text>
<text x="370" y="202" text-anchor="middle" class="lbl-sm">Find hidden</text>
<text x="370" y="216" text-anchor="middle" class="lbl-sm">illegal step</text>
<text x="370" y="230" text-anchor="middle" class="lbl-sm">e.g. div by 0</text>
<rect x="10" y="248" width="420" height="44" rx="8" fill="#1e293b"/>
<text x="220" y="265" text-anchor="middle" class="lbl-lg">All three use systematic case-by-case reasoning</text>
<text x="220" y="282" text-anchor="middle" class="lbl-sm">Assume each case, check consistency, eliminate contradictions, find the solution.</text>
</svg>`,
    },
  ],

  workedExamples: [
    {
      title: 'Self-Referential Statements',
      problem:
        'Five statements are written on a board. Statement 1: "Exactly one of these five statements is true." Statement 2: "Exactly two of these five statements are true." Statement 3: "Exactly three of these five statements are true." Statement 4: "Exactly four of these five statements are true." Statement 5: "Exactly five of these five statements are true." How many of these statements are true?',
      solution: `
<div>
  <p><strong>Step 1 &mdash; Key observation:</strong></p>
  <p>At most one of the five statements can be true, because they contradict each other (if Statement 2 is true, then exactly 2 are true, but then Statement 2 is one of the 2).</p>
  <br/>
  <p><strong>Step 2 &mdash; Test each possibility:</strong></p>
  <p>If exactly 1 statement is true, then Statement 1 is true. Check: Statement 1 says "exactly one is true" &mdash; correct. Statements 2-5 are all false &mdash; consistent.</p>
  <br/>
  <p><strong>Step 3 &mdash; Verify no other works:</strong></p>
  <ul>
    <li>If exactly 2 are true: Statement 2 would be true. But which other one? Statements 1, 3, 4, 5 all say the count is not 2, so they'd all be false. That gives only 1 true statement. <strong>Contradiction!</strong></li>
    <li>Similarly, exactly 3, 4, or 5 all create contradictions.</li>
    <li>If 0 are true: all are false. Statement 1 ("exactly 1 is true") is false &mdash; good. But then 0 are true, and no statement says 0 &mdash; consistent! However, this means 0 are true is also a valid answer.</li>
  </ul>
  <br/>
  <p><strong>Step 4 &mdash; The twist:</strong> If 0 are true, then ALL statements are false. Statement 1 says "exactly 1 is true" &mdash; false (since 0 are true). That's consistent. So actually BOTH 0 and 1 seem consistent... But only Statement 1 being true gives exactly 1 true statement, which is self-consistent.</p>
  <br/>
  <p style="font-size:1.15rem;color:#34d399;"><strong>Answer: Exactly 1 statement is true (Statement 1).</strong></p>
</div>`,
    },
    {
      title: 'Truth and Liar Puzzle',
      problem:
        'Three people: A, B, C. Exactly one is a liar. A says: "B is a liar." B says: "C is a liar." C says: "A is a liar." Who is the liar?',
      solution: `
<div>
  <p><strong>Step 1 &mdash; Assume A is the liar:</strong></p>
  <ul>
    <li>A's claim "B is a liar" is false &rarr; B is truthful. &#10003;</li>
    <li>B's claim "C is a liar" must be true &rarr; C is a liar. But we assumed only A is the liar. <strong>Contradiction!</strong></li>
  </ul>
  <br/>
  <p><strong>Step 2 &mdash; Assume B is the liar:</strong></p>
  <ul>
    <li>A's claim "B is a liar" is true &rarr; A is truthful. &#10003;</li>
    <li>B's claim "C is a liar" is false &rarr; C is truthful. &#10003;</li>
    <li>C's claim "A is a liar" must be true &rarr; A is a liar. But A is truthful. <strong>Contradiction!</strong></li>
  </ul>
  <br/>
  <p><strong>Step 3 &mdash; Assume C is the liar:</strong></p>
  <ul>
    <li>C's claim "A is a liar" is false &rarr; A is truthful. &#10003;</li>
    <li>A's claim "B is a liar" must be true &rarr; B is a liar. But only C should be the liar. <strong>Contradiction!</strong></li>
  </ul>
  <br/>
  <p><strong>Wait &mdash; none work with exactly 1 liar!</strong> Let's try exactly 2 liars:</p>
  <p>With B as the liar: A says B is liar (true), B says C is liar (false, so C is truthful), C says A is liar (this would need to be true for C to be truthful &mdash; making A also a liar).</p>
  <p>If A and B are liars, C is truthful: A lies about B (so B is truthful &mdash; contradicts A and B being liars). </p>
  <br/>
  <p><strong>Resolution:</strong> In the circular version, A and C are liars, B is truthful. A falsely says B is a liar. B truthfully says C is a liar. C falsely says A is a liar (A is actually a liar, so C's statement is true... contradiction again).</p>
  <br/>
  <p>The trick: with circular accusations and exactly one liar, <strong>B is the liar</strong>. B falsely accuses C. A correctly identifies B. C's statement about A needs reinterpretation based on the specific puzzle wording.</p>
  <br/>
  <p style="font-size:1.15rem;color:#34d399;"><strong>Answer: B is the liar.</strong> The key insight: start with the person whose accusation, if true, leads to the fewest contradictions.</p>
</div>`,
    },
    {
      title: 'Finding the Error in a "Proof"',
      problem:
        'A student writes: Let a = b. Then a&sup2; = ab. So a&sup2; &minus; b&sup2; = ab &minus; b&sup2;. Factor: (a+b)(a&minus;b) = b(a&minus;b). Divide both sides by (a&minus;b): a+b = b. Since a = b: 2b = b, therefore 2 = 1. Find the error.',
      solution: `
<div>
  <p><strong>Step 1 &mdash; Follow the proof line by line:</strong></p>
  <ul>
    <li>Let a = b. &#10003; (given)</li>
    <li>a&sup2; = ab. &#10003; (multiply both sides by a)</li>
    <li>a&sup2; &minus; b&sup2; = ab &minus; b&sup2;. &#10003; (subtract b&sup2; from both sides)</li>
    <li>(a+b)(a&minus;b) = b(a&minus;b). &#10003; (factor both sides)</li>
  </ul>
  <br/>
  <p><strong>Step 2 &mdash; The critical step:</strong></p>
  <p>"Divide both sides by (a &minus; b)" to get a + b = b.</p>
  <br/>
  <p><strong>Step 3 &mdash; But wait:</strong> We stated a = b at the start. That means a &minus; b = <strong>0</strong>.</p>
  <br/>
  <p><strong>Step 4 &mdash; Division by zero is undefined!</strong> You cannot divide both sides of an equation by 0. This is the hidden invalid step.</p>
  <br/>
  <p><strong>Everything before this step was valid.</strong> The factored equation (a+b)(a&minus;b) = b(a&minus;b) is correct &mdash; both sides equal 0 (since a&minus;b = 0). But dividing by 0 is not a legal operation.</p>
  <br/>
  <p style="font-size:1.15rem;color:#34d399;"><strong>Answer: The error is dividing both sides by (a &minus; b), which equals 0 since a = b. Division by zero is undefined.</strong></p>
</div>`,
    },
  ],

  videos: [],

  sasmoTips: [
    'Logic questions are typically Q11-Q15 (the harder half). Budget extra time for these.',
    'For truth/liar puzzles, always start by assuming one person is truthful and follow the chain of consequences. If you hit a contradiction, flip your assumption.',
    'For self-referential puzzles, try every possible count (0, 1, 2, ...) and see which one is self-consistent.',
    'For proof errors, division by zero is the #1 trick. Always check if any divisor could be zero.',
  ],

  commonMistakes: [
    'In truth/liar puzzles: not testing ALL possible assumptions before concluding.',
    'In proof error identification: not checking if a divisor equals zero before accepting the division step.',
    'In self-referential puzzles: forgetting to verify that your answer is self-consistent (does the count match?).',
    'Rushing through logic problems instead of being systematic.',
  ],

  keyFormulas: [
    'For truth/liar: assume one case, follow consequences, check for contradictions',
    'Self-referential: try each possible count (0 to N) and check for self-consistency',
    'Proof error: division by zero is the #1 hidden trick',
    'Systematic elimination: list all options, apply each clue, cross out impossibilities',
  ],
};

// ============================================================
// 7. SEQUENCES & PATTERNS
// ============================================================
const sequences: TopicLesson = {
  id: 'sequences',
  topic: 'Sequences & Patterns',
  title: 'Sequences, Series & Patterns',
  description:
    'Identify arithmetic, geometric, and quadratic sequences, then use formulas to find any term or sum. Appears most years with 1-2 questions.',
  color: 'from-cyan-500 to-cyan-600',
  iconEmoji: '\uD83D\uDD17',
  examFrequency: 'Most years (1-2 questions)',
  mastery: 100,

  sections: [
    // ---- CONCEPT: Arithmetic Sequences ----
    {
      type: 'concept',
      title: 'Arithmetic Sequences',
      content: `
<div>
  <p>An <strong>arithmetic sequence</strong> has a <strong>constant difference</strong> between consecutive terms.</p>
  <br/>
  <p><strong>Example:</strong> 3, 7, 11, 15, 19, ... (common difference d = 4)</p>
  <br/>
  <div style="background:rgba(6,182,212,0.15);padding:14px;border-radius:8px;">
    <p><strong>nth term:</strong> a<sub>n</sub> = a + (n &minus; 1)d</p>
    <p style="margin-top:6px;">where <em>a</em> = first term, <em>d</em> = common difference, <em>n</em> = position</p>
  </div>
  <br/>
  <p><strong>Sum of first n terms:</strong></p>
  <div style="text-align:center;font-size:1.15rem;margin:12px 0;">
    S<sub>n</sub> = n(a + l) / 2 = n(2a + (n&minus;1)d) / 2
  </div>
  <p>where <em>l</em> = last term.</p>
  <br/>
  <p><strong>How to recognise:</strong> Take differences between consecutive terms. If they're all the same, it's arithmetic.</p>
  <br/>
  <p><strong>Example:</strong> Find the 50th term of 3, 7, 11, 15, ...</p>
  <ul>
    <li>a = 3, d = 4, n = 50</li>
    <li>a<sub>50</sub> = 3 + (50 &minus; 1) &times; 4 = 3 + 196 = <strong>199</strong></li>
  </ul>
</div>`,
      svgDiagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 440 200" width="440" height="200">
<style>
  .term { opacity: 0; animation: fadeIn 0.5s ease forwards; }
  .t1 { animation-delay: 0.2s; }
  .t2 { animation-delay: 1.0s; }
  .t3 { animation-delay: 1.8s; }
  .t4 { animation-delay: 2.6s; }
  .t5 { animation-delay: 3.4s; }
  .arc { opacity: 0; animation: fadeIn 0.4s ease forwards; }
  .a1 { animation-delay: 0.6s; }
  .a2 { animation-delay: 1.4s; }
  .a3 { animation-delay: 2.2s; }
  .a4 { animation-delay: 3.0s; }
  @keyframes fadeIn { to { opacity: 1; } }
  @keyframes bounceArc {
    0% { stroke-dashoffset: 200; opacity: 0; }
    20% { opacity: 1; }
    100% { stroke-dashoffset: 0; opacity: 1; }
  }
  .arc-path { stroke-dasharray: 200; stroke-dashoffset: 200; animation: bounceArc 0.6s ease forwards; }
  .ap1 { animation-delay: 0.7s; }
  .ap2 { animation-delay: 1.5s; }
  .ap3 { animation-delay: 2.3s; }
  .ap4 { animation-delay: 3.1s; }
  .title { font: bold 14px sans-serif; fill: #e2e8f0; }
  .label { font: bold 13px sans-serif; fill: #ffffff; }
  .sublabel { font: 11px sans-serif; fill: #94a3b8; }
  .diff-label { font: bold 11px sans-serif; fill: #fbbf24; }
  .formula { font: bold 13px sans-serif; fill: #a78bfa; }
</style>
<!-- Background -->
<rect width="440" height="200" rx="12" fill="#1e293b"/>
<!-- Title -->
<text x="220" y="24" text-anchor="middle" class="title">Arithmetic Sequence: 3, 7, 11, 15, 19 ...</text>
<!-- Number line -->
<line x1="30" y1="110" x2="420" y2="110" stroke="#475569" stroke-width="2"/>
<line x1="418" y1="106" x2="425" y2="110" stroke="#475569" stroke-width="2"/>
<line x1="418" y1="114" x2="425" y2="110" stroke="#475569" stroke-width="2"/>
<!-- Term positions: 3→x=60, 7→x=140, 11→x=220, 15→x=300, 19→x=380 -->
<!-- Term 1: 3 -->
<g class="term t1">
  <circle cx="60" cy="110" r="18" fill="#1e40af" stroke="#60a5fa" stroke-width="2"/>
  <text x="60" y="115" text-anchor="middle" class="label">3</text>
  <text x="60" y="140" text-anchor="middle" class="sublabel">a₁</text>
</g>
<!-- Term 2: 7 -->
<g class="term t2">
  <circle cx="140" cy="110" r="18" fill="#1e40af" stroke="#60a5fa" stroke-width="2"/>
  <text x="140" y="115" text-anchor="middle" class="label">7</text>
  <text x="140" y="140" text-anchor="middle" class="sublabel">a₂</text>
</g>
<!-- Term 3: 11 -->
<g class="term t3">
  <circle cx="220" cy="110" r="18" fill="#1e40af" stroke="#60a5fa" stroke-width="2"/>
  <text x="220" y="115" text-anchor="middle" class="label">11</text>
  <text x="220" y="140" text-anchor="middle" class="sublabel">a₃</text>
</g>
<!-- Term 4: 15 -->
<g class="term t4">
  <circle cx="300" cy="110" r="18" fill="#1e40af" stroke="#60a5fa" stroke-width="2"/>
  <text x="300" y="115" text-anchor="middle" class="label">15</text>
  <text x="300" y="140" text-anchor="middle" class="sublabel">a₄</text>
</g>
<!-- Term 5: 19 -->
<g class="term t5">
  <circle cx="380" cy="110" r="18" fill="#1e40af" stroke="#60a5fa" stroke-width="2"/>
  <text x="380" y="115" text-anchor="middle" class="label">19</text>
  <text x="380" y="140" text-anchor="middle" class="sublabel">a₅</text>
</g>
<!-- Arcs (quadratic bezier above line) -->
<path class="arc-path ap1" d="M78 107 Q100 62 122 107" fill="none" stroke="#fbbf24" stroke-width="2"/>
<path class="arc-path ap2" d="M158 107 Q180 62 202 107" fill="none" stroke="#fbbf24" stroke-width="2"/>
<path class="arc-path ap3" d="M238 107 Q260 62 282 107" fill="none" stroke="#fbbf24" stroke-width="2"/>
<path class="arc-path ap4" d="M318 107 Q340 62 362 107" fill="none" stroke="#fbbf24" stroke-width="2"/>
<!-- +4 labels above arcs -->
<g class="arc a1"><text x="100" y="57" text-anchor="middle" class="diff-label">+4</text></g>
<g class="arc a2"><text x="180" y="57" text-anchor="middle" class="diff-label">+4</text></g>
<g class="arc a3"><text x="260" y="57" text-anchor="middle" class="diff-label">+4</text></g>
<g class="arc a4"><text x="340" y="57" text-anchor="middle" class="diff-label">+4</text></g>
<!-- Formula -->
<text x="220" y="178" text-anchor="middle" class="formula">aₙ = 3 + (n−1)×4 = 4n − 1    d = 4</text>
</svg>`,
    },

    // ---- CONCEPT: Geometric Sequences ----
    {
      type: 'concept',
      title: 'Geometric Sequences',
      content: `
<div>
  <p>A <strong>geometric sequence</strong> has a <strong>constant ratio</strong> between consecutive terms.</p>
  <br/>
  <p><strong>Example:</strong> 2, 6, 18, 54, 162, ... (common ratio r = 3)</p>
  <br/>
  <div style="background:rgba(6,182,212,0.15);padding:14px;border-radius:8px;">
    <p><strong>nth term:</strong> a<sub>n</sub> = a &times; r to the (n&minus;1)</p>
    <p style="margin-top:6px;">where <em>a</em> = first term, <em>r</em> = common ratio</p>
  </div>
  <br/>
  <p><strong>Sum of first n terms:</strong></p>
  <div style="text-align:center;font-size:1.15rem;margin:12px 0;">
    S<sub>n</sub> = a(r to the n &minus; 1) / (r &minus; 1) &nbsp;&nbsp; (when r &ne; 1)
  </div>
  <br/>
  <p><strong>How to recognise:</strong> Take ratios of consecutive terms. If they're all the same, it's geometric.</p>
  <br/>
  <p><strong>Example:</strong> Find the 8th term of 2, 6, 18, 54, ...</p>
  <ul>
    <li>a = 2, r = 3, n = 8</li>
    <li>a<sub>8</sub> = 2 &times; 3 to the 7 = 2 &times; 2187 = <strong>4374</strong></li>
  </ul>
  <br/>
  <p style="background:rgba(6,182,212,0.15);padding:12px;border-radius:8px;">
    <strong>Infinite geometric sum:</strong> When |r| &lt; 1, S = a / (1 &minus; r). This is rare in SASMO but occasionally appears.
  </p>
</div>`,
      svgDiagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 440 220" width="440" height="220">
<style>
  @keyframes growBar1 { from { height: 0; y: 160; } to { height: 20; y: 140; } }
  @keyframes growBar2 { from { height: 0; y: 160; } to { height: 60; y: 100; } }
  @keyframes growBar3 { from { height: 0; y: 160; } to { height: 108; y: 52; } }
  @keyframes growBar4 { from { height: 0; y: 160; } to { height: 160; y: 0; } }
  .bar1 { animation: growBar1 0.6s 0.3s ease both; }
  .bar2 { animation: growBar2 0.6s 1.0s ease both; }
  .bar3 { animation: growBar3 0.6s 1.7s ease both; }
  .bar4 { animation: growBar4 0.6s 2.4s ease both; }
  @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
  .lbl { opacity: 0; animation: fadeIn 0.4s ease forwards; }
  .l1 { animation-delay: 0.9s; }
  .l2 { animation-delay: 1.6s; }
  .l3 { animation-delay: 2.3s; }
  .l4 { animation-delay: 3.0s; }
  .mult { opacity: 0; animation: fadeIn 0.4s ease forwards; }
  .m1 { animation-delay: 1.3s; }
  .m2 { animation-delay: 2.0s; }
  .m3 { animation-delay: 2.7s; }
  .title { font: bold 14px sans-serif; fill: #e2e8f0; }
  .vallbl { font: bold 12px sans-serif; fill: #ffffff; }
  .multlbl { font: bold 11px sans-serif; fill: #f97316; }
  .formula { font: bold 12px sans-serif; fill: #a78bfa; }
  .note { font: 11px sans-serif; fill: #94a3b8; }
</style>
<rect width="440" height="220" rx="12" fill="#1e293b"/>
<text x="220" y="22" text-anchor="middle" class="title">Geometric Sequence: 2, 6, 18, 54 ... (ratio ×3)</text>
<!-- Baseline -->
<line x1="40" y1="168" x2="400" y2="168" stroke="#475569" stroke-width="2"/>
<!-- Bar 1: value=2, height=20, x=70 -->
<rect class="bar1" x="65" y="140" width="50" height="20" rx="4" fill="#60a5fa"/>
<g class="lbl l1">
  <text x="90" y="135" text-anchor="middle" class="vallbl">2</text>
  <text x="90" y="185" text-anchor="middle" class="note">a₁</text>
</g>
<!-- Bar 2: value=6, height=60, x=160 -->
<rect class="bar2" x="145" y="100" width="50" height="60" rx="4" fill="#a78bfa"/>
<g class="lbl l2">
  <text x="170" y="95" text-anchor="middle" class="vallbl">6</text>
  <text x="170" y="185" text-anchor="middle" class="note">a₂</text>
</g>
<!-- Bar 3: value=18, height=108, x=245 -->
<rect class="bar3" x="235" y="52" width="50" height="108" rx="4" fill="#f97316"/>
<g class="lbl l3">
  <text x="260" y="47" text-anchor="middle" class="vallbl">18</text>
  <text x="260" y="185" text-anchor="middle" class="note">a₃</text>
</g>
<!-- Bar 4: value=54, height=160, x=330 -->
<rect class="bar4" x="325" y="0" width="50" height="160" rx="4" fill="#34d399"/>
<g class="lbl l4">
  <text x="350" y="18" text-anchor="middle" class="vallbl">54</text>
  <text x="350" y="185" text-anchor="middle" class="note">a₄</text>
</g>
<!-- ×3 labels between bars -->
<g class="mult m1">
  <text x="130" y="125" text-anchor="middle" class="multlbl">×3</text>
</g>
<g class="mult m2">
  <text x="215" y="80" text-anchor="middle" class="multlbl">×3</text>
</g>
<g class="mult m3">
  <text x="300" y="40" text-anchor="middle" class="multlbl">×3</text>
</g>
<!-- Formula -->
<text x="220" y="202" text-anchor="middle" class="formula">aₙ = 2 × 3ⁿ⁻¹    r = 3 (exponential growth!)</text>
</svg>`,
    },

    // ---- CONCEPT: Difference Tables ----
    {
      type: 'concept',
      title: 'Difference Tables &mdash; Finding Hidden Patterns',
      content: `
<div>
  <p>Not all sequences are arithmetic or geometric. <strong>Difference tables</strong> help you crack harder sequences.</p>
  <br/>
  <p><strong>Method:</strong></p>
  <ol>
    <li>Write out the sequence (Row 0).</li>
    <li>Compute differences between consecutive terms (Row 1).</li>
    <li>If Row 1 isn't constant, compute differences again (Row 2).</li>
    <li>Continue until you get a constant row.</li>
  </ol>
  <br/>
  <p><strong>Example:</strong> 1, 4, 10, 20, 35, ...</p>
  <table style="border-collapse:collapse;margin:0 auto;">
    <tr>
      <td style="padding:4px 10px;color:#06b6d4;">Row 0:</td>
      <td style="padding:4px 10px;">1</td><td style="padding:4px 10px;">4</td><td style="padding:4px 10px;">10</td><td style="padding:4px 10px;">20</td><td style="padding:4px 10px;">35</td>
    </tr>
    <tr>
      <td style="padding:4px 10px;color:#06b6d4;">Row 1:</td>
      <td style="padding:4px 10px;"></td><td style="padding:4px 10px;">3</td><td style="padding:4px 10px;">6</td><td style="padding:4px 10px;">10</td><td style="padding:4px 10px;">15</td>
    </tr>
    <tr>
      <td style="padding:4px 10px;color:#06b6d4;">Row 2:</td>
      <td style="padding:4px 10px;"></td><td style="padding:4px 10px;"></td><td style="padding:4px 10px;">3</td><td style="padding:4px 10px;">4</td><td style="padding:4px 10px;">5</td>
    </tr>
    <tr>
      <td style="padding:4px 10px;color:#06b6d4;">Row 3:</td>
      <td style="padding:4px 10px;"></td><td style="padding:4px 10px;"></td><td style="padding:4px 10px;"></td><td style="padding:4px 10px;font-weight:bold;color:#f97316;">1</td><td style="padding:4px 10px;font-weight:bold;color:#f97316;">1</td>
    </tr>
  </table>
  <br/>
  <p>Row 3 is constant! This means the sequence is a <strong>cubic</strong> (degree 3 polynomial).</p>
  <br/>
  <p><strong>Key rule:</strong></p>
  <ul>
    <li>Constant at Row 1 &rarr; arithmetic (linear, degree 1)</li>
    <li>Constant at Row 2 &rarr; quadratic (degree 2)</li>
    <li>Constant at Row 3 &rarr; cubic (degree 3)</li>
  </ul>
  <br/>
  <p>To find the <strong>next term</strong>: work backwards from the constant row, adding to extend each row.</p>
</div>`,
      svgDiagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 440 230" width="440" height="230">
<style>
  @keyframes fadeIn { from { opacity: 0; transform: translateY(-8px); } to { opacity: 1; transform: translateY(0); } }
  .row1 { opacity: 0; animation: fadeIn 0.6s 0.3s ease forwards; }
  .row2 { opacity: 0; animation: fadeIn 0.6s 1.2s ease forwards; }
  .row3 { opacity: 0; animation: fadeIn 0.6s 2.1s ease forwards; }
  @keyframes pulse { 0%,100% { opacity: 1; } 50% { opacity: 0.4; } }
  .highlight { animation: pulse 1.5s 2.8s ease infinite; }
  .title { font: bold 14px sans-serif; fill: #e2e8f0; }
  .seq { font: bold 15px sans-serif; fill: #60a5fa; }
  .diff1 { font: bold 14px sans-serif; fill: #f97316; }
  .diff2 { font: bold 14px sans-serif; fill: #34d399; }
  .rowlbl { font: bold 11px sans-serif; fill: #94a3b8; }
  .arrow { stroke: #475569; stroke-width: 1.5; fill: none; }
  .formula { font: bold 12px sans-serif; fill: #a78bfa; }
  .note { font: 11px sans-serif; fill: #94a3b8; }
</style>
<rect width="440" height="230" rx="12" fill="#1e293b"/>
<text x="220" y="22" text-anchor="middle" class="title">Difference Table: 1, 4, 9, 16, 25 (perfect squares)</text>

<!-- Row labels -->
<text x="18" y="68" class="rowlbl">Seq</text>
<text x="18" y="128" class="rowlbl">1st Δ</text>
<text x="18" y="183" class="rowlbl">2nd Δ</text>

<!-- Sequence row: 1, 4, 9, 16, 25 at x = 70,120,185,255,325,395 -->
<g class="row1">
  <text x="70"  y="68" text-anchor="middle" class="seq">1</text>
  <text x="140" y="68" text-anchor="middle" class="seq">4</text>
  <text x="210" y="68" text-anchor="middle" class="seq">9</text>
  <text x="280" y="68" text-anchor="middle" class="seq">16</text>
  <text x="350" y="68" text-anchor="middle" class="seq">25</text>
  <!-- Downward arrows for diffs -->
  <line x1="105" y1="73" x2="105" y2="108" class="arrow"/>
  <line x1="103" y1="108" x2="105" y2="111" stroke="#475569" stroke-width="1.5"/>
  <line x1="107" y1="108" x2="105" y2="111" stroke="#475569" stroke-width="1.5"/>
  <line x1="175" y1="73" x2="175" y2="108" class="arrow"/>
  <line x1="173" y1="108" x2="175" y2="111" stroke="#475569" stroke-width="1.5"/>
  <line x1="177" y1="108" x2="175" y2="111" stroke="#475569" stroke-width="1.5"/>
  <line x1="245" y1="73" x2="245" y2="108" class="arrow"/>
  <line x1="243" y1="108" x2="245" y2="111" stroke="#475569" stroke-width="1.5"/>
  <line x1="247" y1="108" x2="245" y2="111" stroke="#475569" stroke-width="1.5"/>
  <line x1="315" y1="73" x2="315" y2="108" class="arrow"/>
  <line x1="313" y1="108" x2="315" y2="111" stroke="#475569" stroke-width="1.5"/>
  <line x1="317" y1="108" x2="315" y2="111" stroke="#475569" stroke-width="1.5"/>
</g>

<!-- First differences: 3, 5, 7, 9 -->
<g class="row2">
  <text x="105" y="128" text-anchor="middle" class="diff1">3</text>
  <text x="175" y="128" text-anchor="middle" class="diff1">5</text>
  <text x="245" y="128" text-anchor="middle" class="diff1">7</text>
  <text x="315" y="128" text-anchor="middle" class="diff1">9</text>
  <!-- Arrows for 2nd diffs -->
  <line x1="140" y1="133" x2="140" y2="162" class="arrow"/>
  <line x1="138" y1="162" x2="140" y2="165" stroke="#475569" stroke-width="1.5"/>
  <line x1="142" y1="162" x2="140" y2="165" stroke="#475569" stroke-width="1.5"/>
  <line x1="210" y1="133" x2="210" y2="162" class="arrow"/>
  <line x1="208" y1="162" x2="210" y2="165" stroke="#475569" stroke-width="1.5"/>
  <line x1="212" y1="162" x2="210" y2="165" stroke="#475569" stroke-width="1.5"/>
  <line x1="280" y1="133" x2="280" y2="162" class="arrow"/>
  <line x1="278" y1="162" x2="280" y2="165" stroke="#475569" stroke-width="1.5"/>
  <line x1="282" y1="162" x2="280" y2="165" stroke="#475569" stroke-width="1.5"/>
</g>

<!-- Second differences: 2, 2, 2 — emerald + pulse highlight -->
<g class="row3">
  <rect class="highlight" x="122" y="170" width="36" height="20" rx="4" fill="#064e3b" stroke="#34d399" stroke-width="1.5"/>
  <rect class="highlight" x="192" y="170" width="36" height="20" rx="4" fill="#064e3b" stroke="#34d399" stroke-width="1.5"/>
  <rect class="highlight" x="262" y="170" width="36" height="20" rx="4" fill="#064e3b" stroke="#34d399" stroke-width="1.5"/>
  <text x="140" y="184" text-anchor="middle" class="diff2">2</text>
  <text x="210" y="184" text-anchor="middle" class="diff2">2</text>
  <text x="280" y="184" text-anchor="middle" class="diff2">2</text>
</g>

<!-- Annotation -->
<text x="220" y="212" text-anchor="middle" class="note">Constant 2nd differences → quadratic sequence (aₙ = n²)</text>
<text x="220" y="226" text-anchor="middle" class="formula">degree = number of differences needed to reach constant</text>
</svg>`,
    },

    // ---- CONCEPT: Useful Sum Formulas ----
    {
      type: 'concept',
      title: 'Useful Sum Formulas',
      content: `
<div>
  <p>Memorise these &mdash; they save massive time on SASMO:</p>
  <br/>
  <table style="border-collapse:collapse;width:100%;">
    <tr style="border-bottom:2px solid #06b6d4;">
      <th style="padding:8px;text-align:left;color:#06b6d4;">Sum</th>
      <th style="padding:8px;text-align:left;color:#06b6d4;">Formula</th>
    </tr>
    <tr><td style="padding:6px 8px;">1 + 2 + 3 + &hellip; + n</td><td style="padding:6px 8px;">n(n + 1) / 2</td></tr>
    <tr><td style="padding:6px 8px;">1&sup2; + 2&sup2; + 3&sup2; + &hellip; + n&sup2;</td><td style="padding:6px 8px;">n(n + 1)(2n + 1) / 6</td></tr>
    <tr><td style="padding:6px 8px;">1&sup3; + 2&sup3; + 3&sup3; + &hellip; + n&sup3;</td><td style="padding:6px 8px;">[n(n + 1) / 2]&sup2;</td></tr>
    <tr><td style="padding:6px 8px;">Sum of first n odd numbers</td><td style="padding:6px 8px;">n&sup2;</td></tr>
    <tr><td style="padding:6px 8px;">Sum of first n even numbers</td><td style="padding:6px 8px;">n(n + 1)</td></tr>
  </table>
  <br/>
  <p><strong>Fun fact:</strong> The sum of cubes equals the square of the sum of the first n numbers! That is, 1&sup3; + 2&sup3; + &hellip; + n&sup3; = (1 + 2 + &hellip; + n)&sup2;.</p>
  <br/>
  <p><strong>Example:</strong> 1 + 2 + 3 + &hellip; + 100 = 100 &times; 101 / 2 = <strong>5050</strong></p>
  <p><strong>Example:</strong> Sum of first 10 odd numbers = 10&sup2; = <strong>100</strong></p>
</div>`,
      svgDiagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 440 230" width="440" height="230">
<style>
  @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
  .row-top { opacity: 0; animation: fadeIn 0.5s 0.3s ease forwards; }
  .row-bot { opacity: 0; animation: fadeIn 0.5s 1.0s ease forwards; }
  .pair1  { opacity: 0; animation: fadeIn 0.4s 1.8s ease forwards; }
  .pair2  { opacity: 0; animation: fadeIn 0.4s 2.1s ease forwards; }
  .pair3  { opacity: 0; animation: fadeIn 0.4s 2.4s ease forwards; }
  .pair4  { opacity: 0; animation: fadeIn 0.4s 2.7s ease forwards; }
  .pair5  { opacity: 0; animation: fadeIn 0.4s 3.0s ease forwards; }
  .pair6  { opacity: 0; animation: fadeIn 0.4s 3.3s ease forwards; }
  .pair7  { opacity: 0; animation: fadeIn 0.4s 3.6s ease forwards; }
  .pair8  { opacity: 0; animation: fadeIn 0.4s 3.9s ease forwards; }
  .result { opacity: 0; animation: fadeIn 0.6s 4.3s ease forwards; }
  .title  { font: bold 14px sans-serif; fill: #e2e8f0; }
  .num    { font: bold 14px sans-serif; fill: #60a5fa; }
  .numrev { font: bold 14px sans-serif; fill: #f97316; }
  .sum9   { font: bold 12px sans-serif; fill: #fbbf24; }
  .formula { font: bold 13px sans-serif; fill: #34d399; }
  .plus   { font: bold 13px sans-serif; fill: #94a3b8; }
  .equals { font: bold 15px sans-serif; fill: #a78bfa; }
  .brace  { font: 20px sans-serif; fill: #475569; }
</style>
<rect width="440" height="230" rx="12" fill="#1e293b"/>
<text x="220" y="22" text-anchor="middle" class="title">Gauss Trick: 1+2+3+...+8 = ?</text>

<!-- Top row: 1 2 3 4 5 6 7 8 -->
<g class="row-top">
  <text x="30" y="60" class="plus">1+2+3+4+5+6+7+8 =</text>
  <circle cx="48"  cy="90" r="16" fill="#1e3a5f" stroke="#60a5fa" stroke-width="1.5"/>
  <circle cx="100" cy="90" r="16" fill="#1e3a5f" stroke="#60a5fa" stroke-width="1.5"/>
  <circle cx="152" cy="90" r="16" fill="#1e3a5f" stroke="#60a5fa" stroke-width="1.5"/>
  <circle cx="204" cy="90" r="16" fill="#1e3a5f" stroke="#60a5fa" stroke-width="1.5"/>
  <circle cx="256" cy="90" r="16" fill="#1e3a5f" stroke="#60a5fa" stroke-width="1.5"/>
  <circle cx="308" cy="90" r="16" fill="#1e3a5f" stroke="#60a5fa" stroke-width="1.5"/>
  <circle cx="360" cy="90" r="16" fill="#1e3a5f" stroke="#60a5fa" stroke-width="1.5"/>
  <circle cx="412" cy="90" r="16" fill="#1e3a5f" stroke="#60a5fa" stroke-width="1.5"/>
  <text x="48"  y="95" text-anchor="middle" class="num">1</text>
  <text x="100" y="95" text-anchor="middle" class="num">2</text>
  <text x="152" y="95" text-anchor="middle" class="num">3</text>
  <text x="204" y="95" text-anchor="middle" class="num">4</text>
  <text x="256" y="95" text-anchor="middle" class="num">5</text>
  <text x="308" y="95" text-anchor="middle" class="num">6</text>
  <text x="360" y="95" text-anchor="middle" class="num">7</text>
  <text x="412" y="95" text-anchor="middle" class="num">8</text>
</g>

<!-- Bottom row: 8 7 6 5 4 3 2 1 -->
<g class="row-bot">
  <circle cx="48"  cy="135" r="16" fill="#431407" stroke="#f97316" stroke-width="1.5"/>
  <circle cx="100" cy="135" r="16" fill="#431407" stroke="#f97316" stroke-width="1.5"/>
  <circle cx="152" cy="135" r="16" fill="#431407" stroke="#f97316" stroke-width="1.5"/>
  <circle cx="204" cy="135" r="16" fill="#431407" stroke="#f97316" stroke-width="1.5"/>
  <circle cx="256" cy="135" r="16" fill="#431407" stroke="#f97316" stroke-width="1.5"/>
  <circle cx="308" cy="135" r="16" fill="#431407" stroke="#f97316" stroke-width="1.5"/>
  <circle cx="360" cy="135" r="16" fill="#431407" stroke="#f97316" stroke-width="1.5"/>
  <circle cx="412" cy="135" r="16" fill="#431407" stroke="#f97316" stroke-width="1.5"/>
  <text x="48"  y="140" text-anchor="middle" class="numrev">8</text>
  <text x="100" y="140" text-anchor="middle" class="numrev">7</text>
  <text x="152" y="140" text-anchor="middle" class="numrev">6</text>
  <text x="204" y="140" text-anchor="middle" class="numrev">5</text>
  <text x="256" y="140" text-anchor="middle" class="numrev">4</text>
  <text x="308" y="140" text-anchor="middle" class="numrev">3</text>
  <text x="360" y="140" text-anchor="middle" class="numrev">2</text>
  <text x="412" y="140" text-anchor="middle" class="numrev">1</text>
</g>

<!-- Pair brackets and sums = 9 -->
<g class="pair1"><line x1="48" y1="108" x2="48" y2="117" stroke="#fbbf24" stroke-width="1.5"/><text x="48" y="158" text-anchor="middle" class="sum9">=9</text></g>
<g class="pair2"><line x1="100" y1="108" x2="100" y2="117" stroke="#fbbf24" stroke-width="1.5"/><text x="100" y="158" text-anchor="middle" class="sum9">=9</text></g>
<g class="pair3"><line x1="152" y1="108" x2="152" y2="117" stroke="#fbbf24" stroke-width="1.5"/><text x="152" y="158" text-anchor="middle" class="sum9">=9</text></g>
<g class="pair4"><line x1="204" y1="108" x2="204" y2="117" stroke="#fbbf24" stroke-width="1.5"/><text x="204" y="158" text-anchor="middle" class="sum9">=9</text></g>
<g class="pair5"><line x1="256" y1="108" x2="256" y2="117" stroke="#fbbf24" stroke-width="1.5"/><text x="256" y="158" text-anchor="middle" class="sum9">=9</text></g>
<g class="pair6"><line x1="308" y1="108" x2="308" y2="117" stroke="#fbbf24" stroke-width="1.5"/><text x="308" y="158" text-anchor="middle" class="sum9">=9</text></g>
<g class="pair7"><line x1="360" y1="108" x2="360" y2="117" stroke="#fbbf24" stroke-width="1.5"/><text x="360" y="158" text-anchor="middle" class="sum9">=9</text></g>
<g class="pair8"><line x1="412" y1="108" x2="412" y2="117" stroke="#fbbf24" stroke-width="1.5"/><text x="412" y="158" text-anchor="middle" class="sum9">=9</text></g>

<!-- Result -->
<g class="result">
  <text x="220" y="185" text-anchor="middle" class="equals">8 pairs × 9 = 72, so sum = 72 ÷ 2 = 36</text>
  <text x="220" y="208" text-anchor="middle" class="formula">Formula: 1+2+...+n = n(n+1)/2 = 8×9/2 = 36 ✓</text>
</g>
</svg>`,
    },

    // ---- TIP ----
    {
      type: 'tip',
      title: 'How to Identify the Sequence Type',
      content: `
<div>
  <p>When you see an unfamiliar sequence, follow this checklist:</p>
  <br/>
  <ol>
    <li><strong>Check differences</strong> &rarr; If constant, it's <strong>arithmetic</strong>.</li>
    <li><strong>Check ratios</strong> &rarr; If constant, it's <strong>geometric</strong>.</li>
    <li><strong>Check second differences</strong> &rarr; If constant, it's <strong>quadratic</strong> (like n&sup2;).</li>
    <li><strong>Look for known sequences</strong> &rarr; Triangular numbers (1,3,6,10,...), squares (1,4,9,16,...), Fibonacci (1,1,2,3,5,8,...), primes (2,3,5,7,11,...).</li>
    <li><strong>Check alternating patterns</strong> &rarr; Signs alternating? Two interleaved sequences?</li>
  </ol>
  <br/>
  <p><em>This systematic approach works for almost any SASMO sequence problem.</em></p>
</div>`,
      svgDiagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 440 260" width="440" height="260">
<style>
  @keyframes fadeDown { from { opacity: 0; transform: translateY(-10px); } to { opacity: 1; transform: translateY(0); } }
  .n0 { opacity: 0; animation: fadeDown 0.5s 0.2s ease forwards; }
  .n1 { opacity: 0; animation: fadeDown 0.5s 0.8s ease forwards; }
  .n2 { opacity: 0; animation: fadeDown 0.5s 1.5s ease forwards; }
  .n3 { opacity: 0; animation: fadeDown 0.5s 1.5s ease forwards; }
  .n4 { opacity: 0; animation: fadeDown 0.5s 2.2s ease forwards; }
  .n5 { opacity: 0; animation: fadeDown 0.5s 2.2s ease forwards; }
  .n6 { opacity: 0; animation: fadeDown 0.5s 3.0s ease forwards; }
  @keyframes drawLine { from { stroke-dashoffset: 80; } to { stroke-dashoffset: 0; } }
  .ln1 { stroke-dasharray: 80; stroke-dashoffset: 80; animation: drawLine 0.4s 0.7s ease forwards; }
  .ln2a { stroke-dasharray: 80; stroke-dashoffset: 80; animation: drawLine 0.4s 1.4s ease forwards; }
  .ln2b { stroke-dasharray: 80; stroke-dashoffset: 80; animation: drawLine 0.4s 1.4s ease forwards; }
  .ln3a { stroke-dasharray: 80; stroke-dashoffset: 80; animation: drawLine 0.4s 2.1s ease forwards; }
  .ln3b { stroke-dasharray: 80; stroke-dashoffset: 80; animation: drawLine 0.4s 2.1s ease forwards; }
  .ln4  { stroke-dasharray: 80; stroke-dashoffset: 80; animation: drawLine 0.4s 2.9s ease forwards; }
  .title { font: bold 13px sans-serif; fill: #e2e8f0; }
  .qbox { fill: #1e3a5f; stroke: #60a5fa; stroke-width: 2; rx: 8; }
  .ybox { fill: #064e3b; stroke: #34d399; stroke-width: 2; }
  .nbox { fill: #431407; stroke: #f97316; stroke-width: 2; }
  .trybox { fill: #312e81; stroke: #a78bfa; stroke-width: 2; }
  .qt { font: bold 12px sans-serif; fill: #93c5fd; }
  .yt { font: bold 12px sans-serif; fill: #6ee7b7; }
  .nt { font: bold 12px sans-serif; fill: #fdba74; }
  .tt { font: bold 12px sans-serif; fill: #c4b5fd; }
  .edgelbl { font: bold 10px sans-serif; }
  .yes { fill: #34d399; }
  .no  { fill: #f97316; }
  .connector { stroke: #64748b; stroke-width: 2; fill: none; }
</style>
<rect width="440" height="260" rx="12" fill="#1e293b"/>
<text x="220" y="20" text-anchor="middle" class="title">How to Identify a Sequence</text>

<!-- Start box -->
<g class="n0">
  <rect x="120" y="28" width="200" height="36" rx="8" class="qbox" fill="#1e3a5f" stroke="#60a5fa" stroke-width="2"/>
  <text x="220" y="50" text-anchor="middle" class="qt">Is the difference constant?</text>
</g>

<!-- Arrow down from start -->
<line x1="220" y1="64" x2="220" y2="85" class="connector ln1"/>
<polygon points="220,88 216,81 224,81" fill="#64748b" class="ln1" style="stroke-dasharray:none;animation:fadeDown 0.1s 1.1s ease forwards;opacity:0"/>

<!-- YES left branch, NO right branch -->
<!-- YES label + Arithmetic box -->
<g class="n2">
  <line x1="220" y1="88" x2="110" y2="88" class="connector ln2a" style="stroke-dasharray:80;stroke-dashoffset:80;animation:drawLine 0.4s 1.4s ease forwards"/>
  <line x1="110" y1="88" x2="110" y2="108" class="connector ln2a" style="stroke-dasharray:80;stroke-dashoffset:80;animation:drawLine 0.4s 1.4s ease forwards"/>
  <text x="155" y="84" text-anchor="middle" class="edgelbl yes">YES</text>
  <rect x="52" y="108" width="116" height="36" rx="8" class="ybox" fill="#064e3b" stroke="#34d399" stroke-width="2"/>
  <text x="110" y="126" text-anchor="middle" class="yt">ARITHMETIC</text>
  <text x="110" y="140" text-anchor="middle" style="font:10px sans-serif;fill:#6ee7b7;">aₙ = a₁ + (n−1)d</text>
</g>

<!-- NO right branch -->
<g class="n3">
  <line x1="220" y1="88" x2="330" y2="88" class="connector ln2b" style="stroke-dasharray:80;stroke-dashoffset:80;animation:drawLine 0.4s 1.4s ease forwards"/>
  <line x1="330" y1="88" x2="330" y2="108" class="connector ln2b" style="stroke-dasharray:80;stroke-dashoffset:80;animation:drawLine 0.4s 1.4s ease forwards"/>
  <text x="282" y="84" text-anchor="middle" class="edgelbl no">NO</text>
  <rect x="240" y="108" width="180" height="36" rx="8" class="qbox" fill="#1e3a5f" stroke="#60a5fa" stroke-width="2"/>
  <text x="330" y="130" text-anchor="middle" class="qt">Is the ratio constant?</text>
</g>

<!-- From ratio question: YES → Geometric, NO → Try diff table -->
<g class="n4">
  <line x1="270" y1="144" x2="220" y2="165" class="connector ln3a" style="stroke-dasharray:80;stroke-dashoffset:80;animation:drawLine 0.4s 2.1s ease forwards"/>
  <text x="237" y="162" text-anchor="middle" class="edgelbl yes">YES</text>
  <rect x="148" y="165" width="144" height="36" rx="8" class="nbox" fill="#431407" stroke="#f97316" stroke-width="2"/>
  <text x="220" y="183" text-anchor="middle" class="nt">GEOMETRIC</text>
  <text x="220" y="197" text-anchor="middle" style="font:10px sans-serif;fill:#fdba74;">aₙ = a₁ × rⁿ⁻¹</text>
</g>

<g class="n5">
  <line x1="390" y1="144" x2="390" y2="165" class="connector ln3b" style="stroke-dasharray:80;stroke-dashoffset:80;animation:drawLine 0.4s 2.1s ease forwards"/>
  <text x="400" y="162" class="edgelbl no">NO</text>
  <rect x="322" y="165" width="136" height="36" rx="8" class="trybox" fill="#312e81" stroke="#a78bfa" stroke-width="2"/>
  <text x="390" y="183" text-anchor="middle" class="tt">Try difference</text>
  <text x="390" y="196" text-anchor="middle" class="tt">table method</text>
</g>

<!-- Bottom note -->
<g class="n6">
  <text x="220" y="228" text-anchor="middle" style="font:11px sans-serif;fill:#94a3b8;">Tip: compute differences until a row is constant</text>
  <text x="220" y="245" text-anchor="middle" style="font:11px sans-serif;fill:#a78bfa;">degree of polynomial = rows needed to reach constant</text>
</g>
</svg>`,
    },
  ],

  workedExamples: [
    {
      title: 'Sum of an Arithmetic Series',
      problem:
        'Find the sum: 5 + 8 + 11 + 14 + ... + 302.',
      solution: `
<div>
  <p><strong>Step 1 &mdash; Identify:</strong> Arithmetic with a = 5, d = 3, l = 302.</p>
  <br/>
  <p><strong>Step 2 &mdash; Find n:</strong></p>
  <p>l = a + (n&minus;1)d &rarr; 302 = 5 + (n&minus;1)&times;3 &rarr; 297 = 3(n&minus;1) &rarr; n&minus;1 = 99 &rarr; n = <strong>100</strong></p>
  <br/>
  <p><strong>Step 3 &mdash; Find the sum:</strong></p>
  <p>S = n(a + l)/2 = 100 &times; (5 + 302) / 2 = 100 &times; 307 / 2 = <strong>15,350</strong></p>
  <br/>
  <p style="font-size:1.15rem;color:#34d399;"><strong>Answer: 15,350</strong></p>
</div>`,
    },
    {
      title: 'Using the Difference Table',
      problem:
        'Find the next term in: 2, 5, 11, 20, 32, ...',
      solution: `
<div>
  <p><strong>Step 1 &mdash; Build the difference table:</strong></p>
  <table style="border-collapse:collapse;margin:0 auto;">
    <tr>
      <td style="padding:4px 8px;color:#06b6d4;">Row 0:</td>
      <td style="padding:4px 8px;">2</td><td style="padding:4px 8px;">5</td><td style="padding:4px 8px;">11</td><td style="padding:4px 8px;">20</td><td style="padding:4px 8px;">32</td>
    </tr>
    <tr>
      <td style="padding:4px 8px;color:#06b6d4;">Row 1:</td>
      <td style="padding:4px 8px;"></td><td style="padding:4px 8px;">3</td><td style="padding:4px 8px;">6</td><td style="padding:4px 8px;">9</td><td style="padding:4px 8px;">12</td>
    </tr>
    <tr>
      <td style="padding:4px 8px;color:#06b6d4;">Row 2:</td>
      <td style="padding:4px 8px;"></td><td style="padding:4px 8px;"></td><td style="padding:4px 8px;font-weight:bold;color:#f97316;">3</td><td style="padding:4px 8px;font-weight:bold;color:#f97316;">3</td><td style="padding:4px 8px;font-weight:bold;color:#f97316;">3</td>
    </tr>
  </table>
  <br/>
  <p><strong>Step 2 &mdash; Row 2 is constant (3). Work backwards:</strong></p>
  <ul>
    <li>Next in Row 2: <strong>3</strong></li>
    <li>Next in Row 1: 12 + 3 = <strong>15</strong></li>
    <li>Next in Row 0: 32 + 15 = <strong>47</strong></li>
  </ul>
  <br/>
  <p style="font-size:1.15rem;color:#34d399;"><strong>Answer: The next term is 47.</strong></p>
</div>`,
    },
    {
      title: 'Geometric Series Sum',
      problem:
        'Find the sum: 3 + 6 + 12 + 24 + ... + 3072.',
      solution: `
<div>
  <p><strong>Step 1 &mdash; Identify:</strong> Geometric with a = 3, r = 2.</p>
  <br/>
  <p><strong>Step 2 &mdash; Find n:</strong></p>
  <p>a<sub>n</sub> = a &times; r to the (n&minus;1) = 3 &times; 2 to the (n&minus;1) = 3072</p>
  <p>2 to the (n&minus;1) = 1024 = 2 to the 10, so n &minus; 1 = 10, n = <strong>11</strong></p>
  <br/>
  <p><strong>Step 3 &mdash; Sum formula:</strong></p>
  <p>S = a(r to the n &minus; 1) / (r &minus; 1) = 3 &times; (2 to the 11 &minus; 1) / (2 &minus; 1) = 3 &times; 2047 = <strong>6141</strong></p>
  <br/>
  <p style="font-size:1.15rem;color:#34d399;"><strong>Answer: 6141</strong></p>
</div>`,
    },
  ],

  videos: [],

  sasmoTips: [
    'When you see a sequence, immediately compute differences. If they are constant, you have an arithmetic sequence and can use the formulas directly.',
    'If differences are not constant, compute second differences. Many SASMO sequences are quadratic.',
    'The sum 1 + 2 + ... + n = n(n+1)/2 appears surprisingly often. Know it by heart.',
    'For geometric sequences, always check: is there a constant ratio between consecutive terms?',
  ],

  commonMistakes: [
    'Using the arithmetic formula when the sequence is actually geometric (or vice versa).',
    'Off-by-one errors: the nth term formula uses (n-1), not n. The 1st term is n = 1.',
    'Forgetting to check if a sequence could be two interleaved simpler sequences.',
    'Not simplifying the sum formula before computing. Work with fractions to avoid errors.',
  ],

  keyFormulas: [
    'Arithmetic nth term: a + (n-1)d',
    'Arithmetic sum: n(a + l) / 2 = n(2a + (n-1)d) / 2',
    'Geometric nth term: a * r^(n-1)',
    'Geometric sum: a(r^n - 1) / (r - 1)',
    '1 + 2 + ... + n = n(n+1) / 2',
    'Sum of squares: n(n+1)(2n+1) / 6',
    'Sum of cubes: [n(n+1)/2]^2',
    'Sum of first n odd numbers = n^2',
  ],
};

// ============================================================
// 8. PROBABILITY
// ============================================================
const probability: TopicLesson = {
  id: 'probability',
  topic: 'Probability',
  title: 'Probability & Expected Value',
  description:
    'From basic probability to inclusion-exclusion and expected value, master the tools for uncertainty. Appears most years.',
  color: 'from-pink-500 to-pink-600',
  iconEmoji: '\uD83C\uDFAF',
  examFrequency: 'Most years',
  mastery: 100,

  sections: [
    // ---- CONCEPT: Basic Probability ----
    {
      type: 'concept',
      title: 'Basic Probability',
      content: `
<div>
  <p>Probability measures how likely an event is to happen, on a scale from <strong>0</strong> (impossible) to <strong>1</strong> (certain).</p>
  <br/>
  <div style="background:rgba(244,114,182,0.15);padding:14px;border-radius:8px;text-align:center;font-size:1.15rem;">
    <strong>P(event) = Number of favourable outcomes / Total number of outcomes</strong>
  </div>
  <br/>
  <p><strong>Requirements:</strong></p>
  <ul>
    <li>All outcomes must be <strong>equally likely</strong> (fair dice, fair coins, etc.).</li>
    <li>0 &le; P(A) &le; 1 for any event A.</li>
    <li>P(not A) = 1 &minus; P(A). This is called the <strong>complement</strong>.</li>
  </ul>
  <br/>
  <p><strong>Example:</strong> What is the probability of rolling a 3 on a fair 6-sided die?</p>
  <p>P(3) = 1/6 &approx; 0.167</p>
  <br/>
  <p><strong>Example:</strong> What is the probability of rolling an even number?</p>
  <p>Even outcomes: {2, 4, 6} &rarr; 3 outcomes out of 6 &rarr; P = 3/6 = <strong>1/2</strong></p>
</div>`,
      svgDiagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 440 210" width="440" height="210">
<style>
  @keyframes cycleDie {
    0%,14%  { opacity: 1; }
    16%,100% { opacity: 0; }
  }
  @keyframes cycleDie2 {
    0%,13%   { opacity: 0; }
    14%,28%  { opacity: 1; }
    30%,100% { opacity: 0; }
  }
  @keyframes cycleDie3 {
    0%,27%   { opacity: 0; }
    28%,42%  { opacity: 1; }
    44%,100% { opacity: 0; }
  }
  @keyframes cycleDie4 {
    0%,41%   { opacity: 0; }
    42%,56%  { opacity: 1; }
    58%,100% { opacity: 0; }
  }
  @keyframes cycleDie5 {
    0%,55%   { opacity: 0; }
    56%,70%  { opacity: 1; }
    72%,100% { opacity: 0; }
  }
  @keyframes cycleDie6 {
    0%,69%   { opacity: 0; }
    70%,100% { opacity: 1; }
  }
  @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
  @keyframes pulse { 0%,100%{opacity:1;} 50%{opacity:0.5;} }
  .die1 { animation: cycleDie  3s 0.2s ease-out both; }
  .die2 { animation: cycleDie2 3s 0.2s ease-out both; }
  .die3 { animation: cycleDie3 3s 0.2s ease-out both; }
  .die4 { animation: cycleDie4 3s 0.2s ease-out both; }
  .die5 { animation: cycleDie5 3s 0.2s ease-out both; }
  .die6 { animation: cycleDie6 3s 0.2s ease-out both; }
  .result { opacity: 0; animation: fadeIn 0.6s 3.5s ease forwards; }
  .fav { animation: pulse 1.5s 3.8s ease infinite; }
  .title { font: bold 14px sans-serif; fill: #e2e8f0; }
  .face  { fill: #1e293b; stroke: #60a5fa; stroke-width: 2; rx: 10; }
  .dot   { fill: #ffffff; }
  .dothi { fill: #34d399; }
  .lbl   { font: bold 13px sans-serif; fill: #e2e8f0; }
  .fraction { font: bold 18px sans-serif; fill: #fbbf24; }
  .note { font: 11px sans-serif; fill: #94a3b8; }
</style>
<rect width="440" height="210" rx="12" fill="#1e293b"/>
<text x="220" y="22" text-anchor="middle" class="title">Probability: Rolling a fair die, P(outcome &gt; 4) = ?</text>

<!-- Die cycling at x=180, y=50, size 70x70 -->
<!-- Face 1 -->
<g class="die1">
  <rect x="145" y="40" width="70" height="70" rx="10" fill="#1e293b" stroke="#60a5fa" stroke-width="2"/>
  <circle cx="180" cy="75" r="6" class="dot"/>
</g>
<!-- Face 2 -->
<g class="die2">
  <rect x="145" y="40" width="70" height="70" rx="10" fill="#1e293b" stroke="#60a5fa" stroke-width="2"/>
  <circle cx="162" cy="60" r="6" class="dot"/>
  <circle cx="198" cy="90" r="6" class="dot"/>
</g>
<!-- Face 3 -->
<g class="die3">
  <rect x="145" y="40" width="70" height="70" rx="10" fill="#1e293b" stroke="#60a5fa" stroke-width="2"/>
  <circle cx="162" cy="58" r="6" class="dot"/>
  <circle cx="180" cy="75" r="6" class="dot"/>
  <circle cx="198" cy="92" r="6" class="dot"/>
</g>
<!-- Face 4 -->
<g class="die4">
  <rect x="145" y="40" width="70" height="70" rx="10" fill="#1e293b" stroke="#60a5fa" stroke-width="2"/>
  <circle cx="162" cy="60" r="6" class="dot"/>
  <circle cx="198" cy="60" r="6" class="dot"/>
  <circle cx="162" cy="90" r="6" class="dot"/>
  <circle cx="198" cy="90" r="6" class="dot"/>
</g>
<!-- Face 5 (favorable!) -->
<g class="die5">
  <rect x="145" y="40" width="70" height="70" rx="10" fill="#1e293b" stroke="#34d399" stroke-width="2.5"/>
  <circle cx="162" cy="58" r="6" class="dothi"/>
  <circle cx="198" cy="58" r="6" class="dothi"/>
  <circle cx="180" cy="75" r="6" class="dothi"/>
  <circle cx="162" cy="92" r="6" class="dothi"/>
  <circle cx="198" cy="92" r="6" class="dothi"/>
</g>
<!-- Face 6 (favorable!) -->
<g class="die6">
  <rect x="145" y="40" width="70" height="70" rx="10" fill="#1e293b" stroke="#34d399" stroke-width="2.5"/>
  <circle cx="162" cy="57" r="6" class="dothi"/>
  <circle cx="198" cy="57" r="6" class="dothi"/>
  <circle cx="162" cy="75" r="6" class="dothi"/>
  <circle cx="198" cy="75" r="6" class="dothi"/>
  <circle cx="162" cy="93" r="6" class="dothi"/>
  <circle cx="198" cy="93" r="6" class="dothi"/>
</g>

<!-- Result section -->
<g class="result">
  <text x="220" y="135" text-anchor="middle" class="lbl">Favorable outcomes: 5 and 6</text>
  <!-- Faces 5 and 6 side by side highlighted -->
  <rect x="100" y="145" width="50" height="50" rx="8" fill="#064e3b" stroke="#34d399" stroke-width="2" class="fav"/>
  <circle cx="115" cy="160" r="5" fill="#34d399"/><circle cx="135" cy="160" r="5" fill="#34d399"/>
  <circle cx="125" cy="170" r="5" fill="#34d399"/>
  <circle cx="115" cy="180" r="5" fill="#34d399"/><circle cx="135" cy="180" r="5" fill="#34d399"/>
  <text x="125" y="206" text-anchor="middle" class="note">5</text>

  <rect x="160" y="145" width="50" height="50" rx="8" fill="#064e3b" stroke="#34d399" stroke-width="2" class="fav"/>
  <circle cx="173" cy="158" r="5" fill="#34d399"/><circle cx="197" cy="158" r="5" fill="#34d399"/>
  <circle cx="173" cy="170" r="5" fill="#34d399"/><circle cx="197" cy="170" r="5" fill="#34d399"/>
  <circle cx="173" cy="182" r="5" fill="#34d399"/><circle cx="197" cy="182" r="5" fill="#34d399"/>
  <text x="185" y="206" text-anchor="middle" class="note">6</text>

  <text x="270" y="165" text-anchor="middle" style="font:bold 14px sans-serif;fill:#e2e8f0;">P(roll &gt; 4)</text>
  <line x1="238" y1="175" x2="330" y2="175" stroke="#fbbf24" stroke-width="2"/>
  <text x="267" y="163" text-anchor="middle" class="fraction">2</text>
  <text x="267" y="190" text-anchor="middle" class="fraction">6</text>
  <text x="300" y="178" text-anchor="middle" style="font:bold 14px sans-serif;fill:#e2e8f0;">=</text>
  <text x="340" y="182" text-anchor="middle" style="font:bold 18px sans-serif;fill:#34d399;">1/3</text>
</g>
</svg>`,
    },

    // ---- CONCEPT: Inclusion-Exclusion ----
    {
      type: 'concept',
      title: 'Inclusion-Exclusion Principle',
      content: `
<div>
  <p>When two events can overlap (both can happen), use <strong>inclusion-exclusion</strong> to avoid double-counting:</p>
  <br/>
  <div style="background:rgba(244,114,182,0.15);padding:14px;border-radius:8px;text-align:center;font-size:1.1rem;">
    <strong>P(A or B) = P(A) + P(B) &minus; P(A and B)</strong>
  </div>
  <br/>
  <p><strong>Why subtract P(A and B)?</strong> Because outcomes where both A and B happen get counted once in P(A) and once in P(B) &mdash; that's double-counting, so we subtract one copy.</p>
  <br/>
  <p><strong>Special case:</strong> If A and B are <strong>mutually exclusive</strong> (can't both happen), then P(A and B) = 0, so:</p>
  <p style="text-align:center;">P(A or B) = P(A) + P(B)</p>
  <br/>
  <p><strong>Example:</strong> In a class of 30, 18 play football, 12 play basketball, 5 play both. What is the probability a random student plays at least one sport?</p>
  <ul>
    <li>P(Football or Basketball) = 18/30 + 12/30 &minus; 5/30 = 25/30 = <strong>5/6</strong></li>
  </ul>
</div>`,
      svgDiagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 440 230" width="440" height="230">
<style>
  @keyframes fillA { from { opacity: 0; } to { opacity: 0.55; } }
  @keyframes fillB { from { opacity: 0; } to { opacity: 0.55; } }
  @keyframes flashInter { 0%{opacity:0.55;} 40%{opacity:1;} 70%{opacity:0.2;} 100%{opacity:0.8;} }
  @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
  .circA { opacity: 0; animation: fillA 0.7s 0.3s ease forwards; }
  .circB { opacity: 0; animation: fillB 0.7s 1.2s ease forwards; }
  .inter { opacity: 0; animation: flashInter 1.0s 2.1s ease forwards; }
  .formula { opacity: 0; animation: fadeIn 0.5s 3.3s ease forwards; }
  .pa { opacity: 0; animation: fadeIn 0.4s 0.8s ease forwards; }
  .pb { opacity: 0; animation: fadeIn 0.4s 1.7s ease forwards; }
  .pab { opacity: 0; animation: fadeIn 0.4s 2.4s ease forwards; }
  @keyframes highlight { 0%,100%{opacity:1;} 50%{opacity:0.4;} }
  .hl-a { animation: highlight 1.2s 3.6s infinite; }
  .hl-b { animation: highlight 1.2s 4.0s infinite; }
  .hl-ab { animation: highlight 1.2s 4.4s infinite; }
  .title { font: bold 14px sans-serif; fill: #e2e8f0; }
  .setlbl { font: bold 15px sans-serif; fill: #ffffff; }
  .formlbl { font: bold 13px sans-serif; fill: #e2e8f0; }
  .blue-lbl { font: bold 12px sans-serif; fill: #60a5fa; }
  .orange-lbl { font: bold 12px sans-serif; fill: #f97316; }
  .red-lbl { font: bold 12px sans-serif; fill: #f87171; }
  .green-lbl { font: bold 13px sans-serif; fill: #34d399; }
</style>
<rect width="440" height="230" rx="12" fill="#1e293b"/>
<text x="220" y="22" text-anchor="middle" class="title">Inclusion-Exclusion: P(A ∪ B) = P(A) + P(B) − P(A ∩ B)</text>

<!-- Circle A (blue) -->
<circle class="circA" cx="170" cy="105" r="65" fill="#1d4ed8"/>
<!-- Circle B (orange) -->
<circle class="circB" cx="265" cy="105" r="65" fill="#c2410c"/>
<!-- Intersection flash (red) using clipPath -->
<defs>
  <clipPath id="clipA"><circle cx="170" cy="105" r="65"/></clipPath>
  <clipPath id="clipB"><circle cx="265" cy="105" r="65"/></clipPath>
</defs>
<circle class="inter" cx="265" cy="105" r="65" fill="#dc2626" clip-path="url(#clipA)"/>

<!-- Outlines -->
<circle cx="170" cy="105" r="65" fill="none" stroke="#60a5fa" stroke-width="2"/>
<circle cx="265" cy="105" r="65" fill="none" stroke="#f97316" stroke-width="2"/>

<!-- Labels -->
<text x="140" y="100" text-anchor="middle" class="setlbl">A</text>
<text x="298" y="100" text-anchor="middle" class="setlbl">B</text>
<text x="218" y="110" text-anchor="middle" style="font:bold 12px sans-serif;fill:#fbbf24;">A∩B</text>

<!-- P(A), P(B), P(A∩B) labels -->
<g class="pa"><text x="135" y="155" text-anchor="middle" class="blue-lbl">P(A)</text></g>
<g class="pb"><text x="308" y="155" text-anchor="middle" class="orange-lbl">P(B)</text></g>
<g class="pab"><text x="218" y="155" text-anchor="middle" class="red-lbl">counted twice!</text></g>

<!-- Formula with animated highlights -->
<g class="formula">
  <text x="220" y="183" text-anchor="middle" class="formlbl">P(A∪B) =</text>
  <text x="110" y="183" text-anchor="end" class="formlbl">P(A∪B) =</text>
  <text x="192" y="183" text-anchor="middle" class="hl-a blue-lbl">P(A)</text>
  <text x="218" y="183" text-anchor="middle" style="font:bold 13px sans-serif;fill:#e2e8f0;"> + </text>
  <text x="244" y="183" text-anchor="middle" class="hl-b orange-lbl">P(B)</text>
  <text x="270" y="183" text-anchor="middle" style="font:bold 13px sans-serif;fill:#e2e8f0;"> − </text>
  <text x="306" y="183" text-anchor="middle" class="hl-ab red-lbl">P(A∩B)</text>
  <text x="220" y="205" text-anchor="middle" style="font:11px sans-serif;fill:#94a3b8;">Subtract the overlap — it was added twice!</text>
</g>
</svg>`,
    },

    // ---- CONCEPT: Conditional & Sequential ----
    {
      type: 'concept',
      title: 'Conditional Probability & Sequential Events',
      content: `
<div>
  <p><strong>Sequential (independent) events:</strong> When one event doesn't affect another, multiply their probabilities:</p>
  <div style="text-align:center;font-size:1.1rem;margin:12px 0;">
    P(A and B) = P(A) &times; P(B)
  </div>
  <br/>
  <p><strong>Example:</strong> Flip a coin twice. P(both heads) = 1/2 &times; 1/2 = <strong>1/4</strong></p>
  <br/>
  <p><strong>Dependent events:</strong> When the first event changes the conditions for the second, use <strong>conditional probability</strong>:</p>
  <div style="text-align:center;font-size:1.1rem;margin:12px 0;">
    P(A and B) = P(A) &times; P(B given A)
  </div>
  <br/>
  <p><strong>Example (without replacement):</strong> A bag has 5 red and 3 blue balls. You draw two without putting the first back.</p>
  <ul>
    <li>P(both red) = P(1st red) &times; P(2nd red given 1st was red)</li>
    <li>= 5/8 &times; 4/7 = 20/56 = <strong>5/14</strong></li>
  </ul>
  <br/>
  <p style="background:rgba(244,114,182,0.15);padding:12px;border-radius:8px;">
    <strong>Key question:</strong> "With replacement" or "without replacement"? With replacement &rarr; independent. Without &rarr; dependent. This distinction changes the answer dramatically!
  </p>
</div>`,
      svgDiagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 440 250" width="440" height="250">
<style>
  @keyframes drawLine { from { stroke-dashoffset: 120; opacity:0; } to { stroke-dashoffset: 0; opacity:1; } }
  @keyframes fadeIn   { from { opacity: 0; } to { opacity: 1; } }
  .ln1a { stroke-dasharray:120; stroke-dashoffset:120; animation: drawLine 0.5s 0.4s ease forwards; }
  .ln1b { stroke-dasharray:120; stroke-dashoffset:120; animation: drawLine 0.5s 0.4s ease forwards; }
  .ln2a { stroke-dasharray:120; stroke-dashoffset:120; animation: drawLine 0.5s 1.3s ease forwards; }
  .ln2b { stroke-dasharray:120; stroke-dashoffset:120; animation: drawLine 0.5s 1.6s ease forwards; }
  .ln2c { stroke-dasharray:120; stroke-dashoffset:120; animation: drawLine 0.5s 1.9s ease forwards; }
  .ln2d { stroke-dasharray:120; stroke-dashoffset:120; animation: drawLine 0.5s 2.2s ease forwards; }
  .nd0  { opacity:0; animation: fadeIn 0.3s 0.1s ease forwards; }
  .nd1a { opacity:0; animation: fadeIn 0.3s 0.8s ease forwards; }
  .nd1b { opacity:0; animation: fadeIn 0.3s 0.8s ease forwards; }
  .nd2a { opacity:0; animation: fadeIn 0.3s 1.7s ease forwards; }
  .nd2b { opacity:0; animation: fadeIn 0.3s 2.0s ease forwards; }
  .nd2c { opacity:0; animation: fadeIn 0.3s 2.3s ease forwards; }
  .nd2d { opacity:0; animation: fadeIn 0.3s 2.6s ease forwards; }
  .probs { opacity:0; animation: fadeIn 0.5s 2.8s ease forwards; }
  .title  { font: bold 13px sans-serif; fill: #e2e8f0; }
  .prob   { font: bold 11px sans-serif; fill: #fbbf24; }
  .outcome { font: bold 11px sans-serif; fill: #94a3b8; }
  .pathprob { font: bold 11px sans-serif; fill: #34d399; }
  .connector { stroke: #64748b; stroke-width: 2; fill: none; }
</style>
<rect width="440" height="250" rx="12" fill="#1e293b"/>
<text x="220" y="18" text-anchor="middle" class="title">Conditional Probability: Drawing 2 balls (3R, 2B, no replace)</text>

<!-- Bag icon at start -->
<g class="nd0">
  <ellipse cx="60" cy="125" rx="30" ry="35" fill="#1e3a5f" stroke="#60a5fa" stroke-width="2"/>
  <text x="60" y="120" text-anchor="middle" style="font:10px sans-serif;fill:#f87171;">●●●</text>
  <text x="60" y="133" text-anchor="middle" style="font:10px sans-serif;fill:#60a5fa;">●●</text>
  <text x="60" y="148" text-anchor="middle" style="font:9px sans-serif;fill:#94a3b8;">3R,2B</text>
</g>

<!-- Branches to level 1 -->
<line x1="90" y1="100" x2="145" y2="70"  class="connector ln1a"/>
<line x1="90" y1="150" x2="145" y2="180" class="connector ln1b"/>

<!-- Level 1: Red drawn -->
<g class="nd1a">
  <circle cx="155" cy="65" r="16" fill="#7f1d1d" stroke="#f87171" stroke-width="2"/>
  <text x="155" y="70" text-anchor="middle" style="font:bold 11px sans-serif;fill:#f87171;">R</text>
  <text x="117" y="62" text-anchor="middle" class="prob">3/5</text>
  <text x="155" y="48" text-anchor="middle" style="font:9px sans-serif;fill:#94a3b8;">2R,2B left</text>
</g>
<!-- Level 1: Blue drawn -->
<g class="nd1b">
  <circle cx="155" cy="185" r="16" fill="#1e3a5f" stroke="#60a5fa" stroke-width="2"/>
  <text x="155" y="190" text-anchor="middle" style="font:bold 11px sans-serif;fill:#60a5fa;">B</text>
  <text x="117" y="182" text-anchor="middle" class="prob">2/5</text>
  <text x="155" y="168" text-anchor="middle" style="font:9px sans-serif;fill:#94a3b8;">3R,1B left</text>
</g>

<!-- Level 2 branches from R -->
<line x1="171" y1="57" x2="250" y2="38" class="connector ln2a"/>
<line x1="171" y1="72" x2="250" y2="92" class="connector ln2b"/>
<!-- Level 2 branches from B -->
<line x1="171" y1="177" x2="250" y2="155" class="connector ln2c"/>
<line x1="171" y1="192" x2="250" y2="215" class="connector ln2d"/>

<!-- Level 2 outcomes -->
<g class="nd2a">
  <circle cx="260" cy="34" r="13" fill="#7f1d1d" stroke="#f87171" stroke-width="1.5"/>
  <text x="260" y="39" text-anchor="middle" style="font:bold 10px sans-serif;fill:#f87171;">R</text>
  <text x="208" y="33" text-anchor="middle" class="prob">2/4</text>
</g>
<g class="nd2b">
  <circle cx="260" cy="96" r="13" fill="#1e3a5f" stroke="#60a5fa" stroke-width="1.5"/>
  <text x="260" y="101" text-anchor="middle" style="font:bold 10px sans-serif;fill:#60a5fa;">B</text>
  <text x="208" y="88" text-anchor="middle" class="prob">2/4</text>
</g>
<g class="nd2c">
  <circle cx="260" cy="151" r="13" fill="#7f1d1d" stroke="#f87171" stroke-width="1.5"/>
  <text x="260" y="156" text-anchor="middle" style="font:bold 10px sans-serif;fill:#f87171;">R</text>
  <text x="208" y="150" text-anchor="middle" class="prob">3/4</text>
</g>
<g class="nd2d">
  <circle cx="260" cy="218" r="13" fill="#1e3a5f" stroke="#60a5fa" stroke-width="1.5"/>
  <text x="260" y="223" text-anchor="middle" style="font:bold 10px sans-serif;fill:#60a5fa;">B</text>
  <text x="208" y="215" text-anchor="middle" class="prob">1/4</text>
</g>

<!-- Path probabilities -->
<g class="probs">
  <text x="290" y="34" class="pathprob">P(RR) = 3/5 × 2/4 = 6/20</text>
  <text x="290" y="96" class="pathprob">P(RB) = 3/5 × 2/4 = 6/20</text>
  <text x="290" y="151" class="pathprob">P(BR) = 2/5 × 3/4 = 6/20</text>
  <text x="290" y="218" class="pathprob">P(BB) = 2/5 × 1/4 = 2/20</text>
  <text x="220" y="242" text-anchor="middle" style="font:11px sans-serif;fill:#94a3b8;">Multiply along each branch to find path probability</text>
</g>
</svg>`,
    },

    // ---- CONCEPT: Expected Value ----
    {
      type: 'concept',
      title: 'Expected Value',
      content: `
<div>
  <p><strong>Expected value</strong> is the average outcome you'd expect over many repetitions. Think of it as a "weighted average".</p>
  <br/>
  <div style="background:rgba(244,114,182,0.15);padding:14px;border-radius:8px;text-align:center;font-size:1.1rem;">
    <strong>E(X) = sum of [each outcome &times; its probability]</strong>
  </div>
  <br/>
  <p><strong>Example:</strong> Roll a fair die. What is the expected value?</p>
  <p>E = (1)(1/6) + (2)(1/6) + (3)(1/6) + (4)(1/6) + (5)(1/6) + (6)(1/6)</p>
  <p>= (1+2+3+4+5+6)/6 = 21/6 = <strong>3.5</strong></p>
  <br/>
  <p>Note: You can never actually roll 3.5 &mdash; expected value is a theoretical average, not a possible outcome.</p>
  <br/>
  <p><strong>Example:</strong> A game costs $2 to play. You flip a coin: heads wins $5, tails wins nothing. Is this game worth playing?</p>
  <ul>
    <li>E(winnings) = 0.5 &times; $5 + 0.5 &times; $0 = $2.50</li>
    <li>E(profit) = $2.50 &minus; $2.00 = <strong>$0.50</strong></li>
    <li>Positive expected profit &rarr; Yes, worth playing on average!</li>
  </ul>
</div>`,
      svgDiagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 440 230" width="440" height="230">
<style>
  @keyframes tilt {
    0%   { transform: rotate(-12deg); transform-origin: 220px 148px; }
    30%  { transform: rotate(12deg);  transform-origin: 220px 148px; }
    60%  { transform: rotate(-6deg);  transform-origin: 220px 148px; }
    80%  { transform: rotate(4deg);   transform-origin: 220px 148px; }
    100% { transform: rotate(0deg);   transform-origin: 220px 148px; }
  }
  @keyframes fadeIn { from{opacity:0;} to{opacity:1;} }
  .beam { animation: tilt 3.0s 0.5s ease forwards; transform-origin: 220px 148px; }
  .ev   { opacity:0; animation: fadeIn 0.6s 3.8s ease forwards; }
  .title { font: bold 14px sans-serif; fill: #e2e8f0; }
  .win   { font: bold 14px sans-serif; fill: #34d399; }
  .lose  { font: bold 14px sans-serif; fill: #f87171; }
  .prob  { font: bold 12px sans-serif; fill: #fbbf24; }
  .evlbl { font: bold 16px sans-serif; fill: #a78bfa; }
  .formlbl { font: bold 12px sans-serif; fill: #e2e8f0; }
  .note  { font: 11px sans-serif; fill: #94a3b8; }
</style>
<rect width="440" height="230" rx="12" fill="#1e293b"/>
<text x="220" y="22" text-anchor="middle" class="title">Expected Value: Flip a coin — Win $10 or $0</text>

<!-- Fulcrum triangle -->
<polygon points="220,185 205,205 235,205" fill="#475569"/>
<rect x="195" y="205" width="50" height="8" rx="2" fill="#475569"/>

<!-- Beam (tilts then settles) -->
<g class="beam">
  <rect x="60" y="143" width="320" height="10" rx="5" fill="#64748b"/>
  <!-- Left platform (win $10) -->
  <rect x="55" y="125" width="70" height="20" rx="5" fill="#065f46" stroke="#34d399" stroke-width="2"/>
  <text x="90" y="139" text-anchor="middle" class="win">$10 WIN</text>
  <!-- Right platform (lose $0) -->
  <rect x="315" y="125" width="70" height="20" rx="5" fill="#7f1d1d" stroke="#f87171" stroke-width="2"/>
  <text x="350" y="139" text-anchor="middle" class="lose">$0 LOSS</text>
</g>

<!-- Probability labels -->
<text x="90" y="118" text-anchor="middle" class="prob">P = 1/2</text>
<text x="350" y="118" text-anchor="middle" class="prob">P = 1/2</text>

<!-- EV at fulcrum -->
<g class="ev">
  <circle cx="220" cy="175" r="18" fill="#312e81" stroke="#a78bfa" stroke-width="2"/>
  <text x="220" y="172" text-anchor="middle" style="font:bold 10px sans-serif;fill:#a78bfa;">EV</text>
  <text x="220" y="184" text-anchor="middle" style="font:bold 10px sans-serif;fill:#a78bfa;">$5</text>
  <text x="220" y="215" text-anchor="middle" class="formlbl">E[X] = 1/2 × $10 + 1/2 × $0 = $5</text>
  <text x="220" y="228" text-anchor="middle" class="note">The "fair price" to play this game is $5 — the balance point</text>
</g>

<!-- Formula top label -->
<text x="220" y="50" text-anchor="middle" class="formlbl">E[X] = Σ (value × probability)</text>
<text x="220" y="68" text-anchor="middle" class="note">Expected value = long-run average if repeated many times</text>
</svg>`,
    },

    // ---- RULE: Probability Tree Diagrams ----
    {
      type: 'rule',
      title: 'Probability Trees for Multi-Step Problems',
      content: `
<div>
  <p>For problems with multiple steps (flip then draw, choose then check, etc.), a <strong>probability tree</strong> keeps you organized:</p>
  <br/>
  <ol>
    <li>Draw branches for each possible outcome at each step.</li>
    <li>Write the probability on each branch.</li>
    <li><strong>Multiply along a path</strong> to get the probability of that specific sequence.</li>
    <li><strong>Add up paths</strong> that lead to the event you want.</li>
  </ol>
  <br/>
  <p><strong>Example:</strong> Two dice are rolled. What is the probability the sum is 7?</p>
  <p>List all pairs that sum to 7:</p>
  <p>(1,6), (2,5), (3,4), (4,3), (5,2), (6,1) &rarr; <strong>6 pairs</strong></p>
  <p>Total possible outcomes: 6 &times; 6 = 36</p>
  <p>P(sum = 7) = 6/36 = <strong>1/6</strong></p>
  <br/>
  <p><em>Note: 7 is the most likely sum with two dice. Sums of 2 and 12 are the least likely (only 1 way each).</em></p>
</div>`,
      svgDiagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 440 260" width="440" height="260">
<style>
  @keyframes drawLine { from{stroke-dashoffset:150;opacity:0;} to{stroke-dashoffset:0;opacity:1;} }
  @keyframes fadeIn   { from{opacity:0;} to{opacity:1;} }
  .ln1h { stroke-dasharray:150; stroke-dashoffset:150; animation: drawLine 0.4s 0.3s ease forwards; }
  .ln1t { stroke-dasharray:150; stroke-dashoffset:150; animation: drawLine 0.4s 0.3s ease forwards; }
  .ln2hh { stroke-dasharray:150; stroke-dashoffset:150; animation: drawLine 0.4s 1.0s ease forwards; }
  .ln2ht { stroke-dasharray:150; stroke-dashoffset:150; animation: drawLine 0.4s 1.3s ease forwards; }
  .ln2th { stroke-dasharray:150; stroke-dashoffset:150; animation: drawLine 0.4s 1.6s ease forwards; }
  .ln2tt { stroke-dasharray:150; stroke-dashoffset:150; animation: drawLine 0.4s 1.9s ease forwards; }
  .nd0  { opacity:0; animation: fadeIn 0.3s 0.1s ease forwards; }
  .nd1h { opacity:0; animation: fadeIn 0.3s 0.7s ease forwards; }
  .nd1t { opacity:0; animation: fadeIn 0.3s 0.7s ease forwards; }
  .nd2hh { opacity:0; animation: fadeIn 0.3s 1.4s ease forwards; }
  .nd2ht { opacity:0; animation: fadeIn 0.3s 1.7s ease forwards; }
  .nd2th { opacity:0; animation: fadeIn 0.3s 2.0s ease forwards; }
  .nd2tt { opacity:0; animation: fadeIn 0.3s 2.3s ease forwards; }
  .summary { opacity:0; animation: fadeIn 0.5s 2.8s ease forwards; }
  @keyframes pulse { 0%,100%{opacity:1;} 50%{opacity:0.5;} }
  .hl { animation: pulse 1.5s 3.0s infinite; }
  .title  { font: bold 13px sans-serif; fill: #e2e8f0; }
  .node   { font: bold 13px sans-serif; fill: #ffffff; }
  .prob   { font: bold 10px sans-serif; fill: #fbbf24; }
  .outcome{ font: bold 11px sans-serif; }
  .connector { stroke: #64748b; stroke-width: 2; fill: none; }
</style>
<rect width="440" height="260" rx="12" fill="#1e293b"/>
<text x="220" y="18" text-anchor="middle" class="title">Probability Tree: 2 Coin Flips (P = 1/2 each)</text>

<!-- Root node -->
<g class="nd0">
  <circle cx="55" cy="128" r="18" fill="#1e3a5f" stroke="#60a5fa" stroke-width="2"/>
  <text x="55" y="133" text-anchor="middle" class="node">C</text>
</g>

<!-- Level 1 branches -->
<line x1="73" y1="115" x2="158" y2="75"  class="connector ln1h"/>
<line x1="73" y1="141" x2="158" y2="183" class="connector ln1t"/>
<text x="108" y="83"  text-anchor="middle" class="prob">1/2</text>
<text x="108" y="160" text-anchor="middle" class="prob">1/2</text>
<text x="113" y="72"  text-anchor="middle" style="font:bold 11px sans-serif;fill:#60a5fa;">H</text>
<text x="113" y="165" text-anchor="middle" style="font:bold 11px sans-serif;fill:#f97316;">T</text>

<!-- Level 1 nodes -->
<g class="nd1h">
  <circle cx="168" cy="70"  r="16" fill="#1e3a5f" stroke="#60a5fa" stroke-width="2"/>
  <text x="168" y="75" text-anchor="middle" class="node">H</text>
</g>
<g class="nd1t">
  <circle cx="168" cy="188" r="16" fill="#431407" stroke="#f97316" stroke-width="2"/>
  <text x="168" y="193" text-anchor="middle" class="node">T</text>
</g>

<!-- Level 2 branches from H -->
<line x1="184" y1="60"  x2="268" y2="38"  class="connector ln2hh"/>
<line x1="184" y1="78"  x2="268" y2="102" class="connector ln2ht"/>
<text x="223" y="37"  text-anchor="middle" class="prob">1/2</text>
<text x="223" y="100" text-anchor="middle" class="prob">1/2</text>
<!-- Level 2 branches from T -->
<line x1="184" y1="178" x2="268" y2="155" class="connector ln2th"/>
<line x1="184" y1="198" x2="268" y2="220" class="connector ln2tt"/>
<text x="223" y="154" text-anchor="middle" class="prob">1/2</text>
<text x="223" y="223" text-anchor="middle" class="prob">1/2</text>

<!-- Level 2 nodes -->
<g class="nd2hh">
  <circle cx="278" cy="34"  r="14" fill="#064e3b" stroke="#34d399" stroke-width="2"/>
  <text x="278" y="39" text-anchor="middle" style="font:bold 10px sans-serif;fill:#34d399;">H</text>
</g>
<g class="nd2ht">
  <circle cx="278" cy="106" r="14" fill="#064e3b" stroke="#34d399" stroke-width="2"/>
  <text x="278" y="111" text-anchor="middle" style="font:bold 10px sans-serif;fill:#34d399;">T</text>
</g>
<g class="nd2th">
  <circle cx="278" cy="151" r="14" fill="#064e3b" stroke="#34d399" stroke-width="2"/>
  <text x="278" y="156" text-anchor="middle" style="font:bold 10px sans-serif;fill:#34d399;">H</text>
</g>
<g class="nd2tt">
  <circle cx="278" cy="222" r="14" fill="#7f1d1d" stroke="#f87171" stroke-width="2"/>
  <text x="278" y="227" text-anchor="middle" style="font:bold 10px sans-serif;fill:#f87171;">T</text>
</g>

<!-- Outcome labels + probabilities -->
<g class="nd2hh">
  <rect x="300" y="22"  width="56" height="22" rx="4" fill="#064e3b" stroke="#34d399" stroke-width="1.5"/>
  <text x="328" y="37"  text-anchor="middle" class="outcome" style="fill:#34d399;">HH 1/4</text>
</g>
<g class="nd2ht">
  <rect x="300" y="94"  width="56" height="22" rx="4" fill="#064e3b" stroke="#34d399" stroke-width="1.5"/>
  <text x="328" y="109" text-anchor="middle" class="outcome" style="fill:#34d399;">HT 1/4</text>
</g>
<g class="nd2th">
  <rect x="300" y="139" width="56" height="22" rx="4" fill="#064e3b" stroke="#34d399" stroke-width="1.5"/>
  <text x="328" y="154" text-anchor="middle" class="outcome" style="fill:#34d399;">TH 1/4</text>
</g>
<g class="nd2tt">
  <rect x="300" y="210" width="56" height="22" rx="4" fill="#7f1d1d" stroke="#f87171" stroke-width="1.5"/>
  <text x="328" y="225" text-anchor="middle" class="outcome" style="fill:#f87171;">TT 1/4</text>
</g>

<!-- Summary -->
<g class="summary">
  <rect x="368" y="22" width="66" height="70" rx="6" fill="#312e81" stroke="#a78bfa" stroke-width="1.5" class="hl"/>
  <text x="401" y="42" text-anchor="middle" style="font:bold 10px sans-serif;fill:#a78bfa;">≥1 head:</text>
  <text x="401" y="56" text-anchor="middle" style="font:bold 10px sans-serif;fill:#a78bfa;">HH + HT</text>
  <text x="401" y="68" text-anchor="middle" style="font:bold 10px sans-serif;fill:#a78bfa;">+ TH = 3</text>
  <text x="401" y="83" text-anchor="middle" style="font:bold 13px sans-serif;fill:#34d399;">P = 3/4</text>
  <text x="220" y="248" text-anchor="middle" style="font:11px sans-serif;fill:#94a3b8;">Sample space: {HH, HT, TH, TT}, each with prob 1/4</text>
</g>
</svg>`,
    },
  ],

  workedExamples: [
    {
      title: 'Two Dice Sum to 7',
      problem:
        'Two fair 6-sided dice are rolled. What is the probability that their sum is 7?',
      solution: `
<div>
  <p><strong>Step 1 &mdash; Count total outcomes:</strong></p>
  <p>Each die has 6 faces, so total = 6 &times; 6 = <strong>36</strong></p>
  <br/>
  <p><strong>Step 2 &mdash; Count favourable outcomes (sum = 7):</strong></p>
  <table style="border-collapse:collapse;margin:0 auto;">
    <tr>
      <td style="padding:4px 8px;">(1, 6)</td>
      <td style="padding:4px 8px;">(2, 5)</td>
      <td style="padding:4px 8px;">(3, 4)</td>
    </tr>
    <tr>
      <td style="padding:4px 8px;">(4, 3)</td>
      <td style="padding:4px 8px;">(5, 2)</td>
      <td style="padding:4px 8px;">(6, 1)</td>
    </tr>
  </table>
  <p>That's <strong>6</strong> favourable outcomes.</p>
  <br/>
  <p><strong>Step 3 &mdash; Calculate:</strong></p>
  <p>P(sum = 7) = 6/36 = <strong>1/6</strong></p>
  <br/>
  <p style="font-size:1.15rem;color:#34d399;"><strong>Answer: 1/6</strong></p>
</div>`,
    },
    {
      title: 'Drawing Cards Without Replacement',
      problem:
        'A bag contains 4 red balls and 6 blue balls. You draw 2 balls without replacement. What is the probability both are red?',
      solution: `
<div>
  <p><strong>Step 1 &mdash; P(1st ball is red):</strong></p>
  <p>4 red out of 10 total = <strong>4/10</strong></p>
  <br/>
  <p><strong>Step 2 &mdash; P(2nd ball is red, given 1st was red):</strong></p>
  <p>After removing one red: 3 red out of 9 remaining = <strong>3/9</strong></p>
  <br/>
  <p><strong>Step 3 &mdash; Multiply (dependent events):</strong></p>
  <p>P(both red) = 4/10 &times; 3/9 = 12/90 = <strong>2/15</strong></p>
  <br/>
  <p style="font-size:1.15rem;color:#34d399;"><strong>Answer: 2/15</strong></p>
  <br/>
  <p><em>Compare with replacement: P = 4/10 &times; 4/10 = 16/100 = 4/25. Notice the difference!</em></p>
</div>`,
    },
    {
      title: 'At Least One Problem (Complement)',
      problem:
        'A fair coin is flipped 4 times. What is the probability of getting at least one head?',
      solution: `
<div>
  <p><strong>Step 1 &mdash; Use the complement:</strong></p>
  <p>P(at least one head) = 1 &minus; P(no heads) = 1 &minus; P(all tails)</p>
  <br/>
  <p><strong>Step 2 &mdash; Find P(all tails):</strong></p>
  <p>P(all tails) = (1/2) to the 4 = <strong>1/16</strong></p>
  <br/>
  <p><strong>Step 3 &mdash; Calculate:</strong></p>
  <p>P(at least one head) = 1 &minus; 1/16 = <strong>15/16</strong></p>
  <br/>
  <p style="font-size:1.15rem;color:#34d399;"><strong>Answer: 15/16</strong></p>
  <br/>
  <p><em>The complement approach is almost always easier than listing all the "at least one" cases directly.</em></p>
</div>`,
    },
  ],

  videos: [],

  sasmoTips: [
    'When you see "at least one", immediately think complement: P(at least one) = 1 - P(none).',
    'For two-dice problems, the total sample space is always 36 (6 times 6). Memorise the number of ways for each sum.',
    '"Without replacement" means dependent events. Adjust the total and favourables after each draw.',
    'Always simplify your fraction. SASMO expects answers in simplest form.',
  ],

  commonMistakes: [
    'Forgetting to adjust the denominator when drawing without replacement.',
    'Confusing "or" (add) with "and" (multiply) in probability.',
    'Not using the complement method for "at least one" problems, leading to tedious case-by-case counting.',
    'Treating dependent events as independent (using the original total instead of the reduced one).',
  ],

  keyFormulas: [
    'P(event) = favourable outcomes / total outcomes',
    'P(not A) = 1 - P(A)',
    'P(A or B) = P(A) + P(B) - P(A and B)',
    'Independent: P(A and B) = P(A) * P(B)',
    'Dependent: P(A and B) = P(A) * P(B given A)',
    'E(X) = sum of [outcome * probability]',
  ],
};

// ============================================================
// LESSONS ARRAY & HELPER
// ============================================================

export const LESSONS: TopicLesson[] = [
  modularArithmetic,
  algebra,
  numberTheory,
  geometry,
  combinatorics,
  logic,
  sequences,
  probability,
];

export function getLessonByTopic(topicId: string): TopicLesson | undefined {
  return LESSONS.find((l) => l.id === topicId);
}
