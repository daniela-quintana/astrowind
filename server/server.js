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

// Ruta para obtener todos los posts
app.get('/api/posts', async (req, res) => {
  const posts = await BlogPost.find();
  res.json(posts);
});

// Ruta para la página principal
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/src/index.astro');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
