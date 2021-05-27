const router = require('express').Router();
const {
    getUserById, // GET a single user by its _id and populated thought and friend data
    getAllUsers, // GET all users
    createUser, // POST a new User
    updateUser,  // PUT to update a user by its _id
    addFriend, // POST to add a new friend to a user's friend list
    deleteUser, // DELETE to remove user by its _id
    deleteFriend // DELETE to remove a friend from a user's friend list
} = require('../../controllers/user-controller');

// Set up GET all and POST at /api/users
router
    .route('/')
    .get(getAllUsers)
    .post(createUser);

// Set up GET one, PUT, and DELETE at /api/users/:id
router
    .route('/:id')
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser);

// Setup add Friend and delete Friend at /api/users/:userId/friends/:friendId
router
    .route('/:id/friends/:friendId')
    .put(addFriend)
    .delete(deleteFriend)

module.exports = router;