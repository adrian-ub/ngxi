import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsOpthalmologyNegativeIcon],svg[healthicons-opthalmology-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsOpthalmologyNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM6 9a3 3 0 0 1 3-3h30a3 3 0 0 1 3 3v30a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3zm33 15s-8.25-9-14.96-9S9 24 9 24s8.329 9 15.04 9S39 24 39 24m-23.776-2.916A44 44 0 0 0 11.83 24a44 44 0 0 0 3.394 2.916c.516.397 1.053.79 1.605 1.166A8.2 8.2 0 0 1 15.75 24a8.2 8.2 0 0 1 1.079-4.082c-.552.376-1.09.769-1.605 1.166m15.915-1.222A8.2 8.2 0 0 1 32.25 24a8.2 8.2 0 0 1-1.111 4.138a34 34 0 0 0 1.671-1.218A43 43 0 0 0 36.183 24a43 43 0 0 0-3.373-2.92a34 34 0 0 0-1.671-1.218M30.25 24a6.25 6.25 0 1 1-12.5 0a6.25 6.25 0 0 1 12.5 0M24 27.75a3.75 3.75 0 0 0 2.849-6.189a1.125 1.125 0 1 1-.41-.41A3.75 3.75 0 1 0 24 27.75" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsOpthalmologyNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsOpthalmologyNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
