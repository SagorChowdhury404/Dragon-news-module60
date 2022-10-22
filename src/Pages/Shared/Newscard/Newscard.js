import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image'
import { FaEye, FaRegBookmark, FaShareAlt, FaStar, } from 'react-icons/fa';
const NewsCard = ({ news }) => {
    const { author, rating
        , image_url, _id, details, total_view, title } = news;
    // console.log(category_id)
    return (
        <div>
            <Card className=" mb-5">
                <Card.Header className='d-flex justify-content-between align-items=center'>
                    <div className='d-flex'>
                        <Image className='me-2'
                            roundedCircle
                            src={author.img}
                            style={{ height: '50px' }}>
                        </Image>
                        <div >
                            <p className='mb-0'>  {author?.name}</p>
                            {author?.published_date
                            }
                        </div>
                    </div>

                    <div>
                        <FaRegBookmark></FaRegBookmark>
                        <FaShareAlt></FaShareAlt>

                    </div>


                </Card.Header>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Img variant="top" src={image_url} />
                    <Card.Text>
                        {
                            details.length > 250 ? <p> {details.slice(0, 250) + '...'} <Link to={`/news/${_id}`}>
                                Reed more
                            </Link></p> :
                                <p>{details}</p>


                        }
                    </Card.Text>
                </Card.Body>

                <Card.Footer className="text-muted d-flex justify-content-between align-items=center">
                    <div>
                        <FaStar className='text-warning'></FaStar>

                        <span> {rating?.number} </span>

                        <span> {rating?.badge} </span>

                    </div>
                    <div>
                        <FaEye></FaEye>
                        <span> {total_view}</span>

                    </div>

                </Card.Footer>
            </Card>
        </div>
    );
};

export default NewsCard;