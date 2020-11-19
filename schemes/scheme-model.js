// scheme-model
const db = require('../data/db-config.js')


module.exports = {
    find,
    findById,
    findSteps,
    add,
    update,
    remove,
    addStep
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
            .where({ scheme_id: id })
            .orderBy('step_number')
        return steps;
    } catch (err) {
        throw err;
    }
}

async function add(schemeData) {
    try {
        const addScheme = await db('schemes').insert(schemeData)
        return addScheme;
    } catch (err) {
        throw err;
    }
}

async function update(changes, id) {
    try {
        const updated = await db('schemes').update(changes).where({ id })
        return updated;
    } catch (err) {
        throw err;
    }
}

async function remove(id) {
    try {
       const deleted = await db('schemes').where({ id }).del();
       return deleted; 
    } catch (err) {
        throw err;
    }
}

async function addStep(stepData, id) {
    try {
        const addStep = await db('steps').insert({ ...stepData, scheme_id: id})
        return addStep;
    } catch (err) {
        throw err;
    }
}
