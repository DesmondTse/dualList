Move items between two lists based on checkbox selection
Auto-scroll to bottom after adding/removing items
Simple API: `addSet()`, `removeSet()`, `unselect()`
Framework-independent (no Vue/React required)

Example:

```html
<div>
  <h3>Available Roles</h3>
  <ul id="choiceList"></ul>

  <button id="addBtn">Add →</button>
  <button id="removeBtn">← Remove</button>

  <h3>Assigned Roles</h3>
  <ul id="currentList"></ul>
</div>

```js
import { createDualList } from './dualList.js'

let allRoles = [
  { name: 'Admin', check: false },
  { name: 'Editor', check: false },
  { name: 'Viewer', check: false }
]

let assignedRoles = []

const choiceListEl = document.getElementById('choiceList')
const currentListEl = document.getElementById('currentList')

let displayChoiceSet = allRoles
let displayCurrentSet = assignedRoles

const dualList = createDualList({
  currentList: currentListEl,
  choiceList: choiceListEl,
  currentSet: assignedRoles,
  choiceSet: allRoles,
  displayCurrentSet,
  displayChoiceSet
})

function renderList(listEl, items) {
  listEl.innerHTML = ''
  items.forEach(item => {
    const li = document.createElement('li')
    li.textContent = item.name
    li.onclick = () => {
      item.check = !item.check
      li.classList.toggle('checked', item.check)
    }
    listEl.appendChild(li)
  })
}

renderList(choiceListEl, displayChoiceSet)
renderList(currentListEl, displayCurrentSet)

document.getElementById('addBtn').onclick = () => {
  dualList.addSet()
  renderList(choiceListEl, displayChoiceSet)
  renderList(currentListEl, displayCurrentSet)
}

document.getElementById('removeBtn').onclick = () => {
  dualList.removeSet()
  renderList(choiceListEl, displayChoiceSet)
  renderList(currentListEl, displayCurrentSet)
}
```
