import express from "express";
import path from "path";

const viewsRouter = express.Router();

// 페이지별로 html, css, js 파일들을 라우팅함
// 아래와 같이 하면, http://localhost:5000/ 에서는 views/home/home.html 파일을,
// http://localhost:5000/register 에서는 views/register/register.html 파일을 화면에 띄움

viewsRouter.use("/", serveStatic("home"));
viewsRouter.use("/register", serveStatic("register"));
viewsRouter.use("/login", serveStatic("login"));
viewsRouter.use("/userInfo/changeUserInfo", serveStatic("changeUserInfo"));
viewsRouter.use("/userInfo", serveStatic("userInfo"));
viewsRouter.use("/userInfo/userSignOut", serveStatic("userSignOut"));
viewsRouter.use("/product", serveStatic("product"));
viewsRouter.use("/product/product-detail", serveStatic("product-detail"));

viewsRouter.use("/new", serveStatic("newProductPage"));

viewsRouter.use("/userInfo/review", serveStatic("manageRating"));

viewsRouter.use("/manageNotice", serveStatic("manageNotice"));
viewsRouter.use("/noticeShow", serveStatic("noticeShow"));

viewsRouter.use("/admin", serveStatic("adminPage"));
viewsRouter.use("/admin/manageCategory", serveStatic("manageCategory"));
viewsRouter.use("/admin/manageProduct", serveStatic("manageProduct"));

// TODO:경로 재지정 필요
// 임시로 만든 이동
viewsRouter.use("/orderComplete", serveStatic("orderComplete"));
viewsRouter.use("/order", serveStatic("order"));
viewsRouter.use("/userOrderList", serveStatic("userOrderList"));
viewsRouter.use("/admin/adminOrderList", serveStatic("adminOrderList"));

viewsRouter.use("/cart", serveStatic("cart"));
// views 폴더의 최상단 파일인 rabbit.png, api.js 등을 쓸 수 있게 함
viewsRouter.use("/", serveStatic(""));

// views폴더 내의 ${resource} 폴더 내의 모든 파일을 웹에 띄우며,
// 이 때 ${resource}.html 을 기본 파일로 설정함.
function serveStatic(resource) {
  const resourcePath = path.join(__dirname, `../views/${resource}`);
  const option = { index: `${resource}.html` };

  // express.static 은 express 가 기본으로 제공하는 함수임
  return express.static(resourcePath, option);
}

export { viewsRouter };
