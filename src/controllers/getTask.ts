import { Request, Response } from "express";
import Todo from "../models/todo.model";
import { Task } from "../models/task.interface";

export const getAllTask = async (req: Request, res: Response): Promise<void> => {
  try {
    const page = parseInt(req.query.page as string) || 1; 
    const limit = parseInt(req.query.limit as string) || 3;

    const skip = (page - 1) * limit;

    const todos = await Todo.find().skip(skip).limit(limit);


    const totalTodos = await Todo.countDocuments();

    res.status(200).json({
      todos: todos.slice(0,3),
      currentPage: page,
      totalPages: Math.ceil(totalTodos / limit),
      totalTodos,
    });
  } catch (error) {
    res.status(500).json({ message: "Error fetching films data", error });
  }
};

export const addTodo = async (req: Request, res: Response): Promise<void> => {
  try {
    const { title, description, completed }: Task = req.body;

    const lastTodo = await Todo.findOne().sort({ id: -1 }); 
    const newId = lastTodo ? lastTodo.id + 1 : 1;

    const newTodo: Task = {
      userId: 1,
      id: newId,
      title,
      description,
      completed,
    };

    const createdTodo = await Todo.create(newTodo);
    res.status(201).json(createdTodo);
  } catch (error) {
    res.status(500).json({ message: "Error adding todo", error });
  }
};

export const removeTodo = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const deletedTodo = await Todo.findOneAndDelete({ id: parseInt(id) });

    if (deletedTodo) {
      res.status(200).json({ message: "Todo deleted successfully", deletedTodo });
    } else {
      res.status(404).json({ message: "Todo not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error removing todo", error });
  }
};
