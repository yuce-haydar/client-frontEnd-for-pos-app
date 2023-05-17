import { Card, Table } from 'antd';
import React, { useState } from 'react'
import PrintBill from '../components/bills/PrintBill';
import Header from '../components/Header/Header'

const BillsPage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const dataSource = [
        {
          key: '1',
          name: 'Mike',
          tel: 34656552,
          createdTime: "01.05.2001",
          paymentMethods:"KK",
          toplamFiyat:556,
          Actions:"yazdir"
        },
      
      ];
      const columns = [
        {
          title: 'Müşteri Adı',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'Telefon Numarasu',
          dataIndex: 'tel',
          key: 'tel',
        },
        {
          title: 'Oluşturma Tarihi',
          dataIndex: 'createdTime',
          key: 'createdTime',
        },
        {
          title: 'Ödeme Yöntemi',
          dataIndex: 'paymentMethods',
          key: 'paymentMethods',
        },
        {
          title: 'Toplam Fiyat',
          dataIndex: 'toplamFiyat',
          key: 'toplamFiyat',
        },
        {
          title: 'Actions',
          dataIndex: 'Actions',
          key: 'Actions',
          onclick:()=>showModal()
        },
      ];
      const showModal = () => {
        setIsModalOpen(true);
      };
  return (
      <>
      <Header></Header>
        <div>
        <Table className='px-4' dataSource={dataSource} columns={columns} />;
        <div className='flex justify-end'>
        <Card className='w-72 py-1    '>
    
     <button  onClick={showModal}  className= '   ant-btn-primary mt-3 w-full p-2 rounded-lg text-white '>Yazdır</button>
    </Card>
        </div>
        </div>
        <PrintBill isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
   </>


  )
}

export default BillsPage