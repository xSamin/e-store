import "./Price.css"
import Input from "../../components/Input"

function Price({ handleChange }) {
  return (
    <>
      <div className="ml">
        <h2 className="sidebar-title price-title">Price</h2>
        <label className="sidebar-label-container" >
          <input onChange={handleChange} type="radio" name="price" id="price" />
          <span className="checkmark"></span> 0-50$
        </label>

        <Input
          handleChange={handleChange}
          value={50}
          title="$0-50"
          name='price' />
        <Input
          handleChange={handleChange}
          value={100}
          title="$50-100"
          name='price' />
        <Input
          handleChange={handleChange}
          value={200}
          title="$100-200"
          name='price' />
        <Input
          handleChange={handleChange}
          value={300}
          title="$200-300"
          name='price' />
      </div>
    </>

  )
}

export default Price