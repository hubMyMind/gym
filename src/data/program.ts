export interface Exercise {
  id: string;
  name: string;
  image: string;
  sets: string;
  reps: string;
  rest: string;
  note?: string;
}

export interface Group {
  title: string;
  exercises: Exercise[];
}

export interface Session {
  id: string;
  label: string;
  focus: string;
  groups: Group[];
}

const warmup: Group = {
  title: "Échauffement",
  exercises: [
    { id: "warmup-rameur", name: "Rameur", image: "https://wger.de/media/exercise-images/394/5e0c015f-9e4c-4034-beea-b0afbf15d0bd.png.400x400_q85.png", sets: "1", reps: "5 min", rest: "-" },
  ],
};

const abdos: Group = {
  title: "Abdominaux (circuit training, 3 tours, 1min recup en fin de tour)",
  exercises: [
    { id: "abdo-gainage", name: "Gainage sur les coudes", image: "https://wger.de/media/exercise-images/458/b7bd9c28-9f1d-4647-bd17-ab6a3adf5770.png.400x400_q85.png", sets: "1", reps: "1 min", rest: "-" },
    { id: "abdo-releve-genoux", name: "Relevé genoux à la chaise", image: "https://wger.de/media/exercise-images/979/27097a3a-5749-428d-b94c-6082afe390f6.png.400x400_q85.png", sets: "1", reps: "20 à 30", rest: "-" },
    { id: "abdo-crunch-sol", name: "Crunch au sol", image: "https://wger.de/media/exercise-images/91/Crunches-1.png.400x400_q85.png", sets: "1", reps: "30 à 40", rest: "-" },
    { id: "abdo-torsions", name: "Torsions de buste banc à lombaires", image: "https://wger.de/media/exercise-images/1089/49f51716-535d-41dd-aeb5-cff5bb906bc1.jpeg.400x400_q85.jpg", sets: "1", reps: "20", rest: "-", note: "alterné" },
  ],
};

const pectoraux: Group = {
  title: "Pectoraux",
  exercises: [
    { id: "pec-dev-couche", name: "Développé couché haltères", image: "https://wger.de/media/exercise-images/1084/91dd5a95-1c45-46f2-a074-de41b6ad599b.jpg.400x400_q85.jpg", sets: "5", reps: "8", rest: "1min" },
    { id: "pec-dev-incline", name: "Développé incliné", image: "https://wger.de/media/exercise-images/16/Incline-press-1.png.400x400_q85.png", sets: "4", reps: "15", rest: "45\"" },
    { id: "pec-presse", name: "Presse pectorale", image: "https://wger.de/media/exercise-images/129/b263c968-e067-4750-916a-d8758a7df23e.webp.400x400_q85.jpg", sets: "5", reps: "8", rest: "1min", note: "prise serrée" },
  ],
};

const dorsaux: Group = {
  title: "Dorsaux",
  exercises: [
    { id: "dos-tirage-devant", name: "Tirage devant barre poignée", image: "https://wger.de/media/exercise-images/1127/4942b7c0-6bda-4983-88e5-86547c3d445e.png.400x400_q85.jpg", sets: "5", reps: "8", rest: "1min", note: "paume de mains face à face" },
    { id: "dos-tirage-vertical", name: "Tirage vertical nuque", image: "https://wger.de/media/exercise-images/1136/5778a8e9-c606-4843-89c8-9d9469eeb6e4.PNG.400x400_q85.jpg", sets: "4", reps: "15", rest: "45\"" },
    { id: "dos-rowing-machine", name: "Rowing machine", image: "https://wger.de/media/exercise-images/394/5e0c015f-9e4c-4034-beea-b0afbf15d0bd.png.400x400_q85.png", sets: "5", reps: "8", rest: "1min", note: "en prise serrée" },
    { id: "dos-ext-lombaire", name: "Ext. lombaire au banc", image: "https://wger.de/media/exercise-images/301/2d5c2f99-b8ff-4095-b515-4c2a85afde70.png.400x400_q85.png", sets: "4", reps: "15", rest: "45\"" },
  ],
};

const epaules: Group = {
  title: "Épaules",
  exercises: [
    { id: "epa-dev-devant", name: "Développé devant", image: "https://wger.de/media/exercise-images/119/seated-barbell-shoulder-press-large-1.png.400x400_q85.jpg", sets: "5", reps: "8", rest: "1min" },
    { id: "epa-rowing-menton", name: "Rowing menton barre", image: "https://wger.de/media/exercise-images/418/fa2a2207-43cb-4dc0-bc2a-039e32544790.png.400x400_q85.jpg", sets: "5", reps: "8", rest: "1min", note: "prise large" },
  ],
};

