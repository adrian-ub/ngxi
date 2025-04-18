import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsHourglassOutlineIcon],svg[teenyicons-hourglass-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M3.5 0v4.672a2 2 0 0 0 .586 1.414l.707.707a1 1 0 0 1 0 1.414l-1 1a1 1 0 0 0-.293.707V15m8-15v5.086a1 1 0 0 1-.293.707l-1 1a1 1 0 0 0 0 1.414l1 1a1 1 0 0 1 .293.707V15M1 .5h13m-13 14h13"></svg:path>`,
})
export class TeenyiconsHourglassOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
