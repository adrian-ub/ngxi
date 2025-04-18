import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiClutchBagIcon],svg[openmoji-clutch-bag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#A57939" d="M56.227 53.879H19.033a6.02 6.02 0 0 1-6.01-6.391l1.259-20.417a6.02 6.02 0 0 1 6.01-5.65h34.677a6.02 6.02 0 0 1 6.01 5.65l1.257 20.417a6.02 6.02 0 0 1-6.009 6.39"></svg:path><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"><svg:path stroke-width="2" d="M56.227 53.879H19.033a6.02 6.02 0 0 1-6.01-6.391l1.259-20.417a6.02 6.02 0 0 1 6.01-5.65h34.677a6.02 6.02 0 0 1 6.01 5.65l1.257 20.417a6.02 6.02 0 0 1-6.009 6.39"></svg:path><svg:path stroke-width="1.863" d="M17.365 30.018c.17-3.175 1.454-5.65 4.215-5.65h32.1c2.761 0 4.046 2.475 4.216 5.65"></svg:path><svg:path stroke-width="2" d="m13.292 21.757l-2.54-2.54"></svg:path></svg:g>`,
})
export class OpenmojiClutchBagIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
