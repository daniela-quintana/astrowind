// server.js
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

mongoose.connect('mongodb://127.0.0.1:27017/blogDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const blogSchema = new mongoose.Schema({
  title: String,
  description: String,
  image: String,
});

const BlogPost = mongoose.model('BlogPost', blogSchema);

// Ruta para la página principal
app.use('/', express.static('dist/index.html'));

// Ruta para obtener todos los posts
app.get('/api/posts', async (req, res) => {
  const posts = await BlogPost.find();
  res.json(posts);
});

app.get('/api/posts/:id', async (req, res) => {
  const reqId = req.params.id;
  const post = await BlogPost.findById(reqId);
  res.json(post)
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
