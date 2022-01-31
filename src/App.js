import './App.css';
import Contact from './components/contact/Contact';
import Destination from './components/destination/Destination';
import Home from './components/navbar/Navbar';
import Traveller from './images/Traveller.png';
import Decore from './images/Decore.png';
import Banner from './components/banner/Banner';
// import Category from './components/category/Category';
import Footer from './components/Footer/Footer';
// import air from './images/air.png';
// import Cards from './components/category/Cards';

function App() {

 var description=[{image:"https://upload.wikimedia.org/wikipedia/commons/8/82/London_Big_Ben_Phone_box.jpg",city:"London(UK)",days:"12" ,cost:"$44.4K" },
 {image:"https://images.pexels.com/photos/3830880/pexels-photo-3830880.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",city:"Europe",days:"28" ,cost:"$89.4K" },
 {image:"https://images.pexels.com/photos/1701595/pexels-photo-1701595.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",city:"Rome",days:"7" ,cost:"$33.4K" }]

 return (
   <h1>
    <Home/>
    <div className="intro__heading">
    <Banner/>
    </div>

    <img src={Decore} alt="" className='design__pic'></img>
    <img src={Traveller} alt="" className='traveller__pic'></img>
     
     {/* <Category/> */}
     {/* <div className='destination_cards'>  */}
     {/* <Cards img={air} head="Flights" text="Book now"/>
     <Cards img={air} head="Flights" text="Book now"/>
     <Cards img={air} head="Flights" text="Book now"/> */}
    {/* </div>  */}
    {/* <Category/> */}
    <div className='destination_cards'>
      {
    description.map((card)=>{
      return <Destination image={card.image} city={card.city} days={card.days} cost={card.cost} />
    })
    }
      </div>
     
   <Contact/>
    <Footer/>
   </h1>
  );
}

export default App;
