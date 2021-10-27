
// responsible for allowing the application to be tested by generation of fake data
export function retrieveBugs() {
  let data = [];

  data.push(
    {
      _id: 134,
      name: "Bug Tracking not working",
      details: "crashes on macOS after opening",
      steps: "open application and it crashes",
      version: "1.00",
      personAssigned: "Louis",
      creator: "Louis",
      priority: 2,
      dueDate: "01.01.2022",
      timeAssigned: "01.01.2020",
    }
  );
  data.push({
    _id: 122,
    name: "crash immedietly",
    details: "crashes on macOS after opening",
    steps: "open application and it crashes",
    version: "1.00",
    personAssigned: "Louis",
    creator: "Louis",
    priority: 1,
    dueDate: "01.01.2022",
    timeAssigned: "01.01.2020",
  }
  );
  data.push(
    {
      _id: 134,
      name: "Bug Tracking not working",
      details: "crashes on macOS after opening",
      steps: "open application and it crashes",
      version: "1.00",
      personAssigned: "Louis",
      creator: "Louis",
      priority: 2,
      dueDate: "01.01.2022",
      timeAssigned: "01.01.2020",
    }
  );
  data.push(
    {
      _id: 134,
      name: "Bug Tracking not working",
      details: "crashes on macOS after opening",
      steps: "open application and it crashes",
      version: "1.00",
      personAssigned: "Louis",
      creator: "Louis",
      priority: 2,
      dueDate: "01.01.2022",
      timeAssigned: "01.01.2020",
    }
  );
  let sorted = data.sort((a, b) => {
    return a.priority - b.priority;
  });

  return sorted;
}
