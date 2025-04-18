import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phCompassLightIcon],svg[ph-compass-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m0 192a90 90 0 1 1 90-90a90.1 90.1 0 0 1-90 90m45.32-143.37l-64 32a6 6 0 0 0-2.69 2.69l-32 64A6 6 0 0 0 80 182a6.06 6.06 0 0 0 2.68-.63l64-32a6 6 0 0 0 2.69-2.69l32-64a6 6 0 0 0-8.05-8.05m-33.79 64.9l-46.11 23.05l23-46.11l46.11-23Z"></svg:path>`,
})
export class PhCompassLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
