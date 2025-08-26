import React, { Component } from "react";
import NewsItem from "./NewsItem";
import PropTypes from "prop-types";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  static defaultProps = {
    country: "us", // Default country
    pageSize: 8,
    category: "general", // Default number of articles per page
  };
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults: 0,
    };
    document.title =
      this.props.category.charAt(0).toUpperCase() +
      this.props.category.slice(1) +
      " - NewsAlpha";
  }
  async componentDidMount() {
    this.props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=1&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
      this.props.setProgress(30);
    let parsedData = await data.json();
      this.props.setProgress(70);
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
    });
     this.props.setProgress(100);
    this.setState({ loading: false });
   

    // This is where you would typically fetch data from an API
    // For now, we are using the static articles array
  }
  handlenextclick = async () => {
    if (
      this.state.page + 1 >
      Math.ceil(this.state.totalResults / this.props.pageSize)
    ) {
    } else {
      let url = `https://newsapi.org/v2/top-headlines?country=${
        this.props.country
      }&category=${
        this.props.category
      }&apiKey=${this.props.apikey}=${
        this.state.page + 1
      }&pageSize=${this.props.pageSize}`;
      this.setState({ loading: true });
      this.setState({ page: this.state.page + 1 });
      // Fetch the next page of articles
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData);
      this.setState({ articles: parsedData.articles });
      this.setState({ loading: false });
    }
    // This is where you would typically fetch the next page of data from an API
    // For now, we are using the static articles array
  };
  handleprevclick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${
      this.props.category
    }&apiKey=${this.props.apikey}=${
      this.state.page - 1
    }&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    this.setState({ page: this.state.page - 1 });
    // Fetch the previous page of articles
    if (this.state.page <= 1) {
      this.setState({ page: 1 });
      return;
    }
    this.setState({ page: this.state.page - 1 });
    // This is where you would typically fetch the previous page of data from an API

    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({ articles: parsedData.articles });
    this.setState({ loading: false });
  };

  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 });
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=1&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles:this.state.articles.concat( parsedData.articles),
      totalResults: parsedData.totalResults,
    });
    this.setState({ loading: false });

    // This is where you would typically fetch data from an API
    // For now, we are using the static articles array
  
  };

  render() {
    return (
      <>
      {/* <div className="container my-3"> */}
        <h1 className="text-center" style={{ margin: "35px 0" }}>
          News - Top Headlines
        </h1>
        {this.state.loading && <Spinner />}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner />}
        >
          <div className="container">
          <div className="row my-3">
            {this.state.articles.map((element) => {
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
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
          </div>
          </div>
        </InfiniteScroll>
        {/* <div className="d-flex justify-content-between my-3">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-success"
            onClick={this.handleprevclick}
          >
            {" "}
            &larr; Previous
          </button>
          <button
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
            type="button"
            className="btn btn-success"
            onClick={this.handlenextclick}
          >
            Next &rarr;
          </button>
        </div> */}
      {/* </div> */}
      </>
    );
  }
}

export default News;




  const [articles, setarticles] = useState([])
  const [loading, setloading] = useState(true)
  const [page, setpage] = useState(1)
  const [totalResults, settotalResults] = useState(0)
  