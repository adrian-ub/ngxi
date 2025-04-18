import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsStopwatchSolidIcon],svg[teenyicons-stopwatch-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 1H6V0h3z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M7.5 2a6.5 6.5 0 1 0 0 13a6.5 6.5 0 0 0 0-13M8 8V5H7v4h3V8z" clip-rule="evenodd"></svg:path>`,
})
export class TeenyiconsStopwatchSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
