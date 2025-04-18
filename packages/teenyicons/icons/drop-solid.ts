import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsDropSolidIcon],svg[teenyicons-drop-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.847.14a.5.5 0 0 0-.694 0L2.867 4.283l-.004.003a6.24 6.24 0 0 0-1.747 3.23a6.1 6.1 0 0 0 .394 3.63a6.35 6.35 0 0 0 2.4 2.806A6.65 6.65 0 0 0 7.5 15a6.65 6.65 0 0 0 3.59-1.048a6.35 6.35 0 0 0 2.4-2.805a6.1 6.1 0 0 0 .394-3.63a6.24 6.24 0 0 0-1.747-3.23z"></svg:path>`,
})
export class TeenyiconsDropSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
