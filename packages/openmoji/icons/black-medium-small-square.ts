import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiBlackMediumSmallSquareIcon],svg[openmoji-black-medium-small-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M51.736 20.306H20.264v31.471h31.472z"></svg:path><svg:path fill="#3F3F3F" d="M51.736 20.306H20.264v31.471h31.472z"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M51.736 20.306H20.264v31.471h31.472z"></svg:path>`,
})
export class OpenmojiBlackMediumSmallSquareIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
