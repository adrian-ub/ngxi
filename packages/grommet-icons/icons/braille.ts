import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[grommetIconsBrailleIcon],svg[grommet-icons-braille-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="M7 10a3 3 0 1 0 0-6a3 3 0 0 0 0 6zm10 10a3 3 0 1 0 0-6a3 3 0 0 0 0 6zM7 8a1 1 0 1 0 0-2a1 1 0 0 0 0 2zm10 10a1 1 0 1 0 0-2a1 1 0 0 0 0 2zM7 20a3 3 0 1 1 0-6a3 3 0 0 1 0 6zm10-10a3 3 0 1 1 0-6a3 3 0 0 1 0 6z"></svg:path>`,
})
export class GrommetIconsBrailleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
