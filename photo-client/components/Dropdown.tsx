import { Listbox, ListboxButton, ListboxOption, ListboxOptions, Transition } from '@headlessui/react'

interface place {
  location: string;
}

interface DropdownProps {
  places: place[];
  selectedPlace: place;
  setSelectedPlace: (value: place) => void;
}

function Dropdown({places, selectedPlace, setSelectedPlace} : DropdownProps) {
  return (
    <Listbox value={selectedPlace} onChange={setSelectedPlace}>
      <ListboxButton className={'flex text-xl w-44 h-11 jost items-center justify-around bg-[#D5C4AF] rounded-lg'}>
        location
        <img className={''} src={'/icons/dropdown.svg'} alt={'dropdown icon'}></img>
      </ListboxButton>
      <Transition leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0">
        <ListboxOptions anchor="bottom" className={'[--anchor-gap:4px] w-44 bg-white rounded-lg drop-shadow-md'}>
          {places.map((place, i) => (
            <ListboxOption key={i} value={place} className="hover:bg-black/[.1] w-full text-xl jost flex justify-between px-4 py-1">
              {place.location}
              {selectedPlace.location == place.location && 
                (<img className={''} src={'/icons/checkmark.svg'} alt={'dropdown icon'}></img>
              )}
            </ListboxOption>
          ))}
        </ListboxOptions>
      </Transition>
    </Listbox>
  )
}

export default Dropdown