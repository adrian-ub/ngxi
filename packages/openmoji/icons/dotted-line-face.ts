import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiDottedLineFaceIcon],svg[openmoji-dotted-line-face-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="35.977" cy="35.958" r="23" fill="none" stroke="#000" stroke-dasharray="0 0 0 0 0 0 5.16 5.16" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"></svg:circle><svg:circle cx="35.93" cy="36.007" r="23.429" fill="#fff"></svg:circle><svg:circle cx="35.977" cy="35.958" r="23" fill="none" stroke="#f4aa41" stroke-dasharray="0 0 0 0 0 0 5.16 5.16" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"></svg:circle><svg:path d="M29.977 32.958a3 3 0 1 1-6 0a3 3 0 0 1 6 0m18 0a3 3 0 1 1-6 0a3 3 0 0 1 6 0"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2" d="M29.977 43.796h12"></svg:path>`,
})
export class OpenmojiDottedLineFaceIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
