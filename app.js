/* =============================================
   FITHOME — APP LOGIC
   ============================================= */

// ─── SVG ILLUSTRATIONS ──────────────────────────────────────────────────────
const SVG = {
  pushup: `<svg viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="90" cy="16" r="10" fill="#FF6B35"/>
    <line x1="80" y1="24" x2="55" y2="50" stroke="#FF6B35" stroke-width="7" stroke-linecap="round"/>
    <line x1="55" y1="50" x2="20" y2="50" stroke="#FF6B35" stroke-width="7" stroke-linecap="round"/>
    <line x1="55" y1="50" x2="55" y2="68" stroke="#FF6B35" stroke-width="7" stroke-linecap="round"/>
    <line x1="20" y1="50" x2="20" y2="68" stroke="#FF6B35" stroke-width="7" stroke-linecap="round"/>
    <line x1="55" y1="68" x2="60" y2="85" stroke="#FF6B35" stroke-width="6" stroke-linecap="round"/>
    <line x1="20" y1="68" x2="15" y2="85" stroke="#FF6B35" stroke-width="6" stroke-linecap="round"/>
    <line x1="80" y1="24" x2="95" y2="38" stroke="#FF8C5A" stroke-width="7" stroke-linecap="round"/>
    <ellipse cx="38" cy="90" rx="38" ry="4" fill="#FF6B35" opacity="0.15"/>
  </svg>`,

  squat: `<svg viewBox="0 0 120 110" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="60" cy="14" r="10" fill="#FF6B35"/>
    <line x1="60" y1="24" x2="60" y2="55" stroke="#FF6B35" stroke-width="7" stroke-linecap="round"/>
    <line x1="60" y1="55" x2="38" y2="75" stroke="#FF6B35" stroke-width="7" stroke-linecap="round"/>
    <line x1="60" y1="55" x2="82" y2="75" stroke="#FF6B35" stroke-width="7" stroke-linecap="round"/>
    <line x1="38" y1="75" x2="30" y2="95" stroke="#FF6B35" stroke-width="6" stroke-linecap="round"/>
    <line x1="82" y1="75" x2="90" y2="95" stroke="#FF6B35" stroke-width="6" stroke-linecap="round"/>
    <line x1="60" y1="36" x2="36" y2="52" stroke="#FF8C5A" stroke-width="6" stroke-linecap="round"/>
    <line x1="60" y1="36" x2="84" y2="52" stroke="#FF8C5A" stroke-width="6" stroke-linecap="round"/>
    <ellipse cx="60" cy="100" rx="42" ry="4" fill="#FF6B35" opacity="0.15"/>
  </svg>`,

  plank: `<svg viewBox="0 0 140 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="116" cy="18" r="10" fill="#FF6B35"/>
    <line x1="106" y1="26" x2="70" y2="48" stroke="#FF6B35" stroke-width="7" stroke-linecap="round"/>
    <line x1="70" y1="48" x2="26" y2="48" stroke="#FF6B35" stroke-width="7" stroke-linecap="round"/>
    <line x1="70" y1="48" x2="68" y2="66" stroke="#FF6B35" stroke-width="6" stroke-linecap="round"/>
    <line x1="26" y1="48" x2="24" y2="66" stroke="#FF6B35" stroke-width="6" stroke-linecap="round"/>
    <line x1="106" y1="26" x2="118" y2="44" stroke="#FF8C5A" stroke-width="7" stroke-linecap="round"/>
    <ellipse cx="70" cy="70" rx="52" ry="4" fill="#FF6B35" opacity="0.15"/>
  </svg>`,

  lunge: `<svg viewBox="0 0 120 110" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="60" cy="14" r="10" fill="#FF6B35"/>
    <line x1="60" y1="24" x2="60" y2="56" stroke="#FF6B35" stroke-width="7" stroke-linecap="round"/>
    <line x1="60" y1="56" x2="80" y2="80" stroke="#FF6B35" stroke-width="7" stroke-linecap="round"/>
    <line x1="60" y1="56" x2="36" y2="72" stroke="#FF6B35" stroke-width="7" stroke-linecap="round"/>
    <line x1="80" y1="80" x2="80" y2="100" stroke="#FF6B35" stroke-width="6" stroke-linecap="round"/>
    <line x1="36" y1="72" x2="36" y2="100" stroke="#FF6B35" stroke-width="6" stroke-linecap="round"/>
    <line x1="60" y1="36" x2="82" y2="46" stroke="#FF8C5A" stroke-width="6" stroke-linecap="round"/>
    <line x1="60" y1="36" x2="38" y2="46" stroke="#FF8C5A" stroke-width="6" stroke-linecap="round"/>
    <ellipse cx="60" cy="104" rx="42" ry="4" fill="#FF6B35" opacity="0.15"/>
  </svg>`,

  glute_bridge: `<svg viewBox="0 0 140 90" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="24" cy="22" r="10" fill="#FF6B35"/>
    <line x1="24" y1="32" x2="42" y2="58" stroke="#FF6B35" stroke-width="7" stroke-linecap="round"/>
    <line x1="42" y1="58" x2="80" y2="44" stroke="#FF6B35" stroke-width="7" stroke-linecap="round"/>
    <line x1="80" y1="44" x2="96" y2="68" stroke="#FF6B35" stroke-width="7" stroke-linecap="round"/>
    <line x1="96" y1="68" x2="112" y2="68" stroke="#FF6B35" stroke-width="6" stroke-linecap="round"/>
    <line x1="42" y1="58" x2="28" y2="70" stroke="#FF8C5A" stroke-width="6" stroke-linecap="round"/>
    <line x1="28" y1="70" x2="16" y2="70" stroke="#FF8C5A" stroke-width="6" stroke-linecap="round"/>
    <ellipse cx="70" cy="74" rx="60" ry="4" fill="#FF6B35" opacity="0.15"/>
  </svg>`,

  mountain_climber: `<svg viewBox="0 0 140 90" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="116" cy="18" r="10" fill="#FF6B35"/>
    <line x1="106" y1="26" x2="80" y2="48" stroke="#FF6B35" stroke-width="7" stroke-linecap="round"/>
    <line x1="80" y1="48" x2="30" y2="48" stroke="#FF6B35" stroke-width="7" stroke-linecap="round"/>
    <line x1="80" y1="48" x2="65" y2="66" stroke="#FF6B35" stroke-width="6" stroke-linecap="round"/>
    <line x1="30" y1="48" x2="28" y2="68" stroke="#FF6B35" stroke-width="6" stroke-linecap="round"/>
    <line x1="106" y1="26" x2="118" y2="44" stroke="#FF8C5A" stroke-width="7" stroke-linecap="round"/>
    <line x1="65" y1="66" x2="55" y2="56" stroke="#FF8C5A" stroke-width="6" stroke-linecap="round"/>
    <ellipse cx="70" cy="72" rx="55" ry="4" fill="#FF6B35" opacity="0.15"/>
  </svg>`,

  jumping_jack: `<svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="60" cy="14" r="10" fill="#FF6B35"/>
    <line x1="60" y1="24" x2="60" y2="62" stroke="#FF6B35" stroke-width="7" stroke-linecap="round"/>
    <line x1="60" y1="62" x2="36" y2="90" stroke="#FF6B35" stroke-width="7" stroke-linecap="round"/>
    <line x1="60" y1="62" x2="84" y2="90" stroke="#FF6B35" stroke-width="7" stroke-linecap="round"/>
    <line x1="60" y1="36" x2="26" y2="56" stroke="#FF8C5A" stroke-width="6" stroke-linecap="round"/>
    <line x1="60" y1="36" x2="94" y2="56" stroke="#FF8C5A" stroke-width="6" stroke-linecap="round"/>
    <ellipse cx="60" cy="96" rx="44" ry="4" fill="#FF6B35" opacity="0.15"/>
  </svg>`,

  burpee: `<svg viewBox="0 0 120 110" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="60" cy="12" r="10" fill="#FF6B35"/>
    <line x1="60" y1="22" x2="60" y2="52" stroke="#FF6B35" stroke-width="7" stroke-linecap="round"/>
    <line x1="60" y1="52" x2="30" y2="66" stroke="#FF6B35" stroke-width="7" stroke-linecap="round"/>
    <line x1="60" y1="52" x2="90" y2="66" stroke="#FF6B35" stroke-width="7" stroke-linecap="round"/>
    <line x1="30" y1="66" x2="20" y2="90" stroke="#FF6B35" stroke-width="6" stroke-linecap="round"/>
    <line x1="90" y1="66" x2="100" y2="90" stroke="#FF6B35" stroke-width="6" stroke-linecap="round"/>
    <line x1="60" y1="34" x2="36" y2="26" stroke="#FF8C5A" stroke-width="6" stroke-linecap="round"/>
    <line x1="60" y1="34" x2="84" y2="26" stroke="#FF8C5A" stroke-width="6" stroke-linecap="round"/>
    <ellipse cx="60" cy="95" rx="44" ry="4" fill="#FF6B35" opacity="0.15"/>
  </svg>`,

  superman: `<svg viewBox="0 0 140 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="112" cy="30" r="10" fill="#FF6B35"/>
    <line x1="102" y1="34" x2="60" y2="42" stroke="#FF6B35" stroke-width="7" stroke-linecap="round"/>
    <line x1="60" y1="42" x2="20" y2="40" stroke="#FF6B35" stroke-width="7" stroke-linecap="round"/>
    <line x1="60" y1="42" x2="52" y2="62" stroke="#FF6B35" stroke-width="6" stroke-linecap="round"/>
    <line x1="60" y1="42" x2="68" y2="62" stroke="#FF6B35" stroke-width="6" stroke-linecap="round"/>
    <line x1="102" y1="34" x2="118" y2="18" stroke="#FF8C5A" stroke-width="7" stroke-linecap="round"/>
    <line x1="60" y1="36" x2="44" y2="20" stroke="#FF8C5A" stroke-width="6" stroke-linecap="round"/>
    <ellipse cx="60" cy="64" rx="52" ry="4" fill="#FF6B35" opacity="0.15"/>
  </svg>`,

  tricep_dip: `<svg viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="60" cy="22" r="10" fill="#FF6B35"/>
    <line x1="60" y1="32" x2="60" y2="60" stroke="#FF6B35" stroke-width="7" stroke-linecap="round"/>
    <line x1="60" y1="50" x2="36" y2="68" stroke="#FF8C5A" stroke-width="6" stroke-linecap="round"/>
    <line x1="60" y1="50" x2="84" y2="68" stroke="#FF8C5A" stroke-width="6" stroke-linecap="round"/>
    <line x1="60" y1="60" x2="42" y2="80" stroke="#FF6B35" stroke-width="6" stroke-linecap="round"/>
    <line x1="60" y1="60" x2="78" y2="80" stroke="#FF6B35" stroke-width="6" stroke-linecap="round"/>
    <rect x="20" y="76" width="80" height="8" rx="4" fill="#E5E7EB"/>
    <ellipse cx="60" cy="92" rx="42" ry="4" fill="#FF6B35" opacity="0.15"/>
  </svg>`,

  calf_raise: `<svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="60" cy="14" r="10" fill="#FF6B35"/>
    <line x1="60" y1="24" x2="60" y2="64" stroke="#FF6B35" stroke-width="7" stroke-linecap="round"/>
    <line x1="60" y1="44" x2="40" y2="54" stroke="#FF8C5A" stroke-width="6" stroke-linecap="round"/>
    <line x1="60" y1="44" x2="80" y2="54" stroke="#FF8C5A" stroke-width="6" stroke-linecap="round"/>
    <line x1="60" y1="64" x2="48" y2="90" stroke="#FF6B35" stroke-width="6" stroke-linecap="round"/>
    <line x1="60" y1="64" x2="72" y2="90" stroke="#FF6B35" stroke-width="6" stroke-linecap="round"/>
    <line x1="48" y1="90" x2="44" y2="106" stroke="#FF6B35" stroke-width="6" stroke-linecap="round"/>
    <line x1="72" y1="90" x2="76" y2="106" stroke="#FF6B35" stroke-width="6" stroke-linecap="round"/>
    <ellipse cx="60" cy="108" rx="40" ry="4" fill="#FF6B35" opacity="0.15"/>
  </svg>`,

  high_knees: `<svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="60" cy="14" r="10" fill="#FF6B35"/>
    <line x1="60" y1="24" x2="60" y2="62" stroke="#FF6B35" stroke-width="7" stroke-linecap="round"/>
    <line x1="60" y1="62" x2="82" y2="80" stroke="#FF6B35" stroke-width="7" stroke-linecap="round"/>
    <line x1="82" y1="80" x2="90" y2="100" stroke="#FF6B35" stroke-width="6" stroke-linecap="round"/>
    <line x1="60" y1="62" x2="44" y2="48" stroke="#FF6B35" stroke-width="7" stroke-linecap="round"/>
    <line x1="44" y1="48" x2="36" y2="64" stroke="#FF6B35" stroke-width="6" stroke-linecap="round"/>
    <line x1="60" y1="38" x2="82" y2="46" stroke="#FF8C5A" stroke-width="6" stroke-linecap="round"/>
    <line x1="60" y1="38" x2="40" y2="30" stroke="#FF8C5A" stroke-width="6" stroke-linecap="round"/>
    <ellipse cx="65" cy="104" rx="42" ry="4" fill="#FF6B35" opacity="0.15"/>
  </svg>`,

  shoulder_tap: `<svg viewBox="0 0 140 90" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="116" cy="18" r="10" fill="#FF6B35"/>
    <line x1="106" y1="26" x2="80" y2="48" stroke="#FF6B35" stroke-width="7" stroke-linecap="round"/>
    <line x1="80" y1="48" x2="30" y2="48" stroke="#FF6B35" stroke-width="7" stroke-linecap="round"/>
    <line x1="80" y1="48" x2="76" y2="68" stroke="#FF6B35" stroke-width="6" stroke-linecap="round"/>
    <line x1="30" y1="48" x2="28" y2="68" stroke="#FF6B35" stroke-width="6" stroke-linecap="round"/>
    <line x1="106" y1="26" x2="80" y2="36" stroke="#FF8C5A" stroke-width="7" stroke-linecap="round"/>
    <circle cx="80" cy="34" r="5" fill="#FF8C5A"/>
    <ellipse cx="70" cy="72" rx="55" ry="4" fill="#FF6B35" opacity="0.15"/>
  </svg>`,
};

