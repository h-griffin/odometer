import React from 'react';
import './App.css';

function Header(props) {
    return (
      <header>
        <small>hi there from header, </small>
        <span>props say ... {props.message}</span>
      </header>
    );
  }


function Footer(props) {
    return (
      <footer>
        <small>hi there from footer, </small>
        <span>props say ... {props.message}</span>
      </footer>
    );
  }


function App() {
  return (
    <>
    <div className="App">
      <Header className="App-header" message='hi from app header'/>
      <Odometer />
      <Footer message='©2020 Griffin™'/>
    </div>
    </>
  );
}

class Odometer extends React.Component{
    constructor(){
        super();
        this.state = {
            miles : '0'.padStart(4,0)
        }
    }

    changeMile(change){
        let newMile = parseInt(this.state.miles);
        let tempCount= 0;

        if ((newMile + change) > 9999){
            tempCount = ((newMile + change) - 9999)
        }else{
            tempCount = (newMile + change)
        }
        
        this.setState({
            miles : String(tempCount).padStart(4,0)
        })
    }

    render(){
        return (
            <>
            <button onClick={() => this.changeMile('1')}>1</button>
            <button onClick={() => this.changeMile('10')}>10</button>
            <button onClick={() => this.changeMile('100')}>100</button>
            <button onClick={() => this.changeMile('1000')}>1000</button>
            <h2>miles on Odometer: {this.state.miles}</h2>
            </>
        )
    }

}


export default App;
