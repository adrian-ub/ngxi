import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageExchangeBIcon],svg[mage-exchange-b-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M19.75 6.75h-12a4 4 0 0 0-4 4v2m16-1v2a4 4 0 0 1-4 4h-12"></svg:path><svg:path d="m16.75 9.75l3-3l-3-3m-10 11l-3 3l3 3"></svg:path></svg:g>`,
})
export class MageExchangeBIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
