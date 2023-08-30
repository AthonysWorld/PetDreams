import image1 from '../images/pitbull.png'
import image2 from '../images/parrot.png'
import image3 from '../images/cat.png'

const Pets = () => {
  return (
    <div className='pet'>
    <h2>Featured pets</h2>
    <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item carousel-item active">

    
    
    <div className='card pet-card'>
<img src={image1} className="card-img-top"/>
<div className="card-body">
<h3>Pitbull</h3>
<p>Category: Dog</p>
</div>
 </div>
    </div>
 


    <div className="carousel-item">
    
    <div className='card pet-card'>
   <img src={image3} className="card-img-top"/>
   <div className="card-body">
   <h3>Cat</h3>
<p>Category: Persian</p>
   </div>
    </div>

    </div>

    <div className="carousel-item">
    
    <div className='card pet-card'>
   <img src={image2} className="card-img-top"/>
   <div className="card-body">
   <h3>Parrot</h3>
<p>Category: Bird</p>
   </div>
    </div>

    </div>

    <div className="carousel-item">
    
    <div className='card pet-card'>
   <img src={image3} className="card-img-top"/>
   <div className="card-body">
   <h3>Cat</h3>
<p>Category: Persian</p>

   </div>
    </div>

    </div>

   

   
  </div>


  <button className="carousel-control-prev cbtn" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next cbtn  pad" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>



    </div>
  )
}

export default Pets
