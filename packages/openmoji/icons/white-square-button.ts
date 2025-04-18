import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiWhiteSquareButtonIcon],svg[openmoji-white-square-button-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M46 26H25v21h21z"></svg:path><svg:path fill="#fff" d="M56 16H16v40h40z"></svg:path><svg:path fill="#3F3F3F" d="M46 26H25v21h21z"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M46 26H25v21h21z"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M56 16H16v40h40z"></svg:path>`,
})
export class OpenmojiWhiteSquareButtonIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
