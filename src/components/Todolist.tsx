import {Button} from './Button.tsx';
import {TaskType} from '../App.tsx';

export type TodolistProps = {
    title: string,
    tasks: TaskType[]
}


export const Todolist = ({title, tasks}: TodolistProps) => {

    return (
        <div>
            <h3>{title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            {tasks.length === 0 ? (
                <p>Тасок нет</p>
            ) : (
                <ul>
                    {tasks.map((task,) => {
                        return <li key={task.id}><input type="checkbox" checked={task.isDone}/><span>{task.title}</span>
                        </li>
                    })}
                </ul>
            )}
            <div>
                <Button title={'All'}/>
                <Button title={'Active'}/>
                <Button title={'Completed'}/>
            </div>
        </div>
    )
}

