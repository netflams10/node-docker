import { router as route } from "@app/Providers/RouteServiceProver";

route.get("/", (_req, res) => {
  res.status(200).json("Hello World");
});

export default route;
