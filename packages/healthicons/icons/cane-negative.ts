import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsCaneNegativeIcon],svg[healthicons-cane-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsCaneNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M0 0h48v48H0zm25.86 38.836a1 1 0 0 1 .987-.836h.306a1 1 0 0 1 .986.836L28.667 42H29a1 1 0 1 1 0 2h-4a1 1 0 1 1 0-2h.333zM27 15a1.5 1.5 0 0 1-1.5-1.5v-3c0-1.31-.397-2.146-.852-2.639A2.23 2.23 0 0 0 23 7.125a2.23 2.23 0 0 0-1.648.736c-.455.493-.852 1.329-.852 2.639a1.5 1.5 0 0 1-3 0c0-1.94.603-3.541 1.648-4.674A5.23 5.23 0 0 1 23 4.125c1.41 0 2.813.575 3.852 1.701C27.897 6.96 28.5 8.56 28.5 10.5v3A1.5 1.5 0 0 1 27 15m-1 1a1.53 1.53 0 0 0 1 .366A1.53 1.53 0 0 0 28 16v21a1.53 1.53 0 0 0-1-.367A1.53 1.53 0 0 0 26 37z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsCaneNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsCaneNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
