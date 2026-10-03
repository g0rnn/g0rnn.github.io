// ```java title="Foo.java" 처럼 코드블럭 메타에 적은 제목을 코드 위에 표시한다.
export function transformerCodeTitle() {
  return {
    name: 'code-title',
    root(root) {
      const meta = this.options.meta?.__raw ?? '';
      const title = meta.match(/title=(?:"([^"]*)"|'([^']*)')/);
      if (!title) return;

      root.children = [
        {
          type: 'element',
          tagName: 'div',
          properties: { className: ['code-block'] },
          children: [
            {
              type: 'element',
              tagName: 'div',
              properties: { className: ['code-title'] },
              children: [{ type: 'text', value: title[1] ?? title[2] }],
            },
            ...root.children,
          ],
        },
      ];
    },
  };
}
