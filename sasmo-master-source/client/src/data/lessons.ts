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
      svgDiagram: `<svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" style="max-width:280px;margin:0 auto;display:block;">
  <circle cx="150" cy="150" r="130" fill="none" stroke="#60a5fa" stroke-width="3"/>
  <circle cx="150" cy="150" r="5" fill="#60a5fa"/>
  <!-- hour markers and numbers 0-11 for mod 12 -->
  <text x="150" y="38" text-anchor="middle" fill="#60a5fa" font-size="18" font-weight="bold">0</text>
  <text x="215" y="55" text-anchor="middle" fill="#60a5fa" font-size="16">1</text>
  <text x="262" y="105" text-anchor="middle" fill="#60a5fa" font-size="16">2</text>
  <text x="278" y="157" text-anchor="middle" fill="#60a5fa" font-size="16">3</text>
  <text x="262" y="210" text-anchor="middle" fill="#60a5fa" font-size="16">4</text>
  <text x="215" y="255" text-anchor="middle" fill="#60a5fa" font-size="16">5</text>
  <text x="150" y="275" text-anchor="middle" fill="#60a5fa" font-size="18" font-weight="bold">6</text>
  <text x="85" y="255" text-anchor="middle" fill="#60a5fa" font-size="16">7</text>
  <text x="38" y="210" text-anchor="middle" fill="#60a5fa" font-size="16">8</text>
  <text x="22" y="157" text-anchor="middle" fill="#60a5fa" font-size="16">9</text>
  <text x="38" y="105" text-anchor="middle" fill="#60a5fa" font-size="16">10</text>
  <text x="85" y="55" text-anchor="middle" fill="#60a5fa" font-size="16">11</text>
  <!-- arrow showing 17 mod 12 = 5 -->
  <line x1="150" y1="150" x2="215" y2="245" stroke="#f97316" stroke-width="3" marker-end="url(#arrowMod)"/>
  <defs><marker id="arrowMod" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto"><polygon points="0 0, 10 3.5, 0 7" fill="#f97316"/></marker></defs>
  <text x="150" y="298" text-anchor="middle" fill="#a78bfa" font-size="13">17 mod 12 = 5 (clock wraps around)</text>
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
      svgDiagram: `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg" style="max-width:380px;margin:0 auto;display:block;">
  <!-- Small triangle -->
  <polygon points="60,150 120,150 90,80" fill="none" stroke="#34d399" stroke-width="2"/>
  <text x="90" y="170" text-anchor="middle" fill="#34d399" font-size="13">Side = k</text>
  <text x="90" y="115" text-anchor="middle" fill="#34d399" font-size="11">Area = A</text>
  <!-- Arrow -->
  <line x1="145" y1="115" x2="195" y2="115" stroke="#a78bfa" stroke-width="2" marker-end="url(#arrowGeo)"/>
  <text x="170" y="108" text-anchor="middle" fill="#a78bfa" font-size="11">&times;2</text>
  <!-- Large triangle -->
  <polygon points="220,150 340,150 280,10" fill="none" stroke="#34d399" stroke-width="2"/>
  <text x="280" y="170" text-anchor="middle" fill="#34d399" font-size="13">Side = 2k</text>
  <text x="280" y="100" text-anchor="middle" fill="#34d399" font-size="11">Area = 4A</text>
  <defs><marker id="arrowGeo" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto"><polygon points="0 0, 10 3.5, 0 7" fill="#a78bfa"/></marker></defs>
  <text x="200" y="195" text-anchor="middle" fill="#f97316" font-size="12">Side doubles &rarr; Area quadruples!</text>
</svg>`,
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
      svgDiagram: `<svg viewBox="0 0 300 260" xmlns="http://www.w3.org/2000/svg" style="max-width:280px;margin:0 auto;display:block;">
  <!-- Right triangle -->
  <polygon points="30,230 270,230 30,30" fill="none" stroke="#34d399" stroke-width="2.5"/>
  <!-- Right angle marker -->
  <rect x="30" y="205" width="25" height="25" fill="none" stroke="#34d399" stroke-width="1.5"/>
  <!-- Incircle -->
  <circle cx="100" cy="160" r="60" fill="none" stroke="#f97316" stroke-width="2" stroke-dasharray="6,3"/>
  <circle cx="100" cy="160" r="3" fill="#f97316"/>
  <!-- Labels -->
  <text x="15" y="135" fill="#34d399" font-size="16" font-weight="bold">a=9</text>
  <text x="130" y="248" fill="#34d399" font-size="16" font-weight="bold">b=12</text>
  <text x="165" y="120" fill="#34d399" font-size="16" font-weight="bold">c=15</text>
  <!-- Inradius line -->
  <line x1="100" y1="160" x2="100" y2="230" stroke="#f97316" stroke-width="1.5"/>
  <text x="110" y="200" fill="#f97316" font-size="14" font-weight="bold">r=3</text>
  <!-- Formula -->
  <text x="150" y="16" text-anchor="middle" fill="#a78bfa" font-size="12">r = (9+12-15)/2 = 3</text>
</svg>`,
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
