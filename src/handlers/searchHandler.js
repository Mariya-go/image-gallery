import dom from '../dom.js';
import insertChildAtIndex from '../components/insertChildAtIndex.js';

const searchHandler = (value) => {
    dom.imgsDom.forEach((imgInArr) => {
        //check if img already exist in dom
        const imgExistInDom = document.getElementById(imgInArr.id);

        // if we have value > 2 char
        if (value.length > 2) {
            if (!imgInArr.title.toLowerCase().includes(value.toLowerCase())) {
                imgInArr.dom.remove();
            } else {
                if (!imgExistInDom) {
                    insertChildAtIndex(
                        dom.image,
                        imgInArr.dom,
                        imgInArr.id - 1,
                    );
                }
            }
            // if no some img found
            const allImgsSelected = document.querySelectorAll('image-box');
            if (allImgsSelected.length === 0) {
                dom.massage.innerHTML =
                    "<h3>We don't find any images with tis title</h3>";
                dom.image.append(dom.massage);
            } else {
                dom.massage.remove();
            }
        } else {
            dom.massage.remove();
            if (!imgExistInDom) {
                insertChildAtIndex(dom.image, imgInArr.dom, imgInArr.id - 1);
            }
        }
    });
};

export default searchHandler;
