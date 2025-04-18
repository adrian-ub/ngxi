import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageCoinBIcon],svg[mage-coin-b-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M21.25 9.714c-.02.855-.296 1.67-.777 2.286c-1.415 2.011-4.68 3.429-8.473 3.429S4.942 14.01 3.527 12c-.48-.616-.758-1.43-.777-2.286C2.75 6.56 6.894 4 12 4s9.25 2.56 9.25 5.714"></svg:path><svg:path d="M17.722 9.714a1.7 1.7 0 0 1-.48 1.139c-.876 1.002-2.896 1.708-5.242 1.708s-4.366-.706-5.242-1.708a1.7 1.7 0 0 1-.48-1.139c0-1.571 2.563-2.846 5.722-2.846s5.722 1.275 5.722 2.846"></svg:path><svg:path d="M21.25 9.714v4.572C21.25 17.44 17.106 20 12 20s-9.25-2.56-9.25-5.714V9.714"></svg:path></svg:g>`,
})
export class MageCoinBIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
