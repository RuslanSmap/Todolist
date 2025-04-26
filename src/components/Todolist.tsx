import {Task} from "./Task.tsx";
import {Button} from "./Button.tsx";

export type TodolistProps = {
    truck: string,
    // task: Array<TaskType>
    tasks: TaskProps[]
}

export type TaskProps = {
    id: number,
    title: string,
    isDone: boolean
}

function quote(fighter) {
    if (fighter === "George Saint Pierre") {
        console.log("I am not impressed by your performance.");
    }
    if (fighter === "Conor McGregor") {
        console.log("I'd like to take this chance to apologize.. To absolutely NOBODY!")
    }
}

quote("Conor McGregor")

export const Todolist = ({truck, tasks}: TodolistProps) => {

    const mappedTasks = tasks.map((el, index) => {
        // debugger
        return (
            <Task id={el.id} title={el.title} isDone={el.isDone}/>
        )
    })

    return (
        <div>
            <h3>{truck}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            {tasks.length === 0 ? (
                <p>Тасок нет</p>
            ) : (
                <ul>
                    {mappedTasks}
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

