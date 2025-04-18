import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsXSolidIcon],svg[teenyicons-x-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.793 7.5L1.146 1.854l.708-.708L7.5 6.793l5.647-5.647l.707.708L8.207 7.5l5.647 5.646l-.707.707L7.5 8.208l-5.646 5.647l-.708-.708z" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsXSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
