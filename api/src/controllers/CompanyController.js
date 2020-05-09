const mongoose = require('mongoose');

const Company = mongoose.model('Company');

module.exports = {
    async list(req, res) {
        try {
            const companies = await Company.find({});
            res.status(200).send(companies);
        }catch (error) {
            res.status(500).send({ error: 'Failed to load companies!' })
        }
    },

    async create(req, res) {
        const companies = await Company.create(req.body);
        return res.status(201).send(companies);
    },

    async update(req, res) {
        try {
            const companies = await Company.findByIdAndUpdate(req.params.id, req.body, { new:true });
            return res.json(companies);
        } catch (error) {
            return res.status(400).send({ error: 'Body not found' })
        }
    },
    
    async delete(req, res) {
        try {
            await Company.findByIdAndRemove(req.params.id);
            return res.send({ error: 'Company remove successful' });
        }catch (error) {
            res.status(404).send({ error: 'Company not found' })
        }
    },

}