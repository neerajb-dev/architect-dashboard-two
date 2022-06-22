import React, { useEffect, useState } from "react";
import axios from "axios";

const Posts = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        console.log("post_test")
        getPosts();
    }, [])

    const getPosts = () => {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then(res => {
                if (res.data) {
                    setPosts(res.data)
                }
            })
            .catch()
    }

    return (
        <div className="container-fluid">
            <div className="row overflow-auto" style={{ height: "100vh" }}>
                {
                    posts.map((data, index) => {
                        return (
                            <div className="col-sm-6 my-3">
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="card-title">{data.userId}</h4>
                                        <p className="card-text">{data.title}</p>
                                        <p className="card-text">{data.body}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Posts;