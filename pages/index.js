import { useState } from 'react';
import Head from 'next/head';
import axios from 'axios';

const Home = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  async function handleSubmit(event) {
    event.preventDefault();
    // console.log('sunbmit!');
    const { data } = await axios.post('//localhost:3000/api/create-note', {
      title,
      content,
    });
    // const { name } = await q.json();

    //   console.log('result => ', name);
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">title</label>
          <input
            type="text"
            name="title"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="content">content</label>
          <textarea
            name="content"
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <div>
          <input type="submit" value="submit" />
        </div>
      </form>
    </div>
  );
};

export default Home;
