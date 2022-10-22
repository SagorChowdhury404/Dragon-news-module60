import React, { useEffect } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const News = () => {

    const news = useLoaderData();
    console.log('hello', news)

    const { title, details, img_url, category_id } = news;

    // useEffect(() => {
    //     fetch

    // }, [])

    return (
        <div>
            <Card>
                <Card.Img variant="top" src={img_url} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {details}
                    </Card.Text>

                    <Link to={`/category/${category_id}`}>
                        <Button variant="primary">All news in this category  </Button>
                    </Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default News;