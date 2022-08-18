import React from "react";
// import {useParams} from 'react-router-dom'
// import {Routes,Route} from 'react-router-dom'

function Post() {
  // const params = useParams()
  return (
    <div>
      <h1>Post </h1>
      {/* Dynamic Routes */}
      {/* <h1>Post {params.id}</h1> */}

      {/* After post if you want to add another path like /show then  and in app.js also have to add asterik in path*/}
      {/* <Routes>
        <Route path='/show' element={<h1>Hello World</h1>} />
      </Routes> */}
    </div>
  );
}

export default Post;

// For using useParams hook
