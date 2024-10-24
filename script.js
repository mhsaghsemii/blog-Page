// create elements section
const section = document.createElement("section");
        const headerDiv = document.createElement("div");
        const nav = document.createElement("nav");
        const navUl = document.createElement("ul");
        const titleDiv = document.createElement("div");
        const h1title = document.createElement("h1");
        const navLi1 = document.createElement("li");
        const navLi2 = document.createElement("li");
        const navLi3 = document.createElement("li");
        const navLink1 = document.createElement("a");
        const navLink2 = document.createElement("a");
        const navLink3 = document.createElement("a");
        const section2 = document.createElement("section");
        const blogDiv = document.createElement("div");
        const p = document.createElement("p");
        const detailDiv = document.createElement("div");
        const authorDiv = document.createElement("div");
        const h3 = document.createElement("h3");
        const a = document.createElement('a');
        const tagDiv = document.createElement("div");
        const firstA = document.createElement("a");
        const secondA = document.createElement("a");
        const section3 = document.createElement("section");
        const containerDiv2 = document.createElement("div");
        const commentsDiv = document.createElement("div");
        const h2 = document.createElement("h2");
        const span = document.createElement("span");
        const input = document.createElement("input");
        const button = document.createElement("button");
        const usersCommentsDiv = document.createElement("div");
        const ul = document.createElement("ul");
        // const li = document.createElement("li");
        const footer = document.createElement("footer");
        const footerDiv = document.createElement("div");
        const socialDiv = document.createElement("div");
        const containerDiv = document.createElement("div");

// creating blog using constructor function
function CreateBlog(title, descryption, author) {
    // setting values
    this.title = title;
    this.descryption = descryption;
    this.author = author;
    // this.comment = comment;
 
    // this method is for creating blog
    this.showBlog = function() {
        const section = document.createElement("section");
        const headerDiv = document.createElement("div");
        const nav = document.createElement("nav");
        const navUl = document.createElement("ul");
        const titleDiv = document.createElement("div");
        const h1title = document.createElement("h1");
        const navLi1 = document.createElement("li");
        const navLi2 = document.createElement("li");
        const navLi3 = document.createElement("li");
        const navLink1 = document.createElement("a");
        const navLink2 = document.createElement("a");
        const navLink3 = document.createElement("a");
        const section2 = document.createElement("section");
        const blogDiv = document.createElement("div");
        const p = document.createElement("p");
        const detailDiv = document.createElement("div");
        const authorDiv = document.createElement("div");
        const h3 = document.createElement("h3");
        const a = document.createElement('a');
        const tagDiv = document.createElement("div");
        const firstA = document.createElement("a");
        const secondA = document.createElement("a");
        const section3 = document.createElement("section");
        const containerDiv2 = document.createElement("div");
        const commentsDiv = document.createElement("div");
        const h2 = document.createElement("h2");
        const span = document.createElement("span");
        const input = document.createElement("input");
        const button = document.createElement("button");
        const usersCommentsDiv = document.createElement("div");
        const ul = document.createElement("ul");
        const li = document.createElement("li");
        const footer = document.createElement("footer");
        const footerDiv = document.createElement("div");
        const socialDiv = document.createElement("div");
        const containerDiv = document.createElement("div");
        
        
        // adding classes & appending elements
        section.classList.add("hero-section");
        headerDiv.classList.add("header");
        titleDiv.classList.add("title");
        section.appendChild(headerDiv);
        section.appendChild(titleDiv);
        headerDiv.appendChild(nav);
        titleDiv.appendChild(h1title);
        h1title.id = 'blog-title';
        h1title.textContent = this.title;
        titleDiv.appendChild(h1title);
        navUl.classList.add("menu");
        navLink1.classList.add("active");
        navLink1.textContent = "Weblogs";
        navLink2.textContent = "Connection";
        navLink3.textContent = "About";
        nav.appendChild(navUl);
        navLi1.appendChild(navLink1);
        navLi2.appendChild(navLink2);
        navLi3.appendChild(navLink3);
        navUl.appendChild(navLi1);
        navUl.appendChild(navLi2);
        navUl.appendChild(navLi3);
        headerDiv.appendChild(nav);
        section2.classList.add("blog-section");
        containerDiv.classList.add("container");
        containerDiv.classList.add("margin-top");
        section2.appendChild(containerDiv);
        blogDiv.classList.add("blog-desc");
        containerDiv.appendChild(blogDiv);
        p.classList.add("descryption");
        p.textContent = this.descryption;
        blogDiv.appendChild(p);
        detailDiv.classList.add("detail");
        blogDiv.appendChild(detailDiv);
        authorDiv.classList.add("blog-author");
        detailDiv.appendChild(authorDiv);
        h3.textContent = "by ";
        authorDiv.appendChild(h3);
        h3.textContent = 'by'
        a.classList.add("author");
        a.textContent = this.author;
        h3.appendChild(a);
        tagDiv.classList.add("tags");
        detailDiv.appendChild(tagDiv);
        firstA.classList.add("tag");
        secondA.classList.add("tag");
        firstA.textContent = "Green";
        secondA.textContent = 'lifestyle';
        tagDiv.appendChild(firstA);
        tagDiv.appendChild(secondA);
        section3.classList.add("comment-section");
        containerDiv2.classList.add("container");
        containerDiv2.classList.add("bgc-secondary");
        section3.appendChild(containerDiv2);
        commentsDiv.classList.add("comments");
        containerDiv2.appendChild(commentsDiv);
        h2.textContent = "Leave a comment";
        commentsDiv.appendChild(h2);
        span.textContent = "And join the communication";
        commentsDiv.appendChild(span);
        input.type = "text";
        input.placeholder = "WRITE A COMMENT";
        commentsDiv.appendChild(input);
        button.textContent = "Comment";
        // button.addEventListener("click", addComents);
        commentsDiv.appendChild(button);
        usersCommentsDiv.classList.add("users-comments");
        // containerDiv2.appendChild(usersCommentsDiv);
        commentsDiv.appendChild(usersCommentsDiv);
        usersCommentsDiv.appendChild(ul);
        // li.classList.add("blog-comments");
        // li.textContent = this.comment;
        // ul.appendChild(li);
        footerDiv.classList.add("footer");
        footer.appendChild(footerDiv);
        socialDiv.classList.add("social");
        footerDiv.appendChild(socialDiv);
        document.body.appendChild(section);
        document.body.appendChild(section2);
        document.body.appendChild(section3);
        document.body.appendChild(footer);
    }

    // getting comment method => this is method is for getting comment
    this.pushComment = function(comment){
        this.comment = comment;
        const li = document.createElement("li");
        li.classList.add("blog-comments");
        li.textContent = this.comment;
        ul.appendChild(li);
    }

    //this method is for showing comments in console
    this.getComment = function(){
        console.log(this.comment);
    }
    
   
}



// function addComents(e) {
//     e.preventDefault();
//     const li = document.createElement("li");
//     userNote = input.value;
//     li.textContent = userNote;
//     usersCommentsDiv.appendChild(li);
//     usersCommentsDiv.appendChild(ul);
// }





