const imageCreator = (imgData) => {
    const divImg = document.createElement('div');
    divImg.classList.add('image-box');
    const image = document.createElement('img');
    image.src = imgData.imgSrs;
    image.alt = imgData.imgName;
    let title = document.createElement('h6');
    title.innerText = imgData.imgTitle;

    divImg.append(image, title);
    return divImg;
};

export default imageCreator;
