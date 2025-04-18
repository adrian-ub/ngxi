import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phFourKIcon],svg[ph-four-k-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 48a8 8 0 0 1 8-8h192a8 8 0 0 1 0 16H32a8 8 0 0 1-8-8m200 152H32a8 8 0 0 0 0 16h192a8 8 0 0 0 0-16M144 72a8 8 0 0 0-8 8v96a8 8 0 0 0 16 0v-29l13.09-15l28 48a8 8 0 1 0 13.82-8l-30.7-52.63L206 85.27a8 8 0 1 0-12-10.54l-42 48V80a8 8 0 0 0-8-8M88 176v-16H40a8 8 0 0 1-6.31-12.91l56-72A8 8 0 0 1 104 80v64h8a8 8 0 0 1 0 16h-8v16a8 8 0 0 1-16 0m0-32v-40.68L56.36 144Z"></svg:path>`,
})
export class PhFourKIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
