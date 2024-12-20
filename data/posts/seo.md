2022.08.08.Mon.

- SEO

  - noindex: `<meta name="robots" content="noindex">`
    - 해당 페이지에 대한 색인을 제한하는 역할
    - 페이지에 대한 색인이란 해당 페이지에 대한 간략한 정보를 요악, 저장하는 것을 의미함
    - 로봇이 색인을 못하게 되면 해당 페이지에 대한 정보가 저장되지 않기 때문에 검색에서 제외
  - nofollow: `<meta name="robots" content="nofollow">`
    - 검색 로봇이 해당 페이지에 수록된 링크를 따라갈 수 없도록 제한
    - 페이지의 외부 링크에 대해 추적(크롤링)하지 않도록 검색 엔진에게 지시하는 역할.
    - 검색 로봇은 타겟 링크를 따라가지 않기 때문에 효율적인 검색을 방해할 수 있음
  - canonical: `<link rel="canonical" href="link">`

    - 중복되거나 유사한 서로 다른 url, 페이지들을 하나의 표준 페이지로 통합 설정해주는 태그
    - 쉽게 말해 정확도를 높여주는 속성
    - 따라서 `rel=canonical` 대상에 noindex 로봇 메타 태그가 포함되어 있는지 확인(메타 태그가 noindex로 설정된 경우 검색엔진이 크롤링을 할 수 없으므로 canonical 태그를 적용해도 소용 없게 되므로)
    - 페이지에 하나의 rel=canonical만 지정되었는지 확인(만약 하나의 페이지에 2개 이상의 rel=canonical이 설정된 경우 해당 페이지는 검색엔진이 무시)

  - 더 자세한 설명은 출처에.

- https://growthacking.kr/%EC%BA%90%EB%85%B8%EB%8B%88%EC%BB%AC-%ED%83%9C%EA%B7%B8-canonical-tag%EB%A1%9C-%EA%B2%80%EC%83%89%EC%97%94%EC%A7%84-%EC%B5%9C%EC%A0%81%ED%99%94%ED%95%98%EA%B8%B0/
