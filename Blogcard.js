import React from "react";
import { dumpLogs } from "./utils";
import classes from './blogcard.module.css';
//import { Component } from "react";
const Blogcard =(props)=> {
    /*state={
        likecount:0
    }
    onlikecount=()=>{
        this.setState((prevState,prevProp)=> {
            return{likecount: prevState.likecount+1}
        });
        }*/

    
    dumpLogs(props);
    return (
        <div className={classes.NewBlogCard}>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
            
            <p>Like count : <span className={classes.likecount}>{props.likecount}</span></p>
            <button onClick={props.onlikebtnclick}>Like</button>
        </div>
    )
}


export default Blogcard;