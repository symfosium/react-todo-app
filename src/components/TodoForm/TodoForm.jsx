import React, {useState} from 'react';
import styles from './TodoForm.module.css'
import {v4 as uuidv4} from 'uuid';
const TodoForm = ({addTodo}) => {
    const [todo, setTodo] = useState('');
    const [inputValue, setInputValue] = useState('');

    const handleAddTodo = () => {
        const newTodo = {
            id: uuidv4(),
            description: inputValue,
            completed: true,
        };
        addTodo(newTodo);
        setInputValue('');

    }
    return (
        <div>
            <div className={styles.todoInputBlock}>
                <label className={styles.todoLabel}>Write your todo</label>
                <input className={styles.todoInput} type='text' placeholder='Your todo'  value={inputValue} onChange={e => setInputValue(e.target.value)}/>
            </div>
            <div>
                <button onClick={handleAddTodo} className={styles.todoButton}>Add Todo</button>
            </div>
        </div>
    );
};

export default TodoForm;