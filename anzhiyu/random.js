var posts=["2024/04/14/hello-world/","2024/03/07/GNU-Linux-shell/","2024/03/21/test-1/","2024/03/02/数组/","2024/04/09/图像处理实验二/","2023/12/09/数据库复习/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };