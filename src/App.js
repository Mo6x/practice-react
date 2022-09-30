import React, { Component } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Greet from './Components/Greet/Greet'
import Welcome from './Components/Welcome/Welcome'
import Hello from './Components/Hello/Hello'
import Message from './Components/Message/Message'



class App extends Component {
    render() {
        return (
            <div className='App'>
                <>
                    
                  <Message />

                    {/* <Greet name="Christopher" heroName="Osawel" >
                      <p>I am just moving up and down</p>
                    </Greet>

                    <Greet name="Moses" heroName="Moses" >
                    <button>Action</button>
                    </Greet>

                    <Greet name="Osawel"  heroName="Christopher" />
                    
                    

                    <Welcome  name="moses"  heroName="Christopher" />
                    <Welcome name="Osawel" heroName="Christopher" />
                    <Welcome name="Christ" heroName="Christopher" /> */}



                    {/* <Navbar />
                    <Hello /> */}
                </>
            </div>
        )
    }      
}

export default App