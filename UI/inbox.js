//selectors
document.querySelector('form').addEventListener('submit',handleSubmitForm);
document.querySelector('ul').addEventListener('click',handleClickUpdateorDelete)

//event handlers
function handleSubmitForm(e){
  e.preventDefault();
  let input=document.querySelector('input');
  if (input.value !='')
    createBlog(input.value);
  input.value='';
}

function handleClickUpdateorDelete(e){
  if(e.target.name =='updateButton')
    updateBlog(e);

  if(e.target.name =='deleteButton')
    deleteBlog(e);
}

//Helpers
function createBlog(blog){
  let ul = document.querySelector('ul');
  let li = document.createElement('li');

  li.innerHTML=`
  <span class="blog-item">${blog}</span>
  <button name="updateButton">Update</button>
  <button name="deleteButton"><i class="fas fa-trash"></i></button>
 `;
  
    
  li.classList.add('blog-list-item');
  ul.appendChild(li);
  }

  function updateBlog(e){
   let item =e.target.parentNode;
  }

  function deleteBlog(e){
    let item = e.target.parentNode;
    item.remove();
  }