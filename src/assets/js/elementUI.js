// import Vue from 'vue';
import {
  Button,
  Select,
  Option,
  Menu,
  Submenu,
  MenuItem,
  Input,
  Form,
  FormItem,
  Row,
  Col,
  Table,
  TableColumn,
  MenuItemGroup,
  Pagination,
  Loading,
} from 'element-ui';

const loadElement = (vue) => {
  const components = [
    Button,
    Select,
    Option,
    Menu,
    Submenu,
    MenuItem,
    Input,
    Form,
    FormItem,
    Row,
    Col,
    Table,
    TableColumn,
    MenuItemGroup,
    Pagination,
    Loading,
  ];
  components.map(it => vue.use(it));
};
export default loadElement;
