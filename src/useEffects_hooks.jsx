import { useState, useEffect } from 'react';

const UseEffects = () => {
  // const [resourceType, setResourceType] = useState('posts');
  // const [items, setItems] = useState([]);
  // useEffect(() => {
  //   fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
  //     .then((response) => response.json())
  //     .then((json) => setItems(json));
  // }, [resourceType]);
  const [windowwidth, setWindwWidth] = useState(window.innerWidth);
  const handleResize = () => {
    setWindwWidth(window.innerWidth);

    //!When ever the component is unmounted the return function will be called for cleanup
    return () => {  
      window.removeEventListener('resize', handleResize);
    };
  };
  useEffect(() => {
    window.addEventListener('resize', handleResize);
  });
  return (
    <div>
      {/* <div className="flex justify-center my-8 space-x-3">
        <button
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          onClick={() => setResourceType('posts')}
        >
          Posts
        </button>
        <button
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          onClick={() => setResourceType('users')}
        >
          Users
        </button>
        <button
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          onClick={() => setResourceType('comments')}
        >
          Comments
        </button>
      </div>
      <div className="flex justify-center">
        <h1 className="text-7xl mb-5">{resourceType}</h1>
      </div>
      <div className="">
        {items.map((item) => {
          if (resourceType == 'posts') {
            return (
              <div className="my-8" key={item.id}>
                <span className="m-3">{item.userId}</span>
                <span className="m-3">{item.id}</span>
                <span className="m-3">{item.title}</span>
                <span className="m-3">{item.body}</span>
                <br />
              </div>
            );
          } else if (resourceType == 'users') {
            return (
              <div className="my-8" key={item.id}>
                <span className="m-3">{item.id}</span>
                <span className="m-3">{item.name}</span>
                <span className="m-3">{item.username}</span>
                <span className="m-3">{item.email}</span>
                <br />
              </div>
            );
          } else if (resourceType == 'comments') {
            return (
              <div className="my-8" key={item.id}>
                <span className="m-3">{item.postId}</span>
                <span className="m-3">{item.id}</span>
                <span className="m-3">{item.name}</span>
                <span className="m-3">{item.email}</span>
                <span className="m-3">{item.body}</span>
                <br />
              </div>
            );
          }
        })}
      </div> */}
      <h1 className="text-5xl">{windowwidth}</h1>
    </div>
  );
};

export default UseEffects;
