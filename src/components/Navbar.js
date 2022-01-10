import './Navbar.css'

const menu = ['HOME','PERFORMANCES','ABOUT US','PRICES','CONTACT'];
const title = "Paris Cirque";

function Navbar(){
    return(
     <div>
        
            <h1 id="title-circus" >{title}</h1>
    

        <ul className="menu">
            {
                menu.map(item => <li key={item}>
                    {item}</li>)
            }
        </ul>

     </div>
    )
}

export default Navbar;