type NoobDeveloper = {
  name: string;
};

type JuniorDeveloper = NoobDeveloper & {
  // Intersection
  expertise: string;
  experience: number;
};

enum Level {
  junior,
  mid,
  senior,
}

type NextLevelDeveloper = JuniorDeveloper & {
  leadershipExperience: number;
  level: Level;
};

const newDeveloper: NoobDeveloper | JuniorDeveloper = {
  name: "Rakib",
  expertise: "JavaScript",
  experience: 1,
};

const nextLevelDeveloper: NextLevelDeveloper = {
  name: "Rakibul",
  expertise: "TypeScript",
  experience: 2,
  leadershipExperience: 2,
  level: Level.senior,
};
