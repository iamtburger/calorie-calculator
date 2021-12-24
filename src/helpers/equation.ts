export const calculateCarlorieNeed = (
	neat: number,
	activityLevel: number,
	goalMultiplier: number
) => {
	return neat * activityLevel * goalMultiplier;
};

export const calculateNeat = (
	weight: number,
	height: number,
	age: number,
	gender: string
) => {
	const genderModifier = gender === "female" ? -5 * age : +5 * age;
	return 10 * weight + 6.25 * height + genderModifier;
};

export enum ActivityLevel {
	low = 1.1,
	medium = 1.2,
	high = 1.3,
}

export enum GoalMultiplier {
	cut = 0.85,
	recomp = 1,
	bulk = 1.1,
}
