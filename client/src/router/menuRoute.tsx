import Home from "../pages/home"
import Button from '../pages/button'
import Table from '../pages/table'
const menuRoute = [
  {
    path: '/home',
    name: '首页',
    menu: true,
    level: 1,
    element: <Home />,
  },
  {
    path: '/button',
    name: '按钮',
    level: 1,
    menu: true,
    element: <Button />,
  },
  {
    path: '/table',
    name: '表格类型',
    level: 1,
    element: <Table />,
    menu: true,
    children: [
      {
        path: '/table/table1',
        name: '表格1',
        level: 2,
        menu: true,
        element: <Table />,
      },
      {
        path: '/table/table2',
        name: '表格2',
        level: 2,
        menu: true,
        element: <Table />,
      },
      {
        path: '/table/table3',
        name: '表格3',
        level: 2,
        menu: true,
        element: <Table />,
      },
    ]
  },
]

export default menuRoute