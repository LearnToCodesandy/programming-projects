import CalendarSection from "./components/CalendarSection";
import TodoSection from "./components/TodoSection";
import {TodosProvider} from "./context/TodosContext";
import {FilteredProvider} from "./context/FilteredContext";
import Modal from "./components/Modal";

function App() {

  return (
    <TodosProvider>
      <FilteredProvider>
    <div className="container">
        <Modal/>
      <div className="wrapper todo-container">
        <TodoSection/>
      </div>
     
      <div className="wrapper calendar-container">
        <CalendarSection/>
      </div>
    </div>
    </FilteredProvider>
    </TodosProvider>

  );
}

export default App;
