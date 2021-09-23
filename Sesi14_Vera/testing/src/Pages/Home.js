import React from 'react';
import {Link} from "react-router-dom";

export default function Home(){
    return(
       <div className="p-5 mb-4 bg-light rounded-3 border mx-3">
           <div className="container-fluid py-5">
               <h1 className="display-5 fw-bold">Why do we need Test ?</h1>
               <p className="col=md-8 fs-4">To guarantee our code quality. And show the people that we also care about it and wish to give something that already prove, at least by ourself</p>
               <Link to="/users"><button className="btn btn-primary btn-lg" role="button">Users List</button></Link>         
            </div>
        </div>
    );
}