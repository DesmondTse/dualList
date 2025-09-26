export function createDualList({
    currentList,
    currentSet,
    displayCurrentSet,

    choiceList,
    choiceSet,
    displayChoiceSet
}) {
    const unselect = () => {
        currentSet.forEach(x => x.check = false)
        choiceSet.forEach(x => x.check = false)
    }

    const addSet = () => {
        const checkedChoices = displayChoiceSet.filter(x => x.check)
        currentSet.push(...checkedChoices)

        setTimeout(() => {
            currentList.scrollTop = currentList.scrollHeight
        }, 0)

        choiceSet = choiceSet.filter(x => !checkedChoices.includes(x))
    }

    const removeSet = () => {
        const checkedCurrents = displayCurrentSet.filter(x => x.check)
        choiceSet.push(...checkedCurrents)

        setTimeout(() => {
            choiceList.scrollTop = choiceList.scrollHeight
        }, 0)

        currentSet = currentSet.filter(x => !checkedCurrents.includes(x))
    }

    return {
        unselect,
        addSet,
        removeSet
    }
}
