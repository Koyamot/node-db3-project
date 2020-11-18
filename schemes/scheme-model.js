// scheme-model
const db = require('../data/db-config.js')


module.exports = {
    find,
    findById,
    findSteps
}

async function find() {
    try {
        return await db('schemes');
    } catch (err) {
        throw err;       
    }
}

async function findById(id) {
    try {
        const scheme = await db('schemes').where({id}).first();
        return scheme;
    } catch (err) {
       throw err; 
    }

}

async function findSteps(id) {
    try {
        const steps = await
            db('steps')
            .join('schemes', 'schemes.id', 'steps.schemeid')
            .where({id}).first();
        return steps;
    } catch (err) {
        throw err;
    }
}

async function add(scheme) {

}

async function update(changes, id) {

}

async function remove(id) {

}
