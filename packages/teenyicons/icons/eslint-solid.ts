import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsEslintSolidIcon],svg[teenyicons-eslint-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 8.732V6.268L7.5 4.6L10 6.268v2.464L7.5 10.4z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M3.053 1.276A.5.5 0 0 1 3.5 1h8a.5.5 0 0 1 .447.276l3 6a.5.5 0 0 1 0 .448l-3 6A.5.5 0 0 1 11.5 14h-8a.5.5 0 0 1-.447-.276l-3-6a.5.5 0 0 1 0-.448zM11 5.732L7.5 3.4L4 5.732v3.536L7.5 11.6L11 9.268z" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsEslintSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
