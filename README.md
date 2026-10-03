# gornn blog

[Astro](https://astro.build)와 [Tailwind CSS](https://tailwindcss.com)로 만든 블로그입니다.

## 개발

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # dist/ 에 정적 파일 생성
npm run preview  # 빌드 결과 미리보기
```

## 글 쓰기

`src/content/blog/<YYYY-MM-DD-이름>/index.mdx` 를 만들고, 글에 쓰는 이미지는 같은 폴더에 둡니다.

```mdx
---
title: 글 제목
description: 글 목록과 검색 결과에 보이는 요약
slug: url-slug          # https://g0rnn.github.io/url-slug/
date: 2026-10-03
tags: [Java]
keywords: [Java]
---
import { Image } from 'astro:assets';
import diagram from './diagram.png';

<figure>
  <Image src={diagram} width={400} alt="다이어그램" />
  <figcaption>출처: ...</figcaption>
</figure>

> 강조하고 싶은 내용
```

- 마크다운 이미지 `![설명](./a.png)` 도 그대로 쓸 수 있습니다.
- 코드블럭에 ```` ```java title="Foo.java" ```` 처럼 제목을 붙일 수 있습니다.
- 인용문: 마크다운 `>` 는 회색 카드 스타일입니다. 다른 스타일이 필요하면 `<Quote type="center">핵심 문장</Quote>`(위아래 선 + 가운데 정렬) 또는 `<Quote type="minimal">...</Quote>`(얇은 회색 선)를 쓰세요. `Quote` 도 import 없이 쓸 수 있습니다.
- 형광펜 강조: `<span class="bg-green">텍스트</span>` (yellow, green, blue, pink, purple, orange, light-green)

## 배포

`main` 브랜치에 push 하면 GitHub Actions가 빌드해서 GitHub Pages에 배포합니다.
