import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiBlackSquareButtonIcon],svg[openmoji-black-square-button-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill-rule="evenodd" d="M16 16h40v40H16zm9 10v21h21V26z" clip-rule="evenodd"></svg:path><svg:path fill="#3F3F3F" fill-rule="evenodd" d="M16 16h40v40H16zm9 10h21v21H25z" clip-rule="evenodd"></svg:path><svg:path fill="#fff" d="M46 26H25v21h21z"></svg:path><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M56 16H16v40h40z"></svg:path><svg:path d="M46 26H25v21h21z"></svg:path></svg:g>`,
})
export class OpenmojiBlackSquareButtonIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
