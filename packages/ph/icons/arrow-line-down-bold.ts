import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phArrowLineDownBoldIcon],svg[ph-arrow-line-down-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M47.51 112.49a12 12 0 0 1 17-17L116 147V32a12 12 0 0 1 24 0v115l51.51-51.52a12 12 0 0 1 17 17l-72 72a12 12 0 0 1-17 0ZM216 204H40a12 12 0 0 0 0 24h176a12 12 0 0 0 0-24"></svg:path>`,
})
export class PhArrowLineDownBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
