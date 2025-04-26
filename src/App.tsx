import './App.css'
import {Todolist} from "./components/Todolist.tsx";


function App() {
    const truck1 = "What to learn-1"
    const truck2 = "What to learn-2"

    const tasks1 = [
        {id: 1, title: 'HTML&CSS', isDone: true},
        {id: 2, title: 'JS', isDone: true},
        {id: 3, title: 'ReactJS', isDone: false},
        {id: 4, title: 'ReactJS-2', isDone: false},
    ]

    const tasks2 = [
        // {id: 1, title: 'Hello world', isDone: true},
        // {id: 2, title: 'I am Happy', isDone: true},
        // {id: 3, title: 'Yo', isDone: false},
    ]


    return (
        <div className="app">
            <Todolist truck = {truck1} tasks={tasks1} />
            <Todolist truck = {truck2} tasks={tasks2}/>
        </div>
    )
}

export default App
