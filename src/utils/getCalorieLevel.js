export default function getCalorieLevel(sex, weight, height, age, activity) {
  const c = sex === 'male' ? 5 : -161;

  return activity * (10 * weight + 6.25 * height + 5 * age + c);
}
