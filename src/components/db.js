import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function db() {
    const [posts, setPosts] = useState([]);

    useEffect (() => {
        axios.get('http://localhost/firstproject/read.php').then(response => {
            setPosts(response.data);
        }).catch(error => {
            console.error('Error fetching posts:', error);
        });
    },[])
}
