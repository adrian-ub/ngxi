import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsReceiptTextIcon],svg[majesticons-receipt-text-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3 5a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v16a1 1 0 0 1-1.625.78l-1.929-1.542l-2.391 1.594a1 1 0 0 1-1.18-.051L12 20.28l-1.875 1.5a1 1 0 0 1-1.18.051l-2.391-1.594l-1.93 1.543A1 1 0 0 1 3 21zm5 1a1 1 0 0 0 0 2h8a1 1 0 1 0 0-2zm0 4a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2zm0 4a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2z" clip-rule="evenodd"></svg:path>`,
})
export class MajesticonsReceiptTextIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
