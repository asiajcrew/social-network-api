const router = require('express').Router();
const {
  addComment,
  removeComment,
  addReply,
  removeReply
} = require('../../controllers/comment-controller');

// /api/comments/<userId>
router.route('/:userId').post(addComment);

// /api/comments/<userId>/<commentId>
router
  .route('/:userId/:commentId')
  .put(addReply)
  .delete(removeComment);

// /api/comments/<userId>/<commentId>/<replyId>
router.route('/:userId/:commentId/:replyId').delete(removeReply);

module.exports = router;
