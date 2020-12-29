import React from 'react';
import DropdownMultiselect from './components/DropdownMultiselect/DropdownMultiselect';

export default function App() {
  return (
    <>
      <DropdownMultiselect
        onSelect={(option) => {
          console.log(option);
        }}
        defaultValue="Выберите"
        options={[
          { value: 'Ты', id: 0 },
          { value: 'Не ты', id: 1 },
          { value: 'Он', id: 2 },
          { value: 'Она', id: 3 },
          { value: 'Мы', id: 4 },
        ]}
      />
      <DropdownMultiselect
        onSelect={(option) => {
          console.log(option);
        }}
        options={[
          { value: 'Ты', id: 0, selected: true },
          { value: 'Не ты', id: 1 },
          { value: 'Он', id: 2, selected: true },
          { value: 'Она', id: 3 },
          { value: 'Мы', id: 4 },
        ]}
      />
    </>
  );
}
