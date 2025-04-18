import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phArrowsCounterClockwiseBoldIcon],svg[ph-arrows-counter-clockwise-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M88 108H40a12 12 0 0 1-12-12V48a12 12 0 0 1 24 0v19l7.8-7.8A99.42 99.42 0 0 1 130 29.94h.56a99.38 99.38 0 0 1 69.87 28.47a12 12 0 0 1-16.78 17.16a76 76 0 0 0-106.84.63L69 84h19a12 12 0 0 1 0 24m128 40h-48a12 12 0 0 0 0 24h19l-7.8 7.8a75.55 75.55 0 0 1-53.32 22.26h-.43a75.5 75.5 0 0 1-53.09-21.63a12 12 0 0 0-16.78 17.16a99.38 99.38 0 0 0 69.87 28.47h.55a99.42 99.42 0 0 0 70.16-29.29L204 189v19a12 12 0 0 0 24 0v-48a12 12 0 0 0-12-12"></svg:path>`,
})
export class PhArrowsCounterClockwiseBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
