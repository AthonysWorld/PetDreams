
import Pic from '../images/landing dog.png'
import Pic1 from '../images/parrot.png'
import Pic2 from '../images/pitbull.png'
const Slide = () => {
  return (
    <div className='top'>
    <div className='container-fluid row slide'>
<div className='container detail col-lg-6 col-md-6'>
<h1>
Hello i'm <span>Daisy,</span><br/> welcome to <span>PetDreams</span>
</h1>
<h6>
I hope you find all the information you need to make the best<br/>decision for your pet.
</h6>
<button className='btn btn1 btn-large'>Contact us</button>

</div>
<div className='container one col-lg-6 col-md-6'>
<div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="1500">
      <img src={Pic} className="d-block w-100" alt="..1."/>
    </div>
    <div className="carousel-item" data-bs-interval="1500">
      <img src={Pic1} className="d-block w-100" alt=".2.."/>
    </div>
    <div className="carousel-item" data-bs-interval="1500">
      <img src={Pic2} className="d-block w-100" alt=".3.."/>
    </div>
  </div>
  <button className="carousel-control-prev slidee-btn" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next slidee-btn" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</div>

    </div> 

    
     
    </div>
  )
}

export default Slide
