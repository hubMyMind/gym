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
    { id: "warmup-rameur", name: "Rameur", image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=480&q=80", sets: "1", reps: "5 min", rest: "-" },
  ],
};

const abdos: Group = {
  title: "Abdominaux (circuit training, 3 tours, 1min recup en fin de tour)",
  exercises: [
    { id: "abdo-gainage", name: "Gainage sur les coudes", image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=480&q=80", sets: "1", reps: "1 min", rest: "-" },
    { id: "abdo-releve-genoux", name: "Relevé genoux à la chaise", image: "https://images.unsplash.com/photo-1598971639058-fab3c3109a00?auto=format&fit=crop&w=480&q=80", sets: "1", reps: "20 à 30", rest: "-" },
    { id: "abdo-crunch-sol", name: "Crunch au sol", image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=480&q=80", sets: "1", reps: "30 à 40", rest: "-" },
    { id: "abdo-torsions", name: "Torsions de buste banc à lombaires", image: "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?auto=format&fit=crop&w=480&q=80", sets: "1", reps: "20", rest: "-", note: "alterné" },
  ],
};

const pectoraux: Group = {
  title: "Pectoraux",
  exercises: [
    { id: "pec-dev-couche", name: "Développé couché haltères", image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=480&q=80", sets: "5", reps: "8", rest: "1min" },
    { id: "pec-dev-incline", name: "Développé incliné", image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=480&q=80", sets: "4", reps: "15", rest: "45\"" },
    { id: "pec-presse", name: "Presse pectorale", image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=480&q=80", sets: "5", reps: "8", rest: "1min", note: "prise serrée" },
  ],
};

const dorsaux: Group = {
  title: "Dorsaux",
  exercises: [
    { id: "dos-tirage-devant", name: "Tirage devant barre poignée", image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=480&q=80", sets: "5", reps: "8", rest: "1min", note: "paume de mains face à face" },
    { id: "dos-tirage-vertical", name: "Tirage vertical nuque", image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=480&q=80", sets: "4", reps: "15", rest: "45\"" },
    { id: "dos-rowing-machine", name: "Rowing machine", image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=480&q=80", sets: "5", reps: "8", rest: "1min", note: "en prise serrée" },
    { id: "dos-ext-lombaire", name: "Ext. lombaire au banc", image: "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?auto=format&fit=crop&w=480&q=80", sets: "4", reps: "15", rest: "45\"" },
  ],
};

const epaules: Group = {
  title: "Épaules",
  exercises: [
    { id: "epa-dev-devant", name: "Développé devant", image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=480&q=80", sets: "5", reps: "8", rest: "1min" },
    { id: "epa-rowing-menton", name: "Rowing menton barre", image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=480&q=80", sets: "5", reps: "8", rest: "1min", note: "prise large" },
  ],
};

const cuisses: Group = {
  title: "Cuisses (Quadriceps)",
  exercises: [
    { id: "cui-squat", name: "Squat haltères", image: "https://images.unsplash.com/photo-1566241142559-40e1dab266c6?auto=format&fit=crop&w=480&q=80", sets: "4", reps: "8", rest: "1min" },
    { id: "cui-presse", name: "Presse", image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=480&q=80", sets: "3", reps: "15", rest: "1min" },
    { id: "cui-leg-extension", name: "Leg extension", image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=480&q=80", sets: "4", reps: "8", rest: "1min" },
    { id: "cui-souleve-terre", name: "Soulevé terre jambes tendues", image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=480&q=80", sets: "5", reps: "8", rest: "1min" },
    { id: "cui-fentes", name: "Fentes haltères", image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=480&q=80", sets: "4", reps: "8", rest: "1min" },
    { id: "cui-hack-squat", name: "Hack squat", image: "https://images.unsplash.com/photo-1566241142559-40e1dab266c6?auto=format&fit=crop&w=480&q=80", sets: "5", reps: "15", rest: "1min" },
  ],
};

const ischios: Group = {
  title: "Ischios",
  exercises: [
    { id: "isc-leg-curl", name: "Leg curl assis", image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=480&q=80", sets: "4", reps: "8", rest: "1min" },
  ],
};

const mollets: Group = {
  title: "Mollets",
  exercises: [
    { id: "mol-presse", name: "Extensions à la presse", image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=480&q=80", sets: "4", reps: "8 à 12", rest: "45\"", note: "genoux tendus" },
    { id: "mol-assis", name: "Mollets assis", image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=480&q=80", sets: "4", reps: "8 à 12", rest: "45\"" },
  ],
};

const triceps: Group = {
  title: "Triceps",
  exercises: [
    { id: "tri-poulie-dos", name: "Extensions poulie haute de dos", image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=480&q=80", sets: "5", reps: "10 à 12", rest: "45\"" },
    { id: "tri-poulie-corde", name: "Extensions poulie corde", image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=480&q=80", sets: "5", reps: "10 à 12", rest: "45\"" },
  ],
};

const biceps: Group = {
  title: "Biceps",
  exercises: [
    { id: "bic-poulie-corde", name: "Curl poulie corde", image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=480&q=80", sets: "5", reps: "10 à 12", rest: "45\"" },
    { id: "bic-pronation", name: "Curl en pronation barre", image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=480&q=80", sets: "5", reps: "10 à 12", rest: "45\"" },
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
