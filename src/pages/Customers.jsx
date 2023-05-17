import { Table } from 'antd';
import React from 'react'
import Header from '../components/Header/Header';

const Customers = () => {
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
  return (
      <div>
        <Header/>
        <h3 className='text-center text-4xl my-4 font-bold'>MÜŞTERİLER</h3>
  <Table className='mx-4' dataSource={dataSource} columns={columns} pagination={false} ></Table>
    </div>
  )
}

export default Customers