import PIC from '../images/paws.png'

const Nav = () => {
  return (
    <div>
      <section className="fixed-top">

      <div className="navbar navbar-expand-lg">
     
     <a className="navbar-brand"></a>
     
         <img src={PIC}/>
     <ul className="navbar-nav ms-auto"></ul>
       <button className="navbar-toggler btn" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
         <span className="navbar-toggler-icon"></span>
       </button>
       <div className="collapse navbar-collapse" id="navbar">
         <ul className="navbar-nav ms-auto">
             <li className="nav-item">
                 <a className="nav-link">Home</a>
             </li>

             <li className="nav-item">
                 <a className="nav-link">Pet supplies</a>
             </li>
             <div className="dropdown">
  <button className="btn btn-nav dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
  Locations
  </button>
  <ul className="dropdown-menu">
    <li><a className="dropdown-item" href="#">Asaba</a></li>
    <li><a className="dropdown-item" href="#">Ikeja</a></li>
    <li><a className="dropdown-item" href="#">Abuja</a></li>
  </ul>
</div>

             <div className="dropdown">
  <button className="btn  btn-nav  dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
  Contact us
  </button>
  <ul className="dropdown-menu ">
    <li><a className="dropdown-item" href="#">Petdreams@pet.com</a></li>
    <li><a className="dropdown-item" href="#">+234 000 000 000</a></li>
    <li><a className="dropdown-item" href="#">Petify</a></li>
  </ul>
</div>
         </ul>
     </div>
 </div>
      </section>
    </div>
   
  )
}

export default Nav
