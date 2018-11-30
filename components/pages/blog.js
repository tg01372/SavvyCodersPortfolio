// export default `<div class="container header" id="blog-header">
    
// <div class="blog" >
//     <h2>Today is the Day!</h2>

//     <p>Welcome to my offical blog page!  I am surrently leanring the basic principles of front end web development through the Savvy Coders programming course!  I am excited to be a part of this course and hope to take what I learn and expand upon it in the future!</p>
    
//     <h5>11/6/2018</h5>
// </div>

// <div class="blog" >

//         <p>Welcome to my offical blog page!  I am surrently leanring the basic principles of front end web development through the Savvy Coders programming course!  I am excited to be a part of this course and hope to take what I learn and expand upon it in the future!</p>
        
// </div>

// <div class="blog" >

//             <p>Welcome to my offical blog page!  I am surrently leanring the basic principles of front end web development through the Savvy Coders programming course!  I am excited to be a part of this course and hope to take what I learn and expand upon it in the future!</p>
            
// </div>

// </div>
// `

function mapPost(post) {
    return `
      <div class= "blog">
        <h3>${post.title}</h3>
        <p>${post.body}</p>
      </div>
  `;
}
export default function Blog(state) {
return state.posts.map(mapPost).join(""); // this condenses an Array into a String
  }