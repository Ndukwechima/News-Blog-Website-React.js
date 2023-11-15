import React, { useEffect, useState } from "react";
import NewsList from "./NewsList";
import Category from "./Category";

const News = () => {
  const [data, setData] = useState([]);
  const [category, setCategory] = useState("General");
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    fetchData();
  }, [category]);

  const fetchData = async (searchQuery = "") => {
    const country = "us";
    const apiKey = "5b039b929ba344409712522284841478";

    let url;
    if (searchQuery) {
      url = `https://newsapi.org/v2/everything?q=${searchQuery}&country=${country}&apiKey=${apiKey}`;
    } else {
      url = `https://newsapi.org/v2/top-headlines?category=${category}&country=${country}&apiKey=${apiKey}`;
    }

    const res = await fetch(url);
    const response = await res.json();
    setData(response.articles);
    setFilteredData(response.articles);
  };

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
    fetchData();
  };

  const handleSearch = (searchQuery) => {
    const lowerSearchQuery = searchQuery.toLowerCase();
    // console.log("lowerSearchQuery:", lowerSearchQuery);

    const filteredArticles = data.filter((article) =>
      article.description?.toLowerCase()?.includes(lowerSearchQuery)
    );
    // console.log("filteredArticles:", filteredArticles);

    setFilteredData(filteredArticles);
  };

  return (
    <section className="news-container w-[100vw] ">
      <div>
        <Category
          handleCategoryChange={handleCategoryChange}
          handleSearch={handleSearch}
        />
        <div className=" w-[100vw] flex justify-center items-center">
          <div className="w-[94vw] mt-11 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
            {filteredData.map((article, index) => (
              <NewsList
                key={index}
                title={article.title}
                author={article.author}
                description={article.description}
                urlToImage={article.urlToImage}
                publishedAt={article.publishedAt}
                url={article.url}
                content={article.content}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
