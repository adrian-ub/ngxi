import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oouiMapPinAddIcon],svg[ooui-map-pin-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 0a7.65 7.65 0 0 0-8 8c0 2.52 2 5 3 6s5 6 5 6s4-5 5-6s3-3.48 3-6a7.65 7.65 0 0 0-8-8m5 9h-4v4H9V9H5V7h4V3h2v4h4z"></svg:path>`,
})
export class OouiMapPinAddIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
