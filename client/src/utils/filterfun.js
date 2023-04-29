const filterfun = (dat, filter) => {
    return dat.filter(d => d.name.toLowerCase().includes(filter.toLowerCase()));
}

export default filterfun;