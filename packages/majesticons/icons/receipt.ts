import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsReceiptIcon],svg[majesticons-receipt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill-rule="evenodd" clip-rule="evenodd" d="M7 2a3 3 0 0 0-3 3v16a1 1 0 0 0 1.496.868L8.5 20.152l2.012 1.15a3 3 0 0 0 2.976 0l2.012-1.15l3.004 1.716A1 1 0 0 0 20 21V5a3 3 0 0 0-3-3H7z" fill="currentColor"></svg:path></svg:g>`,
})
export class MajesticonsReceiptIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
