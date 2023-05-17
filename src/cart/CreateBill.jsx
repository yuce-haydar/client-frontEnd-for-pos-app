import { Card, Form, Input, Modal, Select } from "antd";
import React from "react";

const CreateBill = ({ isModalOpen, setIsModalOpen }) => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
      <Modal
        title="Fatura Oluştur"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form layout={"vertical"} name="billForm" onFinish={onFinish}>
          <Form.Item
            label="müşteri adı"
            rules={[{ required: true ,message:"ad girmek zorunlu"}]}
            name={"adSoyad"}
          >
            <Input placeholder="Müşteri Adı Giriniz"></Input>
          </Form.Item>
          <Form.Item
            label="Telefon Numarası"
            name={"telNo"}
            rules={[{ required: true, message: "telefon numarası zorunu" }]}
          >
            <Input placeholder="Müşteri Telefon Numarası Giriniz"></Input>
          </Form.Item>
          <Form.Item
            label="Ödeme Yöntemi"
            name={"payment"}
            rules={[{ required: true, message: "ödeme yöntemi zorunlu " }]}
          >
            <Select placeholder="Ödeme Yöntemini Seçiniz">
              <Select.Option value="Nakit">Nakit</Select.Option>
              <Select.Option value="KK">Kredi Kartı</Select.Option>
            </Select>
          </Form.Item>
          <div className="cart-total flex justify-end">
            <Card className="w-full py-1 ">
              <div className="flex justify-between">
                <span>Ara Toplam</span>
                <span>546₺</span>
              </div>
              <div className="flex justify-between">
                <span>KDV Toplam %8</span>
                <span className="text-red-700 font-bold">+43₺</span>
              </div>
              <div className="flex justify-between">
                <span className="font-bold"> Toplam</span>
                <span>546₺</span>
              </div>
              <button
                htmlType="submit"
                className="  ant-btn-primary mt-3 w-full p-2 rounded-lg text-white "
              >
                Sipariş Oluştur
              </button>
            </Card>
          </div>
        </Form>
      </Modal>
    </div>
  );
};

export default CreateBill;
