import React, {useState, useEffect} from 'react'
import '../styles/pages/HomePage.css'

import axios from '../config/api'
import Card from '../components/Card'

export default function HomePage () {
    const [news, setNews] = useState([])

    useEffect(() => {
        axios.get('http://localhost:6969/getNews')
            .then(res => {
                setNews(res.data)
            })
    }, [])

    return (
        <div className="home-page">
            <div className="home-page-content">
                {news.map(item => <Card key={item.id} title={item.title} content={item.content} category={item.categoria}/>)}
            </div>
        </div>
    )
}