const cuisses: Group = {
  title: "Cuisses (Quadriceps)",
  exercises: [
    { id: "cui-squat", name: "Squat haltères", image: "https://wger.de/media/exercise-images/203/1c052351-2af0-4227-aeb0-244008e4b0a8.jpeg.400x400_q85.jpg", sets: "4", reps: "8", rest: "1min" },
    { id: "cui-presse", name: "Presse", image: "https://wger.de/media/exercise-images/371/d2136f96-3a43-4d4c-9944-1919c4ca1ce1.webp.400x400_q85.png", sets: "3", reps: "15", rest: "1min" },
    { id: "cui-leg-extension", name: "Leg extension", image: "https://wger.de/media/exercise-images/369/78c915d1-e46d-4d30-8124-65d68664c3ef.png.400x400_q85.jpg", sets: "4", reps: "8", rest: "1min" },
    { id: "cui-souleve-terre", name: "Soulevé terre jambes tendues", image: "https://wger.de/media/exercise-images/184/1709c405-620a-4d07-9658-fade2b66a2df.jpeg.400x400_q85.jpg", sets: "5", reps: "8", rest: "1min" },
    { id: "cui-fentes", name: "Fentes haltères", image: "https://wger.de/media/exercise-images/113/Walking-lunges-1.png.400x400_q85.jpg", sets: "4", reps: "8", rest: "1min" },
    { id: "cui-hack-squat", name: "Hack squat", image: "https://wger.de/media/exercise-images/130/Narrow-stance-hack-squats-1-1024x721.png.400x400_q85.png", sets: "5", reps: "15", rest: "1min" },
  ],
};

const ischios: Group = {
  title: "Ischios",
  exercises: [
    { id: "isc-leg-curl", name: "Leg curl assis", image: "https://wger.de/media/exercise-images/117/seated-leg-curl-large-1.png.400x400_q85.jpg", sets: "4", reps: "8", rest: "1min" },
  ],
};

const mollets: Group = {
  title: "Mollets",
  exercises: [
    { id: "mol-presse", name: "Extensions à la presse", image: "https://wger.de/media/exercise-images/146/8b284904-d072-4381-a256-4c81d8fd9c1f.png.400x400_q85.jpg", sets: "4", reps: "8 à 12", rest: "45\"", note: "genoux tendus" },
    { id: "mol-assis", name: "Mollets assis", image: "https://wger.de/media/exercise-images/622/9a429bd0-afd3-4ad0-8043-e9beec901c81.jpeg.400x400_q85.jpg", sets: "4", reps: "8 à 12", rest: "45\"" },
  ],
};

const triceps: Group = {
  title: "Triceps",
  exercises: [
    { id: "tri-poulie-dos", name: "Extensions poulie haute de dos", image: "https://wger.de/media/exercise-images/659/a60452f1-e2ea-43fe-baa6-c1a2208d060c.png.400x400_q85.jpg", sets: "5", reps: "10 à 12", rest: "45\"" },
    { id: "tri-poulie-corde", name: "Extensions poulie corde", image: "https://wger.de/media/exercise-images/659/a60452f1-e2ea-43fe-baa6-c1a2208d060c.png.400x400_q85.jpg", sets: "5", reps: "10 à 12", rest: "45\"" },
  ],
};

const biceps: Group = {
  title: "Biceps",
  exercises: [
    { id: "bic-poulie-corde", name: "Curl poulie corde", image: "https://wger.de/media/exercise-images/138/Hammer-curls-with-rope-1.png.400x400_q85.png", sets: "5", reps: "10 à 12", rest: "45\"" },
    { id: "bic-pronation", name: "Curl en pronation barre", image: "https://wger.de/media/exercise-images/74/Bicep-curls-1.png.400x400_q85.png", sets: "5", reps: "10 à 12", rest: "45\"" },
  ],
};

export const program: Session[] = [
  {
    id: "seance-1",
    label: "Séance 1",
    focus: "Dorsaux, Triceps, Abdos, rappel Pectoraux",
    groups: [warmup, dorsaux, triceps, abdos, pectoraux],
  },
  {
    id: "seance-2",
    label: "Séance 2",
    focus: "Quadriceps, Biceps, Abdos",
    groups: [warmup, cuisses, biceps, abdos],
  },
  {
    id: "seance-3",
    label: "Séance 3",
    focus: "Pectoraux, Ischios, Abdos",
    groups: [warmup, pectoraux, ischios, abdos],
  },
  {
    id: "seance-4",
    label: "Séance 4",
    focus: "Épaules, rappel Dorsaux, Abdos",
    groups: [warmup, epaules, dorsaux, abdos],
  },
  {
    id: "seance-5",
    label: "Séance 5",
    focus: "Rappel Cuisses, Mollets, Abdos",
    groups: [warmup, cuisses, mollets, abdos],
  },
];