// ─── EXERCISE DATABASE ───────────────────────────────────────────────────────
const EXERCISES = [
  {
    id: 'pushup',
    name: 'Push-Ups',
    category: 'Upper Body',
    difficulty: 'Beginner',
    duration: 30,
    rest: 15,
    reps: '8–12 reps',
    calories: 5,
    svg: SVG.pushup,
    desc: 'A classic upper body exercise that works your chest, shoulders, and triceps. Perfect for small spaces.',
    steps: [
      'Start in a high plank with hands shoulder-width apart.',
      'Keep your body in a straight line from head to heels.',
      'Lower your chest to just above the floor by bending your elbows.',
      'Push back up to the starting position, fully extending arms.',
    ],
    tips: [
      'Keep your core tight throughout the movement.',
      'Don\'t let your hips sag or pike up.',
      'Beginner? Try knee push-ups to build strength.',
      'Look slightly forward, not straight down.',
    ],
  },
  {
    id: 'squat',
    name: 'Bodyweight Squats',
    category: 'Legs',
    difficulty: 'Beginner',
    duration: 35,
    rest: 15,
    reps: '12–15 reps',
    calories: 6,
    svg: SVG.squat,
    desc: 'The king of lower body exercises. Targets quads, glutes, and hamstrings — no equipment needed.',
    steps: [
      'Stand with feet shoulder-width apart, toes slightly out.',
      'Keep your chest up and arms out in front for balance.',
      'Bend your knees and push your hips back like sitting in a chair.',
      'Lower until thighs are parallel to the floor (or as low as comfortable).',
      'Drive through your heels to stand back up.',
    ],
    tips: [
      'Keep your knees in line with your toes — don\'t let them cave in.',
      'Keep your weight in your heels, not your toes.',
      'Go as deep as your mobility allows.',
      'Breathe in on the way down, out on the way up.',
    ],
  },
  {
    id: 'plank',
    name: 'Plank Hold',
    category: 'Core',
    difficulty: 'Beginner',
    duration: 30,
    rest: 15,
    reps: '30–60 sec',
    calories: 4,
    svg: SVG.plank,
    desc: 'The best core strengthener. Works abs, back, shoulders, and glutes all at once.',
    steps: [
      'Start in a forearm plank with elbows under shoulders.',
      'Extend your legs behind you, resting on toes.',
      'Form a straight line from head to heels.',
      'Hold the position while breathing steadily.',
    ],
    tips: [
      'Don\'t hold your breath — breathe consistently.',
      'Squeeze your glutes and abs the entire time.',
      'If hips sag, drop to your knees to maintain form.',
      'Focus your eyes on the floor just in front of you.',
    ],
  },
  {
    id: 'lunge',
    name: 'Reverse Lunges',
    category: 'Legs',
    difficulty: 'Beginner',
    duration: 35,
    rest: 15,
    reps: '10 each leg',
    calories: 6,
    svg: SVG.lunge,
    desc: 'Easier on knees than forward lunges. Trains each leg individually for balance and strength.',
    steps: [
      'Stand tall with feet hip-width apart.',
      'Step one foot back and lower your back knee toward the floor.',
      'Keep your front shin vertical and front knee above your ankle.',
      'Push through your front heel to return to standing.',
      'Alternate legs each rep.',
    ],
    tips: [
      'Keep your torso upright — don\'t lean forward.',
      'Step back far enough so your front knee stays behind your toes.',
      'Use a wall or chair for balance if needed.',
    ],
  },
  {
    id: 'glute_bridge',
    name: 'Glute Bridge',
    category: 'Core',
    difficulty: 'Beginner',
    duration: 35,
    rest: 15,
    reps: '12–15 reps',
    calories: 4,
    svg: SVG.glute_bridge,
    desc: 'Excellent glute and lower back strengthener. Great for posture and hip mobility.',
    steps: [
      'Lie on your back with knees bent and feet flat on the floor.',
      'Place arms by your sides, palms down.',
      'Squeeze your glutes and push your hips up toward the ceiling.',
      'Hold at the top for 1–2 seconds, then lower slowly.',
    ],
    tips: [
      'Keep your core braced throughout the movement.',
      'Don\'t let your lower back arch excessively at the top.',
      'Drive through your heels, not your toes.',
      'For more challenge, extend one leg at the top.',
    ],
  },
  {
    id: 'mountain_climber',
    name: 'Mountain Climbers',
    category: 'Cardio',
    difficulty: 'Beginner',
    duration: 30,
    rest: 20,
    reps: '20 reps total',
    calories: 7,
    svg: SVG.mountain_climber,
    desc: 'A dynamic full-body cardio move that also builds core strength and shoulder stability.',
    steps: [
      'Start in a high plank position, hands under shoulders.',
      'Drive your right knee toward your chest.',
      'Quickly switch legs, bringing left knee in as right goes back.',
      'Keep alternating at a steady pace.',
    ],
    tips: [
      'Keep your hips level — don\'t let them bounce up and down.',
      'The faster you go, the more cardio benefit you get.',
      'Keep your core tight to protect your lower back.',
      'Look down at the floor to keep your neck neutral.',
    ],
  },
  {
    id: 'jumping_jack',
    name: 'Jumping Jacks',
    category: 'Cardio',
    difficulty: 'Beginner',
    duration: 30,
    rest: 15,
    reps: '20–30 reps',
    calories: 8,
    svg: SVG.jumping_jack,
    desc: 'A timeless cardio warm-up that gets your heart rate up and warms every muscle group.',
    steps: [
      'Stand straight with feet together and arms at sides.',
      'Jump up while spreading your feet wide and raising arms overhead.',
      'Land softly with knees slightly bent.',
      'Jump back to starting position and repeat.',
    ],
    tips: [
      'Land softly to protect your joints.',
      'Keep a slight bend in your knees throughout.',
      'For low-impact: step side-to-side instead of jumping.',
      'Keep a steady rhythm for best cardio benefit.',
    ],
  },
  {
    id: 'burpee',
    name: 'Burpees',
    category: 'Cardio',
    difficulty: 'Intermediate',
    duration: 30,
    rest: 20,
    reps: '8–10 reps',
    calories: 10,
    svg: SVG.burpee,
    desc: 'The ultimate full-body cardio exercise. Burns calories and builds strength simultaneously.',
    steps: [
      'Start standing. Squat down and place hands on the floor.',
      'Jump or step your feet back to a push-up position.',
      'Perform one push-up (optional but recommended).',
      'Jump or step feet back in toward your hands.',
      'Explosively jump up with arms overhead.',
    ],
    tips: [
      'Move at your own pace — quality beats speed.',
      'Beginners: step feet instead of jumping.',
      'Land softly in a slight squat after the jump.',
      'Breathe out on the way up.',
    ],
  },
  {
    id: 'superman',
    name: 'Superman Hold',
    category: 'Core',
    difficulty: 'Beginner',
    duration: 30,
    rest: 15,
    reps: '10–12 reps',
    calories: 3,
    svg: SVG.superman,
    desc: 'Strengthens the lower back, glutes, and posterior chain. Great for posture.',
    steps: [
      'Lie face down with arms extended overhead.',
      'Simultaneously lift your arms, chest, and legs off the floor.',
      'Hold for 2–3 seconds, squeezing your glutes and back.',
      'Lower slowly and repeat.',
    ],
    tips: [
      'Don\'t jerk up — lift in a controlled motion.',
      'Look down at the floor to keep your neck neutral.',
      'Squeeze your glutes at the top for maximum benefit.',
    ],
  },
  {
    id: 'high_knees',
    name: 'High Knees',
    category: 'Cardio',
    difficulty: 'Beginner',
    duration: 30,
    rest: 15,
    reps: '30 sec',
    calories: 8,
    svg: SVG.high_knees,
    desc: 'A powerful cardio movement that also strengthens your core and hip flexors.',
    steps: [
      'Stand with feet hip-width apart.',
      'Run in place, driving your knees up to waist level.',
      'Pump your arms in sync with your legs.',
      'Land softly on the balls of your feet.',
    ],
    tips: [
      'Engage your core as you drive the knees up.',
      'Keep your torso upright — don\'t lean back.',
      'For low-impact: march in place instead.',
    ],
  },
  {
    id: 'shoulder_tap',
    name: 'Shoulder Taps',
    category: 'Upper Body',
    difficulty: 'Beginner',
    duration: 30,
    rest: 15,
    reps: '20 taps total',
    calories: 5,
    svg: SVG.shoulder_tap,
    desc: 'Builds shoulder stability and core anti-rotation strength in a plank position.',
    steps: [
      'Start in a high plank with hands under shoulders.',
      'Lift your right hand and tap your left shoulder.',
      'Return to plank, then lift left hand to tap right shoulder.',
      'Alternate sides while keeping hips as still as possible.',
    ],
    tips: [
      'The goal is minimal hip rotation — resist the urge to twist.',
      'Widen your feet for more stability.',
      'Slow and controlled beats fast and sloppy.',
    ],
  },
  {
    id: 'calf_raise',
    name: 'Calf Raises',
    category: 'Legs',
    difficulty: 'Beginner',
    duration: 30,
    rest: 10,
    reps: '15–20 reps',
    calories: 3,
    svg: SVG.calf_raise,
    desc: 'Strengthens the calves and improves ankle stability. Easy to do anywhere.',
    steps: [
      'Stand with feet hip-width apart near a wall for balance.',
      'Rise up onto the balls of your feet as high as possible.',
      'Hold at the top for 1 second.',
      'Lower slowly back down.',
    ],
    tips: [
      'Move slowly to feel the burn — don\'t rush.',
      'For more challenge, do one leg at a time.',
      'Keep your core engaged throughout.',
    ],
  },
];

