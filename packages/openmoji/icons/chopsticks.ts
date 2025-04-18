import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiChopsticksIcon],svg[openmoji-chopsticks-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:path id="openmojiChopsticks0" d="M53.76 58.958L18.83 20.3a2 2 0 0 0-2.828 2.828zm2.825-1.53l-26.073-45.11a2 2 0 0 0-3.357 2.174z"></svg:path></svg:defs><svg:use href="#openmojiChopsticks0" fill="#D22F27" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"></svg:use><svg:use href="#openmojiChopsticks0" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"></svg:use>`,
})
export class OpenmojiChopsticksIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
