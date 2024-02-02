import React from 'react';
import { useSelector } from 'react-redux';
import boardIcon from '../assets/icon-board.svg';

const HeaderDropDown = ({ setOpenDropDown }) => {
  const boards = useSelector((state) => state.boards);
  console.log('boards', boards);

  return (
    <div
      className="py-10 px-6 absolute left-0 right-0 bottom-[-100vh] top-16 bg-[#00000080]"
      onClick={(e) => {
        if (e.target !== e.currentTarget) {
          return;
        }
        setOpenDropDown(false);
      }}
    >
      {/* Dropdown Modal */}
      <div className="bg-white dark:bg-[#2b2c37] shadow-md shadow-[#364e721a] w-full py-4 rounded-xl">
        <h3 className="dark:text-gray-300 text-gray-600 font-semibold mx-4 mb-8">
          All Boards ({boards.length})
        </h3>
        <div>
          {boards.map((board, index) => (
            <div
              className={`flex items-baseline space-x-2 px-5 py-4 ${
                board.isActive && 'bg-[#2b2c37] text-white rounded-r-full mr-8'
              }`}
              key={index}
            >
              <img src={boardIcon} alt="board icon" className="h-4" />
              <p className="font-bold text-lg">{board.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeaderDropDown;
