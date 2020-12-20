import React, { Component } from 'react';

class Counter extends Component {
    // state = {
    //     value:this.props.value,
    //     // tags:["tag1","tag2","tag3"]
    // };

    styles={
        fontSize: 15,
        fontWeight:"bold",
    };

    // handleIncrement=()=>{
    //     this.setState({value : this.state.value + 1})
    // }

    render() { 
      
    return (
          <div>
              
              <span style={this.styles} className={this.getBachClasses()}>{this.formatCount()}
              </span>                  
              <button onClick={()=>this.props.onIncrement(this.props.counter)} className="btn btn-secondary btn-sm">
                increment
              </button>
              <button  onClick={()=> (this.props.onDelete(this.props.id))}   
                       className="btn btn-danger btn-sm m-2">
                Delete
              </button>
              {/* <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul> */}
         </div>                                                                                        
         //badge and badge-primary are bootstrat classes        
         //if only one attribute is to be style we can use inline css e.g inside span 
    );                                                                                                 
  }    
  

    getBachClasses() {
        let classes = "badge  m-2 ";
        classes += this.props.value   === 0 ? "badge-warning" : "badge-primary";
        return classes;
    }

  formatCount(){
    const{value}=this.props; 
    return value=== 0 ? 'zero' :value;  
    //it can also be done like this this.state.count===0 ? 'zero' : this state.count
    //but it is cleaner way using object destructring
  }                                                                                                    
}
 
export default Counter;