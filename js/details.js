// javascript for details.html
const id = new URLSearchParams(window.location.search).get('id');
const container = document.querySelector('.details');

const renderDetails = async () => {
  const res = await fetch(`http://localhost:8000/posts/${id}`);
  const post = await res.json();
  console.log(post);

  const template = `
    <h1>${post.title}</h1>
    <p>${post.body}</p>
  `;
  container.innerHTML = template;
};

window.addEventListener('DOMContentLoaded', () => renderDetails());
