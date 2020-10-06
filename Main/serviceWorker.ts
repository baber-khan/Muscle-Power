import { Excercise, Meal } from './interfaces';

export const excercises: Array<Excercise> = [
  //General Exercises

  {
    id: 'push-up',
    title: 'Push Up',
  },

  {
    id: 'chin-up',
    title: 'Chin Up',
  },
  {
    id: 'skipping-rope',
    title: 'Skipping Rope',
  },
  {
    id: 'walking',
    title: 'Walking',
  },
  {
    id: 'squats',
    title: 'Squats',
  },
  {
    id: 'lunges',
    title: 'Lunges',
  },
  {
    id: 'abdominal-crunches',
    title: 'Abdominal Crunches',
  },
  {
    id: 'bent-over-row',
    title: 'Bent-over Row',
  },
  {
    id: 'front-plank',
    title: 'Front Plank',
  },
  {
    id: 'bent-knee-push-up',
    title: 'Bent Knee Push-up',
  },
  {
    id: 'squat-jumps',
    title: 'Squat Jumps',
  },
  {
    id: 'jogging',
    title: 'Jogging',
  },
  {
    id: 'standing overhead-dumbbell-presses',
    title: 'Standing Overhead Dumbbell Presses',
  },
  {
    id: 'burpees',
    title: 'Burpees',
  },
  {
    id: 'side-planks',
    title: 'Side planks',
  },
  {
    id: 'glute-bridge',
    title: 'Glute bridge  ',
  },
  {
    id: 'running',
    title: 'Running',
  },
  {
    id: 'wall-sit',
    title: 'Wall sit',
  },
  {
    id: 'step-up',
    title: 'Step-up',
  },

  // (Arms Exercises)
  //Bicep Exercises
  //{ website url: https://manofmany.com/lifestyle/fitness/best-bicep-exercises-for-men}
  {
    id: 'alternating-incline-dumbbell-curl',
    title: 'Alternating Incline Dumbbell Curl',
  },
  {
    id: 'seated-alternating-hammer-curl',
    title: 'Seated Alternating Hammer Curl',
  },
  {
    id: 'standing-reverse-barbell-curl',
    title: 'Standing Reverse Barbell Curl',
  },
  {
    id: 'seated-alternating-dumbbell-curl',
    title: 'Seated Alternating Dumbbell Curl',
  },
  {
    id: 'standing-cable-curl',
    title: 'Standing Cable Curl',
  },
  {
    id: 'standing-barbell-curl',
    title: 'Standing Barbell Curl',
  },
  {
    id: 'decline-dumbbell-curl',
    title: 'Decline Dumbbell Curl',
  },
  {
    id: 'concentration-curl',
    title: 'Concentration Curl',
  },
  {
    id: 'cable-flex-curl',
    title: 'Cable Flex Curl',
  },
  //Triceps Exercises
  //{website:https://www.prevention.com/fitness/workouts/g27667203/best-triceps-exercises/}
  {
    id: 'overhead-triceps-extension',
    title: 'Overhead Triceps Extension',
  },
  {
    id: 'triceps-kickbacks',
    title: 'Triceps Kickbacks',
  },
  {
    id: 'triceps-underhand-kickbacks',
    title: 'Triceps Underhand Kickbacks',
  },
  {
    id: 'standing-eccentric-triceps-extensions',
    title: 'Standing Eccentric Triceps Extensions',
  },
  {
    id: 'skull-crushers',
    title: 'Skull Crushers',
  },
  {
    id: 'close-grip-dumbbell-press',
    title: 'Close-Grip Dumbbell Press',
  },
  {
    id: 'tate-press',
    title: 'Tate Press',
  },
  {
    id: 'diamond-push-ups',
    title: 'Diamond Push-Ups',
  },
  {
    id: 'chaturanga-push-up',
    title: 'Chaturanga Push-Up',
  },
  {
    id: 'up-down-planks',
    title: 'Up-Down Planks',
  },
  {
    id: 'chair-dips',
    title: 'Chair Dips',
  },
  //Forearms Exercises
  //{website : https://www.mensjournal.com/health-fitness/the-20-best-forearms-exercises-of-all-time/}
  {
    id: 'behind-the-back-cable-curl',
    title: 'Behind-the-Back Cable Curl',
  },
  {
    id: 'ez-bar-preacher-curl',
    title: 'EZ-Bar Preacher Curl',
  },
  {
    id: 'reverse-curl',
    title: 'Reverse Curl',
  },
  {
    id: 'wide-grip-curl',
    title: 'Wide-Grip Curl',
  },
  {
    id: 'towel-cable-row',
    title: 'Towel Cable Row',
  },
  {
    id: 'towel-pullup',
    title: 'Towel Pullup',
  },
  {
    id: 'towel-row-to-chest',
    title: 'Towel Row-to-Chest',
  },
  {
    id: 'wrist-curl',
    title: 'Wrist Curl',
  },
  {
    id: 'chinup',
    title: 'Chinup',
  },
  {
    id: 'parallel-bar-hand-walk',
    title: 'Parallel Bar Hand Walk',
  },
  //Shoulder Exercises
  //{website: https://www.mensjournal.com/health-fitness/30-best-shoulder-exercises-and-workouts-of-all-time/}
  {
    id: 'barbell-overhead-press',
    title: 'Barbell Overhead Press',
  },
  {
    id: 'standing-dumbbell-fly',
    title: 'Standing Dumbbell Fly',
  },
  {
    id: ' face-pull',
    title: 'Face Pull',
  },
  {
    id: 'high-pull',
    title: 'High Pull',
  },
  {
    id: 'seated-dumbbell-clean',
    title: 'Seated Dumbbell Clean',
  },
  {
    id: 'trap-raise',
    title: 'Trap Raise',
  },
  {
    id: 'clean-and-press',
    title: 'Clean and Press',
  },
  {
    id: 'hindu-pushup',
    title: 'Hindu Pushup',
  },
  {
    id: 'dip',
    title: 'Dip',
  },
  {
    id: 'rack-deadlift',
    title: 'Rack Deadlift',
  },
  //Upper Chest Exercises
  //{website: https://thefitnesstribe.com/upper-chest-exercises/}

  {
    id: 'decline-push-up',
    title: 'Decline Push-Up',
  },
  {
    id: 'incline-bench-press',
    title: 'Incline Bench Press',
  },
  {
    id: 'leverage-incline-chest-press',
    title: 'Leverage Incline Chest Press',
  },
  {
    id: 'chest-dips',
    title: 'Chest Dips',
  },
  {
    id: 'the-chest-fly',
    title: 'The Chest Fly',
  },
  {
    id: 'plyometric-push-up',
    title: 'Plyometric Push-Up',
  },
  {
    id: 'reverse-grip-bench-press',
    title: 'Reverse Grip Bench Press',
  },
  {
    id: 'dumbbell-pullover',
    title: 'Dumbbell Pullover',
  },
  //lower chest exercises
  //{website: https://www.medicalnewstoday.com/articles/324490}
  {
    id: 'incline-pushup',
    title: 'Incline pushup',
  },
  {
    id: 'decline-dumbbell-press',
    title: 'Decline dumbbell press',
  },
  {
    id: ' decline-dumbbell-bench-press-with-external-rotation',
    title: ' Decline dumbbell bench press with external rotation',
  },
  {
    id: 'cable-crossover',
    title: 'Cable Crossover',
  },
  {
    id: 'parallel-bar-dips',
    title: 'Parallel-Bar Dips',
  },
  ///(back)
  //Upper Back Exercises
  //{website: https://www.healthline.com/health/fitness-exercise/upper-back-pain-exercises}

  {
    id: 'neck-side-bend-and-rotation',
    title: 'Neck side bend and rotation',
  },
  {
    id: 'overhead-arm-reach',
    title: 'Overhead Arm Reach',
  },
  {
    id: 'childs-pose',
    title: 'Child’s Pose',
  },
  {
    id: 'knee-to-chest',
    title: 'Knee To Chest',
  },
  //lower back Exercises
  //{website: https://www.medicalnewstoday.com/articles/323204}
  {
    id: 'bridges',
    title: 'Bridges',
  },
  {
    id: 'knee-to-chest-stretches',
    title: 'Knee-To-Chest Stretches',
  },
  {
    id: 'lower-back-rotational-stretches',
    title: 'Lower Back Rotational Stretches',
  },
  {
    id: 'lying-lateral-leg-lifts',
    title: 'Lying Lateral Leg Lifts',
  },
  {
    id: 'cat-stretches',
    title: 'Cat Stretches',
  },
  {
    id: 'partial-curls',
    title: 'Partial Curls',
  },
  //Exercises for Building Badass Wings
  //{website: https://www.muscleandperformance.com/training-performance/3-best-exercises-for-building-badass-wings-5929}
  {
    id: 'wide-grip-pull-up',
    title: 'Wide-Grip Pull-Up',
  },
  {
    id: 'bent-over-barbell-row',
    title: 'Bent-Over Barbell Row',
  },
  {
    id: 'straight-arm-lat-pull-down',
    title: 'Straight-Arm Lat Pull-Down',
  },
  //Thai Exercises
  //{website:https://www.onefc.com/lifestyle/5-muay-thai-exercises-you-can-do-at-home-while-life-is-on-pause/}

  {
    id: 'sit-ups',
    title: 'Sit-Ups',
  },
  {
    id: 'pull-ups',
    title: 'Pull-Ups',
  },
  // Leg Workouts
  //{website:https://www.mensjournal.com/health-fitness/30-best-leg-exercises-and-workouts-of-all-time/10-bodyweight-calf-raise/}
  {
    id: 'front-squat',
    title: 'Front Squat',
  },
  {
    id: 'bulgarian-split-squat',
    title: 'Bulgarian Split Squat',
  },
  {
    id: 'romanian-deadlift',
    title: 'Romanian Deadlift',
  },
  {
    id: 'squat',
    title: 'Squat',
  },
  {
    id: 'dumbbell-stepup',
    title: 'Dumbbell Stepup',
  },
  {
    id: 'deadlift',
    title: 'Deadlift',
  },
  {
    id: 'swiss-ball-leg-curl',
    title: 'Swiss Ball Leg Curl',
  },
  {
    id: 'single-leg-romanian-deadlift',
    title: 'Single-Leg Romanian Deadlift',
  },
  {
    id: 'leg-press',
    title: 'Leg Press',
  },
  {
    id: 'bodyweight-calf-raise',
    title: 'Bodyweight Calf Raise',
  },
  {
    id: 'walking-lunge',
    title: 'Walking Lunge',
  },
  {
    id: 'pause-squat',
    title: 'Pause Squat',
  },
  {
    id: 'dumbbell-squat',
    title: 'Dumbbell Squat',
  },
  {
    id: 'kettlebell-swing',
    title: 'Kettlebell Swing',
  },
  {
    id: 'jump-squat',
    title: 'Jump Squat',
  },
  {
    id: 'barbell-calf-raise',
    title: 'Barbell Calf Raise',
  },
  {
    id: 'kneeling-hip-flexor-stretch',
    title: 'Kneeling Hip Flexor Stretch',
  },
  {
    id: 'skater-squat',
    title: 'Skater Squat',
  },
  {
    id: 'jumping calf-raise',
    title: 'Jumping Calf Raise',
  },
  {
    id: 'barbell-hip-thrust',
    title: 'Barbell Hip Thrust',
  },
  {
    id: 'glute-bridge-walkout',
    title: 'Glute Bridge Walkout',
  },
  {
    id: 'single-leg-glute-bridge',
    title: 'Single-Leg Glute Bridge',
  },
  {
    id: 'kettlebell-press-out',
    title: 'Kettlebell Press-Out',
  },
  {
    id: 'swiss-ball-wall-squat',
    title: 'Swiss Ball Wall Squat',
  },

  // Calf Exercises
  //{Website: https://manofmany.com/lifestyle/fitness/best-calf-exercises-for-men}
  {
    id: 'box-jumps',
    title: 'Box Jumps',
  },
  {
    id: 'jumping-jacks',
    title: 'Jumping Jacks',
  },
  {
    id: 'seal-jumps',
    title: 'Seal Jumps',
  },
  {
    id: 'agility-ladder',
    title: 'Agility Ladder',
  },
  {
    id: 'seated-band-pushes',
    title: 'Seated Band Pushes',
  },
  {
    id: 'explosive-calf-step-up',
    title: 'Explosive Calf Step-Up',
  },
  {
    id: 'hill-runs',
    title: 'Hill Runs',
  },
];
export const meals: Array<Meal> = [
  //<Food>
  //Fruits Name
  //{website: https://en.wikibooks.org/wiki/Wikijunior:Fruit_Alphabet/Complete}
  {
    id: 'apples',
    title: 'Apples',
  },
  {
    id: 'apricots',
    title: 'Apricots',
  },
  {
    id: 'avocados',
    title: 'Avocados',
  },
  {
    id: 'bananas',
    title: 'Bananas',
  },
  {
    id: 'boysenberries',
    title: 'Boysenberries',
  },
  {
    id: 'blueberries',
    title: 'Blueberries',
  },
  {
    id: 'bing-cherry',
    title: 'Bing Cherry',
  },
  {
    id: 'cherries',
    title: 'Cherries',
  },
  {
    id: 'cantaloupe',
    title: 'Cantaloupe',
  },
  {
    id: 'crab-apples',
    title: 'Crab apples',
  },
  {
    id: 'clementine',
    title: 'Clementine',
  },
  {
    id: 'cucumbers',
    title: 'Cucumbers',
  },
  {
    id: 'damson-plum',
    title: 'Damson plum',
  },
  {
    id: 'dates',
    title: 'Dates',
  },
  {
    id: 'dewberries',
    title: 'Dewberries',
  },
  {
    id: 'dragon-fruit',
    title: 'Dragon Fruit',
  },
  {
    id: 'elderberry',
    title: 'Elderberry',
  },
  {
    id: 'fig',
    title: 'Fig',
  },
  {
    id: 'farkleberry',
    title: 'Farkleberry',
  },
  {
    id: 'finger-lime',
    title: 'Finger Lime',
  },
  {
    id: 'grapefruit',
    title: 'Grapefruit',
  },
  {
    id: 'grapes',
    title: 'Grapes',
  },
  {
    id: 'gooseberries',
    title: 'Gooseberries',
  },
  {
    id: 'guava',
    title: 'Guava',
  },
  {
    id: 'honeydew-melon',
    title: 'Honeydew melon',
  },
  {
    id: 'hackberry',
    title: 'Hackberry',
  },
  {
    id: 'honeycrisp-apples',
    title: 'Honeycrisp Apples',
  },
  {
    id: 'indian-prune-plum',
    title: 'Indian Prune (Plum)',
  },
  {
    id: 'indonesian-lime',
    title: 'Indonesian Lime',
  },
  {
    id: 'imbe',
    title: 'Imbe',
  },
  {
    id: 'indian-fig',
    title: 'Indian Fig',
  },
  {
    id: 'jackfruit',
    title: 'Jackfruit',
  },
  {
    id: 'java-apple',
    title: 'Java Apple',
  },
  {
    id: 'jambolan',
    title: 'Jambolan',
  },
  {
    id: 'kiwi',
    title: 'Kiwi',
  },
  {
    id: 'kumquat',
    title: 'Kumquat',
  },
  {
    id: 'lime-lemon',
    title: 'Lime (Lemon)',
  },
  {
    id: 'longan',
    title: 'Longan',
  },
  {
    id: 'lychee',
    title: 'Lychee',
  },
  {
    id: 'loquat',
    title: 'Loquat',
  },
  {
    id: 'mango',
    title: 'Mango',
  },
  {
    id: 'mandarin-orange',
    title: 'Mandarin Orange',
  },
  {
    id: 'mulberry',
    title: 'Mulberry',
  },
  {
    id: 'melon',
    title: 'Melon',
  },
  {
    id: 'nectarine',
    title: 'Nectarine',
  },
  {
    id: 'navel-orange',
    title: 'Navel Orange',
  },
  {
    id: 'nashi-pear',
    title: 'Nashi Pear (Asian Pear)',
  },
  {
    id: 'olive',
    title: 'Olive',
  },
  {
    id: 'oranges',
    title: 'Oranges',
  },
  {
    id: 'ogeechee-limes',
    title: 'Ogeechee Limes',
  },
  {
    id: 'oval-kumquat',
    title: 'Oval Kumquat',
  },
  {
    id: 'papaya',
    title: 'Papaya',
  },
  {
    id: 'persimmon',
    title: 'Persimmon',
  },
  {
    id: 'paw-paw',
    title: 'Paw Paw',
  },
  {
    id: 'prickly-pear',
    title: 'Prickly Pear',
  },
  {
    id: 'peach',
    title: 'Peach',
  },
  {
    id: 'pomegranate',
    title: 'Pomegranate',
  },
  {
    id: 'pineapple',
    title: 'Pineapple',
  },
  {
    id: 'quince',
    title: 'Quince',
  },
  {
    id: 'queen-anne-cherry',
    title: 'Queen Anne Cherry',
  },
  {
    id: 'quararibea-cordata',
    title: 'Quararibea cordata (Chupa Chupa)',
  },
  {
    id: 'rambutan',
    title: 'Rambutan',
  },
  {
    id: 'raspberrie',
    title: 'Raspberrie',
  },
  {
    id: 'rose-hips',
    title: 'Rose Hips',
  },
  {
    id: 'star-fruit',
    title: 'Star Fruit',
  },
  {
    id: 'strawberries',
    title: 'Strawberries',
  },
  {
    id: 'sugar-baby-watermelon',
    title: 'Sugar Baby Watermelon',
  },
  {
    id: 'tomato',
    title: 'Tomato',
  },
  {
    id: 'tangerine',
    title: 'Tangerine',
  },
  {
    id: 'tamarind',
    title: 'Tamarind',
  },
  {
    id: 'tart-cherries',
    title: 'Tart Cherries',
  },
  {
    id: 'ugli-fruit',
    title: 'Ugli Fruit',
  },
  {
    id: 'uniq-fruit',
    title: 'Uniq Fruit',
  },
  {
    id: 'ugni',
    title: 'Ugni',
  },
  {
    id: 'vanilla-bean',
    title: 'Vanilla Bean',
  },
  {
    id: 'voavanga',
    title: 'Voavanga',
  },
  {
    id: 'watermelon',
    title: 'Watermelon',
  },
  {
    id: 'wolfberry',
    title: 'Wolfberry',
  },
  {
    id: 'white-mulberry',
    title: 'White Mulberry',
  },
  {
    id: 'ximenia-caffra-fruit',
    title: 'Ximenia caffra fruit',
  },
  {
    id: 'xango-mangosteen-fruit-juice',
    title: 'Xango Mangosteen Fruit Juice',
  },
  {
    id: 'yellow-passion-fruit',
    title: 'Yellow Passion Fruit',
  },
  {
    id: 'yunnan-hackberry',
    title: 'Yunnan Hackberry',
  },
  {
    id: 'yangmei',
    title: 'Yangmei',
  },
  {
    id: 'zig-zag-vine-fruit',
    title: 'Zig Zag Vine fruit',
  },
  {
    id: 'zinfandel-grapes',
    title: 'Zinfandel Grapes',
  }, // Fruits Ends here

  //Pakistani Foods
  //Main Food Dishes
  {
    id: 'nihari',
    title: 'Nihari',
  },
  {
    id: 'mutton-nihari',
    title: 'Mutton-Nihari',
  },
  {
    id: 'nalli-nihari',
    title: 'Nalli-Nihari',
  },
  {
    id: 'kabuli-pulao',
    title: 'Kabuli Pulao',
  },
  {
    id: 'kashmiri-pulao',
    title: 'Kashmiri Pulao',
  },
  {
    id: 'chicken-pulao',
    title: 'Chicken Pulao',
  },
  {
    id: 'matar-pulao',
    title: 'Matar Pulao',
  },
  {
    id: 'Pulao',
    title: 'Pulao',
  },
  {
    id: 'chicken-karahi',
    title: 'chicken karahi',
  },
  {
    id: 'mutton-karahi',
    title: 'Mutton Karahi',
  },
  {
    id: 'chicken-haleem',
    title: 'Chicken Haleem',
  },
  {
    id: 'mutton-haleem',
    title: 'Mutton Haleem',
  },
  {
    id: 'halwa-puri',
    title: 'Halwa Puri',
  },
  {
    id: 'mutton-korma',
    title: 'Mutton Korma',
  },
  {
    id: 'chicken-korma',
    title: 'Chicken Korma',
  },
  {
    id: 'saag',
    title: 'Saag',
  },
  {
    id: 'tikka-kebab',
    title: 'Tikka Kebab',
  },
  {
    id: 'chapshurro',
    title: 'Chapshurro (or Chapshoro)',
  },
  {
    id: 'dowdo',
    title: 'Dowdo',
  },
  {
    id: 'gyal',
    title: 'Gyal (or Go-Lee)',
  },
  {
    id: 'paya',
    title: 'Paya (or Paaya)',
  },
  {
    id: 'aloo-biriyani',
    title: 'Aloo Biriyani',
  },
  {
    id: 'mutton-biriyani',
    title: 'Mutton Biriyani',
  },
  {
    id: 'chicken-biriyani',
    title: 'Chicken Biriyani',
  },
  {
    id: 'chapli-kebab',
    title: 'Chapli Kebab',
  },
  {
    id: 'sajji',
    title: 'Sajji',
  },
  {
    id: 'brain-masala',
    title: 'Brain Masala',
  },
  {
    id: 'katakat',
    title: 'Katakat',
  },
  {
    id: 'paratha',
    title: 'Paratha',
  },
  {
    id: 'bun-kebab',
    title: 'Bun Kebab',
  },
  {
    id: 'anday-wala-burger',
    title: 'Anday Wala Burger',
  },
  {
    id: 'chole-bhature',
    title: 'Chole Bhature',
  },
  {
    id: 'aloo-keema',
    title: 'Aloo Keema',
  },
  {
    id: 'moong-daal',
    title: 'Moong Daal',
  },
  {
    id: 'urad-daal',
    title: 'Urad Daal',
  },
  {
    id: 'arhar-daal',
    title: 'Arhar Daal',
  },
  {
    id: 'chana-daal',
    title: 'Chana Daal',
  },
  {
    id: 'matar-daal',
    title: 'Matar Daal',
  },
  {
    id: 'keema',
    title: 'Keema',
  },
  {
    id: 'naan',
    title: 'Naan',
  },
  {
    id: 'chicken-jalfrezi',
    title: 'Chicken Jalfrezi',
  },
  {
    id: 'aloo-gohst',
    title: 'Aloo Gohst',
  },
  {
    id: 'chicken-curry',
    title: 'Chicken Curry',
  },
  {
    id: 'seekh-kebabs',
    title: 'Seekh Kebabs',
  },
  {
    id: 'kofta',
    title: 'Kofta',
  },
  {
    id: 'chicken-tikka',
    title: 'Chicken Tikka',
  },
  {
    id: 'vegetable-salad',
    title: 'Vegetable Salad',
  },
  {
    id: 'fruit-salad',
    title: 'Fruit Salad',
  },
  {
    id: 'Meat-salad',
    title: 'Meat Salad',
  },
  {
    id: 'tomato-and-cheese-salad',
    title: 'Tomato And Cheese alad',
  },

  {
    id: 'egg',
    title: 'Egg',
  },
  //Main Pakistani desserts
  {
    id: 'gajar-halwa',
    title: 'Gajar Halwa',
  },
  {
    id: 'ras-malai',
    title: 'Ras Malai',
  },
  {
    id: 'gulab-jamun',
    title: 'Gulab Jamun',
  },
  {
    id: 'kheer',
    title: 'Kheer',
  },
  {
    id: 'zarda',
    title: 'Zarda',
  },
  {
    id: 'falooda',
    title: 'Falooda',
  },
  {
    id: 'kulfi',
    title: 'Kulfi',
  },
  {
    id: 'habshi-halwa',
    title: 'Habshi halwa',
  },
  {
    id: 'shahi-tukray',
    title: 'Shahi tukray',
  },
  {
    id: 'sohan-halwa',
    title: 'Sohan halwa',
  },
  {
    id: '	ice-cream',
    title: 'Ice cream',
  },
  {
    id: 'jalebi',
    title: 'Jalebi',
  },
  {
    id: 'plain-Cake',
    title: 'Plain-Cake',
  },
  {
    id: 'cream-Cake',
    title: 'Cream-Cake',
  },
  {
    id: 'suji-halwa',
    title: 'Suji halwa',
  },
  {
    id: 'sheer-khurma',
    title: 'Sheer Khurma',
  },
  {
    id: 'kheer',
    title: 'Kheer',
  },
  {
    id: 'rabri',
    title: 'Rabri',
  },
  {
    id: 'laddu',
    title: 'Laddu',
  },
  //Pakistani Drinks
  {
    id: 'lassi',
    title: 'Lassi',
  },
  {
    id: 'kashmiri-chai',
    title: 'Kashmiri Chai',
  },
  {
    id: 'mango-lassi',
    title: 'Mango Lassi',
  },
  {
    id: 'red-bull',
    title: 'Red Bull',
  },
  {
    id: 'sting',
    title: 'Sting',
  },
  {
    id: 'gatorade',
    title: 'Gatorade',
  },
  {
    id: 'milk',
    title: 'Milk',
  },
  {
    id: 'hot-coffee',
    title: 'Hot Coffee',
  },
  {
    id: 'cold-coffee',
    title: 'Cold Coffee',
  },
  {
    id: 'chai',
    title: 'Chai',
  },
  {
    id: 'green-tea',
    title: 'Green Tea',
  },
  {
    id: 'kahwa-tea',
    title: 'Kahwa Tea',
  },
  {
    id: 'milk-shake',
    title: 'Milk Shake',
  },
  {
    id: 'sugarcane-juice',
    title: 'Sugarcane Juice',
  },
  {
    id: 'rooh-afza',
    title: 'Rooh Afza',
  },
  {
    id: 'coconut-water',
    title: 'Coconut Water',
  },
  {
    id: 'milk-soda',
    title: 'Milk-Soda',
  },
  {
    id: 'sattu',
    title: 'Sattu',
  },
  {
    id: 'lemonade',
    title: 'Lemonade',
  },

  //Pakistani Snacks
  {
    id: 'channa-chaat',
    title: 'Channa Chaat',
  },
  {
    id: 'panipuri',
    title: 'Panipuri',
  },
  {
    id: 'samosa',
    title: 'Samosa',
  },
  {
    id: 'fruit-chaat',
    title: 'Fruit Chaat',
  },
  {
    id: 'chaat',
    title: 'Chaat',
  },
  {
    id: 'crunchy-pakoras',
    title: 'Crunchy Pakoras',
  },
  {
    id: '',
    title: '',
  },
  {
    id: '',
    title: '',
  },
  {
    id: '',
    title: '',
  },
];
