import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siGlyphDocumentEditIcon],svg[si-glyph-document-edit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M7.016.016v3.968h1.263L9.932 2.34z"></svg:path><svg:path d="M8.979 12.29c-1.511.585-3.757 1.467-4.021 1.594a1.3 1.3 0 0 1-.562.131a1.42 1.42 0 0 1-1.159-.631a1.39 1.39 0 0 1-.173-1.274c.088-.229.926-2.702 1.435-4.208l.078-.231l2.667-2.654H5.969V.012H.034V15.97h11.942V9.426l-2.793 2.786z"></svg:path><svg:path d="m14.682 3.91l-1.535-1.514c-.41-.408-1.218-.577-1.607-.189L5.485 8.234s-1.321 3.913-1.446 4.242c-.099.262.231.59.46.475c.374-.186 4.105-1.631 4.105-1.631l6.071-6.057c.39-.388.418-.946.007-1.353m-6.661 6.944l-2.567.974l-.461-.425l1.225-2.965l.741.546h1.058z"></svg:path></svg:g>`,
})
export class SiGlyphDocumentEditIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
