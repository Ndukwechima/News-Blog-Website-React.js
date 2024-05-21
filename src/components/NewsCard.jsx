import Alternative from "/assets/God.jpg";

const NewsCard = ({ description, urlToImage, author, url, publishedAt }) => {
  return (
    <main className=" flex justify-center items-center mt-[rem]">
      <section className="w-[90%] m-5 flex justify-center items-center h-auto lg:ml-10 mx-4 ">
        <figure className="mt-3 p-8 w-[90%] flex flex-col justify-center items-center ">
          <figcaption>
            <div className="w-[100%] flex items-center justify-center">
              <img
                src={urlToImage === null ? Alternative : urlToImage}
                className="rounded-md hover:scale-110 transition-all w-[350px] h-[200px] object-cover"
                alt="News"
              />
            </div>
            <p className="w-[88vw]  sm:w-[30vw] md:w-[40vw] lg:w-[23vw] text-[14px] py-4">
              {description &&
              typeof description === "string" &&
              description.length > 6
                ? description.slice(0, 100)
                : description}
            </p>
          </figcaption>
          <div className="w-[88vw]  md:w-[40vw] lg:w-[23vw] flex justify-between py-4">
            <div className="flex justify-between space-x-5 ">
              <div>
                <p className=" text-[12px] text-red-700">
                  <small className="smal">by </small>
                  {author && typeof author === "string" && author.length > 6
                    ? author.slice(0, 6)
                    : author}
                </p>
              </div>
              <p className="text-[12px]">at {publishedAt}</p>
            </div>
            <small>
              <a href={url}>
                <button className="w-[5rem] h-[1.5rem] hover:opacity-60 rounded-sm bg-red-700 text-white text-[12px]">
                  Read More...
                </button>
              </a>
            </small>
          </div>
        </figure>
      </section>
    </main>
  );
};

export default NewsCard;
