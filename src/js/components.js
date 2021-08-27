import '../css/components.css';
 import webpacklogo from '../assets/img/webpack-logo.png';

export const sayHello = (name) => {

    console.log('Creating tag h1');

    const h1 = document.createElement('h1');
    h1.innerText = `Hello, ${name}`;

    document.body.append(h1);

    // Img
    console.log(webpacklogo);
    const img = document.createElement('img');
    img.src = webpacklogo;
    document.body.append(img);
}