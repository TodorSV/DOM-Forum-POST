window.addEventListener("load", solve);

function solve() {
  const input = {
    title: document.getElementById("post-title"),
    category: document.getElementById("post-category"),
    content: document.getElementById("post-content"),
  };

  const lists = {
    review: document.getElementById("review-list"),
    published: document.getElementById("published-list"),
  };

  document.getElementById("publish-btn").addEventListener("click", publish);
  document.getElementById("clear-btn").addEventListener("click", clear);

  function publish(event) {
    event.preventDefault();

    // read input fields
    const title = input.title.value;
    const category = input.category.value;
    const content = input.content.value;
    // validate input fields
    if (title === "" || category === "" || content === "") {
      return;
    }

    // Create list items and add functionality to buttons

    const li = document.createElement("li");
    li.className = "rpost";
    li.innerHTML = `<article>
    <h4>${title}</h4>
    <p>Category: ${category}</p>
    <p>Content: ${content}</p> 
    </article>
  
    <button class="action-btn edit">Edit</button>
    <button class="action-btn approve">Approve</button>`;

    // Add func to buttons
    const editBtn = li.querySelector(".edit");
    const approveBtn = li.querySelector(".approve");
    editBtn.addEventListener("click", edit);
    approveBtn.addEventListener("click", approve);

    // append list items to the correct list
    lists.review.appendChild(li);
    // clear input fields
    input.title.value = "";
    input.category.value = "";
    input.content.value = "";

    function edit() {
      // Inpit values in fileds
      input.title.value = title;
      input.category.value = category;
      input.content.value = content;

      // remove from review list
      li.remove();
    }

    function approve() {
      // Move list item from first to second list
      lists.published.appendChild(li);
      // Remove action buttons
      editBtn.remove();
      approveBtn.remove();
    }
  }

  function clear() {
    // Set second list to empty string
    lists.published.innerHTML = "";
  }
}


// Your Task
// Write the missing JavaScript code to make the Forum work as expected:
// All fields (title, category, and content) are filled with the correct input
// ⦁	Title, category, and content are non-empty strings. If any of them are empty, the program should not do anything.

// ⦁	Getting the information from the form

// When you click the ["Publish"] button, the information from the input fields must be added to the ul with the id "review-list" and then clear input fields.    
// The HTML structure looks like this:

 

 

// ⦁	Edit information for posts
// When the ["Edit"] button is clicked, the information from the post must be sent to the input’s fields and the record should be deleted from the ul "review-list". 
  
// After editing the information make a new record to the ul with updated information.
  

// ⦁	Approve posts
// When you click the ["Approve"] button, the record must be deleted from the ul with id "review-list"and appended to the ul with the id "published-list"
// The buttons [“Edit”] and [“Approve”] should be removed from the li element.
  
// ⦁	Clear posts
// When you click the ["Clear"] button, the record for all posts must be deleted from the ul with the id "published-list".

