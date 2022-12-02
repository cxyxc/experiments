// 我是一个 React 入口文件
import React from 'react'
import { createRoot } from 'react-dom/client';

function App() {
    return <div>Hello World</div>
}

const root = createRoot(<App />)

root.render(document.querySelector('#app'));