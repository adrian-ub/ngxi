import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[eosIconsMultistateIcon],svg[eos-icons-multistate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="4" cy="4" r="3" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M4 15a3 3 0 1 1 3-3a3 3 0 0 1-3 3m0-5a2 2 0 1 0 2 2a2 2 0 0 0-2-2m8 13a3 3 0 1 1 3-3a3 3 0 0 1-3 3m0-5a2 2 0 1 0 2 2a2 2 0 0 0-2-2m8-11a3 3 0 1 1 3-3a3 3 0 0 1-3 3m0-5a2 2 0 1 0 2 2a2 2 0 0 0-2-2"></svg:path><svg:circle cx="4" cy="20" r="3" fill="currentColor"></svg:circle><svg:circle cx="12" cy="4" r="3" fill="currentColor"></svg:circle><svg:circle cx="12" cy="12" r="3" fill="currentColor"></svg:circle><svg:circle cx="20" cy="12" r="3" fill="currentColor"></svg:circle><svg:circle cx="20" cy="20" r="3" fill="currentColor"></svg:circle>`,
})
export class EosIconsMultistateIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
