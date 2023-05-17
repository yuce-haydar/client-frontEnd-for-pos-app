import { Card,  Table } from 'antd';
import React, { useState } from 'react'
import CreateBill from '../cart/CreateBill';
import Header from '../components/Header/Header';
const CartPage = () => {
  const dataSource = [
    {
      key: '1',
      name: 'Mike',
      age: 32,
      address: '10 Downing Street',
    },
    {
      key: '2',
      name: 'John',
      age: 42,
      address: '10 Downing Street',
    },
  ];
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
  ];
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  return (
    
    <div>
      <Header></Header>
      <div className="px-6 border">
        <Table dataSource={dataSource} columns={columns} pagination={false} ></Table>
        <div className="cart-total flex justify-end">
        <Card className='w-72 py-1 '>
     <div className="flex justify-between">
      <span >Ara Toplam</span>
      <span>546₺</span>
     </div>
     <div className="flex justify-between">
      <span>KDV Toplam %8</span>
      <span className='text-red-700 font-bold'>+43₺</span>
     </div>
     <div className="flex justify-between">
      <span className='font-bold'> Toplam</span>
      <span>546₺</span>
     </div>
     <button onClick={showModal}  className= '  ant-btn-primary mt-3 w-full p-2 rounded-lg text-white '>Sipariş Oluştur</button>
    </Card>
        </div>
      </div>
      <CreateBill isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} ></CreateBill>
    </div>

  )
}

export default CartPage