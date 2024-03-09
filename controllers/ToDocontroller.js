const ToDoModel = require('../models/ToDoModel')

module.exports.getToDo = async (req,res) => {
    const toDo = await ToDoModel.find()
    res.send(toDo)
}

module.exports.saveToDo = async(req,res) => {
    const { text } = req.body
    

    ToDoModel
        .create({ text })
        .then((data) => {
        console.log("Added Successfully!!");
        console.log(data);
        res.send(data)
    })
}

module.exports.updateToDo = async(req,res) => {
    const {_id, text} = req.body
    ToDoModel
    .findByIdAndUpdate(_id,{text})
    .then(()=> res.send("Updated Succcessfully!!"))
    .catch((err) => console.log(err))
}

module.exports.deleteToDo = async(req,res) => {
    const {_id } = req.body
    ToDoModel
    .findByIdAndDelete(_id)
    .then(()=> res.send("Deleted Succcessfully!!"))
    .catch((err) => console.log(err))
}

/* module.exports.markTodoCompleted = async (req, res) => {
    const { id } = req.params;

    try {
        const todo = await ToDoModel.findById(id);
        if (!todo) {
            return res.status(404).json({ error: 'Todo not found' });
        }
        todo.completed = true;
        await todo.save();
        res.json(todo);
    } catch (error) {
        console.error('Error marking todo as completed:', error);
        res.status(500).json({ error: 'Failed to mark todo as completed' });
    }
} */ 

/* module.exports.markTodoCompleted = async (req, res) => {
    const { id } = req.params;

    try {
        const todo = await ToDoModel.findById(id);
        if (!todo) {
            return res.status(404).json({ error: 'Todo not found' });
        }
        todo.completed = true;
        await todo.save();
        res.json(todo);
    } catch (error) {
        console.error('Error marking todo as completed:', error);
        res.status(500).json({ error: 'Failed to mark todo as completed' });
    }
}; */