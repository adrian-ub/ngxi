import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[psBrightkiteIcon],svg[ps-brightkite-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M277 203q0 31-7 43q-4 7-14 9t-18 0l-7-2v-84q1-1 2.5-3t8.5-4t17-1q18 2 18 42M431 2v290q0 18-20 27q-13 6-115.5 42T97 430L1 462L85 29q1-3 3-7.5t13.5-12T129 2zM320 147q-9-24-29.5-30t-37.5 1.5t-18 16.5h-4V49l-56 9v216q4 3 11 8t29.5 11.5T262 296t39.5-17.5T320 254l4-12q15-44-4-95"></svg:path>`,
})
export class PsBrightkiteIcon {
  readonly viewBox = input("0 0 432 488")
  readonly width = input("0.89em")
  readonly height = input("1em")
}
