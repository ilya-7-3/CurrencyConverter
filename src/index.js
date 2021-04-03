import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from  './components/header/header'
import Сurrency from './components/currency/currency';
import DataService from './components/data-service/data-service';
import OnError from './components/error/error'
export default class App extends Component{

  state = {
    error:false,
    currency:{
      USD:null,
      EUR:null,
      RUB:null,
      UAH:null,
      PLN:null
    },
    arrOutput:[]
  }

componentDidMount(){
  const data= new DataService();
  let UAH,RUB,PLN,EUR,USD=0;
  data.getResource().then((data)=>{
    data.map((el)=>{
      if(el.Cur_Abbreviation==='USD'){
         USD = el.Cur_OfficialRate 
      } 
      if(el.Cur_Abbreviation==='EUR'){
         EUR = el.Cur_OfficialRate
      }if(el.Cur_Abbreviation==='PLN'){
         PLN = el.Cur_OfficialRate/10  
      }if(el.Cur_Abbreviation==='RUB'){
         RUB = el.Cur_OfficialRate/100   
      }if(el.Cur_Abbreviation==='UAH'){
         UAH = el.Cur_OfficialRate/100  
      }
      
   return 0
   
   })
   this.setState({
    currency:{
    USD,
    EUR,
    RUB,
    UAH,
    PLN
    }
  })   
  }).catch(error=>{
    this.setState({
      error:true
    })
  });
  
}
/* 
componentDidUpdate(prevState){
  if(this.state.arrOutput!==prevState.arrOutput){

  }
}

 */


currencyFind = (inputValue,inputName) => {
  this.currencyСalculation(inputValue,inputName);
} 

calculation = (byn) => {
  const {USD,EUR,RUB,UAH,PLN}=this.state.currency;
  let usd,eur,rub,uah,pln,byns;
      usd=(byn/USD).toFixed(3);
      console.log('usd',usd);
      eur=(byn/EUR).toFixed(3);
      console.log('eur',eur);
      rub=(byn/RUB).toFixed(3);
      console.log('rub',rub);
      uah=(byn/UAH).toFixed(3);
      console.log('uah',uah);
      pln=(byn/PLN).toFixed(3);
      console.log('pln',pln);
      byns=(Number(byn)).toFixed(3);
      this.setState({
        arrOutput:[usd,eur,byns,rub,uah,pln]
      })
     

}

currencyСalculation = (inputValue,inputName) => {
  const {USD,EUR,RUB,UAH,PLN}=this.state.currency;
  const value=inputValue;
  let byn;
  switch(inputName) {
    case 'USD': 
       byn=(value*USD);
       this.calculation(byn);
      break;
  
    case 'EUR':  
     byn=(value*EUR);
     this.calculation(byn);
      break;
      
    case 'BYN':  
      this.calculation(value);
       break;  
    
    case 'RUB':  
      byn=value*RUB;
      this.calculation(byn);
      break;   
    
      case 'UAH':  
      byn=value*UAH;
      this.calculation(byn);
       break;  

       case 'PLN':  
       byn=value*PLN;
       this.calculation(byn);
        break;   
  
    default:
      break;
      
  }

}

  render(){
    if(this.state.error){
      return(
        <OnError/>
      )
    }
    
    return(
      <div className ="container">
       <Header/>
        <div className=" form">
          <Сurrency arrOutput={this.state.arrOutput[0]} currencyFind={this.currencyFind} name="USD"/>
          <Сurrency arrOutput={this.state.arrOutput[1]} currencyFind={this.currencyFind} name="EUR"/>
          <Сurrency arrOutput={this.state.arrOutput[2]} currencyFind={this.currencyFind} name="BYN"/>
          <Сurrency arrOutput={this.state.arrOutput[3]} currencyFind={this.currencyFind} name="RUB"/>
          <Сurrency arrOutput={this.state.arrOutput[4]} currencyFind={this.currencyFind} name="UAH"/>
          <Сurrency arrOutput={this.state.arrOutput[5]} currencyFind={this.currencyFind} name="PLN"/>
        </div>
      </div>
    )
  }
} 

ReactDOM.render(<App/>,document.getElementById('root'));
