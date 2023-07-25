const insertChildAtIndex = (parentElement, childElement, index) => {
    // if index is 0 than just append it
    if (index === 0) {
        parentElement.prepend(childElement);
    } else {
        const referenceNode = parentElement.children[index];
        parentElement.insertBefore(childElement, referenceNode);
    }
};

export default insertChildAtIndex;
