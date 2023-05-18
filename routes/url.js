const express = require('express');
const { handleGenerateShortURL, handleGetAnalytics } = require('../controllers/url');
const URL = require('../models/url');

const router = express.Router();

/**
 * METHOD POST
 * INPUT: REQ
 * OUTPUT: RES
 * PATH: /
 */
router.post('/', handleGenerateShortURL);

// getALL data
/**
 * METHOD - GET
 * INPUT - REQUEST
 * OUTPUT - RESPONSE
 * PATH = '/'
 */
router.get("/allData", (req, res, next) => {
    URL.find()
      .then((response) => {
        if (response.length > 0) {
          return res.status(200).json({
            message: "Teams fetched successfully!!",
            response,
          });
        } else {
          return res.status(200).json({
            message: "Alas!! No Teams found",
            response,
          });
        }
      })
      .catch((error) => {
        return res.status(400).json({
          error: error,
        });
      });
  });
  
  /**
   * METHOD - GET
   * INPUT - REQUEST PARAMS{id}
   * OUTPUT - RESPONSE
   * PATH = '/'
   */




/**
 * METHOD GET
 * INPUT: REQ
 * OUTPUT: RES
 * PATH: /ANALYTICS
 */
router.get('/analytics/:shortId', handleGetAnalytics)

/**
 * ROUTER EXPORT
 */
module.exports = router;