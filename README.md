# Vutienluc Docs

Chuyển đổi file Word, PowerPoint, Excel, PDF, EPUB, RTF, ODT và CSV thành
Markdown chuẩn GitHub — hoàn toàn ngay trên trình duyệt. Không có gì được tải
lên máy chủ; toàn bộ quá trình chuyển đổi chạy cục bộ qua WebAssembly.

**Bản chạy thử:** _(thêm URL Vercel của bạn vào đây sau khi deploy)_

## Định dạng hỗ trợ

`docx` &middot; `pptx` &middot; `xlsx` &middot; `odt` &middot; `rtf` &middot;
`epub` &middot; `pdf` (dạng văn bản) &middot; `csv`

## Phát triển

```bash
npm install
npm run dev      # chạy dev server cục bộ
npm run build    # build bản production vào dist/
npm run preview  # xem thử bản production
```

## Triển khai

Đây là trang tĩnh dựng bằng [Vite](https://vitejs.dev), triển khai lên
[Vercel](https://vercel.com) mà không cần cấu hình gì thêm: import repo vào
Vercel, nó sẽ tự nhận diện Vite (build command `npm run build`, thư mục output
`dist`).

## Ghi công

Phần lõi chuyển đổi tài liệu được cung cấp bởi
[anydoc](https://github.com/firecrawl/anydoc), một thư viện Rust mã nguồn mở
của [Firecrawl](https://firecrawl.dev), được dùng ở đây qua bản dịch
WebAssembly của nó
([`@firecrawl/anydoc-wasm`](https://www.npmjs.com/package/@firecrawl/anydoc-wasm),
giấy phép MIT). Repo này là một giao diện độc lập, đã đổi thương hiệu, xây
dựng trên nền thư viện đó — toàn bộ công lao cho phần lõi chuyển đổi thuộc về
dự án anydoc.

## Giấy phép

MIT — xem [LICENSE](LICENSE).
