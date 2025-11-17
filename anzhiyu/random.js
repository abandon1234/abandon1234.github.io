var posts=["2025/11/17/hello-world/","2025/11/17/这是一篇新的博文/","2025/11/17/这是另一篇新的博文/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };