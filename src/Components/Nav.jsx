import PIC from '../images/paw-print-svgrepo-com 1.png'

const Nav = () => {
  return (
    <div>
      <section className="fixed-top">

      <div className="navbar navbar-expand-lg">
     
     <a className="navbar-brand"></a>
     
         <img src={PIC}/>
     <ul className="navbar-nav ms-auto"></ul>
       <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
         <span className="navbar-toggler-icon"></span>
       </button>
       <div className="collapse navbar-collapse" id="navbar">
         <ul className="navbar-nav ms-auto">
             <li className="nav-item">
                 <a className="nav-link">Home</a>
             </li>
             <li className="nav-item">
                 <a className="nav-link">Rent Details</a>
             </li>
             <li className="nav-item">
                 <a className="nav-link">Why Choose Us</a>
             </li>
             <li className="nav-item">
                 <a className="nav-link">Register</a>
             </li>
         </ul>
     </div>
 </div>
      </section>
    </div>
   
  )
}

export default Nav
