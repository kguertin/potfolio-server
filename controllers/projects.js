const fs = require('fs');
const path = require('path');


const nodeMailer = require('nodemailer');
const endGridTransport = require('nodemailer-sendgrid-transport');

const Project = require('../model/projects');
const { text } = require('body-parser');
const sendgridTransport = require('nodemailer-sendgrid-transport');

const transporter = nodeMailer.createTransport(sendgridTransport({
  auth: { api_key: ""}
}))

exports.getResume = (req, res, next) => {
    const src = fs.createReadStream(path.join('data', 'resume.pdf'));
    res.writeHead(200, {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename=resume.pdf',
        'Content-Transfer-Encoding': 'Binary'
      });
    
      src.pipe(res); 
}

exports.getProjects = async (req, res, next) => {
  const projects = await Project.find();
  res.status(200).json({projects})
}

exports.postEmail = async (req, res, next) => {
  const { subject, email, message } = req.body;
  const mailOptions = {
    from: 'kevin.m.guertin@gmail.com',
    to: 'kevinguertinwebdev@gmail.com',
    subject: subject,
    text: message,
    html: `<p>Contact Email: ${email}</p>`
  }
  transporter.sendMail(mailOptions, function(err, res) {
    if (err) {
      console.error('there was an error: ', err);
    } else {
      console.log('here is the res: ', res)
    }
  });
  res.status(200).json({msg: 'email sent.'});
}
