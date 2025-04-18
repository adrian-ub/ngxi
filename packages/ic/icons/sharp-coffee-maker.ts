import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpCoffeeMakerIcon],svg[ic-sharp-coffee-maker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 7V4h2V2H4v20h16v-2h-4.03A4.97 4.97 0 0 0 18 16v-5H8v5c0 1.64.81 3.09 2.03 4H6V4h2v3z"></svg:path><svg:circle cx="13" cy="9" r="1" fill="currentColor"></svg:circle>`,
})
export class IcSharpCoffeeMakerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
