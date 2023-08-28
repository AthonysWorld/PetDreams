import image1 from '../images/browncat.png'
import image2 from '../images/lazycat.png'
import image3 from '../images/gsdface.png'
import image4 from '../images/parrots.png'
import image5 from '../images/finerat.png'
import image6 from '../images/Info.png'
const Card = () => {
  return (
    <div className='two'>
    <h3>
      Our progenies
    </h3>
      <div className="container-fluid row">


<div className="container col-lg-6 col-5" >
<img className='card-img1' src={image3}/>
<img  className='card-img' src={image1}/>
</div>

<div className="container col-lg-6 col-5">
<img className='card-img' src={image2}/>

</div>


      </div>{/* end of fluid one */}
<div className='container-fluid  row'>
<div className='container col-lg-6 card-text '>

<h3>Do you know that</h3>
<p>Pets provide unconditional love and companionship, which can be especially beneficial for those who live alone. They can also be a great source of stress relief and help reduce anxiety. Finally, having a pet can encourage outdoor activities and physical exercise, providing both physical and mental health benefits for the whole family.
</p>
<p>Pets provide unconditional love and companionship, which can be especially beneficial for those who live alone. They can also be a great source of stress relief and help reduce anxiety. Finally, having a pet can encourage outdoor activities and physical exercise, providing both physical and mental health benefits for the whole family.
</p>
</div>
<div className='container col-lg-6'>
<img className='card-pic' src={image6}/>
</div>

</div>


    </div>
  )
}

export default Card
