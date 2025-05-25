import './App.css'
import {Todolist} from './components/Todolist.tsx';
import {useState} from 'react';

export type TaskType = {
    id: number,
    title: string,
    isDone: boolean,
}

export type FilterValueType = 'All' | 'Active' | 'Completed'

function App() {

    let [tasks, setTasks] = useState([
        {id: 1, title: 'HTML&CSS', isDone: true},
        {id: 2, title: 'JS', isDone: true},
        {id: 3, title: 'ReactJS', isDone: false},
        {id: 4, title: 'Redux', isDone: false},
        {id: 5, title: 'Typescript', isDone: false},
        {id: 6, title: 'RTK query', isDone: false},
    ])

    const removeTasks = (taskId: number) => {
        setTasks(tasks.filter(el => el.id !== taskId))
    }

    const [valueForDurshlag, setValueForDurshlag] = useState('All')

    const changeFilter = (val: FilterValueType) => {
        setValueForDurshlag(val)
    }

    const durshlagFoo = () => {
        switch (valueForDurshlag) {
            case 'Completed': {
                return tasks.filter(el => el.isDone)
            }
            case 'Active': {
                return tasks.filter(el => !el.isDone)
            }
            default:
                return tasks
        }
    }

    let durshlagVal = durshlagFoo()

    return (
        <div className="app">
            <Todolist title={'What to learn'}
                      durshlagVal={durshlagVal}
                      removeTasks={removeTasks}
                      changeFilter={changeFilter}
            />
        </div>
    )
}

export default App
