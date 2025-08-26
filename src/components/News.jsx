import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import PropTypes, { string } from "prop-types";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
    const [articles, setarticles] = useState([])
  const [loading, setloading] = useState(true)
  const [page, setpage] = useState(1)
  const [totalResults, settotalResults] = useState(0)


  const Captelizeheadline =(string) =>{
    return string.charAt(0).toUpperCase()+ string.slice(1);
  }

   const componentDidMount = async () => {
    props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pageSize}`;
    let data = await fetch(url);
      props.setProgress(30);
    let parsedData = await data.json();
      props.setProgress(70);
      setarticles(parsedData.articles)
      settotalResults(parsedData.totalResults)
    // console.log(parsedData);
     props.setProgress(100);
    setloading(false)
    
  }
  useEffect(() => {
  document.title =
    props.category.charAt(0).toUpperCase() +
    props.category.slice(1) +
    " - NewsAlpha";
}, [props.category]);


  useEffect(()=>{
      componentDidMount()

    },[])

   const handlenextclick = async () => {
    if (
      page + 1 >
      Math.ceil(totalResults / props.pageSize)
    ) {
    } else {
      let url = `https://newsapi.org/v2/top-headlines?country=${
        props.country
      }&category=${
        props.category
      }&apiKey=${props.apikey}&page=${
        page + 1
      }&pageSize=${props.pageSize}`;
      setloading(true)
      setpage(page + 1)
      // Fetch the next page of articles
      let data = await fetch(url);
      let parsedData = await data.json();
      // console.log(parsedData);
      setarticles( parsedData.articles)
      setloading(false)
    }
    // This is where you would typically fetch the next page of data from an API
    // For now, we are using the static articles array
  };
   const  handleprevclick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${
      props.category
    }&apiKey=${props.apikey}&page=${
      page - 1
    }&pageSize=${props.pageSize}`;
    setloading(true)
    setpage(page -1)
    // Fetch the previous page of articles
    if (page <= 1) {
      setpage(1)
      return;
    }
    setpage(page -1)
    // This is where you would typically fetch the previous page of data from an API

    let data = await fetch(url);
    let parsedData = await data.json();
    // console.log(parsedData);
    setarticles(parsedData.articles)
    setloading(false)
   
  };

   const fetchMoreData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page + 1}&pageSize=${props.pageSize}`;
     setpage(page + 1)
    let data = await fetch(url);
    let parsedData = await data.json();
    // console.log(parsedData);
    setarticles(articles.concat( parsedData.articles))
    setloading(false)
    // This is where you would typically fetch data from an API
    // For now, we are using the static articles array
  
  };

    return (
      <>
      {/* <div className="container my-3"> */}
        <h1 className="text-center " style={{ margin: "35px 0",  marginTop:"90px"}}>
          News - <span className="bg-danger text-white p-1 rounded-3"> Top</span> {Captelizeheadline( props.category)} Headlines
        </h1>
        {loading && <Spinner />}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner />}
        >
          <div className="container">
          <div className="row my-3">
            {articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url} >
                  <NewsItem
                    title={element.title ? element.title.slice(0, 40) : ""}
                    description={
                      element.description
                        ? element.description.slice(0, 75)
                        : ""
                    }
                    imageUrl={element.urlToImage}
                    newsurl={element.url}
                    author={element.author ? element.author.slice(0, 10) : ""}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
          </div>
          </div>
        </InfiniteScroll>
        
      </>
    );
  
}

  News.defaultProps = {
    country: "us", // Default country
    pageSize: 8,
    category: "general", // Default number of articles per page
  };
  News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };
export default News;




