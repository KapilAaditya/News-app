import React, { Component } from 'react'

export default class NewsItems extends Component {
    render() {
        let { title, description, src, newsId } = this.props
        const fallback =
            "https://s.france24.com/media/display/e6279b3c-db08-11ee-b7f5-005056bf30b7/w:1280/p:16x9/news_en_1920x1080.jpg"
        return (
            <div className='my-3'>
                <div className="card" >
  <img
                        src={src ? src : fallback}
                        className="card-img-top"
                        alt="news"
                        onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = fallback;
                        }}
                    />                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <a href={newsId}  rel="noreferrer" target="_blank" className="btn btn-sm btn-dark">Read more</a>
                    </div>
                </div>
            </div>
                
        )
    }
}
