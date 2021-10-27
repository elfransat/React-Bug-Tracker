export default bug;

// defining what features the bug will have, created in models so it can be used in various parts of the project
function bug(bug) {
  if (this.bug != undefined) {
    this._id = bug._id;
    this.name = bug.name;
    this.details = bug.details;
    this.steps = bug.steps;
    this.version = bug.version;
    this.personAssigned = bug.personAssigned;
    this.creator = bug.creator;
    this.priority = bug.priority;
    this.dueDate = bug.dueDate;
    this.timeAssigned = bug.timeAssigned;
  }
}
