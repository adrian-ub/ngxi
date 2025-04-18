import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsClockwiseSolidIcon],svg[teenyicons-clockwise-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.295 2.002L6.147.854l.706-.708L9.207 2.5L6.853 4.85l-.706-.707l1.141-1.141A5.5 5.5 0 0 0 2 8.495a5.5 5.5 0 0 0 5.5 5.496A5.5 5.5 0 0 0 13 8.495v-.5h1v.5a6.5 6.5 0 0 1-6.5 6.496A6.5 6.5 0 0 1 1 8.495a6.5 6.5 0 0 1 6.295-6.493" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsClockwiseSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
