import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count:0,
        //imageUrl:'https://picsum.photos/200'
        tags:["tag1","tag2","tag3"]
    };

    styles={
        fontSize: 15,
        fontWeight:"bold",
    };

    handleIncrement=()=>{
        this.setState({count : this.state.count + 1})
    }

    render() { 
    return (
          <div>
              {/* <img src={this.state.imageUrl} alt=""></img> */}
              <span style={this.styles} className={this.getBachClasses()}>{this.formatCount()}
              </span>                  
              <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm">
                increment
              </button>
              <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
         </div>                                                                                        
         //badge and badge-primary are bootstrat classes        
         //if only one attribute is to be style we can use inline css e.g inside span 
    );                                                                                                 
  }     

    getBachClasses() {
        let classes = "badge  m-2 ";
        classes += this.state.count === 0 ? "badge-warning" : "badge-primary";
        return classes;
    }

  formatCount(){
    const{count}=this.state; 
    return count=== 0 ? 'zero' :count;  
    //it can also be done like this this.state.count===0 ? 'zero' : this state.count
    //but it is cleaner way using object destructring
  }                                                                                                    
}
 
export default Counter;