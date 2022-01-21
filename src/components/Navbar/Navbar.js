import { BsArrowLeftShort } from "react-icons/bs";


const Navbar = ({onClick , time}) => {
  return (
    <div className="w-full shadow-md md:shadow-sm bg-white">
      <div className="md:w-9/12 w-10/12 py-5 md:px-3 mx-auto flex justify-between items-center">
        <button
          className="text-gray-500 rounded-full transition-all hover:bg-gray-100"
          onClick={() => onClick(0)}
        >
          <BsArrowLeftShort size={32} />
        </button>
        <p className="text-right md:text-base text-sm">
          {`Aded on ${time.format("YYYY/MM/D hh:mm")}`}
        </p>
      </div>
    </div>
  );
};

export default Navbar;
