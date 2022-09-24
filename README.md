# tips

### hipsum: 로렘 택스트 생성 사이트

### react-icons: 쓸모 있는 아이콘들을 컴포넌트로 가져올 수 있음

### Gatsby에서 제공하는 (Link 컴포넌트에만 적용되는지는 모르겠지만)activeClassName을 넣어주면 활성화되었을때, 스타일링 편하게 할 수 있음

### StaticImage 컴포넌트는 여러 옵션이 있음

placeholder: 이미지가 다운 안되었을 경우 보여주는 간단한 이미지 형태
layout: constrained/ fixed/ fullWidth
className: wrapper - img 로 구성되어있는데 바깥의 클래스 지정

## graphql

localhost:8000/\_\_\_graphql

\`query {}\` 이렇게 작성 -> 안되는 경우 `gatsby clean`으로 캐시 비워줘야 함
\`query QueryName{}\` 이러면 유니크 해야함
pagequery는 같은 파일 내, 컴포넌트 밖에 작성하면 props로 받아올 수 있다.

# TODO

- tailwindCss
