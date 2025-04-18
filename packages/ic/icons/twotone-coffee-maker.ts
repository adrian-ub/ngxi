import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icTwotoneCoffeeMakerIcon],svg[ic-twotone-coffee-maker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 19c1.65 0 3-1.35 3-3v-3h-6v3c0 1.65 1.35 3 3 3" opacity=".3"></svg:path><svg:path fill="currentColor" d="M9 7h8c.55 0 1-.45 1-1V4h2V2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h14v-2h-4.03A4.97 4.97 0 0 0 18 16v-5H8v5c0 1.64.81 3.09 2.03 4H6V4h2v2c0 .55.45 1 1 1m1 9v-3h6v3c0 1.65-1.35 3-3 3s-3-1.35-3-3"></svg:path><svg:circle cx="13" cy="9" r="1" fill="currentColor"></svg:circle>`,
})
export class IcTwotoneCoffeeMakerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
