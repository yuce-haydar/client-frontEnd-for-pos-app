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

const Edit = () => {
  const [products, setProducts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState({});
  const [categories, setCategories] = useState([]);
  const [form] = Form.useForm();
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    console.log(editingItem);
    setIsModalOpen(false);
  };

  useEffect(() => {
    const getCategories = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/categories/get-all");
        const data = await res.json();
        data &&
          setCategories(
            data.map((item) => {
              return { ...item, value: item.title };
            })
          );
      } catch (error) {
        console.log(error);
      }
    };

    getCategories();
  }, []);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/products/get-all");
        const data = await res.json();
        data && setProducts(data);
      } catch (error) {
        console.log(error);
      }
    };

    getProducts();
  }, []);

  const handleDelete = (id) => {
    try {
      if (window.confirm("silmek istedigiinze emin misiniz ")) {
        fetch("http://localhost:5000/api/products/delete-product", {
          method: "DELETE",
          body: JSON.stringify({ productId: id }),
          headers: { "Content-type": "application/json; charset=UTF-8" },
        });
        message.success("urun  başarıyla silindi.");

        setProducts(products.filter((item) => item._id !== id));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onFinish = (values) => {
    try {
      fetch("http://localhost:5000/api/products/update-product", {
        method: "PUT",
        body: JSON.stringify({ ...values, productId: editingItem._id }),
        headers: { "Content-type": "application/json; charset=UTF-8" },
      });
      message.success("urun  başarıyla guncellendi.");
      form.resetFields();
      setProducts(
        products.map((item) => {
          if (item._id === editingItem._id) {
            return values;
          }
          return item;
        })
      );
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
          <Button
            className="text-blue-600"
            onClick={() => {
              setEditingItem(record);
              setIsModalOpen(true);
            }}
          >
            Edit{" "}
          </Button>
          <Button
            className="text-red-900 hover:text-green-800"
            onClick={() => {
              handleDelete(record._id);
            }}
          >
            Delete
          </Button>
        </Space>
      ),
    },
  ];
  useEffect(() => {
    if (isModalOpen) {
      form.setFieldsValue(editingItem);
    } else {
      form.resetFields();
    }
  }, [isModalOpen, editingItem, form]);

  return (
    <>
      <Table columns={columns} dataSource={products} />;
      <Modal
        title="urun duzenle"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={false}
        maskClosable={true}
      >
        <Form
          layout="vertical"
          onFinish={onFinish}
          form={form}
          initialValues={setEditingItem}
        >
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
              guncelle
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default Edit;
