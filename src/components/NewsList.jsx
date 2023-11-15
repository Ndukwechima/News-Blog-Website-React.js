import React from "react";

const NewsList = ({
  title,
  description,
  urlToImage,
  author,
  url,
  publishedAt,
}) => {
  return (
    <section className="w-[90vw] lg:ml-10">
      <h4 className="text-blue-700 text-[14px] w-[92vw] md:w-[40vw] lg:w-[25.5vw] mt-[10rem]">
        <a href={url}>
          {title && typeof title === "string" && title.length > 6
            ? title.slice(0, 90)
            : title}
        </a>
      </h4>
      <figure className="mt-3">
        <figcaption>
          <img
            src={urlToImage}
            width={367}
            height={250}
            className="rounded-md hover:scale-90 transition-all"
            alt="News"
          />
          <p className="w-[92vw] md:w-[40vw] lg:w-[25vw] text-[14px] mt-2">
            {description &&
            typeof description === "string" &&
            description.length > 6
              ? description.slice(0, 100)
              : description}
          </p>
        </figcaption>
        <div className="w-[92vw] lg:w-[25vw] md:w-[40vw] flex justify-between mt-3">
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
  );
};

export default NewsList;
