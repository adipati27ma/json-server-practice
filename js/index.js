// javascript for index.html
const container = document.querySelector('.blogs');
const searchForm = document.querySelector('.search');

const renderPosts = async (term) => {
  // sorting by ...
  let uri = 'http://localhost:8000/posts?_sort=likes&_order=desc';
  if (term) {
    uri += `&q=${term}`;
  }

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

searchForm.addEventListener('submit', (e) => {
  e.preventDefault();
  renderPosts(searchForm.term.value.trim());
});

/* event object (e) gaakan langsung kepakai/kemasukkin di renderPosts(),
 karena pake arrow function */
window.addEventListener('DOMContentLoaded', () => renderPosts());
