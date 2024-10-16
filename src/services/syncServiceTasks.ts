import cron from "node-cron";
import axios from "axios";
import Todo from "../models/todo.model";
import { getRandomDescription } from "../utils";

export const fetchData = async (url: string) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error(`Error fetching data from ${url}:`, error);
  }
};

const syncTodos = async () => {
  console.log("Starting todos synchronization...");

  let todosData = await fetchData("https://jsonplaceholder.typicode.com/todos/");

  if (todosData && Array.isArray(todosData)) {
    const todosWithDescription = todosData.map((todo: any) => ({
      ...todo, 
      description: getRandomDescription(),
    }));

    try {
      await Todo.deleteMany({});
      await Todo.insertMany(todosWithDescription.slice(0,3));

      console.log("Todos data synchronized");
    } catch (error) {
      console.error("Error during todos synchronization:", error);
    }
  }

  console.log("Todos synchronization completed.");
};

// Configura el cron job para que se ejecute cada día a la medianoche
cron.schedule("0 0 * * *", () => {
  syncTodos();
});

export default syncTodos;
