// 验证是否已经登录的中间件
export default function ({ store, redirect }) {
    if (store.state.user) {
        // 如果已经登录，去到首页
        return redirect('/')
    }
}