import "./Colors.css"

import Input from "../../components/Input"

function Colors({ handleChange }) {
  return (
    <>
      <h1 className="sidebar-title">Colors</h1>

      <div>
        <label className="sidebar-label-container" >
          <input onChange={handleChange} type="radio" name="color" id="color" />
          <span className="checkmark all"></span> All
        </label>

        <Input
          handleChange={handleChange}
          value='black'
          title='Black'
          name='color'
          color='black' />
        <Input
          handleChange={handleChange}
          value='red'
          title='Red'
          name='color'
          color='red' />
        <Input
          handleChange={handleChange}
          value='blue'
          title='Blue'
          name='color'
          color='blue' />
        <Input
          handleChange={handleChange}
          value='green'
          title='Green'
          name='color'
          color='green' />

        <label className="sidebar-label-container">
          <input type="radio" onChange={handleChange} value='white' name="color" />
          <span className="checkmark" style={{
            background: 'white',
            border: "2px solid black"
          }}> </span> White
        </label>

      </div>
    </>
  )
}

export default Colors