import "./Sidebar.css"
import Price from './price/Price'
import Category from './category/Category'
import  Colors from "./colors/Colors"

import {MdOutlineLocalGroceryStore} from 'react-icons/md'

function Sidebar ({handleChange}) {
    return (
        <>
        <section className="sidebar">
            <div className="logo-container">
                <h1><MdOutlineLocalGroceryStore/></h1>
            </div>
            <Category handleChange={handleChange}/>  
            <Price handleChange={handleChange}/>
            <Colors handleChange={handleChange}/>             
        </section>
        </>

    )
}

export default Sidebar