// responsible for styling the appliction based on the given bugs priority level

const colors = ['bg-gradient-primary', 'bg-gradient-warning', 'bg-gradient-danger']

export default (priority) => {
    const level = ['High', 'Medium', 'Low']
    return {
        level: (level[priority - 1]),
        color: colors[priority - 1]
    }
}