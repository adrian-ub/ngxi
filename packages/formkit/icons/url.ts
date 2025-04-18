import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[formkitUrlIcon],svg[formkit-url-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="2" cy="10" r="1" fill="currentColor"></svg:circle><svg:circle cx="2" cy="6" r="1" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M4.5 14c-.06 0-.11 0-.17-.03a.5.5 0 0 1-.3-.64l4-11a.501.501 0 0 1 .94.34l-4 11c-.07.2-.27.33-.47.33m3 0c-.06 0-.11 0-.17-.03a.5.5 0 0 1-.3-.64l4-11a.501.501 0 0 1 .94.34l-4 11c-.07.2-.27.33-.47.33"></svg:path>`,
})
export class FormkitUrlIcon {
  readonly viewBox = input("0 0 13 16")
  readonly width = input("0.82em")
  readonly height = input("1em")
}
