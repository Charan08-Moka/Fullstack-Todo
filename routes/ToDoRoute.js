const {Router} = require("express");
const { getToDo, saveToDo, updateToDo, deleteToDo, markTodoCompleted,  } = require("../controllers/ToDocontroller");
const { updateSearchIndex } = require("../models/ToDoModel");

const router = Router()

router.get('/', getToDo)
router.post('/save', saveToDo)
router.post('/update', updateToDo)
router.post('/delete', deleteToDo)
/* router.put('/:id/markCompleted', markTodoCompleted); */ 


module.exports = router;