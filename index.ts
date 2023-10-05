import express from "express"
import bodyParser from "body-parser";

(async () => {
    const app = express();

    const port = process.env.PORT || 8082;

    app.use(bodyParser.json());

    app.get("/", async (req, res) => {
        res.send("Try GET /filteredimage?image_url={{}}")
    });

    app.listen( port, () => {
        console.log( `server running http://localhost:${ port }` );
        console.log( `press CTRL+C to stop server` );
    });
})();