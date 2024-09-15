import React from 'react';
import SimpleJSX from './components/Simple';
import DisplayArray from './components/DisplayArray';
import ShowHide from './components/ShowHide';
import EnableDisableButton from './components/EnableDisableButton';
import TwoWayBinding from './components/TwoWayBinding';
import AddChildComponents from './components/AddChild';
import SumTwoNumbers from './components/SumTwoNumbers';
import CounterComponent from './components/CounterComponent';
import FilteredArray from './components/FilteredArray';

function App() {
  return (
    <div className="App">
      <SimpleJSX />
      <DisplayArray />
      <ShowHide />
      <EnableDisableButton />
      <TwoWayBinding />
      <AddChildComponents />
      <SumTwoNumbers />
      <CounterComponent />
      <FilteredArray />
    </div>
  );
}

export default App;