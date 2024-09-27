import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Trendingblogs() {
  
    const [posts, setPosts] = useState([]);

    useEffect (() => {
        axios.get('http://localhost/firstproject/read.php').then(response => {
            setPosts(response.data);
        }).catch(error => {
            console.error('Error fetching posts:', error);
        });
    },[])
  
    return (
    <div id='Trendingblogs' style={{backgroundColor:'black'}}>
        <p id='heading'><b>Trending</b></p>

        <table id='trending_table'>
            <tr>
                <td>
                <div className="card" style={{height: '18rem'}} id='trending_card'>
                <div className="card-body">
                        {(posts.map(post => (
                            <div key={posts.blogID} >
                                <h5 className="card-title">{post.Title}</h5>
                                <p className="card-text">{post.content}</p>
                                <a href="#" className="card-link" style={{textDecoration:'none'}}>Read more</a>
                            </div>)))}
                        </div>              
                </div>
                </td>
                <td>
                    <div className="card" style={{height: '18rem'}} id='trending_card'>
                        <div className="card-body">
                            <h5 className="card-title">Title1</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="card-link" style={{textDecoration:'none'}}>Read more</a>
                        </div>
                    </div>
                </td>

                <td>
                    <div className="card" style={{height: '18rem'}} id='trending_card'>
                        <div className="card-body">
                            <h5 className="card-title">Title1</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="card-link" style={{textDecoration:'none'}}>Read more</a>
                        </div>
                    </div>
                </td>
            </tr>

            <tr>
                <td>
                <div className="card" style={{height: '18rem'}} id='trending_card'>
                    <div className="card-body">
                        <h5 className="card-title">Title1</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="card-link" style={{textDecoration:'none'}}>Read more</a>
                    </div>
                </div>
                </td>
                <td>
                    <div className="card" style={{height: '18rem'}} id='trending_card'>
                        <div className="card-body">
                            <h5 className="card-title">Title1</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="card-link" style={{textDecoration:'none'}}>Read more</a>
                        </div>
                    </div>
                </td>

                <td>
                    <div className="card" style={{height: '18rem'}} id='trending_card'>
                        <div className="card-body">
                            <h5 className="card-title">Title1</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="card-link" style={{textDecoration:'none'}}>Read more</a>
                        </div>
                    </div>
                </td>
            </tr>
        </table>
    </div>
  )
}
