import React, { useState } from "react"

export default function AddTask({ onAdd }) {
    const [text, setText] = useState('');
    const [day, setDay] = useState('');
    const [reminder, setReminder] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault()

        if (!text) {
            alert('Please add a text')
            return
        }

        onAdd({ text, day, reminder })

        setText('')
        setDay('')
        setReminder(false)
    }
    return (
        <form className="add-form" onSubmit={ onSubmit }>
            <div className="form-control">
                <label>Task</label>
                <input type='text' placeholder="Add task" value={text} onChange={(e) => setText(e.target.value)} />
            </div>
            <div className="form-control">
                <label>Day & Time</label>
                <input type='text' placeholder="Add Day & Time" value={day} onChange={(e) => setDay(e.target.value)} />
            </div>
            <div className="form-control form-control-check">
                <label>Set Reminder</label>
                <input type='checkbox' checked={reminder}
                className="checkbox-circle" value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)} />
            </div>
            <div className="form-control">
                <input type="submit" value='Set Task' className="btn btn-block" />
            </div>
        </form>

    )
}
