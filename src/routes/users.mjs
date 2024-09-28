import { Router } from "express";
import {
  getUserByIdHandler,
  getUsersHandler,
  postUsersHandler,
  putUserByIdHandler,
  deleteUserByIdHandler,
} from "../controllers/users.mjs";

const usersRouter = Router();

usersRouter.route("/").get(getUsersHandler).post(postUsersHandler);

usersRouter
  .route("/:userId")
  .get(getUserByIdHandler)
  .put(deleteUserByIdHandler)
  .delete(putUserByIdHandler);

export default usersRouter;
