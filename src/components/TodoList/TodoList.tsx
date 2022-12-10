import React from "react";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "react-beautiful-dnd";

import { useAppSelector, useAppDispatch } from "../../assets/hooks.js";
import { selectFilter } from "../../redux/filter/filterSelectors.js";
import { TodoItem } from "../TodoItem/TodoItem.jsx";
import { shuffleList, TodoState } from "../../redux/todos/todosSlice.js";

const FILTER_MAP = {
  All: () => true,
  Active: (todo: TodoState) => !todo.completed,
  Completed: (todo: TodoState) => todo.completed,
};

export default function TodoList({ todoList }: { todoList: TodoState[] }) {
  const filter = useAppSelector(selectFilter);

  // const handleEnd = (result: DropResult) => {
  //   if (!result.destination) return;
  //   const items = Array.from(todoList);
  //   const [reorderedItem] = items.splice(result.source.index, 1);
  //   items.splice(result.destination.index, 0, reorderedItem);
  //   useAppDispatch(shuffleList(items));
  // };

  return (
    <ul className="w-full bg-white mt-4 rounded-t-xl">
      {todoList.filter(FILTER_MAP[filter]).map((todo) => (
        <TodoItem key={todo.id} data={todo} />
      ))}
    </ul>
  );
}

{
  /* <ul className="w-full bg-white mt-4 rounded-t-xl">
  {todoList.filter(FILTER_MAP[filter]).map((todo) => (
    <TodoItem key={todo.id} data={todo} />
  ))}
</ul>; */
}

{
  /* <DragDropContext onDragEnd={handleEnd}>
      <Droppable droppableId="to-dos">
        {(provided) => (
          <ul {...provided.droppableProps} ref={provided.innerRef}>
            {todoList.filter(FILTER_MAP[filter]).map((todo, index) => (
              <Draggable
                key={todo.id}
                draggableId={todo.id.toString()}
                index={index}
              >
                {(provided, snapshot) => (
                  <TodoItem
                    {...provided.draggableProps}
                    ref={provided.innerRef}
                    {...provided.dragHandleProps}
                    key={todo.id}
                    data={todo}
                  />
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
    </DragDropContext> */
}
