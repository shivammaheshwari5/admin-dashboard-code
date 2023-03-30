import styles from "./Dashboard.module.css";
import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import axios from "axios";

function Dashboard() {
  const [orders, setOrders] = useState([]);

  const [lists, setLists] = useState([]);

  const [data, setData] = useState([
    {
      name: "Latest Hits",
      data: [43, 20, 39, 46, 86, 66, 80],
    },
    {
      name: "Latest Hits",
      data: [88, 70, 79, 56, 50, 55, 72],
    },
    {
      name: "Featured",
      data: [32, 47, 38, 21, 55, 75, 70],
    },
  ]);

  const [month, setMonth] = useState({
    chart: {
      background: "#435c70",
      foreColor: "#fff",
    },
    xaxis: {
      categories: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
      ],
    },
    yaxis: {
      title: { text: "Hits" },
    },
    plotOptions: {
      bar: {
        horizontal: true,
      },
    },
    fill: {
      borderColor: ["#fff"],
    },
    dataLabels: {
      enables: false,
    },
    title: {
      text: "Latest Hits",
      align: "center",
      margin: 20,
      offsetY: 20,
      style: {
        fontSize: "20px",
      },
    },
  });
  const [data2, setData2] = useState([
    {
      name: "# of Hits",
      data: [40, 44, 28, 38, 58, 34, 48],
    },
  ]);

  const [color, setColor] = useState({
    chart: {
      background: "#435c70",
      foreColor: "#fff",
    },
    xaxis: {
      categories: [
        "Aqua",
        "Blue",
        "Green",
        "Orange",
        "Purple",
        "Red",
        "Yellow",
      ],
    },
    plotOptions: {
      bar: {
        horizontal: true,
      },
    },
    fill: {
      borderColor: [
        "Aqua",
        "Blue",
        "Green",
        "Orange",
        "Purple",
        "Red",
        "Yellow",
      ],
    },
    dataLabels: {
      enables: false,
    },
    title: {
      text: "Largest Us",
      align: "center",
      margin: 20,
      offsetY: 20,
      style: {
        fontSize: "20px",
      },
    },
  });

  const orderData = JSON.parse(localStorage.getItem("data"));

  useEffect(() => {
    setOrders(orderData.dasbhoardPage.orders);
    setLists(orderData.dasbhoardPage.notifications);
  }, []);

  return (
    <div>
        <div className={styles.welcome}>
        <h3 >
        Welcome back,<b>Admin</b>
      </h3>
        </div>
     

      <div className={styles.dasbhoardPage}>
        <div className={styles.latestHit}>
          <Chart
            options={month}
            series={data}
            type="line"
            height="300"
            width="100%"
          />
        </div>
        <div className={styles.performance}>
          <Chart
            options={color}
            series={data2}
            type="bar"
            height="300"
            width="100%"
          />
        </div>
        <div className={styles.storageChart}>
          <Chart
            options={{
              chart: {
                background: "#435c70",
                foreColor: "#fff",
              },
              title: {
                text: "Storage Information",
              },
              labels: ["available", "system", "used"],
            }}
            series={[9.15, 6.5, 18.24]}
            type="pie"
            height="300"
            width="100%"
          />
        </div>
        <div className={styles.notificationListDiv}>
          <div className={styles.notification}>
            <h3 className={styles.noteHeading}>Notification Lists</h3>
            <div className={styles.listsDiv}>
              {lists.map((list, key) => (
                <div key={key} className={styles.list}>
                  <div className={styles.imageDiv}>
                    <img className={styles.Image} src={list.pic} />
                  </div>
                  <div className={styles.messageDiv}>
                    <p className={styles.msg}>{list.message}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className={styles.mainTableDiv}>
          <h3 className={styles.orderHeading}>Orders Lists</h3>
          <div className={styles.productTableDiv}>
            <table className={styles.productTable}>
              <thead className={styles.tableHead}>
                <tr>
                  <th className={styles.th}>ORDER NO.</th>
                  <th className={styles.th}>STATUS</th>
                  <th className={styles.th}>OPERATORS</th>
                  <th className={styles.th}>LOCATION</th>
                  <th className={styles.th}>DISTANCE</th>
                  <th className={styles.th}>START DATE</th>
                  <th className={styles.th}>EST DELIVERY DUE</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order, key) => (
                  <tr key={key} className={styles.tablerow}>
                    <td className={styles.tableData}>{order.orderNo}</td>
                    <td className={styles.tableData}>{order.status}</td>
                    <td className={styles.tableData}>{order.operators}</td>
                    <td className={styles.tableData}>{order.location}</td>
                    <td className={styles.tableData}>{order.distance}</td>
                    <td className={styles.tableData}>{order.startDate}</td>
                    <td className={styles.tableData}>{order.deliveryDate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
