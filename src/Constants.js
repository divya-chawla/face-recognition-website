// Constants.js
const prod = {
    url: {
        API_IMAGEURL: "https://afternoon-cliffs-12345.herokuapp.com/imageurl",
        c: "https://afternoon-cliffs-12345.herokuapp.com/image",
        API_REGISTER: "https://afternoon-cliffs-12345.herokuapp.com/register",
        API_SIGNIN: "https://afternoon-cliffs-12345.herokuapp.com/signin",
    }
};
const dev = {
    url: {
        API_IMAGEURL: "http://localhost:5000/imageurl",
        API_IMAGE: "http://localhost:5000/image",
        API_REGISTER: "http://localhost:5000/register",
        API_SIGNIN: "http://localhost:5000/signin",
    }
};

export const config = process.env.NODE_ENV === "production" ? prod : dev;