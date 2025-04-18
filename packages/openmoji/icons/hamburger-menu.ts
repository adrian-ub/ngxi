import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiHamburgerMenuIcon],svg[openmoji-hamburger-menu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M16 26h40M16 36h40M16 46h40"></svg:path>`,
})
export class OpenmojiHamburgerMenuIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
