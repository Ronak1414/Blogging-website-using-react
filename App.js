
import './App.css';
import React from 'react';
import BlogCard from './Blogcard';
import { Component } from 'react';
import { isArrayEmpty } from './utils';
class App extends Component
{
  state={
    showblogs : true,
    blogArr:[
      {
        id:1,
        title:'Mental Health',
        description :'Mental health is an essential part of overall health and well-being. It affects how we think, feel, and act, and influences how we handle stress, relate to others, and make choices. Good mental health is important for a fulfilling and meaningful life, and seeking help when needed is a sign of strength.',
        likecount:0
  
      },
      {
        id:2,
        title:'Quantum computing',
        description :'Quantum computing is a rapidly evolving field that leverages quantum mechanics to create new ways of solving problems. By utilizing quantum bits, or qubits, it can perform calculations exponentially faster than classical computers. This technology is expected to have a significant impact on fields such as cryptography, chemistry, and artificial intelligence.',
        likecount:0
      },
      {
        id:3,
        title:'Mahendra Singh Dhoni',
        description :'Mahendra Singh Dhoni, commonly known as MSD, is a retired Indian cricketer and former captain of the Indian national cricket team. Widely regarded as one of the greatest cricketing captains of all time, he led India to many memorable victories, including the 2007 ICC World Twenty20, the 2010 and 2016 Asia Cups, and the 2011 ICC Cricket World Cup. He is also known for his calm demeanor and tactical acumen on the field.',
        likecount:0
      },
    
    ]
  }
   
onlikebtnclick=(pos)=>{
  const updatedbloglist=this.state.blogArr;
  const updatedblogobj=updatedbloglist[pos];
  updatedblogobj.likecount=updatedblogobj.likecount+1;
  
  updatedbloglist[pos]=updatedblogobj;
  this.setState({blogArr:updatedbloglist});
   //alert('you clicked like for the ' + pos + ' blog')
  //console.log(updatedblogobj);

}
   
  onHidebtnclick=()=>{
    //let updatestate=!this.state.showblogs;
    this.setState((prevstate,prevProps)=>{
      return{showblogs:!prevstate.showblogs}
    });
    console.log(this.showblogs);
  }

  render(){
    console.log('render called');
    console.log(this.state);
    const  blogcards=isArrayEmpty(this.state.blogArr)?[]:this.state.blogArr.map((item,pos)=> {
    
      return(
        <BlogCard className={'blog'} key={pos} title={item.title} description={item.description} 
        likecount={item.likecount} id={item.id}
        onlikebtnclick={()=>this.onlikebtnclick(pos)}
        
      />
      )
    })
  
  return (
    <div className='App'>
      <h1>Welcome to Bloggers Den</h1>
      <button onClick={this.onHidebtnclick}>{this.state.showblogs?'click to hide':'click to show'}</button>
      <br></br>
      {
        this.state.showblogs? blogcards:null
      }
      
    </div>
  );
}
}
export default App;

