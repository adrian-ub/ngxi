import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsReceiptTextLineIcon],svg[majesticons-receipt-text-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h8m-8 4h8m-8 4h4m8 6V5a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v16l2.5-2l3 2l2.5-2l2.5 2l3-2z"></svg:path>`,
})
export class MajesticonsReceiptTextLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
