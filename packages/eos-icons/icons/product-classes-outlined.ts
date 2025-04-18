import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[eosIconsProductClassesOutlinedIcon],svg[eos-icons-product-classes-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="5" cy="19" r="1" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M4 4h2v9H4z"></svg:path><svg:path fill="currentColor" d="M7 2H3a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1m0 19H3V3h4Zm7-18v7h-3V3zm1-1h-5v9h5zm6 1v7h-3V3zm1-1h-5v9h5zm-8 12v7h-3v-7zm1-1h-5v9h5zm6 1v7h-3v-7zm1-1h-5v9h5z"></svg:path>`,
})
export class EosIconsProductClassesOutlinedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
