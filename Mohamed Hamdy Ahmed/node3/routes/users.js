const express = require("express");

const router =express.Router();

router.get("/:id", (req, res, next) => {
    res.json({user:req.params.id});
});

router.get("/", (req, res, next) => {
        const data = JSON.parse(fs.readFileSync("./data.json", {encoding: "utf-8"}));
        res.json(data);
    });
// router.use("/", express.static("static"));
// router.use(express.json());
router.get('/',(req, res, next) => {
    res.json([1,2,3])
}
);
module.exports=router;