const prisma = require("../DB/db.config");

const createPost = async (req, res) => {
  const { userId, title, description } = req.body;

  try {
    const newPost = await prisma.post.create({
      data: {
        user_id : Number(userId),
        title,
        description,
      },
    });

    res.json(newPost);
  } catch (error) {
    res.send({
      error: error.message,
    });
  }
};

const getPosts = async (req, res) => {
  try {
    const posts = await prisma.post.findMany({});

    res.json(posts);
  } catch (error) {
    res.json({
      error: error.message,
    });
  }
};

module.exports = {
  createPost,
  getPosts,
};
