import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerReceiptOffIcon],svg[tabler-receipt-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 21V5m2-2h10a2 2 0 0 1 2 2v10m0 4.01V21l-3-2l-2 2l-2-2l-2 2l-2-2l-3 2m6-14h4m-6 4h2m2 4h2m0-4v.01M3 3l18 18"></svg:path>`,
})
export class TablerReceiptOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
