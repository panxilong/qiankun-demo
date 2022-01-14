import React from "react";
import {
  SmileOutlined,
  CrownOutlined,
  TabletOutlined,
  AntDesignOutlined,
} from "@ant-design/icons";

export default {
  route: {
    path: "/",
    routes: [
      {
        path: "/react",
        name: "React",
        component: "./Welcome",
      },
      {
        path: "/vue",
        name: "Vue",
        access: "canAdmin",
        component: "./Admin",
      },
      {
        path: "/angular",
        name: "Angular",
        component: "./ListTableList",
      },
    ],
  },
};
