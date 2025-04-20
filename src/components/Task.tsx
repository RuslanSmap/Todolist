type Props = {
    title: string,
    isDone: boolean,
    id: number
}

export const Task = ({title, isDone, id}: Props) => {
    return (
        <li key={id}>
            <input type="checkbox" checked={isDone}/>
            <span>{title}</span>
        </li>
    );
};