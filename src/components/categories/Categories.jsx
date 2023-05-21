import React, { useState } from "react";
import { PlusOutlined, EditOutlined } from "@ant-design/icons";

import Edit from "./Edit";
import Add from "./add";
const Categories = ({ categories, setCategories }) => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  return (
    <ul className="flex gap-4 flex-col  ">
      {categories.map((item) => (
        <li
          key={item._id}
          className="bg-green-600 px-6 py-10 text-white cursor-pointer hover:bg-pink-700 transition-all min-w-[145px] "
        >
          <span>{item.title}</span>
        </li>
      ))}

      <li
        onClick={() => {
          setIsAddModalOpen(true);
        }}
        className="bg-purple-700 r-600 px-6 py-10 text-white cursor-pointer hover:bg-pink-700 transition-all min-w-[145px] "
      >
        <PlusOutlined className="md:text-2xl" />
      </li>

      <li
        className="category-item !bg-orange-800 hover:opacity-90"
        onClick={() => setIsEditModalOpen(true)}
      >
        <EditOutlined style={{ height: "100px" }} className=" md:text-2xl" />
      </li>
      <Add
        isAddModalOpen={isAddModalOpen}
        setIsAddModalOpen={setIsAddModalOpen}
        categories={categories}
        setCategories={setCategories}
      />
      <Edit
        isEditModalOpen={isEditModalOpen}
        setIsEditModalOpen={setIsEditModalOpen}
        categories={categories}
        setCategories={setCategories}
      />
    </ul>
  );
};

export default Categories;
