import { createApp } from "vue";
import App from "./App.vue";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";

let instance;
function render(props) {
  const { container } = props;
  instance = container
    ? createApp(App).use(Antd).mount(container.querySelector("#app"))
    : createApp(App).use(Antd).mount("#app");
}

if (!window.__POWERED_BY_QIANKUN__) {
  render({});
}

export async function bootstrap(props) {
  console.log(props);
}

export async function mount(props) {
  console.log(props);
  render(props);
}

export async function unmount(props) {
  console.log(props);
  instance = null;
}
