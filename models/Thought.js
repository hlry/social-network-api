const { Schema, model } = require('mongoose');
const moment = require('moment');

// Reaction schema subdocument
const ReactionSchema = new Schema({
    reactionID: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId()
    },
    reactionBody: {
        type: String,
        required: true,
        maxlength: 280
    },
    username: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (createdAtVal) => moment(createdAtVal).format('MMM DD, YYYY [at] hh:mm a')

    }
},
    {
        toJSON: {
            getters: true
        }
    }
);

// Thought schema
const ThoughtSchema = new Schema({
    thoughtText: {
        type: String,
        trim: true,
        required: 'Thought is required',
        // must be between 1 and 280 characters
        minlength: 1,
        maxlength: 280
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: createdAtVal => moment(createdAtVal).format('MMM DD, YYYY [at] hh:mm a')
    },
    username: {
        type: String,
        required: 'Username is required'
    },
    reactions: [ReactionSchema]
},
    {
        toJSON: {
            getters: true
        },
        // prevent duplicating _id as 'id'  
        id: false
    }
);

//Create a virtual called reactionCount that retrieves the length of the thought's reactions array 
//field on query.
ThoughtSchema.virtual("reactionCount").get(function () {
    return this.reactions.length;
});

// create the Thought model using the ThoughtSchema
const Thought = model('Thought', ThoughtSchema);

// export the Thought model
module.exports = Thought;