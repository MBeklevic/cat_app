import React, { Component } from 'react';
import CatList from './CatList';
import CatNavbar from './CatNavbar';
import { Link } from 'react-router-dom';
import "../styles/SingleCatPage.css"
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap';
import withRouter from './withRouter';
import PageNotFound from './PageNotFound';

class SingleCatPage extends Component {
    render() {
        const currentCat = (CatList.filter(cat => cat.kind === this.props.params.name))[0];

        return (
            <>
                {!currentCat ? <PageNotFound /> :
                    <div className='SingleCatPage'>
                        <CatNavbar />
                        <div
                            className='container text-center'>
                            <div className='row justify-content-center'>
                                <div key={currentCat.id} className='col-md-6 col-lg-6 my-4 align-items-center'>
                                    <Card className='SingleCatPage-cardHolder'>
                                        <div className='SingleCatPage-imgHolder'>
                                            <img className='SingleCatPage-img'
                                                alt={currentCat.name}
                                                src={currentCat.img_src}
                                                width="80%"
                                            />
                                        </div>
                                        <CardBody>
                                            <CardTitle tag="h5" >
                                                {currentCat.name}
                                            </CardTitle>
                                            <CardSubtitle>
                                                {currentCat.homeland}
                                            </CardSubtitle>
                                            <hr />
                                            <CardText>
                                                {currentCat.info}
                                            </CardText>
                                            <hr />
                                            <Link to={"/cat_app"}><Button className='col-6 mx-auto' outline={true} color='primary'>Anasayfa</Button></Link>
                                        </CardBody>
                                    </Card>
                                </div>
                            </div>
                        </div >
                    </div >
                }
            </>
        )
    }
}

export default withRouter(SingleCatPage);
