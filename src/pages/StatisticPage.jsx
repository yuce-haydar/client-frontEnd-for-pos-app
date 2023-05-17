import React, { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import StatisticCard from "../components/statistic/StatistiCard";
import { Area, Pie } from "@ant-design/plots";
const StatisticPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch(
      "https://gw.alipayobjects.com/os/bmw-prod/360c3eae-0c73-46f0-a982-4746a6095010.json"
    )
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log("fetch data failed", error);
      });
  };

  const data2 = [
    {
      type: '分类一',
      value: 27,
    },
    {
      type: '分类二',
      value: 25,
    },
    {
      type: '分类三',
      value: 18,
    },
    {
      type: '分类四',
      value: 15,
    },
    {
      type: '分类五',
      value: 10,
    },
    {
      type: '其他',
      value: 5,
    },
  ];

  const config = {
    data,
    xField: "timePeriod",
    yField: "value",
    xAxis: {
      range: [0, 1],
    },
  };

  const config2 = {
    appendPadding: 10,
    data: data2,
    angleField: "value",
    colorField: "type",
    radius: 1,
    innerRadius: 0.6,
    label: {
      type: "inner",
      offset: "-50%",
      content: "{value}",
      style: {
        textAlign: "center",
        fontSize: 14,
      },
    },
    interactions: [
      {
        type: "element-selected",
      },
      {
        type: "element-active",
      },
    ],
    statistic: {
      title: false,
      content: {
        style: {
          whiteSpace: "pre-wrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        },
        content: "AntV\nG2Plot",
      },
    },
  };

  return (
    <>
      <Header />
      <div>
        <h3 className="text-center text-4xl my-4 font-bold">İSTATİSTİKLER</h3>
        <div className="statistic-section">
          <h2 className="text-lg">
            Hoş Geldin Admin
          </h2>
          <div className="statistic-cards grid  xl:grid-cols-4 md:grid-cols-2 gap-10 my-10 mx-4">
            <StatisticCard img={"images/user.png"} title={"Toplam Müşteri"} value={6} ></StatisticCard>
            <StatisticCard img={"images/money.png"} title={"Toplam Kazanç"} value={6} ></StatisticCard>
            <StatisticCard img={"images/user.png"} title={"Toplam Satıi"} value={6} ></StatisticCard>
            <StatisticCard img={"images/user.png"} title={"Toplam ürün"} value={6} ></StatisticCard>
            </div>
            <div className="flex justify-between gap-10 lg:flex-row flex-col items-center">
            <div className="lg:w-1/2 lg:h-full h-72">
              <Area {...config} />
            </div>
            <div className="lg:w-1/2 lg:h-full h-72">
              <Pie {...config2} />
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default StatisticPage;
