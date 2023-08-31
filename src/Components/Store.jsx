import Pic from '../images/product1.jpg'
import Pic1 from '../images/product2.jpg'
import Pic2 from '../images/product3.jpg'
import Pic3 from '../images/product4.jpg'
import Pic4 from '../images/product6.jpg'
import Pic5 from '../images/product7.jpg'
import Pic6 from '../images/product8.jpg'


const Store = () => {
  return (
    <div className='third'>
    <h1>Pet Essentials</h1>
      <div className="container-fluid third row">
      <div className="container col-lg-3 col-5 ml-auto">
<div className='card caddy'>
<img src={Pic3} className="card-img-top storex"/>
<h6>NutriChoice</h6>
<p>#5</p>
<button className='btn'>Add</button>

</div>
      </div>
      <div className="container col-lg-3 col-5">
      <div className='card caddy'>
    <img src={Pic4} className="card-img-top"/>
    <h6>Epigamia</h6>
<p>#10</p>
<button className='btn'>Add</button>
</div>
</div>
<div className="container col-lg-3 col-5">
<div className='card caddy'>
    <img src={Pic2} className="card-img-top"/>
    <h6>5 star</h6>
<p>#3</p>
<button className='btn'>Add</button>
</div>
</div>
<div className="container col-lg-3 col-5">
<div className='card caddy'>
    <img src={Pic3} className="card-img-top"/>
    <h6>Jays</h6>
<p>#2</p>
<button className='btn'>Add</button>
</div>
</div>

<div className="container col-lg-3 col-5">
      <div className='card caddy'>
    <img src={Pic4} className="card-img-top"/>
    <h6>Epigamia</h6>
<p>#5</p>
<button className='btn'>Add</button>
</div>
</div>
<div className="container col-lg-3 col-5">
<div className='card caddy'>
    <img src={Pic5} className="card-img-top"/>
    <h6>Cheese</h6>
<p>#5</p>
<button className='btn'>Add</button>
</div>
</div>
<div className="container col-lg-3 col-5">
<div className='card caddy'>
    <img src={Pic6} className="card-img-top"/>
    <h6>Corn</h6>
<p>#5</p>
<button className='btn'>Add</button>
</div>
</div>
<div className="container col-lg-3 col-5">
<div className='card caddy'>
    <img src={Pic1} className="card-img-top"/>
    <h6>NutriChoice</h6>
<p>#5</p>
<button className='btn'>Add</button>   
</div>
</div>

      </div>{/* fluid ends */}
    </div>
  )
}

export default Store
