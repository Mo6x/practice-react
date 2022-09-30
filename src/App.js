import React, { Component } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Greet from './Components/Greet/Greet'
import Welcome from './Components/Welcome/Welcome'
import Hello from './Components/Hello/Hello'



class App extends Component {
    render() {
        return (
            <div className='App'>
                <>
                    
                    <Greet name="Christopher" heroName="Osawel" >
                      <p>I am just moving up and down</p>
                    </Greet>

                    <Greet name="Moses"  heroName="Moses" />
                    <Greet name="Osawel"  heroName="Christopher" />





                    {/* <Navbar />
                    <Welcome />
                    <Hello /> */}
                </>
            </div>
        )
    }      
}

export default App