import { Navbar } from 'responsive-navbar-react'
import 'responsive-navbar-react/dist/index.css'
const Home = () => {
  const props = {
    items: [
      {
        text: 'Destinations',
        link: '/'
      },
      {
        text: 'Hotels',
        link: '/'
      },
      { 
        text: 'Flights',
        link: '/'
      },
     
      {
        text: 'Booking',
        link: '/'
      },
      {
        text: 'Login',
        link: '/'
      },
      {
        text: 'SignUp',
        link: '/'
      },
      {
        text: 'En',
        link: '/'
      },
    ],
    logo: {
      text: 'JADOO'
    },
    style: {
      barStyles: {
        color:'black',
        fontSize:'1.5rem'
      },
      linkStyles: {
        color: 'black',
        margin:'20px'
      },
      sidebarStyles: {
        background: '#ffff',
        buttonColor: 'black',
        color:'black'
      },
      logoStyles: {
        fontSize: '30px',
        color: 'black',
        // paddingBottom:'20rem',
        paddingLeft:'5rem',
      },
    }
  }
  return (
    <div className="home">
    	<Navbar {...props}/>
    </div>
  )
}

export default Home;