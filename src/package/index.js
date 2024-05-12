// 导入组件
import vueTimeAxisDemo from './vueTimeAxisDemo'
// 组件添加数组
const coms = [vueTimeAxisDemo]
// 循环批量注册
const install = function (Vue) {
    coms.forEach(com => {
        Vue.component(com.name, com)
    });
}
// 导出
export default install