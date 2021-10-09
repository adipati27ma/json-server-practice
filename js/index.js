// javascript for index.html
const container = document.querySelector('.blogs');

const renderPosts = async () => {
  // sort --> 'http://localhost:8000/posts?_sort=likes&_order=desc'
  let uri = 'http://localhost:8000/posts?_sort=likes&_order=desc';

  const res = await fetch(uri);
  const posts = await res.json();
  console.log(posts);

  let template = '';
  posts.forEach((post) => {
    template += `
      <div class="post">
        <h2>${post.title}</h2>
        <p><small>${post.likes} likes</small></p>
        <p>${post.body.slice(0, 198)}...</p>
        <a href="/details.html?id=${post.id}">read more</a>
      </div>
    `;
  });

  container.innerHTML = template;
};

/* event object (e) gaakan langsung kepakai/kemasukkin di renderPosts(),
 karena pake arrow function */
window.addEventListener('DOMContentLoaded', () => renderPosts());
