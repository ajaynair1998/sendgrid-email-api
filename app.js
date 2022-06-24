const sgMail = require("@sendgrid/mail");
const moment = require("moment");
require("dotenv").config();

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

let currentTime = moment().format("LLL");

const msg = {
	to: "ajayarunnair@gmail.com", // Change to your recipient
	from: "ajay@leaguex.com", // Change to your verified sender
	subject: `Test mail sent at ${currentTime}`,
	text: `Mail was sent using sendgrid api at ${currentTime}`,
	html: "<strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</strong>",
};

async function sendTestMail() {
	try {
		await sgMail.send(msg);
		console.log("Mail was send");
	} catch (err) {
		console.log(err);
	}
}

sendTestMail();