// ─── WORKOUT PLANS ───────────────────────────────────────────────────────────
const PLANS = [
  {
    id: 'full-body',
    name: 'Full Body Boost',
    emoji: '💪',
    difficulty: 'Beginner',
    duration: 20,
    exercises: ['pushup', 'squat', 'plank', 'glute_bridge'],
    desc: 'A balanced full-body routine hitting all major muscle groups.',
  },
  {
    id: 'cardio-blast',
    name: 'Cardio Blast',
    emoji: '🔥',
    difficulty: 'Beginner',
    duration: 18,
    exercises: ['jumping_jack', 'high_knees', 'mountain_climber', 'burpee'],
    desc: 'Get your heart pumping with this fat-burning cardio circuit.',
  },
  {
    id: 'core-crusher',
    name: 'Core Crusher',
    emoji: '🧱',
    difficulty: 'Beginner',
    duration: 15,
    exercises: ['plank', 'glute_bridge', 'superman', 'mountain_climber'],
    desc: 'A focused core workout for a stronger midsection and better posture.',
  },
  {
    id: 'lower-body',
    name: 'Leg Day',
    emoji: '🦵',
    difficulty: 'Beginner',
    duration: 22,
    exercises: ['squat', 'lunge', 'glute_bridge', 'calf_raise'],
    desc: 'All the leg work without any weights. Glutes and quads will thank you.',
  },
  {
    id: 'upper-body',
    name: 'Upper Strength',
    emoji: '🏋️',
    difficulty: 'Beginner',
    duration: 18,
    exercises: ['pushup', 'shoulder_tap', 'plank', 'mountain_climber'],
    desc: 'Build upper body strength using only your bodyweight.',
  },
  {
    id: 'hiit',
    name: 'HIIT Express',
    emoji: '⚡',
    difficulty: 'Intermediate',
    duration: 25,
    exercises: ['burpee', 'jumping_jack', 'mountain_climber', 'squat', 'high_knees'],
    desc: 'High-intensity intervals for maximum calorie burn in minimal time.',
  },
];

