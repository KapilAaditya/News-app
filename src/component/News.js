import React, { Component } from 'react'
import NewsItems from './NewsItems'
import Spinner from './Spinner'



export default class News extends Component {
    articles = []
    constructor() {
        super();
        console.log("hell no");
        this.state = {
            articles: this.articles,
            loading: false,
            page: 1
        }
    }
    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=348e9a3a1690482d97b7101bd8415092&page=1&pageSize=${this.props.pageSize}`
        this.setState({ loading: true })
        let data = await fetch(url);
        let paresedData = await data.json()
        console.log(paresedData);
        this.setState({
            articles: paresedData.articles,
            totalResults: paresedData.totalResults,
            loading: false

        })

    }
    handleNextClick = async () => {
        if (this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)) {

        }
        else {

            let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=348e9a3a1690482d97b7101bd8415092&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`
            this.setState({ loading: true })
            let data = await fetch(url);
            let paresedData = await data.json()
            console.log(paresedData);
            this.setState({
                page: this.state.page + 1,
                articles: paresedData.articles,
                loading: false
            })
        }
    }
    handlePrevClick = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=348e9a3a1690482d97b7101bd8415092&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`
        this.setState({ loading: true })
        let data = await fetch(url);
        let paresedData = await data.json()
        console.log(paresedData);
        this.setState({
            page: this.state.page - 1,
            articles: paresedData.articles,
            loading: false
        })
    }
    render() {

        return (
            <div className='container mt-3'>
                <h2 className='text-center'>Nwes Hub - Top headlines </h2>
                {this.state.loading && <Spinner />}
                <div className="row">
                    {!this.state.loading && this.state.articles.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                            <NewsItems title={element.title ? element.title.slice(0, 40) : ""}
                                description={element.description ? element.description.slice(0, 80) : ""}
                                src={element.urlToImage}
                                newsId={element.url} />
                        </div>
                    })}

                </div>
                <div className="container d-flex justify-content-between mb-3">
                    <button type="button" className="btn border border rounded-pill  btn-outline-dark" disabled={this.state.page <= 1} onClick={this.handlePrevClick}>&larr;Previos</button>
                    <button type="button" className="btn btn-outline-dark border border rounded-pill" disabled={(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))} onClick={this.handleNextClick}> Next&rarr;</button>
                </div>
                <div className="card-footer text-body-secondary text-center mb-4">
                    <strong>FOR LATEST NEWS STAY TUNED ON NEWS HUB</strong>
                </div>
            </div>
        )
    }
}
