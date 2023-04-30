/**
 * Filters an array of objects based on a given filter string.
 * @param {Array} dat - An array of objects to be filtered.
 * @param {string} filter - A string used to filter objects based on their name property.
 * @returns {Array} - An array of objects that contain the filter string in their name property, case-insensitive.
 */

const filterfun = (dat, filter) => {
    return dat.filter(d => d.name.toLowerCase().includes(filter.toLowerCase()));
}

export default filterfun;
