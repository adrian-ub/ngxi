import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riExchangeBoxFillIcon],svg[ri-exchange-box-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.005 3.003h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-18a1 1 0 0 1-1-1v-16a1 1 0 0 1 1-1m9 6h-4v2h9l-5-5zm-5 4l5 5v-3h4v-2z"></svg:path>`,
})
export class RiExchangeBoxFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
