import React,{Component} from 'react';
import './currency.css';



export default class Currency extends Component {

state={
    label:'',
    fl:false
}

    changeInput = (e) => {   
    if(!isNaN(e.target.value) && e.target.value.indexOf(' ')===-1){        
     this.props.currencyFind(e.target.value,e.target.id);
     this.setState({
         label:e.target.value,
         fl:true
     })
    } 

    }
    componentDidMount(){

    }
componentDidUpdate(prevProps){

    if(this.props.arrOutput!==prevProps.arrOutput){
        if(this.state.fl===false ){ 
        console.log('UPDATE',this.props.name,this.props.arrOutput)
        this.setState({
            label:this.props.arrOutput
        })
        
        }else{
            this.setState({
                fl:false
            })
        }  
    }
    

   
}
render(){
    
    console.log(this.state.label,this.state.fl)
     return(
        <div className="d-flex"> 
        <h2>{this.props.name}</h2>
        <input onChange={this.changeInput} autoComplete="off" id={this.props.name}
         className="form-control " maxLength="50" value={this.state.label}></input>
        </div>
    )
}
    
}
