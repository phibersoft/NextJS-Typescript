import * as express from "express";

const router: express.Router = express.Router();
router.get("/hello", (req: express.Request, res: express.Response) =>
  res.json({ say: "Hi", developer: "PhiberSoft" })
);
module.exports = router;
