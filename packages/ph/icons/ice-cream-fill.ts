import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phIceCreamFillIcon],svg[ph-ice-cream-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 97.37V96a80 80 0 0 0-160 0v1.37A24 24 0 0 0 56 144h3.29l54.82 95.94a16 16 0 0 0 27.78 0L196.71 144H200a24 24 0 0 0 8-46.63m-61.11 101.57L115.5 144h19.29l21.75 38.06ZM77.71 144h19.36l40.61 71.06L128 232Zm88 21.94L153.21 144h25.08Z"></svg:path>`,
})
export class PhIceCreamFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
