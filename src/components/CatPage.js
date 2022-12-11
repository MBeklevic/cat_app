import React, { Component } from 'react';
import CatList from './CatList';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/CatPage.css"
import CatNavbar from './CatNavbar';

class CatPage extends Component {
    render() {
        return (
            <div className='CatPage'>
                <CatNavbar />
                <div className='container'>
                    <div className='row'>
                        {CatList.map(cat => (
                            <div key={cat.id} className='col-md-6 col-lg-4 my-4'>
                                <Link to={`/cat_app/${cat.kind}`} >
                                    <Card className='CatPage-cardHolder'>
                                        <div className='CatPage-imgHolder'>
                                            <img className='CatPage-img'
                                                alt={cat.name}
                                                src={cat.img_src}
                                                width="80%"
                                            />
                                        </div>
                                        <CardBody>
                                            <CardTitle tag="h5" >
                                                {cat.name}
                                            </CardTitle>
                                            <CardSubtitle>
                                                {cat.homeland}
                                            </CardSubtitle>
                                        </CardBody>
                                    </Card>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div >
            </div >
        )
    }
}

export default CatPage;