// ─── STATE ───────────────────────────────────────────────────────────────────
let state = {
  currentView: 'home',
  previousView: null,
  activePlan: null,
  activeExerciseIndex: 0,
  timerInterval: null,
  timerSeconds: 0,
  timerMax: 0,
  timerRunning: false,
  isRest: false,
  restSeconds: 0,
  restInterval: null,
  todayPlanId: 'full-body',
  filterCategory: 'All',
};

// ─── STORAGE ─────────────────────────────────────────────────────────────────
const Store = {
  get(key, def) {
    try {
      const v = localStorage.getItem('fithome_' + key);
      return v !== null ? JSON.parse(v) : def;
    } catch { return def; }
  },
  set(key, val) {
    try { localStorage.setItem('fithome_' + key, JSON.stringify(val)); } catch {}
  },
  getProgress() {
    return this.get('progress', { streak: 0, bestStreak: 0, totalWorkouts: 0, totalMinutes: 0, history: [], lastDate: null });
  },
  saveProgress(p) { this.set('progress', p); },
};

// ─── HELPERS ─────────────────────────────────────────────────────────────────
function getExercise(id) { return EXERCISES.find(e => e.id === id); }
function getPlan(id) { return PLANS.find(p => p.id === id); }

function todayDateStr() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
}

