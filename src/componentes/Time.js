import React from "react";
import img from './img/cronometro.png';

export default class Time extends React.Component{
    constructor(props){
        super(props)
        this.state={
            numero:0,
            nome:'Start'
        }
        
        this.time = null;
        this.Start= this.Start.bind(this);
        this.Limpar= this.Limpar.bind(this);

    }

    Start(){
        let state = this.state;

        if(this.time !==null){
            clearInterval(this.time);
            this.time= null;
            state.nome='Start'
        }else{
            this.time = setInterval(()=>{
                let state = this.state;
                state.numero+=0.1;
                this.setState(state);
               
            },100)
            state.nome='Pause'
        }

        this.setState(state);

     
    }

    Limpar(){
        let state = this.state;
        
            state.numero=0;
            state.nome='Start'

        this.setState(state);

    }

    render(){
        return(
            <>
              <img src={img}/>
              <div className="time" >{this.state.numero.toFixed(1)}</div>
              <input type='submit' value={this.state.nome} onClick={this.Start} className='a'></input>
              <input type='submit' value='Limpar' onClick={this.Limpar} className='a'></input>
            </>
        );
    }
}