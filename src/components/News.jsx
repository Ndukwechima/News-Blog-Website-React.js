// UPDATED ONE

import { useEffect, useState } from "react";
import NewsCard from "./NewsCard";
import Category from "./Category";

const News = () => {
  const [data, setData] = useState([]);
  const [category, setCategory] = useState("General");
  const [filteredData, setFilteredData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, [category]);

  const fetchData = async (searchQuery = "") => {
    setIsLoading(true);
    setError(null);
    const country = "us";
    const apiKey = import.meta.env.VITE_API_KEY;
    // const apiKey = "5b039b929ba344409712522284841478";

    let url = `https://newsapi.org/v2/top-headlines?category=${category}&country=${country}&apiKey=${apiKey}`;

    https: if (searchQuery) {
      url = `https://newsapi.org/v2/everything?q=${searchQuery}&country=${country}&apiKey=${apiKey}`;
    }

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setData(data.articles);
      setFilteredData(data.articles);
      console.log(data.articles);
    } catch (error) {
      setError(error.message);
      console.error("Fetching data failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
    fetchData();
  };

  const handleSearch = (searchQuery) => {
    const lowerSearchQuery = searchQuery.toLowerCase();
    const filteredArticles = data.filter((article) =>
      article.description?.toLowerCase()?.includes(lowerSearchQuery)
    );
    setFilteredData(filteredArticles);
  };

  if (isLoading)
    return <p className="text-3xl text-center  text-blue-800">Loading...</p>;
  if (error)
    return (
      <p className="text-3xl text-center text-red-800">
        {"Something went wrong! Try again."}
      </p>
    );

  return (
    <section className="news-container w-[100%]">
      <div>
        <Category
          handleCategoryChange={handleCategoryChange}
          handleSearch={handleSearch}
        />
        <div className="w-[100%] flex justify-center items-center">
          <div
            className="w-[90%]  sm:w-[94%] md:w-[94%] lg:w-[96%] mt-14
           grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3"
          >
            {filteredData.map((article, index) => (
              <NewsCard
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
