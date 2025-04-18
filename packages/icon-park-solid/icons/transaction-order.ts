import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidTransactionOrderIcon],svg[icon-park-solid-transaction-order-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSTransactionOrder0"><svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:rect width="30" height="36" x="9" y="8" fill="#fff" stroke="#fff" rx="2"></svg:rect><svg:path stroke="#fff" stroke-linecap="round" d="M18 4v6m12-6v6"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M16 19h16m-16 8h12m-12 8h8"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSTransactionOrder0)"></svg:path>`,
})
export class IconParkSolidTransactionOrderIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
