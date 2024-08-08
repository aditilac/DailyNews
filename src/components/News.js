import React , { Component }  from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import  PropTypes  from 'react';
import InfiniteScroll from "react-infinite-scroll-component";
// import InfiniteScroll from "react-infinite-scroll-component";


// import {length} from 'react';
export class News extends Component {
 static defaultProps={
  country:"in",
  pageSize:"10",
  category:"general"
 }

 static propTypes={
  country:PropTypes.string,
  pageSize:PropTypes.number,
  category:PropTypes.string
 }

 captilizeletter =(string)=>{
    return string.charAt(0).toUpperCase() + string.slice(1);
  
 }
  constructor(props){
super(props);

this.state={
  articles:[],
totalResults:0,
  loading:false,
  page:1
}
document.title=`${ this.captilizeletter(this.props.category)}-NewsMonkey`;

  }

  async undateNews(){
    this.props.setprogress(10);

    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=335ea2ae2b454bf0a74023c0157ddbb7&page=1&pageSize=${this.props.pageSize}`
    // let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=1&pageSize=${this.props.pageSize}`;
    this.setState({
      loading:true
    })
    let data= await fetch(url);
    let parsedata= await data.json();
    // console.log(parsedata);
    this.setState({
      articles:parsedata.articles,
      totalResults:parsedata.totalResults,
    loading:false
    })
    this.props.setprogress(100);
  }

  async componentDidMount(){
    console.log("componentdidmount")
  this.undateNews();
  }

  handleprevclick= async()=>{
    
    this.setState(
      {
        page:this.state.page-1
      }
    )
    this.undateNews();
  }

   handlenextclick= async()=>{
  
  this.setState(
    {
      page:this.state.page+1
    }
  )
  this.undateNews();
  }

  fetchMoreData =  async() => {
    this.setState({
      page:this.state.page+1
    })
    // this.undateNews();

    // let url=` https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=f63917b9333849a0b3068b57b161eaca`
    // let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=f63917b9333849a0b3068b57b161eaca&page=1&pageSize=${this.props.pageSize}`;
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=335ea2ae2b454bf0a74023c0157ddbb7&page=1&pageSize=${this.props.pageSize}`;
    this.setState({
      loading:true
    })
    let data= await fetch(url);
    let parsedata= await data.json();
    // console.log(parsedata);
    this.setState({
      articles: this.state.articles.concat(parsedata.articles),
      totalResults:parsedata.totalResults,
    loading:false
    })

    
  };
  render() {

    return (
       
      <div className='container my-3 '>
      <h1 className="text-center">NewsMonkey Top  { this.captilizeletter(this.props.category)} Headlines</h1>

{/* {this.state.loading && <Spinner/>} */}
        <div className="container">
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !==this.state.totalResults}
          loader={<Spinner/>}
        >
        <div className="row my-3 mx-3">
        {this.state.articles.map((element)=>{
  return   <div className="col-md-4 " key={element.url}>
  <NewsItem title={element.title?element.title.slice(0,45):""} des={element.description?element.description.slice(0,88):""}
   imgUrl=	{element.urlToImage?element.urlToImage:""} newsurl={element.url?element.url:""} author={element.author} date={element.publishedAt}  source={element.source.name}/>
</div>
        })}
</div>
</InfiniteScroll>
</div>

  
{/* <div className="container d-flex justify-content-between">
<button type="button" disabled={this.state.page<=1}  className="btn btn-dark " onClick={this.handleprevclick}>&larr; Previous</button>
<button type="button" disabled={this.state.page+ 1 >Math.ceil(this.state.totalResults/this.props.pageSize)} className=" btn btn-dark "onClick={this.handlenextclick}>Next &rarr;</button>
</div> */}
      </div>
    )
  }
}

export default News
