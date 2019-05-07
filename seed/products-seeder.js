var Product = require('../models/product');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/shopping', { useNewUrlParser: true })
    .then(() => {
        console.log("Connected to db...");
    })
    .catch((err) => {
        console.log(err);
        
    })

var products = [
    new Product({
        imagePath: 'https://timedotcom.files.wordpress.com/2014/07/301386_full1.jpg',
        title: 'Harry Potter',
        description: 'He is brave and kind.',
        price: 10
    }),
    new Product({
        imagePath: 'https://i2-prod.mirror.co.uk/incoming/article7414149.ece/ALTERNATES/s615b/Hermione-Granger-in-Warner-Bros-Pictures-fantasy-Harry-Potter-and-the-Half-Blood-Prince.jpg',
        title: 'Hermoine Granger',
        description: 'She is smart and beautiful.',
        price: 20
    }),
    new Product({
        imagePath: 'https://fsmedia.imgix.net/b3/c0/e1/b5/bb7d/47fe/80bc/5eafe2598c96/ron-weasley-sad-person.jpeg?rect=0%2C54%2C1024%2C512&auto=format%2Ccompress&w=650',
        title: 'Ron Weasley',
        description: 'He is loyal and idiot.',
        price: 30
    }),
    new Product({
        imagePath: 'https://vignette.wikia.nocookie.net/somethingwickedrp/images/1/17/Ginny3.jpg/revision/latest?cb=20160816154813',
        title: 'Ginny Weasley',
        description: 'She is brave and smart.',
        price: 10
    }),
    new Product({
        imagePath: 'https://vignette.wikia.nocookie.net/harrypotter/images/7/7e/Draco_Malfoy_TDH.png/',
        title: 'Draco Malfoy',
        description: 'He is evil and stupid.',
        price: 20
    }),
    new Product({
        imagePath: 'https://images.ctfassets.net/bxd3o8b291gf/Mam68Vfou2OO6kqEcyW8W/a9abc28e1e15bdd7d57f6257f3fed897/LunaLovegood_WB_F6_LunaLovegoodInQuibblerSpecsOnHogwartsExpress_Still_080615_Port.jpg',
        title: 'Luna Lovegood',
        description: 'She is smart and vicious.',
        price: 30
    })

]

var done = 0;
for (var i = 0; i < products.length; i++) {
    products[i].save((err, product) => {
        if (err) {
            console.log(err);
        } else {
            done++;
            if(done === products.length) {
                exit();
        }
        }
    })
}

function exit() {
    mongoose.disconnect();
}