var posts=["2023/05/17/Java-GUI-音乐播放器/","2023/12/09/数据库复习/","2024/03/07/GNU-Linux-shell/","2024/04/24/hello-world/","2024/03/21/test-1/","2024/03/21/图像处理实验二/","2024/03/02/数组/","2024/06/30/21类鸟类准确定位/","2024/06/30/21类鸟类图像识别/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };