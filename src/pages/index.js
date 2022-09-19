import React from "react"
import Layout from "../components/Layout"

// 모든 페이지 컴포넌트는 default keyword 붙어야 함
// Link는 프로젝트 내부, a tag는 외부 리소스 접근시 사용
const Home = () => {
  return (
    <Layout>
      <h1>home page</h1>
    </Layout>
  )
}
export default Home
