

function Input({handleChange, value, title, name, color}) {
    return (
        <label className="sidebar-label-container ">
            <input onClick={handleChange} value={value} type="radio" name={name} id="test" />
            <span className="checkmark" style={{backgroundColor:color}}></span>{title}
        </label>
    )
}

export default Input