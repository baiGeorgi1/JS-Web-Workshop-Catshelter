const uniqId = require('uniqid');

const cats = [
    {
        id: "1234",
        image: "https://ichef.bbci.co.uk/news/976/cpsprodpb/12A9B/production/_111434467_gettyimages-1143489763.jpg",
        name: "Tom",
        description: "Dominant and aggressive to other cats. Will probably eat you in your sleep.",
        breed: "Bombay Cat"
    }, {
        id: "1234333",
        image: "https://cdn.pixabay.com/photo/2015/06/19/14/20/cat-814952_1280.jpg",
        name: "Britney",
        description: "Very cute cat.",
        breed: "Angora"
    }, {
        id: "1234111111",
        image: "https://cdn.pixabay.com/photo/2018/08/08/05/12/cat-3591348_1280.jpg",
        name: "Dexter",
        description: "Verry aggressive cat.",
        breed: "Siam"
    }, {
        id: "1234fddfdfv",
        image: "https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg",
        name: "Tiffany",
        description: "Love to sleep all day.",
        breed: "Persian Cat"
    }, {
        id: "1234sfdtvrver",
        image: "https://cdn.pixabay.com/photo/2014/04/13/20/49/cat-323262_1280.jpg",
        name: "John",
        description: "Agressive Cat",
        breed: "Persian Cat"
    }
];
const breedArr =
    ["Bombay Cat", "Persian Cat", "Siam", "Angora", "unknown"]
    ;

exports.getAllBreeds = () => breedArr.slice();
exports.getAll = (search) => {
    let result = cats.slice();
    if (search) {
        result = cats.filter(x => x.name.toLowerCase().includes(search.toLowerCase()));
    }
    return result;
};
exports.getCatById = (catId) => {
    const found = cats.find((x) => x.id === catId);
    return found;
};
exports.addBreed = ({ breed }) => {

    if (breed === '') {
        return;

    } else {

        if (breedArr.includes(breed)) {
            return;
        } else {
            breedArr.push(breed);
        }
    }
};
exports.addCat = (catData) => {
    const newCat = {
        id: uniqId(),
        ...catData
    };

    cats.push(newCat);

};
exports.put = (cat) => {
    //console.log(cat);
};
exports.edit = ({ cat, name, description, image, breed }) => {
    cat.name = name;
    cat.description = description;
    cat.image = image;
    cat.breed = breed;

    return cat;
};