

const List = () => import('@/components/List')
const Home = () => import('@/components/Home')
const Detail = () => import('@/components/Detail')
const Write = () => import('@/components/Write')

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
  {
    path: '/list',
    name: 'List',
    component: List,
  },
  {
    path: '/detail/:id',
    name: 'Detail',
    component: Detail,
  },
  {
    path: '/write',
    name: 'Write',
    component: Write,
  },
];


export default routes; 