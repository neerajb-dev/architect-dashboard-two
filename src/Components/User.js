import React, { useEffect, useState } from "react";
import axios from "axios";

const User = () => {

    const [user_list, setUserList] = useState([])
    useEffect(() => {
        console.log("test")
        getUserList()
    }, [])

    const getUserList = () => {

        axios.get("https://jsonplaceholder.typicode.com/users")
            .then(res => {
                // console.log(res.data)
                if (res.data) {
                    setUserList(res.data)
                }
            })
            .catch()
    }
    console.log(user_list);
    return (
        <div className="container">
            <div className="row">
                {
                    user_list.map((data, index) => {
                        return (
                            <div className="col-sm-4 my-3">
                                <div className="card">
                                    <div className="card-body">
                                        <div>{data.name}</div>
                                        <div>{data.phone}</div>
                                        <div>{data.website}</div>
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

export default User;