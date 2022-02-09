export const formatNumber = (number) => {
    return number === undefined ? '' : number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export const convertTime =(UNIX_timestamp) => {
    const a = new Date(UNIX_timestamp * 1000);
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const year = a.getFullYear();
    const month = months[a.getMonth()];
    const date = a.getDate();
    const time =  month + ' ' + date + ', ' + year;
    return time;
};

export const filterCountries = (countries, search) => {
    return countries.find((country) => country.country === search || country.countryInfo.iso3 === search);
};