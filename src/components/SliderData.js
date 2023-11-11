const importAll = (r) => {
    let images = {};
    r.keys().forEach((key, index) => (images[`project${index + 1}`] = r(key)));
    return images;
};

const projectImages = importAll(
    require.context('../images/projects', false, /\.(jpg)$/)
);

export const SliderData = Object.keys(projectImages).map((key) => ({
    image: projectImages[key],
}));