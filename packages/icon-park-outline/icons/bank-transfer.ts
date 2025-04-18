import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineBankTransferIcon],svg[icon-park-outline-bank-transfer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:rect width="40" height="28" x="4" y="10" rx="2"></svg:rect><svg:path stroke-linecap="round" d="M4 20h40M4 17v6m40-6v6m-15 6h8"></svg:path></svg:g>`,
})
export class IconParkOutlineBankTransferIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
