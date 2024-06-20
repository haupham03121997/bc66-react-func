import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PostItem from './PostItem';
import { data } from 'autoprefixer';
import Skeleton from './Skeleton';

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [userID, setUserID] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const getPostsListApi = async (userID) => {
    setIsLoading(true);
    const baseUrl = 'https://jsonplaceholder.typicode.com/posts';
    const url = !userID ? baseUrl : `${baseUrl}?userId=${userID}`;

    try {
      const { data } = await axios.get(url);
      // console.log('data', data);
      setPosts(data);
      // setIsLoading(false);
    } catch (error) {
      console.log('error', error);
      // setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    // call api posts
    getPostsListApi();
  }, []);

  useEffect(() => {
    getPostsListApi(userID);
  }, [userID]);

  const handleOnchange = (event) => {
    console.log('event', event);
    setUserID(event.target.value);
  };

  return (
    <div>
      <div className="flex justify-between items-center">
        <h3 className="text-3xl font-medium">PostList</h3>

        <select
          id="userId"
          className={`w-40 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
          onChange={handleOnchange}
          disabled={isLoading}
        >
          <option selected>Choose a UserID</option>
          <option value="1">User ID 1</option>
          <option value="2">User ID 2 </option>
          <option value="3">User ID 3 </option>
          <option value="4">User ID 4 </option>
          <option value="5">User ID 5 </option>
        </select>
      </div>
      <div className="grid grid-cols-4 gap-4 mt-6">
        {isLoading && Array.from({ length: 8 }, (_, index) => <Skeleton key={`skeleton-${index}`} />)}
        {!isLoading && posts.map((post) => <PostItem key={post.id} post={post} />)}
      </div>
    </div>
  );
};

export default PostList;
