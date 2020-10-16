const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectSchema = new Schema(
  {
      title: {
          type: String,
          required: true
      },
      imageUrl: {
          type: String,
          required: true
      },
      tags: {
          type: [{
              type: String
          }],
          required: true
      }, 
      description: {
          type: String,
          required: true
      },
      githubUrl: {
          type: String,
          required: true
      },
      liveUrl: {
          type: String
      }
  }
);

module.exports = mongoose.model('Project', projectSchema);
