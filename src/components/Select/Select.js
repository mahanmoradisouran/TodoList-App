import { Fragment, useEffect, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { SelectorIcon } from "@heroicons/react/solid";

const type = [
  { name: "Task type", color: "#E5E7EB98" },
  { name: "Home", color: "#8B5CF698" },
  { name: "typeal", color: "#EC489998" },
  { name: "school", color: "#34D39998" },
  { name: "Work", color: "#F59E0B98" },
];

export default function Select({ updateSelectedInputType, SelectedType }) {
  
  useEffect(() => {
    function setNewColor() {
      const newType = type.find((t) => t.name === SelectedType);
      setSelected(newType);
    }

    if (SelectedType !== undefined) {
      setNewColor();
    }
  });

  const [selected, setSelected] = useState(type[0]);

  const updateSelected = (e) => {
    const index = type.findIndex((element) => e.name === element.name);
    updateSelectedInputType(e.name);
    setSelected(type[index]);
  };

  return (
    <Listbox value={selected} onChange={updateSelected}>
      <div className="md:w-full relative  z-50">
        <Listbox.Button className="flex hover:border-indigo-600 hover:ring-indigo-600 md:border-2 border relative w-full md:py-2 py-2.5 pr-10 text-left bg-transparent rounded-md cursor-default focus:outline-none focus-visible:border-indigo-500 border-gray-200 ring-1 ring-gray-200 md:ring-0 md:border-transparent">
          <span
            style={{ backgroundColor: selected.color }}
            className="w-5 h-5 p-1 rounded-full mx-2"
          >
            <div className="w-3 h-3 bg-white rounded-full"></div>
          </span>
          <span className="truncate text-sm text-gray-400">
            {selected.name}
          </span>
          <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
            <SelectorIcon
              className="w-5 h-5 text-gray-400"
              aria-hidden="true"
            />
          </span>
        </Listbox.Button>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options className="absolute right-0 w-60 py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {type.map((type, typeIdx) => (
              <Listbox.Option
                key={typeIdx}
                className={({ active }) =>
                  `${active ? "bg-indigo-600 text-white" : "text-gray-900"}
                            cursor-default select-none relative py-2 pl-7 pr-4 hover:bg-indigo-600 hover:text-white`
                }
                value={type}
              >
                {({ Selected, active }) => (
                  <div>
                    <span
                      className={`${
                        Selected ? "font-medium" : "font-normal"
                      } flex truncate`}
                    >
                      <span
                        style={{ backgroundColor: type.color }}
                        className="w-5 h-5 p-1 rounded-full mr-2"
                      >
                        <div className="w-3 h-3 rounded-full bg-white"></div>
                      </span>
                      {type.name}
                    </span>
                  </div>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  );
}
