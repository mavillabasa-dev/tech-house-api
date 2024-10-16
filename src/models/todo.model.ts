import { Schema, model } from 'mongoose';

const todoSchema = new Schema({
  userId: { type: Number, required: true },
  id: { type: Number, required: true, unique: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  completed: { type: Boolean, required: true },
});

const Todo = model('Todo', todoSchema);
export default Todo;