function formatDate(dateStr) {
  const d = new Date(dateStr + 'T00:00:00');
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}

function pickTodayPlan() {
  const day = new Date().getDay();
  const ids = ['full-body','cardio-blast','core-crusher','lower-body','upper-body','hiit','full-body'];
  return ids[day] || 'full-body';
}

function greetingTime() {
  const h = new Date().getHours();
  if (h < 12) return 'Good morning';
  if (h < 17) return 'Good afternoon';
  return 'Good evening';
}

// ─── ILLUSTRATION HELPERS ────────────────────────────────────────────────────
function exerciseIllustration(id, size = 'normal') {
  const svg = SVG[id] || SVG.pushup;
  return svg;
}

// ─── VIEW MANAGEMENT ─────────────────────────────────────────────────────────
const App = {
  showView(name, updateNav = true) {
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    const view = document.getElementById('view-' + name);
    if (view) view.classList.add('active');

    const headerTitle = document.getElementById('header-title');
    const backBtn = document.getElementById('back-btn');
    const bottomNav = document.getElementById('bottom-nav');
    const navBtns = document.querySelectorAll('.nav-btn');

    const titles = {
      home: 'FitHome',
      workout: 'Workout',
      exercise: '',
      complete: 'Well Done!',
      progress: 'Progress',
      exercises: 'Exercises',
      'ex-detail': 'Exercise',
    };

    headerTitle.textContent = titles[name] || 'FitHome';

    const showBack = ['workout','exercise','complete','ex-detail'].includes(name);
    backBtn.classList.toggle('hidden', !showBack);

    const showNav = ['home','exercises','progress'].includes(name);
    bottomNav.style.display = showNav ? '' : 'none';

    if (updateNav && showNav) {
      navBtns.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.view === name);
      });
    }

    state.previousView = state.currentView;
    state.currentView = name;

    if (name === 'home') App.renderHome();
    if (name === 'progress') App.renderProgress();
    if (name === 'exercises') App.renderExercises();
  },

  goBack() {
    const prev = state.previousView || 'home';
    App.showView(prev);
  },

  goHome() {
    App.clearTimer();
    App.showView('home');
  },

  viewProgress() {
    App.showView('progress');
  },

  // ─── HOME ────────────────────────────────────────────────────────────────
  renderHome() {
    const progress = Store.getProgress();
    document.getElementById('streak-count').textContent = progress.streak;
    document.getElementById('total-workouts').textContent = progress.totalWorkouts;
    document.getElementById('total-minutes').textContent = progress.totalMinutes;

    document.querySelector('.hero-sub').textContent = greetingTime();

    state.todayPlanId = pickTodayPlan();
    const plan = getPlan(state.todayPlanId);
    document.getElementById('today-name').textContent = plan.name;
    document.getElementById('today-meta').textContent = `${plan.exercises.length} exercises · ${plan.duration} min`;
    document.getElementById('today-thumb').textContent = plan.emoji;
    document.getElementById('today-difficulty').textContent = plan.difficulty;

    const preview = document.getElementById('today-preview');
    preview.innerHTML = plan.exercises.slice(0, 4).map(id => {
      const ex = getExercise(id);
      return `<span class="ex-chip">${ex ? ex.name : id}</span>`;
    }).join('');

    App.renderPlansGrid();
  },

  renderPlansGrid() {
    const grid = document.getElementById('plans-grid');
    grid.innerHTML = PLANS.map(plan => `
      <div class="plan-card" onclick="App.openPlan('${plan.id}')">
        <div class="plan-emoji">${plan.emoji}</div>
        <div class="plan-name">${plan.name}</div>
        <div class="plan-meta">${plan.exercises.length} exercises · ${plan.duration} min</div>
        <span class="plan-diff ${plan.difficulty.toLowerCase()}">${plan.difficulty}</span>
      </div>
    `).join('');
  },

  startTodayWorkout() {
    App.openPlan(state.todayPlanId);
  },

  // ─── WORKOUT OVERVIEW ───────────────────────────────────────────────────
  openPlan(planId) {
    const plan = getPlan(planId);
    if (!plan) return;
    state.activePlan = plan;
    state.activeExerciseIndex = 0;

    document.getElementById('wk-title').textContent = plan.name;
    document.getElementById('wk-meta').textContent = `${plan.exercises.length} exercises · ${plan.duration} min · ${plan.difficulty}`;

    const list = document.getElementById('exercise-list');
    list.innerHTML = plan.exercises.map((id, i) => {
      const ex = getExercise(id);
      if (!ex) return '';
      return `
        <div class="exercise-list-item" onclick="App.openExDetail('${ex.id}')">
          <div class="eli-num">${i + 1}</div>
          <div class="eli-illustration">${ex.svg}</div>
          <div class="eli-info">
            <div class="eli-name">${ex.name}</div>
            <div class="eli-detail">${ex.reps} · ${ex.duration}s work · ${ex.rest}s rest</div>
          </div>
          <div class="eli-arrow">›</div>
        </div>`;
    }).join('');

    App.showView('workout');
  },

  beginWorkout() {
    state.activeExerciseIndex = 0;
    App.showView('exercise');
    App.loadExercise(0);
  },

  // ─── ACTIVE EXERCISE ────────────────────────────────────────────────────
  loadExercise(index) {
    App.clearTimer();
    state.isRest = false;

    const plan = state.activePlan;
    if (!plan) return;
    const total = plan.exercises.length;
    const ex = getExercise(plan.exercises[index]);
    if (!ex) return;

    state.timerSeconds = ex.duration;
    state.timerMax = ex.duration;

    // Progress bar
    const pct = ((index) / total) * 100;
    document.getElementById('ex-progress-fill').style.width = pct + '%';
    document.getElementById('ex-counter').textContent = `${index + 1} / ${total}`;

    // Illustration
    const illDiv = document.getElementById('ex-illustration');
    illDiv.innerHTML = ex.svg + `<div class="motion-badge">×${ex.reps.split(' ')[0]}</div>`;

    // Info
    document.getElementById('ex-name').textContent = ex.name;
    document.getElementById('ex-tip').textContent = ex.tips[0];

    // Timer
    App.updateTimerUI(ex.duration, ex.duration, false);

    // Buttons
    document.getElementById('play-label').textContent = 'Start';
    document.getElementById('play-icon').innerHTML = '<path d="M8 5v14l11-7z"/>';
    document.getElementById('timer-label').textContent = 'Work';
    document.querySelector('.ring-fill').classList.remove('rest');
  },

  updateTimerUI(seconds, max, isRest) {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    document.getElementById('timer-digits').textContent = `${m}:${String(s).padStart(2,'0')}`;
    const circumference = 326.56;
    const offset = circumference * (1 - seconds / max);
    document.getElementById('ring-fill').style.strokeDashoffset = offset;
  },

  toggleTimer() {
    if (state.timerRunning) {
      App.pauseTimer();
    } else {
      App.startTimer();
    }
  },

  startTimer() {
    if (state.timerRunning) return;
    state.timerRunning = true;
    document.getElementById('play-label').textContent = 'Pause';
    document.getElementById('play-icon').innerHTML = '<path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>';

    state.timerInterval = setInterval(() => {
      state.timerSeconds--;
      App.updateTimerUI(state.timerSeconds, state.timerMax, state.isRest);

      if (state.timerSeconds <= 0) {
        App.clearTimer();
        if (!state.isRest) {
          App.startRestPeriod();
        } else {
          App.nextExercise();
        }
      }
    }, 1000);
  },

  pauseTimer() {
    state.timerRunning = false;
    clearInterval(state.timerInterval);
    state.timerInterval = null;
    document.getElementById('play-label').textContent = 'Resume';
    document.getElementById('play-icon').innerHTML = '<path d="M8 5v14l11-7z"/>';
  },

  clearTimer() {
    state.timerRunning = false;
    clearInterval(state.timerInterval);
    state.timerInterval = null;
    clearInterval(state.restInterval);
    state.restInterval = null;
    // Remove rest overlay if exists
    const overlay = document.getElementById('rest-overlay');
    if (overlay) overlay.remove();
  },

  startRestPeriod() {
    const plan = state.activePlan;
    if (!plan) return;
    const ex = getExercise(plan.exercises[state.activeExerciseIndex]);
    if (!ex) return;

    // If last exercise, go to complete
    if (state.activeExerciseIndex >= plan.exercises.length - 1) {
      App.workoutComplete();
      return;
    }

    const restSec = ex.rest;
    let remaining = restSec;

    // Create rest overlay
    const overlay = document.createElement('div');
    overlay.id = 'rest-overlay';
    overlay.className = 'rest-overlay';
    overlay.innerHTML = `
      <div style="font-size:2.5rem">😮‍💨</div>
      <h2>Rest</h2>
      <div class="rest-timer" id="rest-countdown">${remaining}s</div>
      <p style="opacity:0.8;font-size:0.9rem">Next: ${getExercise(plan.exercises[state.activeExerciseIndex + 1])?.name || ''}</p>
      <button class="rest-skip" onclick="App.skipRest()">Skip →</button>
    `;
    document.getElementById('app').appendChild(overlay);

    state.restInterval = setInterval(() => {
      remaining--;
      const el = document.getElementById('rest-countdown');
      if (el) el.textContent = remaining + 's';
      if (remaining <= 0) {
        App.skipRest();
      }
    }, 1000);
  },

  skipRest() {
    clearInterval(state.restInterval);
    state.restInterval = null;
    const overlay = document.getElementById('rest-overlay');
    if (overlay) overlay.remove();
    state.activeExerciseIndex++;
    App.loadExercise(state.activeExerciseIndex);
  },

  prevExercise() {
    App.clearTimer();
    if (state.activeExerciseIndex > 0) {
      state.activeExerciseIndex--;
      App.loadExercise(state.activeExerciseIndex);
    }
  },

  nextExercise() {
    App.clearTimer();
    const plan = state.activePlan;
    if (!plan) return;
    if (state.activeExerciseIndex < plan.exercises.length - 1) {
      state.activeExerciseIndex++;
      App.loadExercise(state.activeExerciseIndex);
    } else {
      App.workoutComplete();
    }
  },

  workoutComplete() {
    App.clearTimer();
    const plan = state.activePlan;

    // Save progress
    const progress = Store.getProgress();
    const today = todayDateStr();
    const isNewDay = progress.lastDate !== today;

    if (isNewDay) {
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      const yStr = `${yesterday.getFullYear()}-${String(yesterday.getMonth()+1).padStart(2,'0')}-${String(yesterday.getDate()).padStart(2,'0')}`;
      progress.streak = progress.lastDate === yStr ? progress.streak + 1 : 1;
      progress.bestStreak = Math.max(progress.streak, progress.bestStreak);
      progress.lastDate = today;
    }

    progress.totalWorkouts++;
    progress.totalMinutes += plan.duration;
    progress.history.unshift({
      date: today,
      planId: plan.id,
      planName: plan.name,
      emoji: plan.emoji,
      duration: plan.duration,
      exercises: plan.exercises.length,
    });
    if (progress.history.length > 50) progress.history = progress.history.slice(0, 50);
    Store.saveProgress(progress);

    // Update complete screen
    document.getElementById('complete-summary').textContent = `Great work finishing ${plan.name}!`;
    document.getElementById('c-exercises').textContent = plan.exercises.length;
    document.getElementById('c-time').textContent = plan.duration;
    const cals = plan.exercises.reduce((sum, id) => {
      const ex = getExercise(id);
      return sum + (ex ? ex.calories : 5);
    }, 0);
    document.getElementById('c-cal').textContent = '~' + cals;

    App.showView('complete');
  },

  // ─── PROGRESS ───────────────────────────────────────────────────────────
  renderProgress() {
    const progress = Store.getProgress();
    document.getElementById('ps-streak').textContent = progress.streak;
    document.getElementById('ps-best').textContent = progress.bestStreak;
    document.getElementById('ps-total').textContent = progress.totalWorkouts;
    document.getElementById('ps-minutes').textContent = progress.totalMinutes;

    // Week grid
    const weekGrid = document.getElementById('week-grid');
    const days = ['Su','Mo','Tu','We','Th','Fr','Sa'];
    const today = new Date();
    const todayStr = todayDateStr();
    weekGrid.innerHTML = '';
    for (let i = 6; i >= 0; i--) {
      const d = new Date(today);
      d.setDate(today.getDate() - i);
      const dStr = `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
      const done = progress.history.some(h => h.date === dStr);
      const isToday = dStr === todayStr;
      const col = document.createElement('div');
      col.className = 'week-day';
      col.innerHTML = `
        <div class="week-dot ${done ? 'done' : ''} ${isToday && !done ? 'today' : ''}">${done ? '✓' : d.getDate()}</div>
        <div class="week-lbl">${days[d.getDay()]}</div>
      `;
      weekGrid.appendChild(col);
    }

    // History list
    const historyList = document.getElementById('history-list');
    if (!progress.history.length) {
      historyList.innerHTML = '<p class="empty-state">No workouts yet. Start your first one!</p>';
    } else {
      historyList.innerHTML = progress.history.slice(0, 20).map(h => `
        <div class="history-item">
          <div class="hi-icon">${h.emoji}</div>
          <div class="hi-info">
            <div class="hi-name">${h.planName}</div>
            <div class="hi-meta">${formatDate(h.date)} · ${h.exercises} exercises · ${h.duration} min</div>
          </div>
          <div class="hi-check">✓</div>
        </div>
      `).join('');
    }
  },

  // ─── EXERCISE LIBRARY ───────────────────────────────────────────────────
  renderExercises() {
    const filterRow = document.getElementById('filter-row');
    const categories = ['All', ...new Set(EXERCISES.map(e => e.category))];
    filterRow.innerHTML = categories.map(cat => `
      <button class="filter-chip ${state.filterCategory === cat ? 'active' : ''}"
              onclick="App.setFilter('${cat}')">${cat}</button>
    `).join('');

    const filtered = state.filterCategory === 'All'
      ? EXERCISES
      : EXERCISES.filter(e => e.category === state.filterCategory);

    const tagClass = { 'Upper Body': '', 'Core': 'core', 'Legs': 'legs', 'Cardio': 'cardio', 'Stretch': 'stretch' };

    const grid = document.getElementById('library-grid');
    grid.innerHTML = filtered.map(ex => `
      <div class="lib-card" onclick="App.openExDetail('${ex.id}')">
        <div class="lib-card-img">${ex.svg}</div>
        <div class="lib-card-body">
          <div class="lib-card-name">${ex.name}</div>
          <div class="lib-card-meta">${ex.reps}</div>
          <span class="lib-card-tag ${tagClass[ex.category] || ''}">${ex.category}</span>
        </div>
      </div>
    `).join('');
  },

  setFilter(cat) {
    state.filterCategory = cat;
    App.renderExercises();
  },

  // ─── EXERCISE DETAIL ────────────────────────────────────────────────────
  openExDetail(exId) {
    const ex = getExercise(exId);
    if (!ex) return;

    const tagClass = { 'Upper Body': '', 'Core': 'core', 'Legs': 'legs', 'Cardio': 'cardio' };

    const content = document.getElementById('ex-detail-content');
    content.innerHTML = `
      <div class="ex-detail-hero">
        ${ex.svg}
        <div class="diff-badge">${ex.difficulty}</div>
      </div>
      <h2>${ex.name}</h2>
      <div class="ex-tag-row">
        <span class="ex-tag">${ex.category}</span>
        <span class="ex-tag">⏱ ${ex.duration}s work</span>
        <span class="ex-tag">😮‍💨 ${ex.rest}s rest</span>
      </div>
      <div class="ex-detail-section">
        <h3>About</h3>
        <p>${ex.desc}</p>
      </div>
      <div class="ex-detail-section">
        <h3>How To</h3>
        <ol class="steps-list">
          ${ex.steps.map((s, i) => `<li><span class="step-num">${i+1}</span>${s}</li>`).join('')}
        </ol>
      </div>
      <div class="ex-detail-section">
        <h3>Tips</h3>
        <ul class="tips-list">
          ${ex.tips.map(t => `<li>${t}</li>`).join('')}
        </ul>
      </div>
    `;

    App.showView('ex-detail');
  },
};

// ─── BACK BUTTON ─────────────────────────────────────────────────────────────
document.getElementById('back-btn').addEventListener('click', () => {
  if (state.currentView === 'exercise') {
    App.clearTimer();
    App.showView('workout');
  } else if (state.currentView === 'ex-detail') {
    App.showView(state.previousView === 'exercises' ? 'exercises' : 'workout');
  } else {
    App.goHome();
  }
});

// ─── INIT ─────────────────────────────────────────────────────────────────────
(function init() {
  App.renderHome();
  App.showView('home');
})();
