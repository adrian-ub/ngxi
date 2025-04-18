import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsEmergencyPostNegativeIcon],svg[healthicons-emergency-post-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g fill="currentColor" clip-path="url(#healthiconsEmergencyPostNegative0)"><svg:path d="M19.758 31.97a1 1 0 0 1-.728-1.212L19.72 28H17a1 1 0 1 1 0-2h3.22l.81-3.242a1 1 0 1 1 1.94.485L22.28 26H25a1 1 0 1 1 0 2h-3.22l-.81 3.243a1 1 0 0 1-1.212.727"></svg:path><svg:path fill-rule="evenodd" d="M0 0h48v48H0zm43.293 32.952l.047-.016a.995.995 0 0 0 .595-1.287L38 17.962V9h-9v6h7v2H11.938c-1.348 0-2.536.869-2.924 2.138l-4.883 14C3.543 35.063 5.01 37 7.054 37H29.26c1.348 0 2.536-.869 2.923-2.138l4.803-13.733l4.607 10.249L34.5 33.5l-1 2.5l9.794-3.044z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsEmergencyPostNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsEmergencyPostNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
