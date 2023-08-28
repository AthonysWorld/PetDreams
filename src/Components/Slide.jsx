import Pic from '../images/landing dog.png'

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
<button className='btn btn2 btn1 btn-large'>Contact us</button>

</div>
<div className='container one col-lg-6 col-md-6'>
<img className='Picturetwo' src={Pic}/>



</div>

    </div> 

    
     
    </div>
  )
}

export default Slide
