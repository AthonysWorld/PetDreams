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
<div className='card cardy'>
<img src={Pic3} className="card-img-top storex"/>
<p>hello</p>
<button className='btn'>View</button>

</div>
      </div>
      <div className="container col-lg-3 col-5">
      <div className='card cardy'>
    <img src={Pic4} className="card-img-top"/>
    <p>hello</p>
   <button className='btn'>View</button>

</div>
</div>
<div className="container col-lg-3 col-5">
<div className='card cardy'>
    <img src={Pic2} className="card-img-top"/>
    <p>hello</p>
   <button className='btn'>View</button>
</div>
</div>
<div className="container col-lg-3 col-5">
<div className='card cardy'>
    <img src={Pic3} className="card-img-top"/>
    <p>hello</p>
   <button className='btn'>View</button>
</div>
</div>

<div className="container col-lg-3 col-5">
      <div className='card cardy'>
    <img src={Pic4} className="card-img-top"/>
    <p>hello</p>
   <button className='btn'>View</button>

</div>
</div>
<div className="container col-lg-3 col-5">
<div className='card cardy'>
    <img src={Pic5} className="card-img-top"/>
   
    <p>hello</p>
   <button className='btn'>View</button>

</div>
</div>
<div className="container col-lg-3 col-5">
<div className='card cardy'>
    <img src={Pic6} className="card-img-top"/>
    
    <p>hello</p>
   <button className='btn'>View</button>

</div>
</div>
<div className="container col-lg-3 col-5">
<div className='card cardy'>
    <img src={Pic1} className="card-img-top"/>
    
 <p>hello</p>
   <button className='btn'>view</button>

   
</div>
</div>

      </div>{/* fluid ends */}
    </div>
  )
}

export default Store
