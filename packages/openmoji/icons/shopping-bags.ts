import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiShoppingBagsIcon],svg[openmoji-shopping-bags-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#EA5A47" d="M25.747 21.002h10.254"></svg:path><svg:path fill="#FCEA2B" d="M36.002 60.96h25l-5-40.867h-40l-5 40.867z"></svg:path><svg:path fill="#EA5A47" d="M46.256 21.002H36.002"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M36.002 60.96h-25l5-39.958h2.569m7.176 0h10.254m.001 39.958h25l-5-39.958h-2.57m-7.176 0H36.002m-13.953 6.66v-6.62c0-7.754 6.286-14.04 14.04-14.04s14.041 6.286 14.041 14.04v6.62"></svg:path>`,
})
export class OpenmojiShoppingBagsIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
