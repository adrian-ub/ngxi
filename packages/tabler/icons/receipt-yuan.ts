import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerReceiptYuanIcon],svg[tabler-receipt-yuan-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16l-3-2l-2 2l-2-2l-2 2l-2-2zm4-9h6M9 7l3 4.5"></svg:path><svg:path d="m15 7l-3 4.5V16"></svg:path></svg:g>`,
})
export class TablerReceiptYuanIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
