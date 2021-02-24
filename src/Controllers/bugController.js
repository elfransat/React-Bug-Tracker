import bugModel from "../Models/bugModel";

export function retrieveBugs() {
  let data = [];

  data.push(
    new bugModel({
      id: 134,
      Name: "crash immedietly",
      details: "crashes on macOS after opening",
      steps: "open application and it crashes",
      verson: "1.00",
      personAssigned: "Louis",
      creator: "Louis",
      priority: 1,
      dueDate: "01.01.2022",
      timeAssigned: "01.01.2020",
    })
  );
  let sorted = data.sort((a, b) => {
    return a.priority - b.priority;
  });
  return sorted;
}
