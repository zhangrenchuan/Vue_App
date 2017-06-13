const TODOS_KEY = 'todos_key'
export default {
  getTodos () {
    return JSON.parse(window.localStorage.getItem(TODOS_KEY) || '[]')
  },
  saveTodos (todos) {
    window.localStorage.setItem(TODOS_KEY, JSON.stringify(todos))
  }
}
