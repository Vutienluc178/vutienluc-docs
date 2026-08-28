# Vutienluc Docs

Chuyển đổi file Word, PowerPoint, Excel, PDF, EPUB, RTF, ODT và CSV thành
Markdown chuẩn GitHub — hoàn toàn ngay trên trình duyệt. Không có gì được tải
lên máy chủ; toàn bộ quá trình chuyển đổi chạy cục bộ qua WebAssembly.

**Bản chạy thử:** https://vutienluc-docs.vercel.app

## Định dạng hỗ trợ

`docx` &middot; `pptx` &middot; `xlsx` &middot; `odt` &middot; `rtf` &middot;
`epub` &middot; `pdf` (dạng văn bản) &middot; `csv`

## Nhận diện công thức toán (tuỳ chọn, qua Mathpix)

Mặc định, `anydoc` chỉ trích xuất text thô từ PDF — công thức toán (vốn
thường được vẽ bằng các glyph định vị, không phải text thật) sẽ ra ký hiệu
lộn xộn thay vì LaTeX sạch.

Trang có thêm một lựa chọn bật/tắt "Nhận diện công thức toán" dùng
[Mathpix](https://mathpix.com) để xử lý PDF thành Markdown kèm LaTeX
(`$...$` / `$$...$$`). Do endpoint `v3/pdf` của Mathpix bắt buộc dùng khoá
vĩnh viễn (`app_id`/`app_key`) — không dùng được token tạm thời an toàn cho
trình duyệt — ba serverless function nhỏ trong `api/` chỉ đóng vai trò
relay: chuyển tiếp yêu cầu kèm khoá do chính người dùng nhập (lưu trong
`localStorage` của họ, không lưu ở server) sang Mathpix, không lưu trữ gì.

Khi bật tính năng này, file PDF sẽ rời khỏi máy người dùng để qua Mathpix xử
lý — không còn chạy 100% cục bộ nữa. Người dùng cần tài khoản Mathpix riêng
(có phí theo trang) và PDF nên nhỏ hơn khoảng 4&nbsp;MB do giới hạn kích
thước request của Vercel Serverless Functions.

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
