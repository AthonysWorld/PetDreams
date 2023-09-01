import Pic1 from '../images/product5.jpg';
import Pic2 from '../images/product6.jpg';


const About = () => {
  return (
    <div className='about'>
    <h3>Popular Products</h3>
      <div className="container-fluid about-row row">
<div className="container col-lg-6">
<div className='row'>
<div className='container col-lg-6'>
ACI is a great flakes for pet owners because it is made from natural ingredients, is hypoallergenic, and has a high nutrient content. It is a complete and balanced diet that provides essential vitamins and minerals for your pet's health and well-being. ACI is also free from artificial colors, flavors, and preservatives, making it a safe and healthy choice for your pet.

</div>
<div className='container col-lg-6'>
<img className='about-pic' src={Pic1}/>
</div>
</div>
</div>

<div className="container col-lg-6">
<div className='row'>
<div className='container col-lg-6'>
Epigamia milk is a great choice for pet owners looking for a healthy and nutritious option for their furry friends. It is made from 100% natural ingredients, free from preservatives, and contains added vitamins and minerals to ensure optimal health and nutrition. It is also lactose-free, making it suitable for pets with sensitive stomachs.
 

</div>
<div className='container col-lg-6'>
<img className='about-pic' src={Pic2}/>
</div>
</div>
</div>


      </div>
    </div>
  )
}

export default About
