import React from "react"
import { Link } from "gatsby"

// 모든 페이지 컴포넌트는 default keyword 붙어야 함
// Link는 프로젝트 내부, a tag는 외부 리소스 접근시 사용
export default function Home() {
  return (
    <div>
      <h1>Hello People!</h1>
      <div>
        <Link to="/about">ABOUT</Link>
      </div>
      <div>
        <Link to="/company/history">history</Link>
      </div>
      <div>
        <Link to="/about">ABOUT</Link>
      </div>
      <a href="/about">reg link</a>
    </div>
  )
}
