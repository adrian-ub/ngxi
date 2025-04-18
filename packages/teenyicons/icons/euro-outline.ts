import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsEuroOutlineIcon],svg[teenyicons-euro-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M13.374 3A6 6 0 0 0 2.5 6.5v2A6 6 0 0 0 13.374 12M0 5.5h7m-7 4h7"></svg:path>`,
})
export class TeenyiconsEuroOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
