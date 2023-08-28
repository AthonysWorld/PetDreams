import Pic from '../images/cardone.png'
import Pic1 from '../images/cardtwo.png'
import Pic2 from '../images/whitegsd.jpg'
import Pic3 from '../images/lab.jpg'
import Pic4 from '../images/PUG.jpg'

const Store = () => {
  return (
    <div className='third'>
    <h1>Available pets</h1>
      <div className="container-fluid third row">
      <div className="container col-lg-3 col-6">
<div className='card cardy'>
<img src={Pic3} className="card-img-top"/>
   <div className="card-body">
   <h3>Lab</h3>
<button className='btn'>See pet</button>

   </div>
</div>
      </div>
      <div className="container col-lg-3 col-6">
      <div className='card cardy'>
    <img src={Pic4} className="card-img-top"/>
    <div className="card-body">
   <h3>Pug</h3>
   <button className='btn'>See pet</button>

   </div>
</div>
</div>
<div className="container col-lg-3 col-6">
<div className='card cardy'>
    <img src={Pic2} className="card-img-top"/>
    <div className="card-body">
   <h3>German shepherd</h3>
   <button className='btn'>See pet</button>

   </div>
</div>
</div>
<div className="container col-lg-3 col-6">
<div className='card cardy'>
    <img src={Pic3} className="card-img-top"/>
    <div className="card-body">
   <h3>Lab</h3>
   <button className='btn'>See pet</button>

   </div>
</div>
</div>
      </div>{/* fluid ends */}
    </div>
  )
}

export default Store
