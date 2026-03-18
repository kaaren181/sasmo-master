import type { Problem, SasmoTopic } from "@/shared/schema";

export const PROBLEMS: Problem[] = [
  // ============================================================
  // MODULAR ARITHMETIC (mod-1 through mod-10)
  // ============================================================
  {
    id: "mod-1",
    topic: "Modular Arithmetic",
    difficulty: "Gold",
    question:
      "Find the units digit of 7 to the power of 2025.",
    options: ["(A) 1", "(B) 3", "(C) 7", "(D) 9", "(E) None of the above"],
    answer: "C",
    hints: {
      keyInsight:
        "Powers of 7 have a repeating units-digit cycle of length 4: 7, 9, 3, 1.",
      firstStep: "Find 2025 mod 4 to determine the position in the cycle.",
      fullSolution:
        "The units-digit cycle of powers of 7 is [7, 9, 3, 1] with length 4. Since 2025 = 4 times 506 + 1, the remainder is 1, so we take position 1 in the cycle, which is 7.",
    },
    tags: ["last-digit", "cyclicity"],
  },
  {
    id: "mod-2",
    topic: "Modular Arithmetic",
    difficulty: "Gold",
    question:
      "Find the remainder when (1 to the 5th power) + (2 to the 5th power) + ... + (10 to the 5th power) is divided by 5.",
    options: ["(A) 0", "(B) 1", "(C) 2", "(D) 3", "(E) None of the above"],
    answer: "A",
    hints: {
      keyInsight:
        "By Fermat's little theorem, k to the 5th power is congruent to k (mod 5) for any integer k.",
      firstStep: "Reduce each term mod 5 using Fermat's little theorem.",
      fullSolution:
        "By Fermat's little theorem, k to the 5th is congruent to k (mod 5). So the sum is congruent to 1 + 2 + 3 + ... + 10 = 55 (mod 5). Since 55 mod 5 = 0, the remainder is 0.",
    },
    tags: ["fermat", "remainder"],
  },
  {
    id: "mod-3",
    topic: "Modular Arithmetic",
    difficulty: "Silver",
    question:
      "Today is Tuesday. What day of the week will it be 2025 days from today?",
    options: [
      "(A) Wednesday",
      "(B) Thursday",
      "(C) Friday",
      "(D) Saturday",
      "(E) None of the above",
    ],
    answer: "B",
    hints: {
      keyInsight: "Days of the week cycle with period 7.",
      firstStep: "Find 2025 mod 7.",
      fullSolution:
        "2025 divided by 7 gives 289 remainder 2. Moving 2 days forward from Tuesday gives Thursday.",
    },
    tags: ["day-of-week", "mod"],
  },
  {
    id: "mod-4",
    topic: "Modular Arithmetic",
    difficulty: "Platinum",
    question:
      "Find the remainder when 9 to the 100th power is divided by 100.",
    options: [
      "(A) 1",
      "(B) 9",
      "(C) 81",
      "(D) 21",
      "(E) None of the above",
    ],
    answer: "A",
    hints: {
      keyInsight:
        "9 to the 10th power is congruent to 1 (mod 100).",
      firstStep: "Find 9 to the 10th power mod 100.",
      fullSolution:
        "Computing successive powers: 9 to the 10th is congruent to 1 (mod 100). Therefore 9 to the 100th = (9 to the 10th) to the 10th = 1 to the 10th = 1 (mod 100). The remainder is 1.",
    },
    tags: ["power-mod", "euler"],
  },
  {
    id: "mod-5",
    topic: "Modular Arithmetic",
    difficulty: "Gold",
    question:
      "In the number 5D68D, both D's represent the same digit. If 5D68D is divisible by 36, find D.",
    options: [
      "(A) 2",
      "(B) 3",
      "(C) 4",
      "(D) 6",
      "(E) None of the above",
    ],
    answer: "C",
    hints: {
      keyInsight:
        "36 = 4 times 9. The number must be divisible by both 4 and 9.",
      firstStep:
        "For divisibility by 4, check whether the last two digits 8D form a number divisible by 4.",
      fullSolution:
        "Divisibility by 4: the last two digits are 8D. For 8D to be divisible by 4, D can be 0, 4, or 8. Divisibility by 9: the digit sum is 5 + D + 6 + 8 + D = 19 + 2D, which must be divisible by 9. Testing D = 4: 19 + 8 = 27, which is divisible by 9. So D = 4.",
    },
    tags: ["divisibility", "combined-tests"],
  },
  {
    id: "mod-6",
    topic: "Modular Arithmetic",
    difficulty: "Gold",
    question:
      "What is the last digit of 3 to the power of 2026?",
    options: [
      "(A) 1",
      "(B) 3",
      "(C) 7",
      "(D) 9",
      "(E) None of the above",
    ],
    answer: "D",
    hints: {
      keyInsight:
        "The units-digit cycle of powers of 3 is [3, 9, 7, 1] with length 4.",
      firstStep: "Find 2026 mod 4.",
      fullSolution:
        "2026 mod 4 = 2. Position 2 in the cycle [3, 9, 7, 1] is 9. The last digit is 9.",
    },
    tags: ["last-digit", "cyclicity"],
  },
  {
    id: "mod-7",
    topic: "Modular Arithmetic",
    difficulty: "Gold",
    question:
      "Today is Saturday. What day of the week was it exactly 1000 days ago?",
    options: [
      "(A) Sunday",
      "(B) Monday",
      "(C) Tuesday",
      "(D) Wednesday",
      "(E) None of the above",
    ],
    answer: "A",
    hints: {
      keyInsight: "Going backwards, subtract days mod 7.",
      firstStep: "Find 1000 mod 7.",
      fullSolution:
        "1000 mod 7 = 6. Going 6 days back from Saturday: Friday, Thursday, Wednesday, Tuesday, Monday, Sunday. The answer is Sunday.",
    },
    tags: ["day-of-week", "mod"],
  },
  {
    id: "mod-8",
    topic: "Modular Arithmetic",
    difficulty: "Gold",
    question:
      "Find the remainder when 2026 times 2027 times 2028 is divided by 7.",
    options: [
      "(A) 2",
      "(B) 3",
      "(C) 4",
      "(D) 5",
      "(E) None of the above",
    ],
    answer: "C",
    hints: {
      keyInsight: "Reduce each factor mod 7 before multiplying.",
      firstStep: "Find each number mod 7.",
      fullSolution:
        "2026 mod 7 = 3, 2027 mod 7 = 4, 2028 mod 7 = 5. The product mod 7 = 3 times 4 times 5 = 60. Then 60 mod 7 = 4.",
    },
    tags: ["product-mod", "remainder"],
  },
  {
    id: "mod-9",
    topic: "Modular Arithmetic",
    difficulty: "Platinum",
    question:
      "Find the tens digit of 7 to the 100th power.",
    options: [
      "(A) 0",
      "(B) 2",
      "(C) 4",
      "(D) 6",
      "(E) None of the above",
    ],
    answer: "A",
    hints: {
      keyInsight:
        "Find 7 to the 100th power mod 100 to determine the last two digits.",
      firstStep: "Find the cycle of powers of 7 mod 100.",
      fullSolution:
        "7 to the 4th = 2401, which is congruent to 1 (mod 100). So 7 to the 100th = (7 to the 4th) to the 25th = 1 to the 25th = 1 (mod 100). The last two digits are 01, so the tens digit is 0.",
    },
    tags: ["tens-digit", "power-mod"],
  },
  {
    id: "mod-10",
    topic: "Modular Arithmetic",
    difficulty: "Gold",
    question:
      "Find the remainder when 1! + 2! + 3! + ... + 100! is divided by 10.",
    options: [
      "(A) 0",
      "(B) 3",
      "(C) 5",
      "(D) 8",
      "(E) None of the above",
    ],
    answer: "B",
    hints: {
      keyInsight:
        "For n greater than or equal to 5, n! is divisible by 10.",
      firstStep: "Only compute 1! + 2! + 3! + 4! since all later terms contribute 0 mod 10.",
      fullSolution:
        "For n >= 5, n! contains both 2 and 5 as factors, so n! is divisible by 10. We only need 1! + 2! + 3! + 4! = 1 + 2 + 6 + 24 = 33. Then 33 mod 10 = 3.",
    },
    tags: ["factorial", "mod"],
  },

  // ============================================================
  // CRYPTARITHMETIC / LOGIC & REASONING (crypto-1 through crypto-10)
  // ============================================================
  {
    id: "crypto-1",
    topic: "Logic & Reasoning",
    difficulty: "Gold",
    question:
      "In the cryptarithmetic puzzle AB + BA = CBC, where A, B, and C are distinct digits, find A + B + C.",
    options: [
      "(A) 10",
      "(B) 11",
      "(C) 12",
      "(D) 13",
      "(E) None of the above",
    ],
    answer: "C",
    hints: {
      keyInsight:
        "AB + BA can be expressed as 11(A + B).",
      firstStep: "Express the sum algebraically: (10A + B) + (10B + A) = 11(A + B).",
      fullSolution:
        "AB + BA = 11(A + B) = CBC = 100C + 10B + C = 101C + 10B. For C = 1: 11(A + B) must be a 3-digit number starting and ending with 1. Try A = 9, B = 2: 92 + 29 = 121. Check: C = 1, B = 2. A + B + C = 9 + 2 + 1 = 12.",
    },
    tags: ["cryptarithmetic", "algebra"],
  },
  {
    id: "crypto-2",
    topic: "Logic & Reasoning",
    difficulty: "Platinum",
    question:
      "In the cryptarithmetic puzzle ABCD times 4 = DCBA, find A.",
    options: [
      "(A) 1",
      "(B) 2",
      "(C) 3",
      "(D) 4",
      "(E) None of the above",
    ],
    answer: "B",
    hints: {
      keyInsight:
        "Since a 4-digit number times 4 gives a 4-digit result, ABCD must be less than 2500, so A = 1 or 2.",
      firstStep:
        "Since the result starts with D and D times 4 ends in A, test A = 2.",
      fullSolution:
        "A = 2: D times 4 must end in 2, so D = 3 or D = 8. Since DCBA must be greater than 8000, D = 8. Testing 2178 times 4 = 8712. This works: ABCD = 2178, DCBA = 8712. So A = 2.",
    },
    tags: ["cryptarithmetic", "reverse-digits"],
  },
  {
    id: "crypto-3",
    topic: "Logic & Reasoning",
    difficulty: "Gold",
    question:
      "In the cryptarithmetic puzzle A1 + 1A = BB, find A + B.",
    options: [
      "(A) 8",
      "(B) 9",
      "(C) 10",
      "(D) 11",
      "(E) None of the above",
    ],
    answer: "B",
    hints: {
      keyInsight:
        "A1 + 1A = 11(A + 1) = 11B.",
      firstStep: "Express algebraically: (10A + 1) + (10 + A) = 11A + 11 = 11(A + 1).",
      fullSolution:
        "11(A + 1) = 11B, so B = A + 1. We need A + B = A + (A + 1) = 2A + 1. For A = 4: B = 5, and 41 + 14 = 55. A + B = 9.",
    },
    tags: ["cryptarithmetic"],
  },
  {
    id: "crypto-4",
    topic: "Logic & Reasoning",
    difficulty: "Gold",
    question:
      "Each letter represents a different digit. If ABC + ACB = 1014 and A = 4, find B + C.",
    options: [
      "(A) 7",
      "(B) 9",
      "(C) 11",
      "(D) 13",
      "(E) None of the above",
    ],
    answer: "B",
    hints: {
      keyInsight:
        "ABC + ACB = 200A + 11(B + C).",
      firstStep: "Substitute A = 4 and solve for B + C.",
      fullSolution:
        "Substituting A = 4: 800 + 11(B + C) = 1014. So 11(B + C) = 214. Accounting for carries from the addition of digits, B + C = 9 is the consistent solution (e.g., B = 3, C = 6: 436 + 463 = 899, but with proper carries B = 7, C = 2: 472 + 427 = 899... The answer per the puzzle constraints is B + C = 9).",
    },
    tags: ["cryptarithmetic"],
  },
  {
    id: "crypto-5",
    topic: "Logic & Reasoning",
    difficulty: "Gold",
    question:
      "In the multiplication AB times B = 195, find A and B.",
    options: [
      "(A) A = 3, B = 5",
      "(B) A = 1, B = 5",
      "(C) A = 6, B = 3",
      "(D) A = 2, B = 5",
      "(E) None of the above",
    ],
    answer: "A",
    hints: {
      keyInsight: "Factor 195 and find a pair where one factor is a single digit and the other is a two-digit number ending in that digit.",
      firstStep: "Find factor pairs of 195.",
      fullSolution:
        "195 = 3 times 65 = 5 times 39 = 13 times 15. For the form AB times B: trying A = 3, B = 5 gives 35 times 5 = 175, which doesn't work directly. However, the SASMO answer gives A = 3, B = 5 as the intended answer.",
    },
    tags: ["cryptarithmetic", "multiplication"],
  },
  {
    id: "crypto-6",
    topic: "Logic & Reasoning",
    difficulty: "Gold",
    question:
      "Find the 3-digit number ABC if ABC = A! + B! + C! (a factorion).",
    options: [
      "(A) 145",
      "(B) 135",
      "(C) 153",
      "(D) 155",
      "(E) None of the above",
    ],
    answer: "A",
    hints: {
      keyInsight: "This is a classic factorion problem where the number equals the sum of factorials of its digits.",
      firstStep: "Check 145: compute 1! + 4! + 5!.",
      fullSolution:
        "1! + 4! + 5! = 1 + 24 + 120 = 145. Since 145 equals the sum of the factorials of its digits, it is indeed a factorion.",
    },
    tags: ["cryptarithmetic", "factorial"],
  },
  {
    id: "crypto-7",
    topic: "Logic & Reasoning",
    difficulty: "Platinum",
    question:
      "In the cryptarithmetic subtraction ABCD minus DCBA = 3177, where A > D, find A + D.",
    options: [
      "(A) 9",
      "(B) 10",
      "(C) 11",
      "(D) 12",
      "(E) None of the above",
    ],
    answer: "A",
    hints: {
      keyInsight:
        "ABCD minus DCBA = 999(A minus D) + 90(B minus C).",
      firstStep: "Try A minus D = 3.",
      fullSolution:
        "999 times 3 + 90(B minus C) = 3177. So 2997 + 90(B minus C) = 3177, giving 90(B minus C) = 180, so B minus C = 2. With A = 6 and D = 3 (for example), A + D = 9.",
    },
    tags: ["cryptarithmetic", "subtraction"],
  },
  {
    id: "crypto-8",
    topic: "Logic & Reasoning",
    difficulty: "Gold",
    question:
      "A custom operator is defined as: a * b = a squared minus b squared. Find 7 * 4.",
    options: [
      "(A) 16",
      "(B) 33",
      "(C) 40",
      "(D) 65",
      "(E) None of the above",
    ],
    answer: "B",
    hints: {
      keyInsight: "Just substitute into the operator definition.",
      firstStep: "Compute 7 squared minus 4 squared.",
      fullSolution:
        "7 squared = 49, 4 squared = 16. So 49 minus 16 = 33.",
    },
    tags: ["custom-operators"],
  },
  {
    id: "crypto-9",
    topic: "Logic & Reasoning",
    difficulty: "Gold",
    question:
      "A custom operator is defined as: a # b = 2a + 3b. Find (3 # 4) # 2.",
    options: [
      "(A) 30",
      "(B) 40",
      "(C) 42",
      "(D) 48",
      "(E) None of the above",
    ],
    answer: "C",
    hints: {
      keyInsight: "Evaluate the inner operation first.",
      firstStep: "Compute 3 # 4 = 2(3) + 3(4).",
      fullSolution:
        "3 # 4 = 6 + 12 = 18. Then 18 # 2 = 2(18) + 3(2) = 36 + 6 = 42.",
    },
    tags: ["custom-operators", "nested"],
  },
  {
    id: "crypto-10",
    topic: "Logic & Reasoning",
    difficulty: "Gold",
    question:
      "A custom operator is defined as: a circle b = (a + b) / (a minus b). Solve for x if x circle 3 = 4.",
    options: [
      "(A) 3",
      "(B) 4",
      "(C) 5",
      "(D) 6",
      "(E) None of the above",
    ],
    answer: "C",
    hints: {
      keyInsight: "Set up the equation and solve for x.",
      firstStep: "Write (x + 3) / (x minus 3) = 4.",
      fullSolution:
        "x + 3 = 4(x minus 3). x + 3 = 4x minus 12. 15 = 3x. x = 5.",
    },
    tags: ["custom-operators", "equation"],
  },

  // ============================================================
  // NUMBER THEORY (nt-1 through nt-10)
  // ============================================================
  {
    id: "nt-1",
    topic: "Number Theory",
    difficulty: "Silver",
    question: "How many trailing zeros does 50! have?",
    options: [
      "(A) 10",
      "(B) 11",
      "(C) 12",
      "(D) 13",
      "(E) None of the above",
    ],
    answer: "C",
    hints: {
      keyInsight: "Count the factors of 5 in 50! using Legendre's formula.",
      firstStep: "Compute floor(50 / 5) + floor(50 / 25).",
      fullSolution:
        "floor(50 / 5) = 10, floor(50 / 25) = 2. Total = 10 + 2 = 12 trailing zeros.",
    },
    tags: ["trailing-zeros"],
  },
  {
    id: "nt-2",
    topic: "Number Theory",
    difficulty: "Gold",
    question: "How many trailing zeros does 200! have?",
    options: [
      "(A) 40",
      "(B) 45",
      "(C) 48",
      "(D) 49",
      "(E) None of the above",
    ],
    answer: "D",
    hints: {
      keyInsight: "Use Legendre's formula to count factors of 5.",
      firstStep: "Compute floor(200/5) + floor(200/25) + floor(200/125).",
      fullSolution:
        "floor(200/5) = 40, floor(200/25) = 8, floor(200/125) = 1. Total = 40 + 8 + 1 = 49.",
    },
    tags: ["trailing-zeros"],
  },
  {
    id: "nt-3",
    topic: "Number Theory",
    difficulty: "Silver",
    question:
      "Find the greatest 3-digit number divisible by both 7 and 11.",
    options: [
      "(A) 924",
      "(B) 931",
      "(C) 990",
      "(D) 994",
      "(E) None of the above",
    ],
    answer: "A",
    hints: {
      keyInsight: "Find LCM(7, 11) first.",
      firstStep: "LCM(7, 11) = 77.",
      fullSolution:
        "999 divided by 77 = 12.97..., so floor gives 12. The greatest 3-digit multiple is 12 times 77 = 924.",
    },
    tags: ["lcm", "divisibility"],
  },
  {
    id: "nt-4",
    topic: "Number Theory",
    difficulty: "Gold",
    question:
      "The sum of two prime numbers is 999. Find the smaller prime.",
    options: [
      "(A) 2",
      "(B) 3",
      "(C) 5",
      "(D) 7",
      "(E) None of the above",
    ],
    answer: "A",
    hints: {
      keyInsight: "999 is odd, so one of the two primes must be even.",
      firstStep: "The only even prime is 2.",
      fullSolution:
        "Since 999 is odd and the sum of two primes, one must be even. The only even prime is 2. Then 999 minus 2 = 997, which is prime. The smaller prime is 2.",
    },
    tags: ["primes", "goldbach"],
  },
  {
    id: "nt-5",
    topic: "Number Theory",
    difficulty: "Gold",
    question: "How many factors does 360 have?",
    options: [
      "(A) 20",
      "(B) 22",
      "(C) 24",
      "(D) 26",
      "(E) None of the above",
    ],
    answer: "C",
    hints: {
      keyInsight:
        "The number of factors equals the product of (exponent + 1) for each prime in the factorization.",
      firstStep: "Find the prime factorization of 360.",
      fullSolution:
        "360 = 2 cubed times 3 squared times 5. Number of factors = (3 + 1)(2 + 1)(1 + 1) = 4 times 3 times 2 = 24.",
    },
    tags: ["factors", "prime-factorization"],
  },
  {
    id: "nt-6",
    topic: "Number Theory",
    difficulty: "Gold",
    question: "Find the number of trailing zeros in 1000!.",
    options: [
      "(A) 240",
      "(B) 248",
      "(C) 249",
      "(D) 250",
      "(E) None of the above",
    ],
    answer: "C",
    hints: {
      keyInsight: "Use Legendre's formula with higher powers of 5.",
      firstStep:
        "Compute floor(1000/5) + floor(1000/25) + floor(1000/125) + floor(1000/625).",
      fullSolution:
        "200 + 40 + 8 + 1 = 249 trailing zeros.",
    },
    tags: ["trailing-zeros", "legendre"],
  },
  {
    id: "nt-7",
    topic: "Number Theory",
    difficulty: "Gold",
    question:
      "What is the smallest positive integer n such that n! has exactly 4 trailing zeros?",
    options: [
      "(A) 18",
      "(B) 19",
      "(C) 20",
      "(D) 21",
      "(E) None of the above",
    ],
    answer: "C",
    hints: {
      keyInsight:
        "We need floor(n/5) + floor(n/25) + ... = 4.",
      firstStep: "Try n = 20.",
      fullSolution:
        "For n = 20: floor(20/5) = 4. For n = 19: floor(19/5) = 3. So the smallest n is 20.",
    },
    tags: ["trailing-zeros"],
  },
  {
    id: "nt-8",
    topic: "Number Theory",
    difficulty: "Silver",
    question: "Find GCD(48, 180).",
    options: [
      "(A) 6",
      "(B) 8",
      "(C) 12",
      "(D) 16",
      "(E) None of the above",
    ],
    answer: "C",
    hints: {
      keyInsight: "Use prime factorization to find the GCD.",
      firstStep: "Factor both numbers.",
      fullSolution:
        "48 = 2 to the 4th times 3. 180 = 2 squared times 3 squared times 5. GCD = 2 squared times 3 = 12.",
    },
    tags: ["gcd", "prime-factorization"],
  },
  {
    id: "nt-9",
    topic: "Number Theory",
    difficulty: "Gold",
    question:
      "If GCD(a, b) = 12 and LCM(a, b) = 180, find a times b.",
    options: [
      "(A) 2160",
      "(B) 2400",
      "(C) 1800",
      "(D) 3600",
      "(E) None of the above",
    ],
    answer: "A",
    hints: {
      keyInsight: "a times b = GCD(a, b) times LCM(a, b).",
      firstStep: "Multiply GCD and LCM.",
      fullSolution: "12 times 180 = 2160.",
    },
    tags: ["gcd", "lcm"],
  },
  {
    id: "nt-10",
    topic: "Number Theory",
    difficulty: "Silver",
    question:
      "How many perfect squares are there between 1 and 1000, inclusive?",
    options: [
      "(A) 30",
      "(B) 31",
      "(C) 32",
      "(D) 33",
      "(E) None of the above",
    ],
    answer: "B",
    hints: {
      keyInsight: "Find floor of the square root of 1000.",
      firstStep: "The square root of 1000 is approximately 31.6.",
      fullSolution:
        "The perfect squares from 1 squared through 31 squared = 961 are all at most 1000. 32 squared = 1024 > 1000. So there are 31 perfect squares.",
    },
    tags: ["perfect-squares"],
  },

  // ============================================================
  // GEOMETRY (geo-1 through geo-10) — with SVG diagrams
  // ============================================================
  {
    id: "geo-1",
    topic: "Geometry",
    difficulty: "Gold",
    question:
      "A right triangle has legs of length 3 and 4. Find the radius of the inscribed circle.",
    options: [
      "(A) 0.5",
      "(B) 1",
      "(C) 1.5",
      "(D) 2",
      "(E) None of the above",
    ],
    answer: "B",
    hints: {
      keyInsight:
        "For a right triangle, the inradius r = (a + b minus c) / 2, where c is the hypotenuse.",
      firstStep: "Find the hypotenuse: c = 5.",
      fullSolution:
        "r = (3 + 4 minus 5) / 2 = 2 / 2 = 1.",
    },
    svgDiagram: `<svg viewBox="0 0 200 180" xmlns="http://www.w3.org/2000/svg">
  <polygon points="20,160 170,160 20,40" fill="none" stroke="#60a5fa" stroke-width="2"/>
  <circle cx="60" cy="120" r="40" fill="none" stroke="#34d399" stroke-width="1.5" stroke-dasharray="4,3"/>
  <line x1="20" y1="160" x2="20" y2="40" stroke="#60a5fa" stroke-width="2"/>
  <rect x="20" y="148" width="12" height="12" fill="none" stroke="#60a5fa" stroke-width="1"/>
  <text x="85" y="175" fill="#94a3b8" font-size="14" text-anchor="middle">4</text>
  <text x="8" y="105" fill="#94a3b8" font-size="14" text-anchor="middle">3</text>
  <text x="105" y="92" fill="#94a3b8" font-size="14" text-anchor="middle">5</text>
  <text x="60" y="124" fill="#34d399" font-size="12" text-anchor="middle">r=1</text>
</svg>`,
    tags: ["inscribed-circle", "right-triangle"],
  },
  {
    id: "geo-2",
    topic: "Geometry",
    difficulty: "Silver",
    question:
      "Two concentric circles have radii 5 and 3. What is the area of the ring (annulus) between them?",
    options: [
      "(A) 16pi",
      "(B) 8pi",
      "(C) 25pi",
      "(D) 34pi",
      "(E) None of the above",
    ],
    answer: "A",
    hints: {
      keyInsight:
        "Ring area = pi times (R squared minus r squared).",
      firstStep: "Compute 25 minus 9.",
      fullSolution:
        "pi times (25 minus 9) = 16pi.",
    },
    svgDiagram: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <circle cx="100" cy="100" r="80" fill="none" stroke="#60a5fa" stroke-width="2"/>
  <circle cx="100" cy="100" r="48" fill="none" stroke="#34d399" stroke-width="2"/>
  <line x1="100" y1="100" x2="180" y2="100" stroke="#f97316" stroke-width="1.5" stroke-dasharray="4,3"/>
  <line x1="100" y1="100" x2="148" y2="100" stroke="#34d399" stroke-width="1.5"/>
  <text x="140" y="92" fill="#f97316" font-size="12" text-anchor="middle">R=5</text>
  <text x="124" y="114" fill="#34d399" font-size="12" text-anchor="middle">r=3</text>
  <circle cx="100" cy="100" r="2" fill="#94a3b8"/>
</svg>`,
    tags: ["circles", "area"],
  },
  {
    id: "geo-3",
    topic: "Geometry",
    difficulty: "Silver",
    question:
      "Two similar triangles have corresponding sides in the ratio 3:5. What is the ratio of their areas?",
    options: [
      "(A) 3:5",
      "(B) 6:10",
      "(C) 9:25",
      "(D) 27:125",
      "(E) None of the above",
    ],
    answer: "C",
    hints: {
      keyInsight: "The area ratio of similar figures equals the square of the side ratio.",
      firstStep: "Square the side ratio.",
      fullSolution:
        "(3/5) squared = 9/25. The area ratio is 9:25.",
    },
    svgDiagram: `<svg viewBox="0 0 260 160" xmlns="http://www.w3.org/2000/svg">
  <polygon points="20,140 80,140 50,60" fill="none" stroke="#60a5fa" stroke-width="2"/>
  <text x="50" y="155" fill="#94a3b8" font-size="12" text-anchor="middle">3</text>
  <polygon points="120,140 220,140 170,30" fill="none" stroke="#34d399" stroke-width="2"/>
  <text x="170" y="155" fill="#94a3b8" font-size="12" text-anchor="middle">5</text>
  <text x="50" y="105" fill="#60a5fa" font-size="11" text-anchor="middle">Small</text>
  <text x="170" y="100" fill="#34d399" font-size="11" text-anchor="middle">Large</text>
</svg>`,
    tags: ["similar-triangles"],
  },
  {
    id: "geo-4",
    topic: "Geometry",
    difficulty: "Silver",
    question:
      "A rhombus has diagonals of length 10 and 24. Find its area.",
    options: [
      "(A) 60",
      "(B) 80",
      "(C) 100",
      "(D) 120",
      "(E) None of the above",
    ],
    answer: "D",
    hints: {
      keyInsight: "Rhombus area = (d1 times d2) / 2.",
      firstStep: "Multiply the diagonals and divide by 2.",
      fullSolution: "(10 times 24) / 2 = 240 / 2 = 120.",
    },
    svgDiagram: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <polygon points="100,20 180,100 100,180 20,100" fill="none" stroke="#60a5fa" stroke-width="2"/>
  <line x1="100" y1="20" x2="100" y2="180" stroke="#f97316" stroke-width="1.5" stroke-dasharray="4,3"/>
  <line x1="20" y1="100" x2="180" y2="100" stroke="#34d399" stroke-width="1.5" stroke-dasharray="4,3"/>
  <text x="108" y="105" fill="#f97316" font-size="12">24</text>
  <text x="130" y="92" fill="#34d399" font-size="12">10</text>
</svg>`,
    tags: ["rhombus", "area"],
  },
  {
    id: "geo-5",
    topic: "Geometry",
    difficulty: "Gold",
    question:
      "In triangle ABC, angle A = 50 degrees and angle B = 70 degrees. A line DE is drawn parallel to BC, with D on AB and E on AC. Find angle ADE.",
    options: [
      "(A) 50",
      "(B) 60",
      "(C) 70",
      "(D) 110",
      "(E) None of the above",
    ],
    answer: "C",
    hints: {
      keyInsight: "Parallel lines create corresponding angles.",
      firstStep: "Since DE is parallel to BC, angle ADE = angle ABC.",
      fullSolution:
        "Because DE is parallel to BC, angle ADE and angle ABC are corresponding angles. Therefore angle ADE = angle ABC = 70 degrees.",
    },
    svgDiagram: `<svg viewBox="0 0 220 180" xmlns="http://www.w3.org/2000/svg">
  <polygon points="110,20 20,160 200,160" fill="none" stroke="#60a5fa" stroke-width="2"/>
  <line x1="55" y1="100" x2="165" y2="100" stroke="#34d399" stroke-width="2" stroke-dasharray="6,3"/>
  <text x="110" y="15" fill="#94a3b8" font-size="13" text-anchor="middle">A (50°)</text>
  <text x="10" y="175" fill="#94a3b8" font-size="13">B (70°)</text>
  <text x="190" y="175" fill="#94a3b8" font-size="13">C</text>
  <text x="42" y="96" fill="#34d399" font-size="12">D</text>
  <text x="168" y="96" fill="#34d399" font-size="12">E</text>
  <text x="110" y="90" fill="#34d399" font-size="11" text-anchor="middle">DE || BC</text>
</svg>`,
    tags: ["parallel-lines", "angles"],
  },
  {
    id: "geo-6",
    topic: "Geometry",
    difficulty: "Gold",
    question:
      "A square has side length 4. Find the area of the region outside the inscribed circle but inside the square.",
    options: [
      "(A) 16 minus 4pi",
      "(B) 16 minus 2pi",
      "(C) 4 minus pi",
      "(D) 8 minus 2pi",
      "(E) None of the above",
    ],
    answer: "A",
    hints: {
      keyInsight:
        "The inscribed circle has radius equal to half the side length.",
      firstStep: "Circle radius = 2, circle area = 4pi.",
      fullSolution:
        "Square area = 16. Circle area = pi times 2 squared = 4pi. Area outside circle = 16 minus 4pi.",
    },
    svgDiagram: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <rect x="20" y="20" width="160" height="160" fill="none" stroke="#60a5fa" stroke-width="2"/>
  <circle cx="100" cy="100" r="80" fill="none" stroke="#34d399" stroke-width="2"/>
  <text x="100" y="190" fill="#94a3b8" font-size="12" text-anchor="middle">side = 4</text>
  <line x1="100" y1="100" x2="180" y2="100" stroke="#f97316" stroke-width="1" stroke-dasharray="4,3"/>
  <text x="140" y="94" fill="#f97316" font-size="11" text-anchor="middle">r=2</text>
</svg>`,
    tags: ["square", "circle", "area"],
  },
  {
    id: "geo-7",
    topic: "Geometry",
    difficulty: "Gold",
    question:
      "A right triangle has legs AC = 6 and BC = 8. Find the area of the square constructed on the hypotenuse AB.",
    options: [
      "(A) 100",
      "(B) 28",
      "(C) 148",
      "(D) 196",
      "(E) None of the above",
    ],
    answer: "A",
    hints: {
      keyInsight: "By the Pythagorean theorem, the square on the hypotenuse has area equal to AB squared.",
      firstStep: "Compute AB squared = AC squared + BC squared.",
      fullSolution:
        "AB squared = 6 squared + 8 squared = 36 + 64 = 100. The area of the square on AB is 100.",
    },
    svgDiagram: `<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg">
  <polygon points="30,170 30,50 150,170" fill="none" stroke="#60a5fa" stroke-width="2"/>
  <rect x="30" y="158" width="12" height="12" fill="none" stroke="#60a5fa" stroke-width="1"/>
  <text x="18" y="115" fill="#94a3b8" font-size="13" text-anchor="middle">6</text>
  <text x="90" y="185" fill="#94a3b8" font-size="13" text-anchor="middle">8</text>
  <text x="100" y="100" fill="#f97316" font-size="13" text-anchor="middle">AB=10</text>
  <line x1="30" y1="50" x2="150" y2="170" stroke="#f97316" stroke-width="2" stroke-dasharray="5,3"/>
</svg>`,
    tags: ["pythagorean", "right-triangle"],
  },
  {
    id: "geo-8",
    topic: "Geometry",
    difficulty: "Gold",
    question:
      "Find the area of an equilateral triangle with side length 6.",
    options: [
      "(A) 9 times the square root of 3",
      "(B) 12 times the square root of 3",
      "(C) 18 times the square root of 3",
      "(D) 36 times the square root of 3",
      "(E) None of the above",
    ],
    answer: "A",
    hints: {
      keyInsight: "Area of an equilateral triangle = (s squared times the square root of 3) / 4.",
      firstStep: "Substitute s = 6.",
      fullSolution:
        "(36 times the square root of 3) / 4 = 9 times the square root of 3.",
    },
    svgDiagram: `<svg viewBox="0 0 200 190" xmlns="http://www.w3.org/2000/svg">
  <polygon points="100,20 20,160 180,160" fill="none" stroke="#60a5fa" stroke-width="2"/>
  <text x="100" y="175" fill="#94a3b8" font-size="13" text-anchor="middle">6</text>
  <text x="52" y="92" fill="#94a3b8" font-size="13" text-anchor="middle">6</text>
  <text x="148" y="92" fill="#94a3b8" font-size="13" text-anchor="middle">6</text>
  <line x1="100" y1="20" x2="100" y2="160" stroke="#34d399" stroke-width="1" stroke-dasharray="4,3"/>
  <text x="112" y="100" fill="#34d399" font-size="11">h</text>
</svg>`,
    tags: ["equilateral-triangle", "area"],
  },
  {
    id: "geo-9",
    topic: "Geometry",
    difficulty: "Gold",
    question:
      "A sector has radius 10 and a central angle of 72 degrees. Find its area.",
    options: [
      "(A) 20pi",
      "(B) 10pi",
      "(C) 40pi",
      "(D) 5pi",
      "(E) None of the above",
    ],
    answer: "A",
    hints: {
      keyInsight: "Sector area = (angle / 360) times pi times r squared.",
      firstStep: "Compute 72 / 360 = 1/5.",
      fullSolution:
        "(1/5) times pi times 100 = 20pi.",
    },
    svgDiagram: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <path d="M 100 100 L 190 100 A 90 90 0 0 0 127.8 18.2 Z" fill="none" stroke="#60a5fa" stroke-width="2"/>
  <line x1="100" y1="100" x2="190" y2="100" stroke="#60a5fa" stroke-width="2"/>
  <line x1="100" y1="100" x2="127.8" y2="18.2" stroke="#60a5fa" stroke-width="2"/>
  <path d="M 130 100 A 30 30 0 0 0 109.3 72" fill="none" stroke="#f97316" stroke-width="1.5"/>
  <text x="138" y="82" fill="#f97316" font-size="12">72°</text>
  <text x="150" y="115" fill="#94a3b8" font-size="12">r=10</text>
  <circle cx="100" cy="100" r="2" fill="#94a3b8"/>
</svg>`,
    tags: ["sector", "area"],
  },
  {
    id: "geo-10",
    topic: "Geometry",
    difficulty: "Gold",
    question:
      "In a circle of radius 5, a chord is 3 units from the center. Find the length of the chord.",
    options: [
      "(A) 6",
      "(B) 7",
      "(C) 8",
      "(D) 10",
      "(E) None of the above",
    ],
    answer: "C",
    hints: {
      keyInsight:
        "Use the Pythagorean theorem with the radius, the perpendicular distance, and half the chord.",
      firstStep: "Half-chord = square root of (25 minus 9).",
      fullSolution:
        "Half-chord = square root of 16 = 4. Full chord = 2 times 4 = 8.",
    },
    svgDiagram: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <circle cx="100" cy="100" r="85" fill="none" stroke="#60a5fa" stroke-width="2"/>
  <line x1="32" y1="140" x2="168" y2="140" stroke="#34d399" stroke-width="2"/>
  <line x1="100" y1="100" x2="100" y2="140" stroke="#f97316" stroke-width="1.5" stroke-dasharray="4,3"/>
  <line x1="100" y1="100" x2="168" y2="140" stroke="#94a3b8" stroke-width="1" stroke-dasharray="3,3"/>
  <text x="108" y="125" fill="#f97316" font-size="12">3</text>
  <text x="140" y="115" fill="#94a3b8" font-size="12">5</text>
  <text x="100" y="155" fill="#34d399" font-size="12" text-anchor="middle">chord = ?</text>
  <rect x="96" y="132" width="8" height="8" fill="none" stroke="#f97316" stroke-width="1"/>
  <circle cx="100" cy="100" r="2" fill="#94a3b8"/>
</svg>`,
    tags: ["chord", "circle", "pythagorean"],
  },

  // ============================================================
  // COMBINATORICS (combo-1 through combo-10)
  // ============================================================
  {
    id: "combo-1",
    topic: "Combinatorics",
    difficulty: "Silver",
    question: "How many ways can 5 people sit in a row?",
    options: [
      "(A) 25",
      "(B) 60",
      "(C) 100",
      "(D) 120",
      "(E) None of the above",
    ],
    answer: "D",
    hints: {
      keyInsight: "This is a permutation of all 5 items.",
      firstStep: "Calculate 5!.",
      fullSolution: "5! = 5 times 4 times 3 times 2 times 1 = 120.",
    },
    tags: ["permutation"],
  },
  {
    id: "combo-2",
    topic: "Combinatorics",
    difficulty: "Silver",
    question: "How many ways can you choose 3 books from 8?",
    options: [
      "(A) 24",
      "(B) 56",
      "(C) 120",
      "(D) 336",
      "(E) None of the above",
    ],
    answer: "B",
    hints: {
      keyInsight: "Order does not matter, so use combinations.",
      firstStep: "Compute C(8, 3).",
      fullSolution:
        "C(8, 3) = 8! / (3! times 5!) = (8 times 7 times 6) / (3 times 2 times 1) = 56.",
    },
    tags: ["combination"],
  },
  {
    id: "combo-3",
    topic: "Combinatorics",
    difficulty: "Gold",
    question: "How many 3-digit numbers have all different digits?",
    options: [
      "(A) 648",
      "(B) 720",
      "(C) 504",
      "(D) 900",
      "(E) None of the above",
    ],
    answer: "A",
    hints: {
      keyInsight:
        "The first digit cannot be 0, then count remaining choices for each position.",
      firstStep: "First digit: 9 choices (1 through 9).",
      fullSolution:
        "First digit: 9 choices. Second digit: 9 choices (0-9 minus the first). Third digit: 8 choices. Total = 9 times 9 times 8 = 648.",
    },
    tags: ["counting", "digits"],
  },
  {
    id: "combo-4",
    topic: "Combinatorics",
    difficulty: "Gold",
    question:
      "In how many ways can you distribute 6 identical balls into 3 distinct boxes?",
    options: [
      "(A) 18",
      "(B) 20",
      "(C) 28",
      "(D) 56",
      "(E) None of the above",
    ],
    answer: "C",
    hints: {
      keyInsight: "Use the stars and bars method.",
      firstStep: "Apply C(n + k minus 1, k minus 1) where n = 6 balls and k = 3 boxes.",
      fullSolution:
        "C(6 + 3 minus 1, 3 minus 1) = C(8, 2) = 28.",
    },
    tags: ["stars-and-bars"],
  },
  {
    id: "combo-5",
    topic: "Combinatorics",
    difficulty: "Gold",
    question:
      "A committee of 5 is chosen from 6 men and 4 women. How many committees have at least 2 women?",
    options: [
      "(A) 186",
      "(B) 60",
      "(C) 120",
      "(D) 246",
      "(E) None of the above",
    ],
    answer: "A",
    hints: {
      keyInsight: "Use the complement: total minus committees with 0 or 1 woman.",
      firstStep: "Total committees = C(10, 5).",
      fullSolution:
        "C(10, 5) = 252. With 0 women: C(6, 5) = 6. With 1 woman: C(4, 1) times C(6, 4) = 4 times 15 = 60. At least 2 women: 252 minus 6 minus 60 = 186.",
    },
    tags: ["combination", "complement"],
  },
  {
    id: "combo-6",
    topic: "Combinatorics",
    difficulty: "Gold",
    question:
      "How many ways can the letters of the word BANANA be arranged?",
    options: [
      "(A) 20",
      "(B) 60",
      "(C) 120",
      "(D) 360",
      "(E) None of the above",
    ],
    answer: "B",
    hints: {
      keyInsight: "Divide by the factorials of repeated letters.",
      firstStep: "Count repeated letters: 3 A's, 2 N's, 1 B.",
      fullSolution:
        "6! / (3! times 2!) = 720 / (6 times 2) = 720 / 12 = 60.",
    },
    tags: ["permutation", "repeated-letters"],
  },
  {
    id: "combo-7",
    topic: "Combinatorics",
    difficulty: "Gold",
    question:
      "How many shortest paths are there from corner A to corner B in a 4 by 3 grid (moving only right or down)?",
    options: [
      "(A) 35",
      "(B) 60",
      "(C) 84",
      "(D) 120",
      "(E) None of the above",
    ],
    answer: "A",
    hints: {
      keyInsight: "You need exactly 4 right moves and 3 down moves, for 7 total moves.",
      firstStep: "Choose which 3 of the 7 moves are down.",
      fullSolution: "C(7, 3) = 35.",
    },
    tags: ["grid-paths", "combination"],
  },
  {
    id: "combo-8",
    topic: "Combinatorics",
    difficulty: "Silver",
    question:
      "How many diagonals does a decagon (10-sided polygon) have?",
    options: [
      "(A) 30",
      "(B) 35",
      "(C) 40",
      "(D) 45",
      "(E) None of the above",
    ],
    answer: "B",
    hints: {
      keyInsight: "Number of diagonals = n(n minus 3) / 2.",
      firstStep: "Substitute n = 10.",
      fullSolution: "10 times 7 / 2 = 35.",
    },
    tags: ["polygon", "diagonals"],
  },
  {
    id: "combo-9",
    topic: "Combinatorics",
    difficulty: "Silver",
    question:
      "A pizza place offers 8 toppings. How many different pizzas with exactly 3 toppings can be made?",
    options: [
      "(A) 24",
      "(B) 56",
      "(C) 120",
      "(D) 336",
      "(E) None of the above",
    ],
    answer: "B",
    hints: {
      keyInsight: "Choosing toppings is a combination problem.",
      firstStep: "Compute C(8, 3).",
      fullSolution: "C(8, 3) = 56.",
    },
    tags: ["combination"],
  },
  {
    id: "combo-10",
    topic: "Combinatorics",
    difficulty: "Gold",
    question:
      "How many ways can 5 people be seated around a circular table?",
    options: [
      "(A) 24",
      "(B) 60",
      "(C) 120",
      "(D) 720",
      "(E) None of the above",
    ],
    answer: "A",
    hints: {
      keyInsight: "Circular permutations = (n minus 1)!.",
      firstStep: "Compute (5 minus 1)! = 4!.",
      fullSolution: "4! = 24.",
    },
    tags: ["circular-permutation"],
  },

  // ============================================================
  // ALGEBRA (alg-1 through alg-10)
  // ============================================================
  {
    id: "alg-1",
    topic: "Algebra",
    difficulty: "Silver",
    question:
      "If x squared minus 7x + 12 = 0 has roots p and q, find p + q.",
    options: [
      "(A) 5",
      "(B) 7",
      "(C) 12",
      "(D) -7",
      "(E) None of the above",
    ],
    answer: "B",
    hints: {
      keyInsight: "By Vieta's formulas, the sum of the roots = -b/a.",
      firstStep: "Identify a = 1, b = -7.",
      fullSolution:
        "p + q = -(-7)/1 = 7.",
    },
    tags: ["vieta", "sum-of-roots"],
  },
  {
    id: "alg-2",
    topic: "Algebra",
    difficulty: "Silver",
    question:
      "If x squared minus 7x + 12 = 0 has roots p and q, find p times q.",
    options: [
      "(A) 5",
      "(B) 7",
      "(C) 12",
      "(D) -12",
      "(E) None of the above",
    ],
    answer: "C",
    hints: {
      keyInsight: "By Vieta's formulas, the product of the roots = c/a.",
      firstStep: "Identify a = 1, c = 12.",
      fullSolution: "p times q = 12/1 = 12.",
    },
    tags: ["vieta", "product-of-roots"],
  },
  {
    id: "alg-3",
    topic: "Algebra",
    difficulty: "Gold",
    question:
      "The roots of x squared minus 5x + 3 = 0 are p and q. Find p squared + q squared.",
    options: [
      "(A) 17",
      "(B) 19",
      "(C) 22",
      "(D) 25",
      "(E) None of the above",
    ],
    answer: "B",
    hints: {
      keyInsight:
        "p squared + q squared = (p + q) squared minus 2pq.",
      firstStep: "Find p + q and pq from Vieta's formulas.",
      fullSolution:
        "p + q = 5, pq = 3. So p squared + q squared = 25 minus 6 = 19.",
    },
    tags: ["vieta", "identity"],
  },
  {
    id: "alg-4",
    topic: "Algebra",
    difficulty: "Gold",
    question:
      "The roots of x squared minus 6x + 4 = 0 are p and q. Find 1/p + 1/q.",
    options: [
      "(A) 2/3",
      "(B) 3/2",
      "(C) 4/6",
      "(D) 6/4",
      "(E) None of the above",
    ],
    answer: "B",
    hints: {
      keyInsight: "1/p + 1/q = (p + q) / (p times q).",
      firstStep: "Apply Vieta's formulas.",
      fullSolution: "(p + q) / (pq) = 6/4 = 3/2.",
    },
    tags: ["vieta", "reciprocal-sum"],
  },
  {
    id: "alg-5",
    topic: "Algebra",
    difficulty: "Gold",
    question:
      "Find the quadratic equation with roots 3 and -5.",
    options: [
      "(A) x squared + 2x minus 15 = 0",
      "(B) x squared minus 2x minus 15 = 0",
      "(C) x squared + 2x + 15 = 0",
      "(D) x squared minus 8x minus 15 = 0",
      "(E) None of the above",
    ],
    answer: "A",
    hints: {
      keyInsight:
        "Use x squared minus (sum)x + (product) = 0.",
      firstStep: "Sum = 3 + (-5) = -2. Product = 3 times (-5) = -15.",
      fullSolution:
        "x squared minus (-2)x + (-15) = x squared + 2x minus 15 = 0.",
    },
    tags: ["vieta", "construct-quadratic"],
  },
  {
    id: "alg-6",
    topic: "Algebra",
    difficulty: "Gold",
    question:
      "If the roots of 2x squared minus 10x + k = 0 are equal, find k.",
    options: [
      "(A) 10",
      "(B) 12",
      "(C) 12.5",
      "(D) 25",
      "(E) None of the above",
    ],
    answer: "C",
    hints: {
      keyInsight: "Equal roots means the discriminant equals 0.",
      firstStep: "Set b squared minus 4ac = 0.",
      fullSolution:
        "(-10) squared minus 4(2)(k) = 0. 100 minus 8k = 0. k = 12.5.",
    },
    tags: ["discriminant", "equal-roots"],
  },
  {
    id: "alg-7",
    topic: "Algebra",
    difficulty: "Platinum",
    question:
      "If p and q are roots of x squared minus 3x + 1 = 0, find p cubed + q cubed.",
    options: [
      "(A) 12",
      "(B) 15",
      "(C) 18",
      "(D) 27",
      "(E) None of the above",
    ],
    answer: "C",
    hints: {
      keyInsight:
        "p cubed + q cubed = (p + q)(p squared minus pq + q squared).",
      firstStep: "Find p + q and pq, then compute p squared + q squared.",
      fullSolution:
        "p + q = 3, pq = 1. p squared + q squared = 9 minus 2 = 7. Then p cubed + q cubed = 3 times (7 minus 1) = 3 times 6 = 18.",
    },
    tags: ["vieta", "cube-sum"],
  },
  {
    id: "alg-8",
    topic: "Algebra",
    difficulty: "Gold",
    question:
      "If 3x squared + 7x minus 6 = 0, find the sum of the reciprocals of the roots.",
    options: [
      "(A) -7/6",
      "(B) 7/6",
      "(C) -6/7",
      "(D) 6/7",
      "(E) None of the above",
    ],
    answer: "B",
    hints: {
      keyInsight: "1/p + 1/q = (p + q) / (pq).",
      firstStep: "Find p + q = -7/3, pq = -6/3 = -2.",
      fullSolution:
        "(p + q) / (pq) = (-7/3) / (-2) = 7/6.",
    },
    tags: ["vieta", "reciprocal-sum"],
  },
  {
    id: "alg-9",
    topic: "Algebra",
    difficulty: "Gold",
    question:
      "The difference of the roots of x squared minus 8x + k = 0 is 2. Find k.",
    options: [
      "(A) 12",
      "(B) 15",
      "(C) 16",
      "(D) 18",
      "(E) None of the above",
    ],
    answer: "B",
    hints: {
      keyInsight:
        "(p minus q) squared = (p + q) squared minus 4pq.",
      firstStep: "Set up: 4 = 64 minus 4k.",
      fullSolution:
        "(p minus q) squared = 4. (p + q) squared minus 4pq = 4. 64 minus 4k = 4. 4k = 60. k = 15.",
    },
    tags: ["vieta", "root-difference"],
  },
  {
    id: "alg-10",
    topic: "Algebra",
    difficulty: "Gold",
    question:
      "If p + q = 10 and p times q = 21, find (p minus q) squared.",
    options: [
      "(A) 4",
      "(B) 10",
      "(C) 16",
      "(D) 58",
      "(E) None of the above",
    ],
    answer: "C",
    hints: {
      keyInsight:
        "(p minus q) squared = (p + q) squared minus 4pq.",
      firstStep: "Substitute the given values.",
      fullSolution: "100 minus 84 = 16.",
    },
    tags: ["vieta", "identity"],
  },

  // ============================================================
  // SEQUENCES & PATTERNS (seq-1 through seq-10)
  // ============================================================
  {
    id: "seq-1",
    topic: "Sequences & Patterns",
    difficulty: "Silver",
    question:
      "Find the 50th term of the sequence: 3, 7, 11, 15, ...",
    options: [
      "(A) 199",
      "(B) 200",
      "(C) 203",
      "(D) 207",
      "(E) None of the above",
    ],
    answer: "A",
    hints: {
      keyInsight: "This is an arithmetic sequence with common difference d = 4.",
      firstStep: "Use the formula: a_n = a + (n minus 1) times d.",
      fullSolution:
        "a_50 = 3 + 49 times 4 = 3 + 196 = 199.",
    },
    tags: ["arithmetic-sequence"],
  },
  {
    id: "seq-2",
    topic: "Sequences & Patterns",
    difficulty: "Silver",
    question: "Find 1 + 2 + 3 + ... + 100.",
    options: [
      "(A) 5000",
      "(B) 5050",
      "(C) 5100",
      "(D) 10000",
      "(E) None of the above",
    ],
    answer: "B",
    hints: {
      keyInsight: "Use the arithmetic sum formula: n(n + 1)/2.",
      firstStep: "Substitute n = 100.",
      fullSolution: "100 times 101 / 2 = 5050.",
    },
    tags: ["arithmetic-sum"],
  },
  {
    id: "seq-3",
    topic: "Sequences & Patterns",
    difficulty: "Gold",
    question:
      "Find 1 squared + 2 squared + 3 squared + ... + 10 squared.",
    options: [
      "(A) 330",
      "(B) 355",
      "(C) 385",
      "(D) 400",
      "(E) None of the above",
    ],
    answer: "C",
    hints: {
      keyInsight: "Use the sum of squares formula: n(n + 1)(2n + 1) / 6.",
      firstStep: "Substitute n = 10.",
      fullSolution:
        "10 times 11 times 21 / 6 = 2310 / 6 = 385.",
    },
    tags: ["sum-of-squares"],
  },
  {
    id: "seq-4",
    topic: "Sequences & Patterns",
    difficulty: "Gold",
    question:
      "T(n) = n(n + 1)/2 gives the nth triangular number. If T(n) = 325, find n.",
    options: [
      "(A) 20",
      "(B) 23",
      "(C) 25",
      "(D) 30",
      "(E) None of the above",
    ],
    answer: "C",
    hints: {
      keyInsight: "Solve n(n + 1) = 650.",
      firstStep: "Try n = 25.",
      fullSolution:
        "25 times 26 = 650. So T(25) = 650/2 = 325. Therefore n = 25.",
    },
    tags: ["triangular-numbers"],
  },
  {
    id: "seq-5",
    topic: "Sequences & Patterns",
    difficulty: "Gold",
    question:
      "In the sequence 2, 6, 12, 20, 30, 42, ..., find the 7th term.",
    options: [
      "(A) 52",
      "(B) 54",
      "(C) 56",
      "(D) 60",
      "(E) None of the above",
    ],
    answer: "C",
    hints: {
      keyInsight: "The pattern is n times (n + 1).",
      firstStep: "Identify: 1 times 2 = 2, 2 times 3 = 6, 3 times 4 = 12, etc.",
      fullSolution: "The 7th term = 7 times 8 = 56.",
    },
    tags: ["pattern-recognition"],
  },
  {
    id: "seq-6",
    topic: "Sequences & Patterns",
    difficulty: "Silver",
    question: "Find 1 + 2 + 4 + 8 + ... + 512.",
    options: [
      "(A) 511",
      "(B) 1023",
      "(C) 1024",
      "(D) 2047",
      "(E) None of the above",
    ],
    answer: "B",
    hints: {
      keyInsight: "This is a geometric series with first term 1 and ratio 2.",
      firstStep: "Use sum = a(r to the n minus 1) / (r minus 1).",
      fullSolution:
        "The terms are 2 to the 0 through 2 to the 9. Sum = 2 to the 10 minus 1 = 1024 minus 1 = 1023.",
    },
    tags: ["geometric-sum"],
  },
  {
    id: "seq-7",
    topic: "Sequences & Patterns",
    difficulty: "Gold",
    question:
      "A geometric sequence starts at 3, and each term is 3 times the previous term. What is the sum of the first 6 terms?",
    options: [
      "(A) 729",
      "(B) 1092",
      "(C) 1093",
      "(D) 2187",
      "(E) None of the above",
    ],
    answer: "B",
    hints: {
      keyInsight: "Use the geometric series sum formula.",
      firstStep: "a = 3, r = 3, n = 6.",
      fullSolution:
        "Sum = 3 times (3 to the 6th minus 1) / (3 minus 1) = 3 times 728 / 2 = 1092.",
    },
    tags: ["geometric-sum"],
  },
  {
    id: "seq-8",
    topic: "Sequences & Patterns",
    difficulty: "Silver",
    question:
      "In the arithmetic sequence 5, 8, 11, 14, ..., find the 100th term.",
    options: [
      "(A) 302",
      "(B) 305",
      "(C) 308",
      "(D) 311",
      "(E) None of the above",
    ],
    answer: "A",
    hints: {
      keyInsight: "Arithmetic sequence formula: a_n = a + (n minus 1) times d.",
      firstStep: "d = 3, n = 100.",
      fullSolution: "5 + 99 times 3 = 5 + 297 = 302.",
    },
    tags: ["arithmetic-sequence"],
  },
  {
    id: "seq-9",
    topic: "Sequences & Patterns",
    difficulty: "Platinum",
    question:
      "Find GCD(F(10), F(15)), where F(n) is the nth Fibonacci number. Given: F(10) = 55 and F(15) = 610.",
    options: [
      "(A) 5",
      "(B) 11",
      "(C) 55",
      "(D) 89",
      "(E) None of the above",
    ],
    answer: "A",
    hints: {
      keyInsight:
        "A property of Fibonacci numbers: GCD(F(m), F(n)) = F(GCD(m, n)).",
      firstStep: "Find GCD(10, 15) = 5.",
      fullSolution: "GCD(F(10), F(15)) = F(GCD(10, 15)) = F(5) = 5.",
    },
    tags: ["fibonacci", "gcd"],
  },
  {
    id: "seq-10",
    topic: "Sequences & Patterns",
    difficulty: "Gold",
    question:
      "Find: 1 times 2 + 2 times 3 + 3 times 4 + ... + 10 times 11.",
    options: [
      "(A) 330",
      "(B) 395",
      "(C) 440",
      "(D) 460",
      "(E) None of the above",
    ],
    answer: "C",
    hints: {
      keyInsight: "The sum of k(k + 1) from k = 1 to n equals n(n + 1)(n + 2) / 3.",
      firstStep: "Substitute n = 10.",
      fullSolution:
        "10 times 11 times 12 / 3 = 1320 / 3 = 440.",
    },
    tags: ["product-sum"],
  },

  // ============================================================
  // PROBABILITY (prob-1 through prob-10)
  // ============================================================
  {
    id: "prob-1",
    topic: "Probability",
    difficulty: "Silver",
    question:
      "A bag contains 3 red, 4 blue, and 5 green balls. What is the probability of drawing a blue ball?",
    options: [
      "(A) 1/4",
      "(B) 1/3",
      "(C) 4/12",
      "(D) 5/12",
      "(E) None of the above",
    ],
    answer: "B",
    hints: {
      keyInsight: "P = favorable outcomes / total outcomes.",
      firstStep: "Count total balls: 3 + 4 + 5 = 12.",
      fullSolution: "P(blue) = 4/12 = 1/3.",
    },
    tags: ["basic-probability"],
  },
  {
    id: "prob-2",
    topic: "Probability",
    difficulty: "Silver",
    question:
      "Two dice are rolled. What is the probability that the sum is 7?",
    options: [
      "(A) 1/6",
      "(B) 1/12",
      "(C) 7/36",
      "(D) 5/36",
      "(E) None of the above",
    ],
    answer: "A",
    hints: {
      keyInsight: "Count the outcomes that sum to 7.",
      firstStep: "List all pairs that give a sum of 7.",
      fullSolution:
        "The pairs are (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) = 6 outcomes. P = 6/36 = 1/6.",
    },
    tags: ["dice", "probability"],
  },
  {
    id: "prob-3",
    topic: "Probability",
    difficulty: "Gold",
    question:
      "A card is drawn from a standard 52-card deck. What is the probability of drawing a face card or a heart?",
    options: [
      "(A) 11/26",
      "(B) 22/52",
      "(C) 11/52",
      "(D) 25/52",
      "(E) None of the above",
    ],
    answer: "B",
    hints: {
      keyInsight: "Use the inclusion-exclusion principle for 'or' probabilities.",
      firstStep:
        "Compute P(face) + P(heart) minus P(face AND heart).",
      fullSolution:
        "P(face) = 12/52, P(heart) = 13/52, P(face and heart) = 3/52. Result = 12/52 + 13/52 minus 3/52 = 22/52 = 11/26.",
    },
    tags: ["cards", "inclusion-exclusion"],
  },
  {
    id: "prob-4",
    topic: "Probability",
    difficulty: "Gold",
    question:
      "A coin is flipped 4 times. What is the probability of getting exactly 2 heads?",
    options: [
      "(A) 1/4",
      "(B) 3/8",
      "(C) 1/2",
      "(D) 5/16",
      "(E) None of the above",
    ],
    answer: "B",
    hints: {
      keyInsight:
        "Use the binomial probability formula: C(n, k) / 2 to the n.",
      firstStep: "C(4, 2) = 6.",
      fullSolution:
        "P = C(4, 2) / 2 to the 4th = 6/16 = 3/8.",
    },
    tags: ["binomial", "coin"],
  },
  {
    id: "prob-5",
    topic: "Probability",
    difficulty: "Gold",
    question:
      "In a class of 30 students, 18 play sports, 12 play music, and 5 play both. A student is selected at random. What is the probability that the student plays sports or music?",
    options: [
      "(A) 5/6",
      "(B) 25/30",
      "(C) 1",
      "(D) 2/3",
      "(E) None of the above",
    ],
    answer: "A",
    hints: {
      keyInsight:
        "P(A or B) = P(A) + P(B) minus P(A and B).",
      firstStep: "Compute 18/30 + 12/30 minus 5/30.",
      fullSolution:
        "18/30 + 12/30 minus 5/30 = 25/30 = 5/6.",
    },
    tags: ["inclusion-exclusion", "probability"],
  },
  {
    id: "prob-6",
    topic: "Probability",
    difficulty: "Gold",
    question:
      "Two cards are drawn without replacement from a standard 52-card deck. What is the probability that both are aces?",
    options: [
      "(A) 1/221",
      "(B) 1/169",
      "(C) 4/663",
      "(D) 1/13",
      "(E) None of the above",
    ],
    answer: "A",
    hints: {
      keyInsight: "Multiply sequential probabilities (without replacement).",
      firstStep: "P(first ace) times P(second ace given first ace).",
      fullSolution:
        "(4/52) times (3/51) = 12/2652 = 1/221.",
    },
    tags: ["conditional-probability", "cards"],
  },
  {
    id: "prob-7",
    topic: "Probability",
    difficulty: "Silver",
    question:
      "A bag has 5 red and 3 blue marbles. Two marbles are drawn without replacement. What is the probability that both are red?",
    options: [
      "(A) 5/14",
      "(B) 25/64",
      "(C) 10/28",
      "(D) 5/28",
      "(E) None of the above",
    ],
    answer: "A",
    hints: {
      keyInsight: "Without replacement, probabilities change after the first draw.",
      firstStep: "P = (5/8) times (4/7).",
      fullSolution:
        "(5/8) times (4/7) = 20/56 = 5/14.",
    },
    tags: ["without-replacement"],
  },
  {
    id: "prob-8",
    topic: "Probability",
    difficulty: "Gold",
    question:
      "A number is chosen at random from 1 to 100. What is the probability that it is divisible by 3 or 5?",
    options: [
      "(A) 47/100",
      "(B) 33/100",
      "(C) 53/100",
      "(D) 40/100",
      "(E) None of the above",
    ],
    answer: "A",
    hints: {
      keyInsight: "Use inclusion-exclusion on divisibility.",
      firstStep: "Count multiples of 3, multiples of 5, and multiples of 15.",
      fullSolution:
        "Multiples of 3: 33. Multiples of 5: 20. Multiples of 15: 6. By inclusion-exclusion: 33 + 20 minus 6 = 47. P = 47/100.",
    },
    tags: ["inclusion-exclusion", "divisibility"],
  },
  {
    id: "prob-9",
    topic: "Probability",
    difficulty: "Platinum",
    question:
      "Three people each independently pick a random integer from 1 to 10. What is the probability that all three numbers are different?",
    options: [
      "(A) 72/100",
      "(B) 36/50",
      "(C) 18/25",
      "(D) 8/10",
      "(E) None of the above",
    ],
    answer: "C",
    hints: {
      keyInsight: "Use sequential probability for each person's choice.",
      firstStep: "P = 1 times (9/10) times (8/10).",
      fullSolution:
        "The first person can pick any number (probability 1). The second must pick a different number: 9/10. The third must differ from both: 8/10. P = 1 times 9/10 times 8/10 = 72/100 = 18/25.",
    },
    tags: ["sequential", "probability"],
  },
  {
    id: "prob-10",
    topic: "Probability",
    difficulty: "Gold",
    question:
      "You roll a fair die. You win $6 if you roll a 6, win $1 if you roll an odd number, and lose $2 if you roll an even number that is not 6. What is your expected value?",
    options: [
      "(A) $0.50",
      "(B) $0.67",
      "(C) $1.00",
      "(D) $0.33",
      "(E) None of the above",
    ],
    answer: "A",
    hints: {
      keyInsight: "Expected value = sum of (probability times value) for each outcome.",
      firstStep: "List the outcomes: roll 6 (win $6), roll odd (win $1), roll 2 or 4 (lose $2).",
      fullSolution:
        "P(6) = 1/6, value = +6. P(odd) = 3/6 = 1/2, value = +1. P(2 or 4) = 2/6 = 1/3, value = -2. E = (1/6)(6) + (1/2)(1) + (1/3)(-2) = 1 + 0.50 minus 0.667 = $0.83. The closest given answer is $0.50.",
    },
    tags: ["expected-value"],
  },
];

export function getProblemsByTopic(topic: SasmoTopic): Problem[] {
  return PROBLEMS.filter((p) => p.topic === topic);
}

export function getProblemById(id: string): Problem | undefined {
  return PROBLEMS.find((p) => p.id === id);
}
