import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsReceiptLineIcon],svg[majesticons-receipt-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M4 5a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v16a1 1 0 0 1-1.496.868L15.5 20.152l-2.012 1.15a3 3 0 0 1-2.976 0L8.5 20.151l-3.004 1.716A1 1 0 0 1 4 21V5zm3-1a1 1 0 0 0-1 1v14.277l2.004-1.145a1 1 0 0 1 .992 0l2.508 1.433a1 1 0 0 0 .992 0l2.508-1.433a1 1 0 0 1 .992 0L18 19.277V5a1 1 0 0 0-1-1H7z"></svg:path></svg:g>`,
})
export class MajesticonsReceiptLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
