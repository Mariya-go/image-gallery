import imageCreator from '../components/imageCreator.js';
import data from '../data.js';
import dom from '../dom.js';

const loadHandler = () => {
    data.images.forEach((imgData) => {
        const id = imgData.id;

        const isImgExistInDomArr = dom.imgsDom.filter(
            (img) => img.id === id,
        )[0];
        if (!isImgExistInDomArr) {
            const createdImg = imageCreator(imgData);
            dom.imgsDom.push({
                id: id,
                title: imgData.imgTitle,
                dom: createdImg,
            });
            dom.image.append(createdImg);
        }
    });

    // for (let i = 1; i < data.images.length; i++) {
    //     const images = imageCreator(data.images[i]);
    //     dom.image.append(images);
    // }
};

export default loadHandler;
