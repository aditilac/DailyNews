import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let{title, des,imgUrl,newsurl,author,date,source}=this.props
    return (
        <div className="card" style={{width: "18rem"}}>
        <img src={!imgUrl?"https://i.ytimg.com/vi/DeYK5zDGbzI/maxresdefault.jpg":imgUrl} className="card-img-top" alt="..."/>
        <div className="card-body">
          <h5 className="card-title">{title} 
          <span class="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{left:"85%", zIndex:'1'}}>
  {/* {source} */}
 {source}
    </span>
    </h5>
          <p className="card-text">{des}</p>
          <p class="card-text"><small class="text-body-secondary">{!author?"UnKnownauthor":author} by { new Date(date).toGMTString()}</small></p>
          <a  rel="noreferrer" href={newsurl} target="_blank" className="btn btn-primary">Read More</a>
        </div>
      </div>
    )
  }
}

export default NewsItem
