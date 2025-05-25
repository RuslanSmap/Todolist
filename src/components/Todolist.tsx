import {FilterValueType, TaskType} from '../App.tsx';

export type TodolistProps = {
    title: string,
    durshlagVal: TaskType[],
    removeTasks: (taskId: number) => void,
    changeFilter: (val: FilterValueType) => void
}

export const Todolist = ({title, durshlagVal, removeTasks, changeFilter}: TodolistProps) => {

    return (
        <div>
            <h3>{title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            {durshlagVal.length === 0 ? (
                <p>Тасок нет</p>
            ) : (
                <ul>
                    {durshlagVal.map((task,) => {
                        return <li key={task.id}>
                            <button onClick={() => removeTasks(task.id)}>X</button>
                            <input type="checkbox" checked={task.isDone}/>
                            <span>{task.title}</span>
                        </li>
                    })}
                </ul>
            )}
            <div>
                <button onClick={() => changeFilter('All')}>All</button>
                <button onClick={() => changeFilter('Active')}>Active</button>
                <button onClick={() => changeFilter('Completed')}>Completed</button>
            </div>
        </div>
    )
}

