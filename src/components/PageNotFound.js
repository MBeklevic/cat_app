import React, { Component } from 'react';
import PageNotFoundImg from "../images/PageNotFound.jpg";
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/PageNotFound.css"



class PageNotFound extends Component {
    render() {
        return (
            <div className='PageNotFound container text-center'>
                <h1><span className='PageNotFound404'>Oppss...404</span> Sayfa Bulunamadı...(</h1>
                <Link to={"/"}><Button outline={true} className='my-1 col-4'>Anasayfa</Button></Link>
                <img alt='PageNotFound' className='PageNotFound-img' src={PageNotFoundImg}></img>

            </div >
        )
    }
}

export default PageNotFound