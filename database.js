
// Asynchronous database opening
import { Reader } from '@maxmind/geoip2-node';

const setup = (function () {
    let reader = null;
    return async () => {
        if(!reader) {
            reader = await Reader.open('./database/GeoLite2-City.mmdb');
        }
        return reader;
    }
})();

export default async function query(ip) {
    try {
        const reader = await setup();
        const response = reader.city(ip);
        // console.log(response.subdivisions);
        return response;
    } catch(ex) {
        console.error(ex.message);
        throw ex;
    }
}

//query('106.208.157.47')

// Synchronous database opening
// const fs = require('fs');
// const Reader = require('@maxmind/geoip2-node').Reader;

// const dbBuffer = fs.readFileSync('/path/to/maxmind-database.mmdb');

// // This reader object should be reused across lookups as creation of it is
// // expensive.
// const reader = Reader.openBuffer(dbBuffer);

// response = reader.city('128.101.101.101');

// console.log(response.country.isoCode);

//export default query;