import "./Styles/Navbar.css";


function Navbar(){


    return(
        <div id="header">
            <nav>
            <div id="myName"><h1>MCQ <span>Question War</span></h1></div>
            <div id="navBtns">
                <button onClick={() => document.getElementById('Carousel').scrollIntoView({ behavior: 'smooth' })}>Home</button>
                <button onClick={() => document.getElementById('footer').scrollIntoView({ behavior: 'smooth' })}>Contact Me</button>   
            <div id="flag">
                <img src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png" alt="India"  />
            </div>
            </div>
        </nav>
        </div>
    )
}

export default Navbar;