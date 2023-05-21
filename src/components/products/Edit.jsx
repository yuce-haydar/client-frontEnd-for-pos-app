import React, { useEffect, useState } from "react";
import {
  Button,
  Form,
  Input,
  Modal,
  Select,
  Space,
  Table,
  Tag,
  message,
} from "antd";

const Edit = ({ categories }) => {
  const [products, setProducts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingModal, setEditingModal] = useState({});

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const getProducts = async () => {
      const res = await fetch("http://localhost:5000/api/products/get-all");
      const data = await res.json();
      setProducts(data);
      console.log(data);
    };
    getProducts();
  }, []);

  const [form] = Form.useForm();

  const onFinish = (values) => {
    try {
      fetch("http://localhost:5000/api/products/add-product", {
        method: "POST",
        body: JSON.stringify(values),
        headers: { "Content-type": "application/json; charset=UTF-8" },
      });
      message.success("Kategori başarıyla eklendi.");
      form.resetFields();
      setProducts([
        ...products,
        {
          ...values,
          _id: Math.random(),
          price: Number(values.price),
        },
      ]);
    } catch (error) {
      console.log(error);
    }
  };

  const columns = [
    {
      title: "urun adi",
      dataIndex: "productName",
      key: "productName",
      render: (_, record) => <p>{record.title}</p>,
    },
    {
      title: "urun gorseli",
      dataIndex: "img",
      key: "img",
      render: (_, record) => (
        <img
          style={{ minHeight: "100px", height: "100px", width: "100px" }}
          src={record.img}
          alt=""
        ></img>
      ),
    },
    {
      title: "urun fiyati",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Kategori",
      dataIndex: "category",
      key: "category",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Button className="text-blue-600" onClick={()=>{
            setIsModalOpen(true)
            setEditingModal(record)
          }}>
            Edit{" "}
          </Button>
          <a className="text-red-900 hover:text-green-800">Delete</a>
        </Space>
      ),
    },
  ];

  return (
    <>
      <Table columns={columns} dataSource={products} />;
      <Modal
        title="urun duzenle"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={false}
      >
        <Form layout="vertical" onFinish={onFinish} form={form}>
          <Form.Item
            name="title"
            label="urun Ekle"
            rules={[{ required: true, message: "bu Alan Boş Geçilemez!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="img"
            label="urun resmi ekle"
            rules={[{ required: true, message: "bu  Alan Boş Geçilemez!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="price"
            label="urun fiyati Ekle"
            rules={[{ required: true, message: "bu  Alan Boş Geçilemez!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="category"
            label="kategori sec"
            rules={[
              {
                required: true,
                message: "Kategori secme Alanı Boş Geçilemez!",
              },
            ]}
          >
            <Select
              showSearch
              placeholder="Kategori sec"
              optionFilterProp="children"
              filterOption={(input, option) =>
                (option?.title ?? "").includes(input)
              }
              filterSort={(optionA, optionB) =>
                (optionA?.title ?? "")
                  .toLowerCase()
                  .localeCompare((optionB?.title ?? "").toLowerCase())
              }
              options={categories}
            />
          </Form.Item>
          <Form.Item className="flex justify-end mb-0">
            <Button type="primary" htmlType="submit">
              Oluştur
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default Edit;
