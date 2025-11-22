var posts=["ysw/这是另一篇新的博文/","ysw/mysql学习记录/","ysw/这是一篇新的博文/","ysw/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };