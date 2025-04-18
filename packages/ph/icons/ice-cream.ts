import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phIceCreamIcon],svg[ph-ice-cream-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 97.37V96a80 80 0 0 0-160 0v1.37A24 24 0 0 0 56 144h3.29l54.82 95.94a16 16 0 0 0 27.78 0L196.71 144H200a24 24 0 0 0 8-46.63M77.71 144h19.36l40.61 71.06L128 232Zm57.08 0l21.75 38.06l-9.65 16.88L115.5 144Zm31 21.94L153.21 144h25.08ZM200 128H56a8 8 0 0 1 0-16a8 8 0 0 0 8-8v-8a64 64 0 0 1 128 0v8a8 8 0 0 0 8 8a8 8 0 0 1 0 16"></svg:path>`,
})
export class PhIceCreamIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
