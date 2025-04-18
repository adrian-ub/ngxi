import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phArrowLineUpBoldIcon],svg[ph-arrow-line-up-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208.49 143.51a12 12 0 0 1-17 17L140 109v115a12 12 0 0 1-24 0V109l-51.51 51.49a12 12 0 0 1-17-17l72-72a12 12 0 0 1 17 0ZM216 28H40a12 12 0 0 0 0 24h176a12 12 0 0 0 0-24"></svg:path>`,
})
export class PhArrowLineUpBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
