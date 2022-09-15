import {useEffect, useState} from "react";
import axios from "axios";

const AxiosExample = () => {
    const baseURL = 'https://www.node-red.com/posts'

    const [post, setPost] = useState();

    useEffect(() => {
        axios.get(`${baseURL}`).then((response) => {
            setPost(response.data);
        });
    }, []);

    const createPost = () => {
        axios.post(baseURL, {
            title: 'hello world',
            body: 'this is a post'
        }).then((response) => {
            setPost(response.data);
        })
    }
}

export default AxiosExample;