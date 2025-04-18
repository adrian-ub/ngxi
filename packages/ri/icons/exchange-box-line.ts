import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riExchangeBoxLineIcon],svg[ri-exchange-box-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.005 5.003v14h16v-14zm-1-2h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-18a1 1 0 0 1-1-1v-16a1 1 0 0 1 1-1m9 6v-3l5 5h-9v-2zm-5 4h9v2h-4v3z"></svg:path>`,
})
export class RiExchangeBoxLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
