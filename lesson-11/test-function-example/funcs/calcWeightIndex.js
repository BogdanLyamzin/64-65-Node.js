const calcWeightIndex = (weight, height) => {
    if(weight === undefined && height === undefined) {
        throw new Error('weight and height required')
    }

    if(height === undefined) {
        throw new Error('height required')
    }

    if(height > weight) {
        throw new Error('weight must be first argument and height - second')
    }

    const result = weight / (height ** 2);

    return Number(result.toFixed(2));
}

module.exports = calcWeightIndex;