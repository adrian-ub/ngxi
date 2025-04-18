import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiCloseIcon],svg[openmoji-close-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="m17.5 17.5l37 37m0-37l-37 37"></svg:path>`,
})
export class OpenmojiCloseIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
