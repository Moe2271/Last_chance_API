import express from 'express';
import resize from '../utils/sharp';
import validate from '../middlewares/validate';

const routes = express.Router();
//the first is a String and the rest are integers
routes.get('/:img/:height/:width', (req, res) => {
  if (
    validate.validate(
      req.params.img,
      parseInt(req.params.height),
      parseInt(req.params.width)
    )
  ) {
    if (
      !validate.exists(
        req.params.img,
        parseInt(req.params.height),
        parseInt(req.params.width)
      )
    ) {
      resize(
        req.params.img,
        parseInt(req.params.height),
        parseInt(req.params.width)
      );

      setTimeout(() => {
        res.sendFile(
          `/${req.params.width} ${req.params.height} ${req.params.img}`,
          { root: './Thumnail' }
        );
      }, 1000);
    } else {
      res.sendFile(
        `./Thumnail/${req.params} ${req.params.height} ${req.params.img}`,
        { root: './Thumnail' }
      );
    }
  } else {
    res.send("Sorry, you've entered unvalid input");
  }
});

export default {
  routes,
};
