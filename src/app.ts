import express, { Express, Request, Response } from "express";
import "reflect-metadata";
import { AppDataSource } from "./database/ormConfig";
import bodyParser from "body-parser";
import cors from "cors";
import { User } from "./entities/User.entity";
import { Profile } from "./entities/Profile.entity";

const app: Express = express();

app.use(cors());
app.use(bodyParser.json());

AppDataSource.initialize()
  .then(async () => {
    console.log("Database connection successfully");
  })
  .catch((err) => {
    console.log(err);
  });

app.get("/hello", (req, res, next) => {
  return res.status(200).json({
    message: "Hello world",
  });
});

app.get("/", async (req: Request, res: Response) => {
//   let profileRepo = AppDataSource.getRepository(Profile);
  let userRepo = AppDataSource.getRepository(User);

//   let profile = new Profile();
//   (profile.gender = "male"), (profile.skill = "photo editor");

// //   let savedProfile = await profileRepo.save(profile);

//   let user = new User();
//   user.firstName = "syam";
//   user.lastName = "srikar";
//   user.isActive = true;
//   user.profile = profile ; 

//   let savedUser = await userRepo.save(user);

//   await profileRepo.update(1,{gender:"female"}); 

let allUsers = await userRepo.find()
 

  res.json(allUsers)
});

export default app;
