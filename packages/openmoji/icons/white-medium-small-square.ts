import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiWhiteMediumSmallSquareIcon],svg[openmoji-white-medium-small-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#fff" d="M20.264 20.202h31.471v31.471H20.264z"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.264 20.202h31.471v31.471H20.264z"></svg:path>`,
})
export class OpenmojiWhiteMediumSmallSquareIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
