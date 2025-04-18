import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTransactionOrderIcon],svg[icon-park-transaction-order-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:rect width="30" height="36" x="9" y="8" fill="#2F88FF" stroke="#000" rx="2"></svg:rect><svg:path stroke="#000" stroke-linecap="round" d="M18 4V10"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M30 4V10"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M16 19L32 19"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M16 27L28 27"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M16 35H24"></svg:path></svg:g>`,
})
export class IconParkTransactionOrderIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
