// const getPost = async () => {
//      const res = await fetch ('https://jsonplaceholder.typicode.com/posts')
//      return res.json()
// }
const getPost = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) {
    throw new Error("Faild to fetch data");
  }
  return res.json();
};

// const getPost = async () => {
//      try{
//     const res = await fetch ('https://jsonplaceholder.typicode.com/posts')
//      return res.json()
//      }
//      catch(err){
//         throw new Error('Faild to fetch data')
//      }
// }

const PostsPage = async () => {
  // const res = await fetch ('https://jsonplaceholder.typicode.com/posts')
  // const data = await res.json()
  const data = await getPost();

  return (
    <div>
      <h1> {data.length} Posts are coming soon</h1>
    </div>
  );
};

export default PostsPage;
