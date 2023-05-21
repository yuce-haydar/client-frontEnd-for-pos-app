import { Button, Form, Input, message, Modal, Select } from "antd";
import React from "react";

const Add = ({
  isAddModalOpen,
  setIsAddModalOpen,
  categories,
  setProducts,
  products
}) => {
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

  return (
    <Modal
      title="Yeni urun Ekle"
      open={isAddModalOpen}
      onCancel={() => setIsAddModalOpen(false)}
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
          rules={[{ required: true, message: "Kategori secme Alanı Boş Geçilemez!" }]}
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
  );
};

export default Add;
