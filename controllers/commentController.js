const prisma = require("../DB/db.config");

const createComment = async (req, res) => {
  const { userId, postId, comment } = req.body;

  try {
    const newComment = await prisma.comment.create({
      data: {
        user_id : Number(userId),
        post_id : Number(postId),
        comment
      },
    });

    res.json(newComment);
  } catch (error) {
    res.send({
      error: error.message,
    });
  }
};

const getComments = async (req, res) => {
  try {
    const comments = await prisma.comment.findMany({
        include: {
          user: {
            select: {
              name: true
            }
          }
        }
      });

    res.json(comments);
  } catch (error) {
    res.json({
      error: error.message,
    });
  }
};

module.exports = {
  createComment,
  getComments
};
