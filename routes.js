const routes = require('express').Router();
const axios = require('axios');
const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const ORCESTRA_API_URL = 'https://www.orcestra.ca/api/psets/canonical';

// GET endpoint /api/psets
routes.get('/api/psets', async (req, res) => {
    try {
        const response = await axios.get(ORCESTRA_API_URL);
        res.status(200).send(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
}); 

// database schema
const dataObjectSchema = new Schema(
    {
        datasetType: String,
        name: {
            type: String,
            required: true,
            trim: true
        },
        dataset: { type: mongoose.Schema.Types.ObjectId, ref: 'Dataset' },
        info: {
            status: {type: String, required: true},
            private: Boolean,
            canonical: Boolean,
            numDownload: Number,
            createdBy: String,
            email: String,
            shareToken: String,
            filteredSensitivity: Boolean,
            commitID: String,
            date: {
                submitted: Date,
                processed: Date,
                created: Date
            },
            other: Object
        },
        repositories: [{
            version: String,
            doi: String,
            downloadLink: Schema.Types.Mixed,
            bioComputeObject: {
                doi: String,
                downloadLink: String
            }
        }],
        availableDatatypes: [{
            name: String,
            genomeType: String,
            details: Object
        }]
    }
);

// create the dataobject
const DataObject = mongoose.model('DataObject', dataObjectSchema);

// configure to MongoDB Atlas
const uri = 'mongodb+srv://root:root@development-cluster-ptdz3.azure.mongodb.net/orcestra-new?retryWrites=true&w=majority';

mongoose.connect(uri).then(
    () => {
        console.log('MongoDB connection successful');
    },
    (err) => {
        console.error('MongoDB connection error:', err);
    }
);

// GET endpoint /api/pset-database
routes.get('/api/pset-database', async(req, res) => {
    try {
        const psets = await DataObject.find({});
        res.status(200).send(psets);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
});

module.exports = routes;