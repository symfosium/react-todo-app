import React from 'react';
import styles from './Todoitem.module.css'
import { FaPencilAlt } from "react-icons/fa";
import { IoTrashBinOutline } from "react-icons/io5";
import TodoForm from "../TodoForm/TodoForm.jsx";

const TodoItem = ({todo, onDelete, id}) => {
    const handleDelete = () => {
        onDelete(id);
    }

    return (
        <div className={styles.todoItem}>
            <div>
                <p className={styles.todoDescription}>{todo.description}</p>
            </div>
            <div className={styles.todoControllers}>
                <FaPencilAlt/>
                <IoTrashBinOutline onClick={handleDelete}/>
                <input type="checkbox" id={todo.id} className={styles.checkBox}/>
                <label htmlFor={todo.id} className={styles.checkBoxLabel}></label>
            </div>
        </div>
    );
};

export default TodoItem;