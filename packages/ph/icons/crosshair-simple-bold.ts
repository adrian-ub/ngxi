import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phCrosshairSimpleBoldIcon],svg[ph-crosshair-simple-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20m12 191.13V184a12 12 0 0 0-24 0v27.13A84.18 84.18 0 0 1 44.87 140H72a12 12 0 0 0 0-24H44.87A84.18 84.18 0 0 1 116 44.87V72a12 12 0 0 0 24 0V44.87A84.18 84.18 0 0 1 211.13 116H184a12 12 0 0 0 0 24h27.13A84.18 84.18 0 0 1 140 211.13"></svg:path>`,
})
export class PhCrosshairSimpleBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
