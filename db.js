const spicedPG = require('spiced-pg');

const db = spicedPG("postgres:dim107:postgres@localhost:5432/signatures");

module.exports.addSignatures = (first, last, signature) => {
    return db.query(
        `
        INSERT INTO signatures (first, last, signature)
        VALUES ($1, $2, $3);
        `,
        [first, last, signature]
    );
};

module.exports.getSignatures = () => {
    return db.query(
        `
        SELECT * FROM signatures;
        `
    );
};