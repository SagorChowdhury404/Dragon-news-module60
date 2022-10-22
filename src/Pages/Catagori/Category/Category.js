import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsCard from '../../Shared/Newscard/Newscard';

const Category = () => {
    const CategoryNews = useLoaderData();
    console.log(CategoryNews)
    return (
        <div>
            <h1>this is category page {CategoryNews.length}</h1>
            {
                CategoryNews.map(news => <NewsCard
                    key={news._id}
                    news={news}

                ></NewsCard>)

            }

        </div>
    );
};

export default Category;