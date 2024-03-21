import React, {useState} from 'react';
import styles from './Todoitem.module.css'
import { FaPencilAlt } from "react-icons/fa";
import { IoTrashBinOutline } from "react-icons/io5";
import TodoForm from "../TodoForm/TodoForm.jsx";

const TodoItem = ({todo, onDelete, id}) => {
    const [isChecked, setIsChecked] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [editedDescription, setEditedDescription] = useState(todo.description);
    const [changeInputValue, setChangeInputValue] = useState('');

    const handleDelete = () => {
        onDelete(id);
    }

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    }

    const handleEditClick = () => {
        setIsEditing(true);
    }

    const handleInputChange = (event) => {
        setChangeInputValue(event.target.value);
    }

    const handleSaveClick = () => {
        setEditedDescription(changeInputValue);
        setChangeInputValue('');
        setIsEditing(false);
    }

    return (
        <div className={styles.todoItem}>
            <div className={styles.todoItemDescription}>
                {isEditing ? (
                    <>
                        <input
                            type='text'
                            className={styles.changeTodoTextInput}
                            value={changeInputValue}
                            onChange={handleInputChange}

                        />
                        <button className={styles.changeTodoTextBtn} onClick={handleSaveClick}>Save</button>
                        <button className={styles.changeTodoTextBtn} onClick={() => setIsEditing(false)}>Cancel</button>
                    </>
                ) : (
                    <>
                        <p className={isChecked ? styles.todoDescriptionChecked : styles.todoDescription}>{editedDescription}</p>
                    </>
                )}
            </div>
            <div className={styles.todoControllers}>
                <FaPencilAlt onClick={handleEditClick} />
                <IoTrashBinOutline onClick={handleDelete}/>
                <input type="checkbox" id={todo.id} className={styles.checkBox} checked={isChecked}
                       onChange={handleCheckboxChange}/>
                <label htmlFor={todo.id} className={styles.checkBoxLabel}></label>
            </div>
        </div>
    );
};

export default TodoItem;