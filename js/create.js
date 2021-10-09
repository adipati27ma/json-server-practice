// javascript for create.html
const form = document.querySelector('form');

const createPost = async (e) => {
  e.preventDefault();

  const doc = {
    title: form.title.value,
    body: form.body.value,
    likes: 0,
  };

  await fetch('http://localhost:8000/posts', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(doc),
  });

  window.location.replace('/');
};

/* tidak mengunakan arrow anonimous func. karena
ingin mengambil param event utk creattePost()*/
form.addEventListener('submit', createPost);
