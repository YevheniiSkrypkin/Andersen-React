import React from "react";
import styles from './Form.module.css'
import Input from '../Input/Input.js'
import Textarea from "../Textarea/Textarea.js";
import Button from '../Button/Button.js'

class Form extends React.Component {
    render() {
        return (
            <div className={styles.container}>
                <div>
                    <h1>Создание анкеты</h1>
                    <div>
                        <form>
                            <div className={styles.inputsWrapper}>
                            <div className={styles.mainInfo}>
                                <div>
                                    <Input title='Имя' type='text'/>
                                </div>
                                <div>
                                    <Input title='Фамилия' type='text' />
                                </div>
                                <div>
                                    <Input title='Дата рождения' type='date' />
                                </div>
                                <div>
                                    <Input title='Телефон' type='tel' />
                                </div>
                                <div>
                                    <Input title='Сайт' type='url' />
                                </div>
                            </div>

                            <div>
                                <div>
                                    <Textarea label='О себе' rows='7' />
                                </div>
                                <div>
                                    <Textarea label='Стек технологий' rows='7' />
                                </div>
                                <div>
                                    <Textarea label='Описание последнего проекта' rows='7' />
                                </div>
                            </div>
                            </div>
                            <div className={styles.buttonsWrapper}>
                                <Button cl='save' type='submit' text='Сохранить'/>
                                <Button type='reset' text='Отменить' />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Form;