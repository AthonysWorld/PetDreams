import Test from '../Components/Test'
import Pic1 from '..//images/daily1.jpg'
import Pic2 from '..//images/daily2.jpg'
import Pic3 from '..//images/daily3.jpg'

const Daily = () => {
  return (
    <div className="daily">
    <h3>Daily Best Sells</h3>
      <div className="container-fluid row dailyy">

<div className="container col-lg-3">
<div className="card Daily-card">
<img src={Pic1}/>
<h6>Crushed Tomatoes</h6>
<p>#10</p>
<Test/>
</div>
</div>

<div className="container col-lg-3">
<div className="card Daily-card">
<img src={Pic2}/>
<h6>Dried beef</h6>
<p>#11</p>
<Test/>
</div>
</div>

<div className="container col-lg-3">
<div className="card Daily-card">
<img src={Pic3}/>
<h6>Pet fruits</h6>
<p>#6</p>
<Test/>
</div>
</div>



      </div>
    </div>
  )
}

export default Daily
